import MotionH1 from "./motion_h1";
import { motion } from "framer-motion";
import MotionP from "./motion_p";
import MotionImg from "./motion_img";

export default function WorkCard({ work }) {
  return (
    <div className="py-8 md:py-8  flex flex-col justify-between items-start">
      <MotionImg
        src={work.images[0]}
      />
      <div className="flex items-center justify-between w-full">
        <MotionP styles="text-lg font-semi-bold md:text-xl lg:text-2xl pl-5 cursor-pointer hover:font-bold">
          {work.title}
        </MotionP>
        <div className="flex">
          <MotionP styles="text-lg font-semi-bold md:text-xl lg:text-2xl pl-5">
            {work.workType}
          </MotionP>
          <MotionP styles="text-lg font-semi-bold md:text-xl lg:text-2xl pl-5">
            &bull;
          </MotionP>
          <MotionP styles="text-lg font-semi-bold md:text-xl lg:text-2xl pl-5">
            {work.status}
          </MotionP>
        </div>
      </div>
    </div>
  );
}
