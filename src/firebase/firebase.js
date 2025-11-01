// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCNtTUNexesulE7U41_6b-GhPRCB09zT-4",
  authDomain: "netflix-clone9007.firebaseapp.com",
  projectId: "netflix-clone9007",
  storageBucket: "netflix-clone9007.firebasestorage.app",
  messagingSenderId: "89108700749",
  appId: "1:89108700749:web:16cf6bf9dea75c1a390604",
  measurementId: "G-HT8SDVZLSH",
};

export const app = initializeApp(firebaseConfig)
export const db =  getFirestore(app)