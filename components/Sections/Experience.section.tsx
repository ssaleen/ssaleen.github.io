import { BsArrowRightShort } from "../Misc/Icons.collection";

const Experience = () => {
  return (
    <div className="my-16 px-3 font-sen text-white" id="experience">
      <p className="text-3xl font-bold text-white">Work Experience</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Autonomic:</span>
          &nbsp;Software Engineering Intern
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Ford Pro:</span>
          &nbsp;Software Engineering Intern
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Ricoh:</span>
          &nbsp;Software Engineering Intern
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">Seismic:</span>
          &nbsp;Software Engineering Intern
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-slate-300">
          <BsArrowRightShort size="30" />
          <span className="text-white">IESO:</span>
          &nbsp;Power Systems Analyst Intern
        </p>
      </div>
    </div>
  );
};

export default Experience;
