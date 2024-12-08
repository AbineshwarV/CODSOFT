import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="relative h-full overflow-y-hidden antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Skills />
        <Bio />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
