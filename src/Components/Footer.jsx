import { AiFillGithub } from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import img from "../assets/logo1.png";
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-gray-900 text-white py-6'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 text-center md:text-left">
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
                        <li className=""><a className='hover:text-yellow-500 transition duration-150' href="/Services">Web Design</a></li>
                        <li className=""><a className='hover:text-yellow-500 transition duration-150'href="/Services">Web Development</a></li>
                        <li><a className='hover:text-yellow-500 transition duration-150'href="/Services">Web Development</a></li>
                        <li><a className='hover:text-yellow-500 transition duration-150'href="/Services">Backend</a></li>
                        <li><a className='hover:text-yellow-500 transition duration-150'href="/Services">Deployment</a></li>
                        <li><a className='hover:text-yellow-500 transition duration-150'href="/Services">AI & Machine Learning</a></li>
                        
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-3 uppercase">Follow Me</h2>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a className="text-gray-400 hover:text-blue-500 transition" href="https://github.com/Arindamonlive">
                            <AiFillGithub className="text-2xl" />
                        </a>
                        <a className="text-gray-400 hover:text-blue-500 transition" href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/">
                            <FaLinkedinIn className="text-2xl" />
                        </a>
                        <a className="text-gray-400 hover:text-blue-500 transition" href="https://twitter.com/arindamckbt">
                            <FiTwitter className="text-2xl" />
                        </a>
                        <a className="text-gray-400 hover:text-blue-500 transition" href="https://www.instagram.com/arindam_atjoy/">
                            <FaInstagram className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-center text-gray-400 text-sm mt-6 border-t border-gray-700 pt-4">
                &copy; {currentYear} RJR Infinity. All rights reserved. Developed by <span className='text-yellow-500'>Arindam Chakraborty</span>
            </div>
        </footer>
    );
};

export default Footer;
