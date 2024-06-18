import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function MotionImg({ children, styles, varients, src }) {
  const { mouseImageEnter, mouseImageLeave } = useMouseContext();
  return (
    <motion.img
      className={styles ?? ""}
      onMouseEnter={mouseImageEnter}
      onMouseLeave={mouseImageLeave}
      variants={varients}
      src={src}
    >
      {children}
    </motion.img>
  );
}
