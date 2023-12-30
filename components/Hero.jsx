import React from "react";
import Type from "./Type";
import Image from "next/image";
import { unbounded } from "@/app/layout";

const Hero = () => {
  return (
    <div className="mx-auto max-w-lg sm:max-w-[1440px] mt-4 mb-8 sm:mt-8 sm:mb-16">
      <div className="w-full h-full flex flex-row">
        <Image
          src="/heroimg.jpg"
          alt="hero-bg"
          width={3611}
          height={1954}
          className="object-cover w-1/2 h-full min-h-[60vh] sm:min-h-[80vh]"
        />
        <ul className="text-red-blood regular-20 w-1/2 flex flex-col gap-1 items-end justify-end p-8 sm:p-16">
          <Type />
        </ul>
        <div
          className="absolute inset-0 flex justify-center items-center max-h-[60vh] sm:max-h-screen"
          style={{ pointerEvents: "none" }}>
          <h1
            className={`${unbounded.className} uppercase text-red-blood text-5xl font-black sm:bold-128 text-center`}>
            kiranaide
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
