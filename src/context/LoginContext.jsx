import React from "react";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

export const UserLogin = createContext();

const LoginContext = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log("data", email, password, name);

    try {
      if (!isRegistered) {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(userCredentials.user);
        setLoading(false)
        console.log("user created:", userCredentials.user);
      } else {
        const userIn = await signInWithEmailAndPassword(auth, email, password);
        setUser(userIn.user);
        setLoading(false)
        console.log("user logged in:", userIn.user);
      }
    } catch (error) {
      console.log("error while trying to register");
    }
  };

  useEffect(() => {
    const auth = getAuth(app);
    const userOnline = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);
        setIsRegistered(true);
      } else {
        setUser(null);
        setIsRegistered(false);
      }
    });
    return () => userOnline();
  }, []);

  const logOut = async () => {
    try {
      await signOut(auth);
      setLoading(false);
    } catch (error) {
      console.log("Error while closing sesion", error);
    }
  };
  return (
    <UserLogin.Provider
      value={{
        isRegistered,
        setIsRegistered,
        user,
        setUser,
        handleForm,
        logOut,
        loading,
      }}
    >
      {children}
    </UserLogin.Provider>
  );
};

export default LoginContext;
