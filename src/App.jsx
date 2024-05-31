import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DotLoader from "react-spinners/DotLoader";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <DotLoader color="#8a2be2" loading={loading} size={100} />
        </div>
      ) : (
        <header>
          <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-violet-800 selection:text-violet-200">
            <div className="fixed top-0 -z-10 h-full w-full">
              <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <div className="container mx-auto px-8">
              <Navbar />
              <Hero />
              <About />
              <Technologies />
              <Projects />
              <Contact />
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default App;
