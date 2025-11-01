import React from "react";
import { useState } from "react";
import { app } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const UseUserLogin = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const handleForm = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;

    try {
      if (isRegistered) {
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
          password: password,
        });
        await setDoc(doc(db, "favorites", userInfo.user.uid), {
          movie: "movie",
        });
        setIsRegistered(userInfo.user.uid);
      } else {
        const userSingIn = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log("user sign in:", userSingIn);
        setIsLogged(userSingIn.user.uid);
      }
    } catch (error) {
      console.log("Error while register", error);
    }
  };

  return {handleForm, isRegistered, setIsLogged,isLogged, setIsRegistered};
};
