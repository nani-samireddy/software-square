import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function Cursor() {
  const { variants, cursorVariant, currentSymbol } = useMouseContext();

  return (
    <>
      <motion.div
        className={`hidden md:flex items-center justify-center bg-black fixed top-0 left-0 rounded-full pointer-events-none text-center ${currentSymbol === '' ? 'w-4 h-4 bg-black' : 'min-h-4 min-w-4 text-sm py-1 px-2 bg-opacity-25 bg-yellow-700 backdrop-blur-sm'}`}
        variants={variants}
        initial="initial"
        animate={cursorVariant}
      >
        {currentSymbol}
      </motion.div>
    </>
  );
}
