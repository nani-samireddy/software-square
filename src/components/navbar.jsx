import React, { useState } from "react";
import MotionP from "./motion_p";
import MotionH1 from "./motion_h1";
import { useMouseContext } from "../contexts/mouse_context";

export default function Navbar() {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <div className="flex justify-between items-center relative">
      <MotionH1 styles="font-bold ">SSQUARE</MotionH1>
      <ul className="hidden md:flex items-center justify-center gap-9">
        <MotionP>WORK</MotionP>
        <MotionP>SERVICES</MotionP>
        <MotionP>ABOUT</MotionP>
        <MotionP>CONTACT</MotionP>
      </ul>
      {/* mobile nav */}
      <div
        className="block md:hidden"
        onMouseEnter={mouseTextEnter}
        onMouseLeave={mouseTextLeave}
        onClick={handleMobileNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            className="text-black"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
      {isMobileNavOpen && (
        <div className="fixed top-0 left-0 bg-black text-white w-full h-[100vh]">
          <div
            className="fixed right-0 p-20"
            onMouseEnter={mouseTextEnter}
            onMouseLeave={mouseTextLeave}
            onClick={handleMobileNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="text-white"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-center gap-9 h-full">
            <MotionP styles="text-3xl ">WORK</MotionP>
            <MotionP styles="text-3xl ">SERVICES</MotionP>
            <MotionP styles="text-3xl ">ABOUT</MotionP>
            <MotionP styles="text-3xl ">CONTACT</MotionP>
          </ul>
        </div>
      )}
    </div>
  );
}
