import {AiFillGithub} from 'react-icons/ai';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import img from "../assets/logo1.png";
import React from "react";

const Footer =() => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className='bg-green-200 text-white lg:px-48 px-4 py-2'>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-1">
                <div className="mb-4 md:mb-0">
                    <span className="text-1xl font-semibold text-white py-1 uppercase">
                    <a href="/" className="cursor-pointer">
            <img src={img} width={80} height={40} alt="" />
          </a>
                    </span>
                    <p className="text-[16px] my-1 font-bold text-yellow-600">Repository Juncture Resource Infinity</p>
                </div>
                <div className="">
                    <h2 className="text-[22px] font-bold text-blue-800 py-1 uppercase">
                        Services
                    </h2>
                    <ul className="text-[16px] my-1 text-yellow-600">
                            <li className='my-1'>Web Design</li>
                            <li className='my-1'>Web Development</li>
                            <li className='my-1'>Backend</li>
                            <li className='my-1'>Deployment</li>
                            <li className='my-1'>AI & Machine Learning Integration</li>
                        </ul>
                </div>
                <div className="mb-4 md:mb-0">
                    <h2 className="text-[22px] font-bold text-blue-800 py-1 uppercase ">Contact</h2>
                    <p className="text-[16px] my-1 text-yellow-600">Email: arindamckbt@gmail.com</p>
                    <p className="text-[16px] my-1 text-yellow-600">Phone: +919830410335</p>
                </div>
                {/* <h2 className="text-[22px] font-semibold text-blue-800 py-1 uppercase">Follow me
                <div className="flex space-x-4">
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/Arindamonlive" >
                                <AiFillGithub className="text-[28px]"/>
                            </a>
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" >
                                <FaLinkedinIn className="text-[28px]"/>
                            </a>
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://twitter.com/arindamckbt" >
                                <FiTwitter className="text-[28px]"/>
                            </a>
                            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.instagram.com/arindam_atjoy/" >
                                <FaInstagram className="text-[28px]"/>
                            </a>
                </div></h2> */}

            </div>
            <div className="text-white text-[12px] text-center mt-1 text-yellow-600">
        &copy; {currentYear} RJR Infinity. All rights reserved. Developed By Mr. Arindam Chakraborty +91-9830410335/arindamckbt@gmail.com
      </div>
        </footer>
    )
}
export default Footer;