import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import img from "../assets/logo1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { IoIosAirplane } from "react-icons/io";
import { FaMobile } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";

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
      className=" lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center border-b-2 border-dashed border-blue-300 overflow-x-hidden"
    >
      <div className="h-full lg:py-5 flex flex-col justify-center lg:items-start items-center">
        <h1
          data-aos="fade-right"
          className="text-[36px] font-semibold mb-8 leading-normal uppercase text-center mx-auto w-full"
        >
          <span className="" style={{ color: "#2C3594" }}>
            Welcome
          </span>
          <br />
          <span className="" style={{ color: "#0787CA" }}>
            {" "}
            To
          </span>
          <br />
          <span className="" style={{ color: "#34BDDE" }}>
            {" "}
            Repository{" "}
          </span>
          <span className="" style={{ color: "#F6EE1F" }}>
            Juncture{" "}
          </span>
          <span className="" style={{ color: "#F7941F" }}>
            Resource{" "}
          </span>
          <span className="" style={{ color: "#EC0D8E" }}>
            Infinity{" "}
          </span>
          <br />
          <span
            className=" bg-green-400 font-bold"
            style={{ color: "#2C3594" }}
          >
            AKA{" "}
          </span>
          <div className="flex justify-center">
            <MdOutlineKeyboardDoubleArrowDown
              className=""
              style={{ color: "#EC028C" }}
            />
            <br />
            <MdOutlineKeyboardDoubleArrowDown
              className=""
              style={{ color: "#EC028C" }}
            />
          </div>
          <span className="font-bold" style={{ color: "#34BDDE" }}>
            {" "}
            R
          </span>
          <span className="font-bold" style={{ color: "#F6EE1F" }}>
            {" "}
            J
          </span>
          <span className="font-bold" style={{ color: "#F7941F" }}>
            {" "}
            R
          </span>
          <span className="font-bold" style={{ color: "#EC0D8E" }}>
            {" "}
            Infinity
          </span>
        </h1>
        <div className="text-center mx-auto">
          <p data-aos="fade-left">
            <span className="font-bold" style={{ color: "#EC0D8E" }}>
              {" "}
              Code
            </span>
            <span className="font-bold" style={{ color: "#F7941F" }}>
              {" "}
              Crafted
            </span>
            ,
            <span className="font-bold" style={{ color: "#F6EE1F" }}>
              {" "}
              Solutions
            </span>
            <span className="font-bold" style={{ color: "#34BDDE" }}>
              {" "}
              Infinite
            </span>
          </p>
        </div>

        <div data-aos="fade-right" className="flex px-40 gap-2 justify-center">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a
                href="https://github.com/Arindamonlive"
                className="text-slate-800 hover:text-slate-900 rounded-full glow p-2 "
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/"
                className="text-blue-800 hover:text-blue-800 rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
              {/* <a href="https://twitter.com/arindamckbt" className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2">
                                <FiTwitter className="text-[28px]"/>
                            </a> */}
              <a
                href="https://www.instagram.com/arindam_atjoy/"
                className="text-fuchsia-600 hover:text-fuchsia-600 rounded-full glow p-2"
              >
                <FaInstagram className="text-[28px]" />
              </a>
              <a
                href="tel:+919830410335"
                className="text-red-600 hover:text-fuchsia-600 rounded-full glow p-2"
              >
                <FaMobile className="text-[28px]" />
              </a>
              <a
                href="https://wa.me/message/SOPBPN6JSYZ7K1"
                className="text-green-600 hover:text-fuchsia-600 rounded-full glow p-2"
              >
                <FaWhatsapp className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className=""
        alt=""
      />
    </div>
  );
};
export default Banner;
