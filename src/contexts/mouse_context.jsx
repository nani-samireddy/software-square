import { createContext, useContext, useEffect, useState } from "react";

const mouseContext = createContext();

export const useMouseContext = () => {
  return useContext(mouseContext);
};

export default function mouseContextProvider({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const variants = {
    initial: {
      opacity: 0,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        duration: 0.1,
      },
    },

    default: {
      opacity: 1,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        duration: 0.1,
      },
    },
    text: {
      opacity: 1,
      scale: 5.5,
      transition: {
        duration: 0.1,
      },
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };
  const mouseTextEnter = () => setCursorVariant("text");
  const mouseTextLeave = () => setCursorVariant("default");

  return (
    <mouseContext.Provider
      value={{
        mousePosition,
        variants,
        mouseTextEnter,
        mouseTextLeave,
        cursorVariant,
      }}
    >
      {children}
    </mouseContext.Provider>
  );
}
