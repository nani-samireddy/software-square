import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import React from "react";
import { useMouseContext } from "../contexts/mouse_context";

export default function ContactSection() {
  const { mouseTextEnter, mouseTextLeave } = useMouseContext();
  return (
    <div id="contact_section">
      <h1 className="text-4xl md:text-7xl text-center text-gray-300 font-black">
        Connect With Us
      </h1>
      <form
        action=""
        method="post"
        className=" flex flex-col justify-center items-center h-auto"
      >
        <div className="w-[80vw] lg:w-[40vw] py-10 flex flex-col gap-6">
          <Input
            type="name"
            label="Name"
            variant="underlined"
            placeholder="Enter your name"
          />

          <Input
            type="email"
            label="Email"
            variant="underlined"
            placeholder="Enter your Email"
          />
          <Textarea placeholder="Your idea here..." variant="underlined" />
          <button
            onMouseEnter={mouseTextEnter}
            onMouseLeave={mouseTextLeave}
            className="font-light text-xl rounded-md py-3 bg-black text-white"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
