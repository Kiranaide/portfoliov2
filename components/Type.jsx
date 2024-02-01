"use client";
import React from "react";
import { expSkill } from "@/lib/utils";
import Typewriter from "typewriter-effect";

const Type = () => {
  const data = expSkill.map((data) => data.skill);
  return (
    <div>
      <Typewriter
        options={{
          strings: data,
          autoStart: true,
          loop: true,
          pauseFor: 1000,
          delay: 50,
        }}
      />
    </div>
  );
};

export default Type;
