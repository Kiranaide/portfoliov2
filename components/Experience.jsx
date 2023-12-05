import { experience } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const DateExperience = (timeStamp) => {
  const date = new Date(timeStamp);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long" });
};

const Experience = () => {
  return (
    <div className="mx-4 sm:mx-auto max-w-[1440px]">
      <div className="w-full h-full font-montserrat flex flex-col items-center justify-center my-16 space-y-8">
        <h1 className="font-unbounded text-red-blood bold-40 sm:bold-64 text-center">
          Work Experience
        </h1>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 justify-between">
          {experience.map((list) => (
            <div
              key={list.name}
              className="flex flex-col items-center text-center space-y-1 bg-red-ruby text-almost-white rounded-2xl max-w-lg p-4"
            >
              <Image alt={list.name} src={list.image} width={64} height={64} />
              <h2 className="bold-16 sm:bold-20">{list.name}</h2>
              <h4 className="font-regular text-xs">
                {DateExperience(list.start)} -{" "}
                {list.end ? DateExperience(list.end) : "Present"}
              </h4>
              <h3 className="medium-14 sm:medium-16">{list.jobs}</h3>
              <p className="regular-14 sm:regular-16">{list.doing}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
