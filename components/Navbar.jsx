import { navbar } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mx-auto max-w-[1440px]">
      <nav className="my-8 text-red-blood flex flex-row items-center justify-between">
        <div>
          <h1 className="font-unbounded bold-52">KRND</h1>
        </div>
        <ul className="font-montserrat regular-18 flex flex-row gap-6">
          {navbar.map((link) => (
            <Link href={link.href} key={link.key} target="_blank">
              <Image src={link.image} alt={link.label} width={32} height={32} />
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
