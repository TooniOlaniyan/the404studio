import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/moving-border";

const Header = () => {
  return (
    <header className="w-full">
      <div className="container  px-4 py-2 flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              width={150}
              height={150}
              alt="logo"
              className="object-contain"
            />
          </Link>
        </div>

        <nav className="flex gap-20">
          <Link href="/about-us">About Us</Link>
          <Link href="/our-services">Our Services</Link>
          <Link href="/works">Works</Link>
          <Link href="/contact">Start Project</Link>
        </nav>

        <div className="flex-shrink-0">
          <Link href="/contact">
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Schedule a Call
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
