import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Showcase from "./sections/Showcase";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blue-300 flex items-center justify-center">
        <Hero />
      </div>
      <div className="bg-green-300 flex items-center justify-center">
        <About />
      </div>
      <div className="bg-yellow-300 flex items-center justify-center">
        <Experience />
      </div>
      <div className="bg-red-300 flex items-center justify-center">
        <Showcase />
      </div>
    </div>
  );
};

export default App;
