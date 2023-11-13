import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function MotionH1({ children, styles }) {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();
  return (
    <motion.h1
      className={styles ?? "text-5xl lg:text-6xl font-bold"}
      onMouseEnter={mouseTextEnter}
      onMouseLeave={mouseTextLeave}
    >
      {children}
    </motion.h1>
  );
}
