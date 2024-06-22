import { Divider } from "@nextui-org/react";
import React from "react";
import MotionP from "./motion_p";
import WorkCard from "./work_card";
import { siteData } from "../data";

export default function WorkSection() {
  return (
    <div id="work_section">
      <MotionP styles={"py-3 w-max"}>[Recent works]</MotionP>
      <Divider />
      {siteData.work.map((work) => (
        <WorkCard work={work} />
      ))}
    </div>
  );
}
