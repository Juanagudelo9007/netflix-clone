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

const UseUserLogin = () => {
  return <div>UseUserLogin</div>;
};

export default UseUserLogin;
