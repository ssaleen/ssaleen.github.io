import { BsArrowRightShort } from "../Misc/Icons.collection";

const Experience = () => {
  return (
    <div className="my-16 px-3 font-sen text-black" id="experience">
      <p className="text-3xl font-bold text-black">Work Experience</p>

      <div className="text-md my-8 flex flex-col font-medium md:text-xl custom:text-lg">
        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-600">
          <BsArrowRightShort size="30" />
          <span className="text-black">Autonomic:</span>
          &nbsp;Software Engineering Intern
          (Winter 2023)
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-600">
          <BsArrowRightShort size="30" />
          <span className="text-black">Ford Pro:</span>
          &nbsp;Software Engineering Intern
          (Winter 2022)
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-600">
          <BsArrowRightShort size="30" />
          <span className="text-black">Ricoh:</span>
          &nbsp;Software Engineering Intern
          (Summer 2021)
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-600">
          <BsArrowRightShort size="30" />
          <span className="text-black">Seismic:</span>
          &nbsp;Software Engineering Intern
          (Fall 2020)
        </p>

        <p className="flex flex-row items-center border-b-[0.1px] border-gray-500 py-1 text-gray-600">
          <BsArrowRightShort size="30" />
          <span className="text-black">IESO:</span>
          &nbsp;Power Systems Analyst Intern
          (Winter 2020)
        </p>
      </div>
    </div>
  );
};

export default Experience;
