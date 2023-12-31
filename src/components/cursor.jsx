import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMouseContext } from "../contexts/mouse_context";

export default function Cursor() {
  const { variants, cursorVariant } = useMouseContext();

  return (
    <>
      <motion.div
        className="hidden md:block bg-black h-4 w-4 fixed top-0 left-0 rounded-full pointer-events-none	"
        variants={variants}
        initial="initial"
        animate={cursorVariant}
      />
    </>
  );
}
