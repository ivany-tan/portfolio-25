import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Showcase from "./sections/Showcase";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Showcase />
    </div>
  );
};

export default App;
