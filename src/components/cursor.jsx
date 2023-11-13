import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function Cursor() {
  const {  variants, cursorVariant } = useMouseContext();

  return (
    <>
      <motion.div
        className="bg-black h-9 w-9 fixed top-0 left-0 rounded-full pointer-events-none	"
        variants={variants}
        animate={cursorVariant}
      />
    </>
  );
}
