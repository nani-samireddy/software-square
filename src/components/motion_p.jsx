import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function MotionP({ children, styles, varients }) {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();
  return (
    <motion.p
      className={styles ?? ""}
      onMouseEnter={mouseTextEnter}
      onMouseLeave={mouseTextLeave}
      variants={varients}
    >
      {children}
    </motion.p>
  );
}
