import React, { useState, useEffect } from 'react';
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { DNA } from "react-loader-spinner";

const App = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" h-[100vh] flex justify-center items-center">
          <DNA
            visible={true}
            height="400"
            width="800"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            />
        </div>
      ) : (
        <div className="">
          <Nav />
          <Banner />
          <About />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
