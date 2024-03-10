import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import { SiKotlin } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaMobile } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import img from '../assets/bgp3.jpg';

const Services = () => {
    const [showContactForm, setShowContactForm] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const openContactForm = () => {
        setShowContactForm(true);
    };

    const closeContactForm = () => {
        setShowContactForm(false);
    };
    return (
        <div
            id="Services"
            className="p-20  items-center justify-center border-b-2 border-solid border-red-400"
            style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h1
                data-aos="fade-right"
                className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">

            </h1>

            <div className="flex flex-col items-center">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"style={{textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)"}}>
                    Services
                </h1>

                <div className="flex flex-col md:flex-row w-full gap-4">
                    <div data-aos="fade-up" className="flex-1 p-8 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                        <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-around">
                            <IconWithText icon={<FaHtml5 style={{ color: "#FF5733", fontSize: "48px" }} />} text="HTML5" />
                            <IconWithText icon={<FaReact style={{ color: "#61dbfb", fontSize: "48px" }} />} text="React" />
                            <IconWithText icon={<FaCss3Alt style={{ color: "#264de4", fontSize: "48px" }} />} text="CSS3" />
                            <IconWithText icon={<IoLogoJavascript style={{ color: "#F0DB4F", fontSize: "48px" }} />} text="JavaScript" />
                            <IconWithText icon={<SiKotlin style={{ color: "#B125EA", fontSize: "48px" }} />} text="Kotlin" />
                        </div>
                    </div>

                    <div data-aos="fade-up" className="flex-1 p-8 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                        <h2 className="text-2xl font-semibold mb-4">Backend</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-around">
                            <IconWithText icon={<FaJava style={{ color: "#5382a1", fontSize: "48px" }} />} text="Java" />
                            <IconWithText icon={<FaPython style={{ color: "#4B8BBE", fontSize: "48px" }} />} text="Python" />
                            <IconWithText icon={<SiMysql style={{ color: "#f29111", fontSize: "48px" }} />} text="MySQL" />
                            <IconWithText icon={<DiMongodb style={{ color: "#4DB33D", fontSize: "48px" }} />} text="MongoDB" />
                            <IconWithText icon={<SiSpringboot style={{ color: "#4DB33D", fontSize: "48px" }} />} text="SpringBoot" />
                            <IconWithText icon={<DiDjango style={{ color: "#092E20", fontSize: "48px" }} />} text="Django" />
                            <IconWithText icon={<FaAws style={{ color: "#252F3E", fontSize: "48px" }} />} text="AWS" />
                            <IconWithText icon={<SiNginx style={{ color: "#009900", fontSize: "48px" }} />} text="NGINX" />
                        </div>
                    </div>
                </div>
            </div>

            <div

                className="p-20 flex flex-col items-center justify-center "
            >
                <h1
                    data-aos="fade-right"
                    className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"style={{textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)"}}
                >
                    Packages
                </h1>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-around text-center">

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Static/Dynamic WebApp
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic WebApp' – Choose Flexibility, Optimize Performance</p>
                        <p className="text-[12px] font-bold">1. Maximum page 7</p><p className="text-[12px] font-bold" onClick={openContactForm}>2. Only Frontend Service</p><p className="text-[12px] font-bold">3. Delivery within 3 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $17.99 or ₹ 1,499.00</p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full" onClick={openContactForm}>
                                Contact
                            </button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>

                        </div>

                    </div>


                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Static/Dynamic Android App
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic Android App' – Choose Flexibility, Optimize Performance</p>
                        <p className="text-[12px] font-bold">1. Maximum page 5</p><p className="text-[12px] font-bold">2. Only Frontend Service</p><p className="text-[12px] font-bold">3. Delivery within 10 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $42.99 or ₹ 3,499.00</p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            [Combo Offer] <p className="">Static/Dynamic WebApp & Android App</p>
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic WebApp & Android App' – Choose Flexibility, Optimize Performance</p>
                        <p className="text-[12px] font-bold">1. Maximum page 7</p><p className="text-[12px] font-bold">2. Only Frontend Service</p><p className="text-[12px] font-bold">3. Delivery within 10 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $60 or ₹ 4,999.00</p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Java(SpringBoot)/Python(Django) + API Services + DataBase
                        </h3>
                        <p className="text-gray-600">Empower your business with seamless integration: Java(SpringBoot)/Python(Django) + API Services + Database - Unleashing the Power of Connectivity</p>
                        <p className="text-[12px] font-bold">1. Maximum API 10</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 - 30 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $199.99 or ₹ 16,499.00</p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Middleware
                        </h3>
                        <p className="text-gray-600">Empower Your Business Flow with Middleware: Seamless Integration, Effortless Efficiency</p>
                        <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Only at $99.99 or ₹ 7,999.00 </p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Deployment
                        </h3>
                        <p className="text-gray-600">Unlock Infinite Possibilities with AWS - Your Gateway to Seamless Cloud Solutions</p>
                        <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Only at $89.99 or ₹ 7,499.00 </p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            [Platinum Offer] <p className="">WebApp + Android + Backend + Deployment</p>
                        </h3>
                        <p className="text-gray-600">Empower Your Digital Presence with Seamless WebApp, Android App, Backend, and Deployment - All-in-One Solution for Your Success</p>
                        <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 35 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $249.99 or ₹ 20,499.00 </p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            [Enterprise Offer] <p className="">E-commerce Solutions</p>
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Shopping Experience with your business – Where Convenience Meets Quality</p>
                        <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $449.99 or ₹ 36,999.00 </p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <h3 className="text-lg font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            [Surprise Offer] <p className="">Machine Learning</p>
                        </h3>
                        <p className="text-gray-600">Unlock the Future with Machine Learning: Your Gateway to Intelligent Solutions.</p>
                        <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p>

                        <div className="mt-4">
                            <p className="text-lg font-semibold">Starting at $549.99 or ₹ 45,499.00 </p>
                            {/* <form action="" className="">
                                <input
                                    type="text"
                                    className="border border-red-800 rounded p-2 w-full"
                                    placeholder="Name"
                                    name="name"
                                />
                                <input
                                    type="text"
                                    className="border border-green-800 rounded p-2 w-full mt-2"
                                    placeholder="Email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="border border-blue-800 rounded p-2 w-full mt-2"
                                    placeholder="PhoneNumber with CountryCode"
                                    name="phone"
                                />
                                <textarea
                                    className="border border-yellow-400 rounded p-2 w-full mt-2"
                                    placeholder="Any Additional Information"
                                    rows="5"
                                    cols="30"
                                    name="additionalInfo"
                                ></textarea>
                            </form>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
                            <div className="flex flex-row items-center justify-center">
                            <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
                                    <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
                                </a>
                                <a href="tel:+919830410335">
                                    <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

const IconWithText = ({ icon, text }) => (
    <div className="flex flex-col items-center">
        {icon}
        <h3 className="text-lg font-semibold mt-2">{text}</h3>
    </div>
);

export default Services;
