import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navbar } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="mx-4 sm:mx-auto max-w-[1440px] mt-24 mb-8 sm:mt-32 sm:mb-16 space-y-8">
      <div className="flex flex-row items-center justify-center gap-8">
        {navbar.map((link) => (
          <Link href={link.href} key={link.key} target="_blank">
            <Image src={link.image} alt={link.label} width={48} height={48} />
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <h5 className="text-lg font-normal text-center">
          © 2023 - <span className="font-medium">Sakti Abdullah Shidiq</span> /
          Kiranaide
        </h5>
      </div>
    </div>
  );
};

export default Footer;
