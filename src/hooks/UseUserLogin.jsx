import { useState, useEffect } from "react";
import { app } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const UseUserLogin = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();

  useEffect(() => {
    const unSesion = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase);
        setIsRegistered(true);
        setIsLoggedIn(true);
      } else {
        setUser(null);
        setIsRegistered(false);
      }
    });
    return () => unSesion();
  }, []);

  const handleForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    try {
      if (!isRegistered) {
        const userInfo = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(userInfo.user, { displayName: name });
        console.log("user created:", userInfo.user);
        await setDoc(doc(db, "users", userInfo.user.uid), {
          id: userInfo.user.uid,
          name: name,
          email: email,
        });
        await setDoc(doc(db, "favorites", userInfo.user.uid), {
          movie: "movie",
        });
        setUser(userInfo.user);
        navigate("/mynetflix");
      } else {
        const userSingIn = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        setUser(userSingIn.user);
        setIsLoggedIn(true);
        navigate("/home");
        console.log("user sign in:", userSingIn);
      }
    } catch (error) {
      console.log("Error while register", error);
    }
  };

  return {
    handleForm,
    isRegistered,
    setIsRegistered,
    user,
    setUser,
    isLoggedIn,
  };
};
