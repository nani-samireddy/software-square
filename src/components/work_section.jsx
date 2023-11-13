import { Divider } from "@nextui-org/react";
import React from "react";
import MotionP from "./motion_p";
import { workData } from "../constants/work_data";
import { motion } from "framer-motion";
import MotionH1 from "./motion_h1";

export default function WorkSection() {
  return (
    <div>
      <MotionP styles={"py-3 w-max"}>[Recent works]</MotionP>
      <Divider />
      {workData.map((work) => (
        <>
          <div
            key={work.key}
            className="py-8 md:py-0 flex justify-between items-center"
          >
            <MotionH1 styles="font-bold text-xl md:text-2xl lg:text-5xl pl-5">
              {work.title}
            </MotionH1>
            <motion.img
              className="hidden md:block w-auto h-40 object-cover "
              src={work.images[0]}
            />
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
}
