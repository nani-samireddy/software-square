import { NextUIProvider } from "@nextui-org/react";
import Homepage from "./pages/homepage.jsx";
import MouseContextProvider from "./contexts/mouse_context.jsx";
import Cursor from "./components/cursor.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className=" overflow-x-hidden antialiased scroll-smooth">
      <NextUIProvider>
        <MouseContextProvider>
          <div className="page">
            <Navbar />
            <Outlet />
            <Footer />
          </div>
          <Cursor />
        </MouseContextProvider>
      </NextUIProvider>
    </div>
  );
}
