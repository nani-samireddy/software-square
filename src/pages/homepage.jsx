import ContactSection from "../components/contact_section";
import Footer from "../components/footer";
import Header from "../components/header";
import Navbar from "../components/navbar";
import ServicesSection from "../components/services_section";
import WorkSection from "../components/work_section";

export default function Homepage() {
  return (
    <>
      <Header />
      <WorkSection />
      <div className="h-40"></div>
      <ServicesSection />
      <div className="h-40"></div>
      <ContactSection />
    </>
  );
}
