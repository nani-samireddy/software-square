import { Divider } from "@nextui-org/react";
import React from "react";
import MotionP from "./motion_p";
import { workData } from "../constants/work_data";
import { motion } from "framer-motion";
import MotionH1 from "./motion_h1";
import WorkCard from "./work_card";

export default function WorkSection() {
  return (
    <div>
      <MotionP styles={"py-3 w-max"}>[Recent works]</MotionP>
      <Divider />
      {workData.map((work) => (
        <>
          <WorkCard work={work} />
          <Divider />
        </>
      ))}
    </div>
  );
}
