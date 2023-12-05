import React from "react";
import Type from "./Type";
import { unbounded } from "@/app/layout";

const HeroSection1 = ({ backgroundImage }) => {
  const bg = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div style={bg} className={`bg-cover w-1/2 h-full min-h-[60vh] sm:min-h-[80vh]`}></div>
  );
};

const Hero = () => {
  return (
    <div className="mx-auto max-w-lg sm:max-w-[1440px] mt-4 mb-8 sm:mt-8 sm:mb-16">
      <div className="w-full h-full flex flex-row">
        <HeroSection1 backgroundImage="/heroimg.jpg" />
        <ul className="text-red-blood regular-20 w-1/2 flex flex-col gap-1 items-end justify-end p-8 sm:p-16">
          <Type />
        </ul>
        <div
          className="absolute inset-0 flex justify-center items-center max-h-[60vh] sm:max-h-screen"
          style={{ pointerEvents: "none" }}
        >
          <h1 className={`${unbounded.className} uppercase text-red-blood text-5xl font-black sm:bold-128 text-center`}>
            kiranaide
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
