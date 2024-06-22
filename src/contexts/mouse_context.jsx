import { createContext, useContext, useEffect, useState } from "react";

const mouseContext = createContext();

export const useMouseContext = () => {
  return useContext(mouseContext);
};

export default function mouseContextProvider({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [currentSymbol, setCurrentSymbol] = useState("");
  const [techChipHovered, setTechChipHovered] = useState(false);
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
      fontSize: "10px",
    },

    default: {
      opacity: 1,
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      transition: {
        duration: 0.1,
      },
      backgroundColor: "black",
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
    image: {
      opacity: 1,
      scale: 3.5,
      transition: {
        duration: 0.1,
      },
      backgroundColor: "transparent",
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    },
    techMasking: {
      opacity: 1,
      scale: 3.5,
      transition: {
        duration: 0.1,
      },
      backgroundColor: "transparent",
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
    }
  };
  const mouseTextEnter = () => setCursorVariant("text");
  const mouseTextLeave = () => setCursorVariant("default");
  const mouseImageEnter = () => { setCurrentSymbol('View Details 👀'); setCursorVariant("image") };
  const mouseImageLeave = () => { setCurrentSymbol(''); setCursorVariant("default"); }
  const mouseTechChipEnter = () => {
    setCursorVariant("techMasking");
    setTechChipHovered(true);
  };
  const mouseTechChipLeave = () => { setCursorVariant("default"); setTechChipHovered(false); };
  return (
    <mouseContext.Provider
      value={{
        mousePosition,
        variants,
        mouseTextEnter,
        mouseTextLeave,
        mouseImageEnter,
        mouseImageLeave,
        cursorVariant,
        currentSymbol,
        mouseTechChipEnter,
        mouseTechChipLeave,
        techChipHovered
      }}
    >
      {children}
    </mouseContext.Provider>
  );
}
