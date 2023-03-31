import "./App.css";
import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Intro/Intro";
import { About } from "../components/About/About";
import { Bio } from "../components/Bio/Bio";
import { Footer } from "../components/Footer/Footer";

function Home() {
  const [whiteMode, setWhiteMode] = useState(false);

  const handleModeChange = () => {
    setWhiteMode(!whiteMode);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Navbar setMode={whiteMode} handleModeChange={handleModeChange} />
      <Header />
      <About />
      <Bio />
      <Footer />
    </div>
  );
}

export default Home;
