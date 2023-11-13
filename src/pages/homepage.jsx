import Cursor from "../components/cursor";
import Header from "../components/header";
import WorkSection from "../components/work_section";

export default function Homepage() {
  return (
    <>
      <div className="px-[2%] md:px-[5%] lg:px-[10%] py-3 md:py-6 font-dmSans">
        <Header />
        <WorkSection />
      </div>
      <Cursor />
    </>
  );
}
