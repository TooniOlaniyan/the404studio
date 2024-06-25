import Image from "next/image";
import { Button } from "../ui/moving-border";
import { ButtonStatic } from "../ui/button";
import Link from "next/link";
import {motion} from 'framer-motion'


const HeroSection = () => {
  return (
    <section className="w-full flex flex-col items-center text-center p-8 mt-6">
      <div className="mb-8 w-full">
        <div className="flex w-full">
          <p className="text-lg text-grayText">
            A Design and Development Agency
          </p>
        </div>
        <div className="flex justify-between items-start">
          <h1  className="text-[6rem] font-extrabold leading-tight text-start">
            WE ARE AN AWARD <br /> WINNING DIGITAL <br /> AGENCY.
          </h1>
          <div className=" flex flex-col gap-[14rem]">
            <p className="mt-4 md:mt-0 md:ml-8 text-sm text-grayText text-justify  max-w-sm">
              At 404Studio we unleash the potential of your brand with our
              services. Through a synthesis of design brilliance and technical
              prowess, we engineer digital experiences that align with your
              brand's identity and goals.
            </p>
            <div className="mt-4 flex space-x-4 justify-center">
              <Link href="/get-started">
                <Button
                  borderRadius="1rem"
                  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/contact">
                <ButtonStatic className="px-4 py-2 bg-orange text-white text-md font-semibold rounded-[1.75rem] hover:bg-green-600 transition-colors">
                  Schedule a call
                </ButtonStatic>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="bg-blue-500 h-2 w-12"></div>
          <div className="bg-blue-500 h-2 w-4 mx-1"></div>
          <div className="bg-blue-500 h-2 w-8"></div>
        </div>
      </div>
      <div className="border-t border-gray-300 w-full mt-8"></div>
      <div className="mt-4 flex flex-col items-center md:flex-row md:justify-between w-full">
        <div className="text-justify mb-4 md:mb-0">
          <p className="text-text text-lg font-bold max-w-md">
            DESIGN VISUALLY. CREATE EFFICIENTLY.
          </p>
          <p className="text-text text-sm max-w-md">
            An Agency that will work for
          </p>
        </div>

        <div></div>
        <div className="text-sm mb-4 md:mb-0 bg-orange bg-opacity-50 backdrop-blur-lg rounded-lg p-5 shadow-lg">
          <span className="text-white mx-1 bg-orange rounded-sm p-3 opacity-80">
            Businesses
          </span>
          ,
          <span className="text-white mx-1 bg-orange rounded-sm p-3 opacity-80">
            Startups
          </span>
          ,
          <span className="text-white mx-1 bg-orange rounded-sm p-3 opacity-80">
            Media & Publishers
          </span>
          <span className="text-white opacity-80 mx-1">and</span>
          <span className="text-white mx-1 bg-orange rounded-sm p-3 opacity-90">
            Companies
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
