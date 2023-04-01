import type { NextComponentType } from "next";

import Image from "next/image";
import Link from "next/link";

import { HiOutlineArrowNarrowRight } from "../Misc/Icons.collection";

const About: NextComponentType = () => {
  return (
    <div className="my-8 flex flex-row items-center justify-between px-3 font-sen">
      <div>
        <p className="text-3xl font-bold text-white">Saleen Shahriar</p>
        <p className="mt-1 text-lg text-gray-300">
          Computer Engineering student @ uWaterloo
        </p>

        <p className="mt-4 text-gray-400">
        Currently seeking opportunities for Fall 2023. 
        My interests include software development, embedded systems, hardware, and design.
        </p>

        <Link href="/resume.pdf" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="mailto:s4shahri@uwaterloo.ca" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send me an email
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/saleenshahriar" passHref>
          <a
            className="mt-4 flex cursor-pointer flex-row items-center gap-1 font-jost text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me on LinkedIn
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      {/* <div className="hidden custom:block">
        <Image
          src="/assets/avatar.jpg"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div> */}
    </div>
  );
};

export default About;
