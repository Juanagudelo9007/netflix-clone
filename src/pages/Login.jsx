import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Credentials } from "../context/UserCredentials";

const Login = () => {
  const { handleForm } = useContext(Credentials);

  return (
    <div className="  w-full h-screen flex justify-center items-center bg-[url('/netflix-bg.jpg')]  ">
      <form
        action=""
        className="relative bg-black/80 flex flex-col items-center justify-center w-[300px] h-[300px] p-4 gap-4"
        onSubmit={handleForm}
      >
        <h1 className="absolute  top-10 left-16 font-extrabold capitalize tracking-wide">
          sign in
        </h1>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            className="p-1 indent-2 outline-none bg-gray-300/20 placeholder-white/60 mt-2 text-white/90 "
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
            className="p-1 bg-gray-300/20 indent-2 text-white/90  placeholder-white/60"
          />
        </label>
        <button
          className="bg-red-600 px-16 py-0.5 font-extrabold tracking-wide cursor-pointer"
          type="submit"
        >
          Sign In
        </button>

        <Link to={"/register"}>
          <h1 className="underline font-bold md:no-underline md:hover:underline">
            Don't Have An account?
          </h1>
        </Link>
      </form>
    </div>
  );
};

export default Login;
