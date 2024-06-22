import React, { useState } from 'react'
import { motion } from "framer-motion";
import { useMouseContext } from '../contexts/mouse_context';

export default function MotionMask({ initialChild, maskChild }) {
    const { mouseTechChipEnter, mouseTechChipLeave, techChipHovered } = useMouseContext();
    const maskSize = techChipHovered ? "80px" : "0px";
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const rect = event.target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setCursorPosition({ x, y });
    };
    return (
        <div className="relative h-min">
            <motion.div
                onMouseMove={handleMouseMove}
                className="h-min flex flex-wrap gap-2 masking-cursor py-5 lg:py-8"
                onMouseEnter={mouseTechChipEnter}
                onMouseLeave={mouseTechChipLeave}
                animate={{
                    WebkitMaskPosition: `${cursorPosition.x - 40}px ${cursorPosition.y - 40}px`,
                    WebkitMaskSize: maskSize,
                    transition: {
                        duration: 0.1,
                    },
                }}
            >
                {initialChild}
            </motion.div>
            <div className="h-min flex flex-wrap gap-2 py-5 lg:py-8 pointer-events-none">
                {maskChild}
            </div>
        </div>
    )
}
