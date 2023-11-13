import ContactSection from "../components/contact_section";
import Cursor from "../components/cursor";
import Footer from "../components/footer";
import Header from "../components/header";
import ServicesSection from "../components/services_section";
import WorkSection from "../components/work_section";

export default function Homepage() {
  return (
    <>
      <div className="px-[3%] md:px-[5%] lg:px-[10%] py-3 md:py-6 font-dmSans">
        <Header />
        <WorkSection />
        <div className="h-40"></div>
        <ServicesSection />
        <div className="h-40"></div>
        <ContactSection />
        <div className="h-20"></div>
        <Footer />
      </div>
      <Cursor />
    </>
  );
}
