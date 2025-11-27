import React, { useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HomeLayout = () => {
  const pageRef = useRef(null);
  const { pathname } = useLocation();

  useGSAP(
    () => {
      gsap.fromTo(
        pageRef.current,
        {
          opacity: 0,
          y: -100,
        },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut"}
      );
    },
    { dependencies: [pathname] }
  );

  return (
    <>
      <Navbar />
      <div ref={pageRef}>
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
