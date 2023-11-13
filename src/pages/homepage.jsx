import Cursor from "../components/cursor";
import Header from "../components/header";

export default function Homepage() {
  return (
    <>
      <div className="px-[2%] md:px-[5%] lg:px-[10%] py-6 font-dmSans">
        <Header />
      </div>
      <Cursor />
    </>
  );
}
