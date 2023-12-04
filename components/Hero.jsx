import React from "react";
import { expSkill } from "@/lib/utils";
import Type from "./Type";

const HeroSection1 = ({ backgroundImage }) => {
  const bg = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div style={bg} className={`bg-cover w-1/2 h-full min-h-[85vh]`}></div>
  );
};

const Hero = () => {
  return (
    <div className="mx-auto max-w-[1440px] mt-8 mb-16">
      <div className="w-full h-full font-montserrat flex flex-row">
        <HeroSection1 backgroundImage="/heroimg.jpg" />
        <ul className="text-red-blood regular-20 w-1/2 flex flex-col gap-1 items-end justify-end p-16">
          {/* <Typewriter text="front-end developer." delay={100} infinity /> */}
          {/* {expSkill.map((link) => (
                    <li key={link.skill}>{link.skill}</li>
                ))} */}
          {/* <Typewriter
                    options={{
                        strings: expSkill.map(data => data.skill),
                        autoStart: true,
                        loop: true,
                        pauseFor: 1500,
                    }}
                /> */}
          <Type />
        </ul>
        <div
          className="absolute inset-0 flex justify-center items-center max-h-screen"
          style={{ pointerEvents: "none" }}
        >
          <h1 className="font-unbounded uppercase text-red-blood bold-128 text-center">
            kiranaide
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
