import React, { useState,  } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserLogin } from "../context/LoginContext";
import { IoIosLogOut } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const { logOut, user } = useContext(UserLogin);
  const [open, setOpen] = useState(false);
 

 ;

  return (
    <>
      <div className=" flex w-full p-4 items-center justify-between text-xs md:text-lg">
        <div>
          <div className="flex items-center cursor-pointer">
            <img
              src={"/public/netflix-profile.jpg"}
              alt=""
              className="h-8 w-8 md:h-10 md:w-10 cursor-pointer"
            />
            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
              <MdArrowDropDown size={30} />
            </button>
          </div>
          {/* Modal  */}
          {open && (
            <div className="absolute top-3  left-1 md:left-4 md:h-24 md:w-40 md:p-1 z-21 flex flex-col gap-2 p-1 h-[70px] w-24 bg-white/20 backdrop-blur-2xl">
              <div className="flex flex-col gap-2">
                <div className="relative flex items-center gap-2 p-1 hover:bg-white/70 hover:text-black transition-all duration-300">
                  <img
                    src={"/public/netflix-profile.jpg"}
                    alt=""
                    className="h-4 w-4 md:h-6 md:w-6 "
                  />
                  <h1 className="text-[10px] font-bebas tracking-wider md:text-[13px]">
                    {user.displayName}
                  </h1>

                  <button
                    className="absolute top-0 right-0 cursor-pointer "
                    onClick={() => setOpen(!open)}
                  >
                    <CgClose size={14} />
                  </button>
                </div>
                <div className="flex items-center gap-2 p-1 hover:bg-white/70 hover:text-black transition-all duration-300">
                  <button className="cursor-pointer" onClick={logOut}>
                    <IoIosLogOut size={15} />
                  </button>
                  <h1 className="text-[10px] font-bebas tracking-wider md:text-[13px]">
                    Exit Netflix
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-4 md:gap-8">
          <Link
            to={"/home"}
            className="font-bebas  tracking-wider bg-white text-black px-2 py-1 rounded-xl  md:bg-transparent md:text-white md:hover:bg-white md:hover:text-black md:hover:rounded-xl transition-all duration-500"
          >
            Home
          </Link>
          <Link
            to={"/shows"}
            className="font-bebas tracking-wider bg-white text-black px-2 py-1 rounded-xl  md:bg-transparent md:text-white md:hover:bg-white md:hover:text-black md:hover:rounded-xl transition-all duration-500"
          >
            Shows
          </Link>
          <Link
            to={"/mynetflix"}
            className="font-bebas tracking-wider bg-white text-black px-2 py-1 rounded-xl  md:bg-transparent md:text-white md:hover:bg-white md:hover:text-black md:hover:rounded-xl transition-all duration-500"
          >
            MyNetflix
          </Link>
        </div>

        <img
          src={"/public/netflix-logo.png"}
          alt=""
          className="h-8 w-8 md:h-11 md:w-11"
        />
      </div>
    </>
  );
};

export default Navbar;
