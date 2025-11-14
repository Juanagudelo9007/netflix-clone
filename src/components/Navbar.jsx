import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserLogin } from "../context/LoginContext";

const Navbar = () => {
  const { logOut } = useContext(UserLogin);

  return (
    <>
      <div className="absolute flex w-full p-4 items-center justify-between z-10">
        <Link to={"/home"}>
          <p className="font-bebas  text-2xl md:text-5xl text-red-600 font-extrabold tracking-wider">
            Netflix
          </p>
        </Link>

        <div className="flex gap-8">
          <Link to={"/shows"} className="font-bebas tracking-wider">
            Shows
          </Link>
          <Link to={"/mynetflix"} className="font-bebas tracking-wider">
            MyNetflix
          </Link>
        </div>
        <button
          className="cursor-pointer bg-red-600 px-3 py-1 rounded-sm font-bebas tracking-wider text-xs"
          onClick={logOut}
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Navbar;
