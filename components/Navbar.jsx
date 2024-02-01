import { navbar } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { unbounded } from "@/app/layout";
import { redirectLink } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="mx-4 sm:mx-auto max-w-lg sm:max-w-[1440px]">
      <nav className="my-8 text-red-blood flex flex-row items-center justify-between">
        <div>
          <h1 className={`${unbounded.className} bold-32 sm:bold-52`}>KRND</h1>
        </div>
        <ul className="regular-18 flex flex-row gap-4 sm:gap-6 items-center">
          {navbar.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              target="_blank"
              className="w-6 h-6 sm:w-full sm:h-full">
              <Image
                src={link.image}
                alt={link.label}
                width={32}
                height={32}
              />
            </Link>
          ))}
          <a
            href={redirectLink[0].link}
            className="whitespace-nowrap py-2 px-4 border border-red-blood hover:bg-red-blood hover:text-white transition-colors duration-200">
            {redirectLink[0].name}
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
