import React, { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

const Register = () => {
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

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('/netflix-bg.jpg')]">
      <form
        action=""
        className="relative bg-black/80 flex flex-col items-center justify-center w-[300px] h-[350px] p-4 gap-4"
        onSubmit={handleForm}
      >
        <h1 className="absolute top-10 left-15 font-extrabold tracking-wide capitalize">
          sign up
        </h1>
        <label htmlFor="name">
          <input
            type="name"
            placeholder="Name"
            id="name"
            name="name"
            className="p-1 outline-none bg-gray-300/20 placeholder-white/60 indent-2f indent-2"
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            className="p-1 outline-none bg-gray-300/20 placeholder-white/60 indent-2"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            className="p-1 outline-none bg-gray-300/20 placeholder-white/60 indent-2"
          />
        </label>
        <button
          className="px-15 bg-red-600 py-0.5 font-extrabold tracking-wide cursor-pointer"
          type="submit"
        >
          sign up
        </button>
        <Link to={"/login"}>
          <h1 className="underline font-bold md:no-underline md:hover:underline">
            Already have an account?
          </h1>
        </Link>
      </form>
    </div>
  );
};

export default Register;
