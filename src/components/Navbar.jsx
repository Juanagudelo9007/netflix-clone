import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Credentials } from "../context/UserCredentials";




const Navbar = () => {
const {closeSesion} = useContext(Credentials)


  return (
    <>
      <div className="absolute flex w-full p-4 items-center justify-between z-10">
        <Link to={"/home"}>
          <p className="font-bebas  text-2xl md:text-5xl text-red-600 font-extrabold tracking-wider">
            Netflix
          </p>
        </Link>

        <div className="flex  gap-2">
          <Link to={"/shows"}>Shows</Link>
          <Link to={"/mynetflix"}>MyNetflix</Link>
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <Link to={"/login"}>
            <button className="cursor-pointer font-bold">Login</button>
          </Link>
          <Link to={"/register"}>
            <button className="px-2 py-1 bg-red-600  tracking-wider font-bold capitalize  cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
       <button onClick={closeSesion}
       className="cursor-pointer"
       >Log Out</button>
      </div>
    </>
  );
};

export default Navbar;
