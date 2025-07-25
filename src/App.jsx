import React, { useState, useEffect } from 'react';
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TermsAndConditions from './Components/TermsAndConditions';
import Privacy from './Components/PrivacyPolicy';
import Refund from './Components/Refund';
import Courses from './Components/Courses';
import Login from './Components/Login';
import AdminCore from './Components/AdminCore';
import EmpLogin from './Components/Emp-Login';
import Employer from './Components/Employer';
import { DNA } from "react-loader-spinner";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 920);
  }, []);

  return (
    <Router>
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
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Banner />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/T&C" element={<TermsAndConditions />}></Route>
            <Route path="/privacy" element={<Privacy />}></Route>
            <Route path="/refund" element={<Refund />}></Route>
            <Route path="/course" element={<Courses />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/portal/admincore" element={<AdminCore />}></Route>
            <Route path="/empcore-login" element={<EmpLogin />}></Route>
            <Route path="/empcore" element={<Employer />}></Route>
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;