import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { FaMobile, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img from "../assets/logo1.png";
import img2 from '../assets/bgp1.jpg';
import React, { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "eas-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  return (
    <div
      id="/"
      className="lg:px-12 px-4 lg:py-5 py-20 text-center lg:flex lg:flex-row flex-col-reverse justify-between lg:items-center border-b-2 border-solid border-blue-300 min-h-screen"
      style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="lg:flex lg:gap-28 items-center">
        <div className="lg:w-1/2">
          <h1
            data-aos="fade-right"
            className="text-[36px] font-semibold mb-8 leading-normal uppercase mx-auto w-full lg:text-left text-center sm:gap-4"
          >
            <span className="" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              Welcome
            </span>
            <br />
            <span className="" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              {" "}
              To
            </span>
            <br />
            <span className="" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              {" "}
              Repository{" "}
            </span>
            <span className="" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              Juncture{" "}
            </span>
            <span className="" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              Resource{" "}
            </span>
            <span className="" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              Infinity{" "}
            </span>
            <br />
            <span
              className=" font-bold"
              style={{ color: "#FF0000", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
            >
              AKA{" "}
            </span>
            <div className="hidden lg:flex ">
              <MdOutlineKeyboardDoubleArrowDown
                className=""
                style={{ color: "#EC028C", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
              />
              <br />
              <MdOutlineKeyboardDoubleArrowDown
                className=""
                style={{ color: "#EC028C", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
              />
            </div>
            <span className="font-bold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              {" "}
              R
            </span>
            <span className="font-bold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              {" "}
              J
            </span>
            <span className="font-bold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              {" "}
              R
            </span>
            <span className="font-bold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
              {" "}
              Infinity
            </span>
          </h1>
        </div>
        <div className="flex flex-row items-center gap-8 ">
          <div className="flex flex-col items-center text-[48px]">
            <div data-aos="fade-down" className="mb-4">
              <span className="font-semibold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
                {" "}
                Code
              </span>
            </div>
            <div data-aos="fade-down" className="mb-4">
              <span className="font-semibold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
                {" "}
                Crafted
              </span>
            </div>
            <div data-aos="fade-down" className="mb-4">
              <span className="font-semibold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
                {" "}
                Solutions
              </span>
            </div>
            <div data-aos="fade-down" className="mb-4">
              <span className="font-semibold" style={{ color: "#2C3594", textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
                {" "}
                Infinite
              </span>
            </div>
          </div>


          <div data-aos="fade-right" className="flex flex-col items-center gap-0">
            <div className="mb-0">
              <a
                href="https://github.com/Arindamonlive"
                className="text-slate-800 hover:text-slate-900 rounded-full glow p-2 "
              >
                <AiFillGithub className="text-[28px]" />
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/"
                className="text-blue-800 hover:text-blue-800 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://www.instagram.com/arindam_atjoy/"
                className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
            </div>
            <div className="mb-4">
              <a
                href="tel:+919830410335"
                className="text-red-600 hover:text-fuchsia-600 rounded-full glow p-2"
              >
                <FaMobile className="text-[28px]" />
              </a>
            </div>
            <div className="mb-4">
              <a
                href="https://wa.me/message/SOPBPN6JSYZ7K1"
                className="text-green-600 hover:text-fuchsia-600 rounded-full glow p-2"
              >
                <FaWhatsapp className="text-[28px]" />
              </a>
            </div>
          </div>

        </div>
        <div className="lg:w-1/2 py-40">
          <div className="">
            <img
              data-aos="fade-up"
              src={img}
              width={290}
              height={290}
              className="mx-auto"
              alt=""
            />
          </div>
          <div className="text-red-600 text-[24px] font-semibold text-center" style={{ textShadow: "0 2px 2px rgba(0.4, 0, 0, 0.2)" }}>
            Empowering Ideas, Transforming Businesses, and Elevating Ventures in the Digital Frontier.
          </div>
          <Link to="/services">
            <button
              className="bg-blue-600 text-white px-16 py-2 rounded-full hover:bg-blue-700 transition duration-300 mt-8 mx-auto"
            >
              Get your Website/App
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;