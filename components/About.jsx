import { expSkill } from "@/lib/utils";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="max-h-[800px] relative overflow-hidden my-16 bg-white flex flex-row font-montserrat">
      <div className="pb-8">
        {expSkill.map((list, index) => (
          <p
            className={`big-stroke whitespace-nowrap ${
              index % 2 === 0 ? "animate-toLeft" : "animate-toRight"
            }`}
            key={list.skill}
          >
            {`${list.skill} ${list.skill}`}
          </p>
        ))}
      </div>
      <div className="z-10 absolute flex items-center justify-center inset-0">
        <div className="rounded-3xl bg-red-ruby text-almost-white p-8 sm:p-20 flex flex-col text-center space-y-4 max-w-sm md:max-w-5xl animate-popUpReverse hover:animate-popUp">
          <Image
            src="/red-star.svg"
            width={128}
            height={128}
            alt="star"
            className="absolute -top-6 -left-6 sm:-top-14 sm:-left-14 w-16 h-16 sm:w-full sm:h-full"
          />
          <h5 className="bold-16 sm:bold-32">About Me</h5>
          <p className="regular-14 sm:regular-24">
            A Front-end Enthusiast with a strong passion for Front-End
            Development, specializing in the creation of visually appealing and
            user-friendly web applications. Possessing a solid skill set in
            HTML, CSS, JavaScript, and UI/UX design, I am eager to apply my
            knowledge and enthusiasm as I continuously enhance my skills and
            contribute to dynamic projects.
          </p>
        </div>
      </div>
      <div className="absolute flex items-center justify-center inset-0">
        <div className="bg-black max-w-sm md:max-w-5xl p-8 sm:p-20 flex flex-col text-center space-y-4 rounded-3xl">
          <h5 className="bold-16 sm:bold-32">About Me</h5>
          <p className="regular-14 sm:regular-24">
            A Front-end Enthusiast with a strong passion for Front-End
            Development, specializing in the creation of visually appealing and
            user-friendly web applications. Possessing a solid skill set in
            HTML, CSS, JavaScript, and UI/UX design, I am eager to apply my
            knowledge and enthusiasm as I continuously enhance my skills and
            contribute to dynamic projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
