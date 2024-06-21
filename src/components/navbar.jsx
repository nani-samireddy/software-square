import React, { useState } from "react";
import MotionP from "./motion_p";
import MotionH1 from "./motion_h1";
import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";
import { containerVariants, itemVariants } from "../constants/varients";

export default function Navbar() {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <motion.div className="flex justify-between items-center relative ">
      <MotionH1 styles="font-bold ">SSQUARE</MotionH1>
      <ul className="hidden md:flex items-center justify-center gap-9">
        <MotionP styles={"transition-all duration-150 hover:scale-150"}><a href="#work_section">WORK</a></MotionP>
        <MotionP styles={"transition-all duration-150 hover:scale-150"}><a href="#services_section">SERVICES</a></MotionP>
        <MotionP styles={"transition-all duration-150 hover:scale-150"}><a href="#team_section">TEAM</a></MotionP>
        <MotionP styles={"transition-all duration-150 hover:scale-150"}><a href="#about_section">ABOUT</a></MotionP>
        <MotionP styles={"transition-all duration-150 hover:scale-150"}><a href="#contact_section">CONTACT</a></MotionP>
      </ul>
      {/* mobile nav */}
      <div
        className="block md:hidden scale"
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

      <motion.div
        variants={containerVariants}
        animate={isMobileNavOpen ? "visible" : "hidden"}
        initial="hidden"
        className={` fixed top-0 left-0 bg-black text-white w-full h-[100vh]`}
      >
        <motion.div
          className="fixed right-0 p-20"
          onMouseEnter={mouseTextEnter}
          onMouseLeave={mouseTextLeave}
          onClick={handleMobileNav}
          variants={itemVariants}
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
        </motion.div>
        <ul className="flex flex-col items-center justify-center gap-9 h-full">
          <MotionP varients={itemVariants} styles="text-3xl ">
            WORK
          </MotionP>
          <MotionP varients={itemVariants} styles="text-3xl ">
            SERVICES
          </MotionP>
          <MotionP varients={itemVariants} styles="text-3xl ">
            ABOUT
          </MotionP>
          <MotionP varients={itemVariants} styles="text-3xl ">
            CONTACT
          </MotionP>
        </ul>
      </motion.div>
    </motion.div>
  );
}
