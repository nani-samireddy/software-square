import { NextUIProvider } from "@nextui-org/react";
import Homepage from "./pages/homepage.jsx";
import MouseContextProvider from "./contexts/mouse_context.jsx";

export default function App() {
  return (
    <div className=" overflow-x-hidden">
      <NextUIProvider>
        <MouseContextProvider>
          <Homepage />
        </MouseContextProvider>
      </NextUIProvider>
    </div>
  );
}
