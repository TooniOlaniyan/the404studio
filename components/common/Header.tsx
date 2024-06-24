import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container  px-4 py-2 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="./logo.svg"
              width={150}
              height={150}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="flex gap-20">
          <Link href="/about-us">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/works">Works</Link>
        </nav>

        <div className="flex-shrink-0">
          <Link href="/contact-us">Start Project</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
