import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaMobile, FaWhatsapp, FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

import logo from "../assets/logo1.png";
import img1 from '../assets/image_1.png';
import img2 from '../assets/image_2.png';
import img3 from '../assets/image_3.png';
import img4 from '../assets/image_4.png';
import img5 from '../assets/image_5.png';
import img6 from '../assets/image_6.png';
import img7 from '../assets/image_7.png';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-blue-50 to-white">
        <img src={logo} alt="Company Logo" className="w-28 mb-6" />
        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-extrabold text-blue-800 leading-tight">
          Building Digital Solutions that Inspire
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-3xl">
          We craft high-performance web & software applications tailored for your business growth — from startups to enterprises.
        </p>
        <Link to="/services">
          <button className="mt-6 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition shadow-xl">
            Get Started
          </button>
        </Link>
        <MdOutlineKeyboardDoubleArrowDown className="mt-10 text-4xl text-blue-600 animate-bounce" />
      </section>

      {/* Image Feature Sections */}
      <section className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto py-16 px-6">
        {[{img: img1, title: "Cutting-Edge Web Development", desc: "Modern, scalable, and responsive websites crafted with precision."},
          {img: img2, title: "Enterprise Software", desc: "Custom solutions that streamline business workflows and operations."},
          {img: img3, title: "E-Commerce Platforms", desc: "Boost your sales with secure, user-centric shopping solutions."},
          {img: img4, title: "Digital Branding", desc: "Make your mark with a strong, digital-first brand identity."},
          {img: img5, title: "Mobile App Development", desc: "Cross-platform mobile apps with robust performance and UX."},
          {img: img6, title: "Startup Acceleration", desc: "From idea to MVP — we help startups launch fast and smart."},
          {img: img7, title: "UI/UX Design Excellence", desc: "Pixel-perfect, intuitive designs that users love."},
        ].map((item, i) => (
          <div key={i} className="flex flex-col lg:flex-row items-center gap-6 bg-white shadow-lg p-6 rounded-xl" data-aos="fade-up">
            <img src={item.img} alt={item.title} className="w-full lg:w-1/2 rounded-lg shadow-md" />
            <div className="text-left">
              <h3 className="text-2xl font-bold text-blue-700">{item.title}</h3>
              <p className="mt-2 text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Global Presence Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800">We Are Global</h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          With our main development hub in India and an active branch office in the <span className="font-semibold text-blue-700">USA</span>, we are digitally connected across time zones and regions.
        </p>
        <a
          href="https://techtonictrends.net/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-blue-600 underline font-medium hover:text-blue-800"
        >
          Visit Our US Partner Site
        </a>
        <div className="mt-8 text-6xl text-blue-600">
          <FaGlobeAmericas />
        </div>
      </section>

            {/* Testimonials Section */}
            <section className="bg-white py-16 px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-800">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">Trusted by businesses around the globe</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              name: "Ananya Roy",
              feedback: "RjR Infinity delivered our project on time and exceeded expectations. Their professionalism is unmatched.",
            },
            {
              name: "Michael Liu",
              feedback: "The team built a rock-solid enterprise dashboard for us. Highly recommend for global development work.",
            },
            {
              name: "Dev Patel",
              feedback: "Seamless communication and great post-launch support. Our website is fast, secure, and user-friendly.",
            },
            {
              name: "Dev Patel",
              feedback: "Seamless communication and great post-launch support. Our website is fast, secure, and user-friendly.",
            },
            {
              name: "Dev Patel",
              feedback: "Seamless communication and great post-launch support. Our website is fast, secure, and user-friendly.",
            },
            {
              name: "Dev Patel",
              feedback: "Seamless communication and great post-launch support. Our website is fast, secure, and user-friendly.",
            },
          ].map((t, i) => (
            <div
              key={i}
              className="p-6 bg-blue-50 rounded-xl shadow hover:shadow-md transition"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <p className="text-gray-800 italic mb-4">“{t.feedback}”</p>
              <h4 className="text-blue-700 font-semibold text-lg">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      {/* <section className="bg-blue-50 py-20 px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-800">Case Studies</h2>
          <p className="text-gray-600 mt-2">Real-world impact through digital excellence</p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {[
            {
              title: "E-Commerce Revamp for StyleMart",
              result: "Increased sales by 48% through a responsive, blazing-fast platform.",
            },
            {
              title: "ERP for TechnoWorks Inc.",
              result: "Reduced manual processes by 65% with our scalable enterprise solution.",
            },
            {
              title: "ERP for TechnoWorks Inc.",
              result: "Reduced manual processes by 65% with our scalable enterprise solution.",
            },
            {
              title: "ERP for TechnoWorks Inc.",
              result: "Reduced manual processes by 65% with our scalable enterprise solution.",
            },
          ].map((cs, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3 className="text-2xl font-semibold text-blue-700">{cs.title}</h3>
              <p className="mt-3 text-gray-700">{cs.result}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Contact / CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Let’s Build Something Great Together</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Whether it's a brand-new startup idea or enterprise-grade modernization — we’re here to help.
        </p>
        <Link to="/contact">
          <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition shadow-lg">
            Contact Our Experts
          </button>
        </Link>
      </section>

      {/* Footer Icons */}
      <footer className="flex justify-center gap-6 py-8 text-2xl text-gray-600">
        <a href="https://github.com/Arindamonlive" target="_blank"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/arindam_atjoy/" target="_blank"><FaInstagram /></a>
        <a href="tel:+919830410335"><FaMobile /></a>
        <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank"><FaWhatsapp /></a>
      </footer>
    </div>
  );
};

export default Banner;
