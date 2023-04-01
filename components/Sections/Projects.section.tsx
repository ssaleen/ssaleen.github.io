import type { NextComponentType } from "next";

import Link from "next/link";

const Projects: NextComponentType = () => {
  return (
    <div className="my-16 px-3 font-sen" id="projects">
      <p className="text-3xl font-bold text-white">Featured Projects</p>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#D8B4FE] to-[#818CF8] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">RISC-V Processor</p>
            <p>Verilog, Xilinx Vivado, PyNQ, Pipelining</p>
          </div>
        </a>
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#FDE68A] via-[#FCA5A5] to-[#FECACA] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Realtime OS</p>
            <p>C, ARM Kiel, Memory, Scheduling, IPC</p>
          </div>
        </a>
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#2596be] via-[#25a5be] to-[#2587be] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Sentiment Classifier</p>
            <p>Python, sklearn, NLP, NumPy, Pandas</p>
          </div>
        </a>
      </div>
      <div className="my-8 flex flex-col items-center justify-center gap-10 sm:flex-row">
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#25be6d] to-[#14693c] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Home Security System</p>
            <p>C, STM32, Proteus, PCBs</p>
          </div>
        </a>
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#e42f51] via-[#970512] to-[#8f1d33] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Robotic Arm Controller</p>
            <p>Intel Quartus, VHDL, Moore/Mealy Machines</p>
          </div>
        </a>
        <a
          className="h-[7rem] w-[14rem] cursor-pointer rounded-lg bg-gradient-to-r from-[#eca508] via-[#ec8e08] to-[#ecbc08] p-1 text-white duration-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex h-full w-full flex-col items-center justify-center rounded-lg bg-primary px-2 text-center font-medium">
            <p className="text-xl font-semibold">Web Crawler</p>
            <p>C, Multithreading, Semaphores, Mutexes, cURL</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
