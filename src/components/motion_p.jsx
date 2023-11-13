import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function MotionP({ children }) {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();
  return (
    <motion.p onMouseEnter={mouseTextEnter} onMouseLeave={mouseTextLeave}>
      {children}
    </motion.p>
  );
}
