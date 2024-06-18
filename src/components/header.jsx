import React from "react";
import Navbar from "./navbar";
import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";
import MotionH1 from "./motion_h1";
import MotionP from "./motion_p";
import { siteData } from "../data";

export default function Header() {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();
  return (
    <>
      <Navbar />
      <div className="h-[80vh]  w-full text-center flex items-center justify-center flex-col">
        <MotionH1>{siteData.title}</MotionH1>
        <MotionP styles="text-lg lg:text-xl">
          {siteData.subTitle}
        </MotionP>
      </div>
    </>
  );
}
