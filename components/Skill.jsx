import { unbounded } from "@/app/layout";
import { techStack } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const Skill = () => {
  return (
    <div className="mx-4 sm:mx-auto max-w-2xl flex flex-col items-center justify-center space-y-8 my-24">
      <h1
        className={`${unbounded.className} bold-40 sm:bold-64 text-red-blood`}>
        Tech Stack
      </h1>
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
        {techStack.map((tech) => (
          <Image
            src={tech.image}
            key={tech.name}
            alt={tech.name}
            width={64}
            height={64}
            className="w-auto h-12 sm:h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
