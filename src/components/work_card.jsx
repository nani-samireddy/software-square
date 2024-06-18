import MotionH1 from "./motion_h1";
import { motion } from "framer-motion";
import MotionP from "./motion_p";
import MotionImg from "./motion_img";

export default function WorkCard({ work }) {
  return (
    <div className="py-8 md:py-8  flex flex-col justify-between items-start">
      {/* <MotionH1 styles="font-bold text-xl md:text-2xl lg:text-5xl pl-5">
        <a href={work.link} target="_bank">
          {work.title}
        </a>
      </MotionH1>
      <motion.img
        className="hidden md:block w-auto h-40 object-cover "
        src={work.images[0]}
      /> */}
      {/* <motion.img
        src={work.images[0]}
      /> */}
      <MotionImg
        src={work.images[0]}
      />
      <div className="flex items-center justify-between w-full">
        <MotionP styles="text-lg font-semi-bold md:text-xl lg:text-2xl pl-5">
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
