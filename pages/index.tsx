import type { NextPage } from "next";

import {
  Header,
  About,
  Projects,
  Experience,
  Links,
} from "../components";

const Home: NextPage = () => {
  return (
    <div className="px-2 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <Header />
      <About />
      <Experience />
      <Projects />
      <Links />
    </div>
  );
};

export default Home;
