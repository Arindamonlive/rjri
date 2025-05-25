import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn, FaMobile, FaWhatsapp, FaFacebook, FaGlobeAmericas } from "react-icons/fa";
import { FiTwitter } from 'react-icons/fi';
import img from "../assets/logo1.png";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activePolicy, setActivePolicy] = useState(null);

  const closeModal = () => setActivePolicy(null);

  return (
    <>
      <footer className='bg-gray-900 text-white py-6'>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6 text-center md:text-left">
          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start">
            <a href="/" className="cursor-pointer mb-2">
              <img src={img} width={100} height={50} alt="Company Logo" className='rounded-md' />
            </a>
            <p className="text-sm text-gray-400 font-medium">Repository Juncture Resource Infinity</p>
          </div>

          {/* Services Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3 uppercase">Services</h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">Web Design</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">Web Development</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">Backend</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">Deployment</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">AI</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">Machine Learning</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">UI/UX</a></li>
              <li><a className='hover:text-yellow-500 transition duration-150' href="/Services">Middleware</a></li>
            </ul>
          </div>

          {/* Info/Legal Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3 uppercase">Info</h2>
            <ul className="text-sm text-gray-300 space-y-1">
              <li><Link to="/T&C" className='hover:text-yellow-500 transition duration-150 underline'>Terms & Conditions</Link></li>
              <li><Link to="/privacy" className='hover:text-yellow-500 transition duration-150 underline'>Privacy Policy</Link></li>
              <li><Link to="/refund" className='hover:text-yellow-500 transition duration-150 underline'>Refund Policy</Link></li>
              <li>
                <button
                  onClick={() => setActivePolicy("Contact Us")}
                  className='hover:text-yellow-500 transition duration-150 underline'
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h2 className="text-lg font-semibold text-white mb-3 uppercase">Follow Me</h2>
            <div className="flex justify-center md:justify-start space-x-4">
                <a href="https://github.com/Arindamonlive" target="_blank" className="text-gray-200 hover:text-black">
                  <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/company/rjrinfinity/" target="_blank" className="text-[#0077b5] hover:text-blue-800">
                  <FaLinkedinIn />
                </a>
                <a href="https://www.instagram.com/rjrinfinity/" target="_blank" className="text-[#E1306C] hover:text-pink-600">
                  <FaInstagram />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61557574765261" target="_blank" className="text-[#1877F2] hover:text-blue-700">
                  <FaFacebook />
                </a>
                <a href="tel:+919830410335" className="text-green-700 hover:text-green-800">
                  <FaMobile />
                </a>
                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" className="text-[#25D366] hover:text-green-600">
                  <FaWhatsapp />
                </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
          &copy; {currentYear} RJR Infinity. All rights reserved. Developed by <span className='text-yellow-500'>Arindam Chakraborty</span>
        </div>
      </footer>

      {/* Contact Us Modal */}
      {activePolicy === "Contact Us" && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white text-black rounded-md shadow-xl max-w-lg w-full mx-4 p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="text-sm text-gray-700 whitespace-pre-line overflow-y-auto max-h-[70vh] pr-2">
              Email: info@rjrinfinity.com / rjriinfo@gmail.com<br />
              Phone: +91 9830410335 / +91 7308656861<br />
              Hours: Mon–Fri, 9 AM – 6 PM
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
