import React from "react";
import MotionP from "./motion_p";
import MotionH1 from "./motion_h1";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <MotionH1 styles="font-bold ">SSQUARE</MotionH1>
      <ul className="flex items-center justify-center gap-9">
        <MotionP>WORK</MotionP>
        <MotionP>SERVICES</MotionP>
        <MotionP>ABOUT</MotionP>
        <MotionP>CONTACT</MotionP>
      </ul>
    </div>
  );
}
