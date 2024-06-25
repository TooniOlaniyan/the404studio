import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"; 

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="relative z-10 flex justify-between items-center bg-gray-100 p-8 rounded-lg mb-8">
          <h2 className="text-4xl font-bold mb-4 leading-loose">
            Excited? Us too. Let’s <br /> start building your ideas.
          </h2>
          <Link href="/schedule-call">
            <Button className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-md hover:bg-blue-600 transition-colors">
              Schedule a Call
              <Image
                src="/assets/icons/video.svg"
                alt="Video Icon"
                width={25}
                height={25}
                className="mr-2"
              />
            </Button>
          </Link>
        </div>

        <div className="relative z-10 flex justify-between items-center mb-8">
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              width={300}
              height={300}
              alt="404Studio"
              className="object-contain"
            />
          </div>

          <nav className="flex space-x-4">
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="relative z-10 flex justify-center space-x-8 mb-8">
          <Link href={"/"}>
            <Image
              src="/assets/icons/facebook.svg"
              width={100}
              height={100}
              className="object-contain"
              alt="facebook"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/assets/icons/instagram.svg"
              width={100}
              height={100}
              className="object-contain"
              alt="instagram"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/assets/icons/linkedin.svg"
              width={100}
              height={100}
              className="object-contain"
              alt="linkedin"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/assets/icons/twitter.svg"
              width={100}
              height={100}
              className="object-contain"
              alt="twitter"
            />
          </Link>
          <Link href={"/"}>
            <Image
              src="/assets/icons/youtube.svg"
              width={100}
              height={100}
              className="object-contain"
              alt="youtube"
            />
          </Link>
        </div>

        <div className="relative z-10 flex justify-between items-center border-t border-gray-200 pt-4">
          <p className="text-gray-500">&copy; 2024 the404Studio.</p>
          <div className="flex space-x-4">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full grid grid-cols-8 gap-4">
          <div className="col-span-1 border-l border-gray-300 z-[-1]"></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
          <div className="col-span-1 border-l border-gray-300 "></div>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
