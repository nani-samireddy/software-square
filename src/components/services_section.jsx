import { Divider } from "@nextui-org/react";
import MotionP from "./motion_p";
import { workData } from "../constants/work_data";
import { motion } from "framer-motion";
import MotionH1 from "./motion_h1";
import { servicesData } from "../constants/services_data";
import ServiceCard from "./service_card";

export default function ServicesSection() {
  return (
    <div id="services_section">
      <MotionP styles={"py-3 w-max"}>[We can help you with]</MotionP>
      <Divider />
      <div className="flex flex-col md:flex-row flex-wrap p-6 gap-4 items-start justify-start">
        {servicesData.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </div>
  );
}
