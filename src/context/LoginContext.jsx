import React from "react";
import { createContext, useEffect, useState } from "react";
import { app, db } from "../firebase/firebase";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const UserLogin = createContext();

const LoginContext = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [closeErrors, setCloseErrors] = useState(false); 
  const auth = getAuth(app);

  {
    /* Validation / Errors */
  }

  const nameValidation = /^[A-Za-z]+$/;
  const passwordValidation =
    /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/-])(?=.{6,})/;

  const handleForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    console.log("data", email, password, name);

    if (!nameValidation.test(name)) {
      setErrors("the name must contain letters");
      setLoading(false);
      return;
    }
    if (!passwordValidation.test(password)) {
      setErrors(
        "Password must have an uppercase, a special character, and be longer than 5 characters."
      );
      setLoading(false);
      return;
    }

    try {
      if (!isRegistered) {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userCredentials.user, { displayName: name });
        await setDoc(doc(db, "Users", userCredentials.user.uid), {
          name: userCredentials.user.displayName,
          id: userCredentials.user.uid,
          email,
        });
        await setDoc(doc(db, "Favorites", userCredentials.user.uid), {
          name: userCredentials.user.displayName,
          likedMovies: [],
        });
        await setDoc(doc(db, "watchLater", userCredentials.user.uid), {
          name: userCredentials.user.displayName,
          saved: [],
        });

        setUser(userCredentials.user);
        setLoading(false);
        console.log("user created:", userCredentials.user);
        console.log("User Name:", userCredentials.user.displayName);
      } else {
        const userIn = await signInWithEmailAndPassword(auth, email, password);
        setUser(userIn.user);
        setLoading(false);
        console.log("user logged in:", userIn.user);
      }
    } catch (error) {
      const message = errorsFirebase(error.code);
      console.log("error while trying to register", error);
      setErrors(message);
      setLoading(false);
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
    } catch (err) {
      console.log("Error while closing sesion", err);
    }
  };

  {
    /* Errors */
  }

  const errorsFirebase = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "Email already use";

      default:
        return "An error happened, please try again";
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
        errors,
        closeErrors,
        setCloseErrors,
      }}
    >
      {children}
    </UserLogin.Provider>
  );
};

export default LoginContext;
