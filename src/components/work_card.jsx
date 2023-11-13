import MotionH1 from "./motion_h1";
import { motion } from "framer-motion";

export default function WorkCard({ work }) {
  return (
    <div className="py-8 md:py-0  flex justify-between items-center">
      <MotionH1 styles="font-bold text-xl md:text-2xl lg:text-5xl pl-5">
        <a href={work.link} target="_bank">
          {work.title}
        </a>
      </MotionH1>
      <motion.img
        className="hidden md:block w-auto h-40 object-cover "
        src={work.images[0]}
      />
    </div>
  );
}
