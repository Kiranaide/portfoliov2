import { techStack } from "@/lib/utils";
import React from "react";

const Skill = () => {
  return (
    <div className="mx-4 sm:mx-auto max-w-2xl flex flex-col items-center justify-center space-y-8 my-24">
      <h1 className="bold-40 sm:bold-64 text-red-blood font-unbounded">Tech Stack</h1>
      <div className="flex flex-wrap gap-4 sm:gap-8 justify-center">
        {techStack.map((tech) => (
          <img
            src={tech.image}
            key={tech.name}
            alt={tech.name}
            className="w-auto h-12 sm:h-16"
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
