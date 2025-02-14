import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaMobile, FaWhatsapp } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import img from "../assets/logo1.png";
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quart",
      delay: 0,
      duration: 750,
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="/" className="min-h-screen bg-white text-gray-900 flex flex-col justify-center items-center text-center px-4">
      <img src={img} alt="Company Logo" className="w-32 mb-4" />
      <h1 data-aos="fade-right" className="text-5xl font-bold text-blue-600 uppercase mb-6">
        Web & Software Development Excellence
      </h1>
      <p className="text-lg text-gray-700 max-w-3xl mb-8">
        Crafting powerful digital solutions to elevate your business. From dynamic websites to cutting-edge software, we bring your ideas to life.
      </p>
      
      <div className="w-full max-w-4xl mx-auto my-8 shadow-lg rounded-lg overflow-hidden">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="w-full" />
            </div>
          ))}
        </Slider>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800 mt-8">
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Custom Web Development</h2>
          <p>Responsive, fast, and SEO-friendly websites tailored for your business needs.</p>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Software Solutions</h2>
          <p>Innovative software applications that optimize workflows and boost productivity.</p>
        </div>
        <div className="p-4 bg-blue-100 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">E-commerce & CMS</h2>
          <p>Build feature-rich online stores and manage content effortlessly.</p>
        </div>
      </div>
      
      <div className="flex space-x-4 text-3xl mt-6">
        <a href="https://github.com/Arindamonlive" className="hover:text-gray-600"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" className="hover:text-gray-600"><FaLinkedinIn /></a>
        <a href="https://www.instagram.com/arindam_atjoy/" className="hover:text-gray-600"><FaInstagram /></a>
        <a href="tel:+919830410335" className="hover:text-gray-600"><FaMobile /></a>
        <a href="https://wa.me/message/SOPBPN6JSYZ7K1" className="hover:text-gray-600"><FaWhatsapp /></a>
      </div>
      
      <Link to="/services">
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full transition shadow-lg">
          Get your Website/App
        </button>
      </Link>
    </div>
  );
};

export default Banner;