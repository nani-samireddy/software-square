import React from "react";
import MotionH1 from "./motion_h1";
import MotionP from "./motion_p";

export default function ServiceCard({ service }) {
  return (
    <div className="lg:w-[35vw] h-auto rounded-lg p-6">
      <MotionH1 styles="uppercase text-gray-400 text-2xl py-2">
        {service.title}
      </MotionH1>
      <MotionP styles=" text-xl font-light ">{service.description}</MotionP>
    </div>
  );
}
