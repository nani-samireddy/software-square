import { createContext, useContext, useEffect, useState } from "react";

const mouseContext = createContext();

export const useMouseContext = () => {
  return useContext(mouseContext);
};

export default function mouseContextProvider({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 });
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
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0.1,
      },
    },

    default: {
      opacity: 1,
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      transition: {
        duration: 0.1,
      },
    },
    text: {
      opacity: 1,
      scale: 2,
      transition: {
        duration: 0.1,
      },
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
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
