import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaPython, FaAws, FaWhatsapp, FaInstagram, FaFacebook, FaLinkedinIn } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";
// import { SiMysql, SiSpringboot, SiKotlin, SiNginx } from "react-icons/si";
// import { DiMongodb, DiDjango } from "react-icons/di";
// import img from '../assets/bgp3.jpg';
import axios from 'axios';




const Services = () => {
    const [showContactForm, setShowContactForm] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", contact: "", message: "" });
    const [selectedService, setSelectedService] = useState("");
    const [showPopup, setShowPopup] = useState(false);
const [popupMessage, setPopupMessage] = useState("Please wait...");

const openContactForm = (serviceName) => {
    setSelectedService(serviceName);
    setFormData({ name: "", email: "", contact: "", message: "" }); // ← Reset form here
    setShowContactForm(true);
};

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    // const openContactForm = (serviceName) => {
    //     setSelectedService(serviceName);
    //     setShowContactForm(true);
    // };

    const closeContactForm = () => {
        setShowContactForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formUrl = "https://script.google.com/macros/s/AKfycbzwYVRhBRnkEqcXiCA7nEJMEG3FchlL3Tl9o2R2ZRo9L4AAWrfwI2JHfBsI38JJQqVuZw/exec";
        const formDataToSend = new FormData();

        // ✅ Add your form fields using correct Google Form entry IDs
        formDataToSend.append("entry1111111111", selectedService); // FormName
        formDataToSend.append("entry2222222222", formData.name);   // Name
        formDataToSend.append("entry3333333333", formData.email);  // Email
        formDataToSend.append("entry4444444444", formData.contact); // Contact
        formDataToSend.append("entry5555555555", formData.message); // Message

        try {
            // Show "Please wait..." popup
            setPopupMessage("Please wait...");
            setShowPopup(true);

            // Submit to Google Form
            await axios.post(formUrl, formDataToSend);

            // Update popup to success
            setPopupMessage("Submitted successfully!");

            // Auto-close popup and form
            setTimeout(() => {
                setShowPopup(false);
                closeContactForm();
            }, 2000);
        } catch (error) {
            console.error("Submission failed", error);
            setPopupMessage("Submission failed. Try again.");
            setTimeout(() => setShowPopup(false), 2000);
        }
    };



    return (
        <div id="Services" className="p-20 items-center justify-center border-b-2 border-solid border-red-400">
            <h1
                data-aos="fade-right"
                className="text-4xl md:text-5xl font-bold mb-16 leading-tight uppercase text-fuchsia-600 text-center"
            >
                What We Offer
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-0">
                <div
                    data-aos="fade-up"
                    className="p-8 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3 text-blue-800">UI/UX Design</h2>
                    <p className="text-gray-700 text-base">
                        We design human-centered, visually compelling, and functionally seamless digital experiences that enhance engagement and ensure user satisfaction across web and mobile platforms.
                    </p>
                </div>
                {/* Frontend */}
                <div
                    data-aos="fade-up"
                    className="p-8 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3 text-blue-800">Frontend Development</h2>
                    <p className="text-gray-700 text-base">
                        Crafting visually engaging, responsive, and intuitive interfaces tailored for modern users — optimized for performance and accessibility across devices.
                    </p>
                </div>

                {/* Backend */}
                <div
                    data-aos="fade-up"
                    className="p-8 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3 text-blue-800">Backend Engineering</h2>
                    <p className="text-gray-700 text-base">
                        Building reliable, secure, and scalable backend systems that power your applications with seamless data handling and robust architecture.
                    </p>
                </div>

                {/* Middleware */}
                <div
                    data-aos="fade-up"
                    className="p-8 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3 text-blue-800">Middleware</h2>
                    <p className="text-gray-700 text-base">
                        Integrating systems with efficient middleware layers that manage communication, APIs, and data orchestration across platforms.
                    </p>
                </div>

                {/* Cloud Services */}
                <div
                    data-aos="fade-up"
                    className="p-8 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3 text-blue-800">Cloud Services</h2>
                    <p className="text-gray-700 text-base">
                        Empowering businesses with scalable and cost-effective cloud strategies — from deployment and automation to monitoring and hybrid integrations.
                    </p>
                </div>

                {/* AI, ML & Data Science */}
                <div
                    data-aos="fade-up"
                    className="p-8 bg-white rounded-xl shadow-md text-center hover:shadow-xl transition duration-300 cursor-pointer"
                >
                    <h2 className="text-xl font-semibold mb-3 text-blue-800">AI, ML & Data Science</h2>
                    <p className="text-gray-700 text-base">
                        Delivering intelligent, data-driven solutions using advanced analytics, predictive modeling, and custom machine learning workflows.
                    </p>
                </div>
            </div>


            {/* Packages Section */}
            <div className="p-20 flex flex-col items-center justify-center ">
                <h1 data-aos="fade-right" className="text-[52px] font-bold mb-20 leading-normal uppercase text-fuchsia-500 cursor-pointer">
                    Packages
                </h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-around text-center">
                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            FlexiWeb Pro
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            Static/Dynamic WebApp
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic WebApp' – Choose Flexibility, Optimize Performance</p>
                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $17.99 or ₹ 1,499.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $199.99 or ₹ 16,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $499.99 or ₹ 41,499.00</p>
                        </div>
                        <button onClick={() => openContactForm('FlexiWeb Pro')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>


                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            Quickflex Android
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Static/Dynamic Android App
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic Android App' – Choose Flexibility, Optimize Performance</p>
                        {/* <p className="text-[12px] font-bold">1. Maximum page 5</p><p className="text-[12px] font-bold">2. Only Frontend Service</p><p className="text-[12px] font-bold">3. Delivery within 10 Working Days</p> */}

                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $44.99 or ₹ 3,499.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $499.99 or ₹ 41,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $999.99 or ₹ 83,499.00</p>
                        </div>
                        <button onClick={() => openContactForm('Quickflex Android')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>


                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            PeakWeb & DroidBoost Bundle
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            [Combo Offer] <p className="">Static/Dynamic WebApp & Android App</p>
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic WebApp & Android App' – Choose Flexibility, Optimize Performance</p>


                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $60 or ₹ 4,999.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $999.99 or ₹ 83,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $1999.99 or ₹ 1,66,999.00</p>

                        </div>
                        <button onClick={() => openContactForm('PeakWeb & DroidBoost Bundle')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>
                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            CodeSync Pro
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            Java(SpringBoot)/Python(Django) + API Services + DataBase
                        </h3>
                        <p className="text-gray-600">Empower your business with seamless integration: Java(SpringBoot)/Python(Django) + API Services + Database - Unleashing the Power of Connectivity</p>
                        {/* <p className="text-[12px] font-bold">1. Maximum API 10</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 - 30 Working Days</p> */}

                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $499.99 or ₹ 16,499.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $1999.99 or ₹ 83,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $2999.99 or ₹ 2,50,000.00</p>

                        </div>
                        <button onClick={() => openContactForm('CodeSync Pro')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>
                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            UniFlex Suite
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            <p className="">WebApp + Android + Backend + Deployment</p>
                        </h3>
                        <p className="text-gray-600">Empower Your Digital Presence with Seamless WebApp, Android App, Backend, and Deployment - All-in-One Solution for Your Success</p>
                        {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 35 Working Days</p> */}

                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $559.99 or ₹ 46,499.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $2999.99 or ₹ 2,50,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $4999.99 or ₹ 4,17,499.00</p>

                        </div>
                        <button onClick={() => openContactForm('UniFlex Suite')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>
                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            ConveniShop Pro
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            <p className="">E-commerce Solutions</p>
                        </h3>
                        <p className="text-gray-600">Revolutionize Your Shopping Experience with your business – Where Convenience Meets Quality</p>
                        {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p> */}

                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $659.99 or ₹ 55,000.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $3199.99 or ₹ 2,60,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $5199.99 or ₹ 4,34,499.00</p>

                        </div>
                        <button onClick={() => openContactForm('ConveniShop Pro')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>
                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            FlowFuse
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            DevOps
                        </h3>
                        <p className="text-gray-600">Empower Your Business with Seamless Flow: Middleware Integration, AWS Solutions Unlocked</p>
                        {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 Working Days</p> */}

                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $29.99 or ₹ 2,500.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $99.99 or ₹ 8,299.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $199.99 or ₹ 16,499.00</p>
                        </div>
                        <button onClick={() => openContactForm('DevOps')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>

                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            DataMind Pro
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            <p className="">AI/ML/DS</p>
                        </h3>
                        <p className="text-gray-600">Illuminate Insights, Unleash Potential: AI, ML, Data Science Excellence</p>
                        {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p> */}

                        <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $999.99 or ₹ 85,499.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $2999.99 or ₹ 2,50,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $4999.99 or ₹ 4,17,499.00</p>

                        </div>
                        <button onClick={() => openContactForm('DataMind Pro')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>
                    <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
                        <p className="text-lg font-bold mb-2 text-red-400">
                            Custom Idea
                        </p>
                        <h3 className="text-sm font-semibold mb-2">
                            {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
                            <p className="">Tailored services aligned to your specific business objectives</p>
                        </h3>
                        <p className="text-gray-600">We understand that every business has unique challenges and goals. Our Custom Service solutions are designed to adapt and evolve with your specific requirements — whether you're building something from scratch, enhancing legacy systems, or integrating intelligent automation.
                            With a consultative approach and deep domain expertise, we co-create scalable, secure, and future-ready solutions that align perfectly with your vision.</p>
                        {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p> */}

                        {/* <div className="mt-4">
                            <p className="text-lg font-semibold text-slate-600">Silver: Starting at $999.99 or ₹ 85,499.00</p>
                            <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $2999.99 or ₹ 2,50,499.00</p>
                            <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $4999.99 or ₹ 4,17,499.00</p>

                        </div> */}
                        <button onClick={() => openContactForm('Custom Idea')} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg">
                            Contact Us
                        </button>
                    </div>


                </div>
            </div>

            {/* Contact Form Modal */}
            {showContactForm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                        <button
                            onClick={closeContactForm}
                            className="absolute top-2 right-2 text-gray-600 hover:text-black"
                        >
                            ✕
                        </button>
                        <h2 className="text-xl font-bold mb-4">Request for - {selectedService}</h2>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="tel"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                placeholder="Phone Number(Enter Country code also)"
                                className="w-full border p-2 rounded"
                                required
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                className="w-full border p-2 rounded"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded w-full"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
{showPopup && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
    <div className="bg-white p-4 rounded-md shadow-md w-[80%] sm:w-[350px] text-center">
      <p className="text-base font-medium">{popupMessage}</p>
    </div>
  </div>
)}
        </div>
    );
};

const IconWithText = ({ icon, text }) => (
    <div className="flex flex-col items-center">
        {icon}
        <p className="mt-2">{text}</p>
    </div>
);

export default Services;





// Old Code

// const Services = () => {
//     const [showContactForm, setShowContactForm] = useState(false);
//     const [openModal, setOpenModal] = useState(false);
// const [selectedService, setSelectedService] = useState("");
// const [formData, setFormData] = useState({ name: "", email: "", contact: "", message: "" });

//     useEffect(() => {
//         Aos.init({ duration: 1000 });
//     }, []);

//     const openContactForm = () => {
//         setShowContactForm(true);
//     };

//     const closeContactForm = () => {
//         setShowContactForm(false);
//     };
//     return (
//         <div
//             id="Services"
//             className="p-20  items-center justify-center border-b-2 border-solid border-red-400"
//             >
//             <h1
//                 data-aos="fade-right"
//                 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">

//             </h1>

//             <div className="flex flex-col items-center">
//                 <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500" style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}>
//                     Services
//                 </h1>

//                 <div className="flex flex-col md:flex-row w-full gap-4">
//                     <div data-aos="fade-up" className="flex-1 p-8 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
//                         <h2 className="text-2xl font-semibold mb-4">Frontend</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-around">
//                             <IconWithText icon={<FaHtml5 style={{ color: "#FF5733", fontSize: "48px" }} />} text="HTML5" />
//                             <IconWithText icon={<FaReact style={{ color: "#61dbfb", fontSize: "48px" }} />} text="React" />
//                             <IconWithText icon={<FaCss3Alt style={{ color: "#264de4", fontSize: "48px" }} />} text="CSS3" />
//                             <IconWithText icon={<IoLogoJavascript style={{ color: "#F0DB4F", fontSize: "48px" }} />} text="JavaScript" />
//                             <IconWithText icon={<SiKotlin style={{ color: "#B125EA", fontSize: "48px" }} />} text="Kotlin" />
//                         </div>
//                     </div>

//                     <div data-aos="fade-up" className="flex-1 p-8 bg-gray-100 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
//                         <h2 className="text-2xl font-semibold mb-4">Backend</h2>
//                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-around">
//                             <IconWithText icon={<FaJava style={{ color: "#5382a1", fontSize: "48px" }} />} text="Java" />
//                             <IconWithText icon={<FaPython style={{ color: "#4B8BBE", fontSize: "48px" }} />} text="Python" />
//                             <IconWithText icon={<SiMysql style={{ color: "#f29111", fontSize: "48px" }} />} text="MySQL" />
//                             <IconWithText icon={<DiMongodb style={{ color: "#4DB33D", fontSize: "48px" }} />} text="MongoDB" />
//                             <IconWithText icon={<SiSpringboot style={{ color: "#4DB33D", fontSize: "48px" }} />} text="SpringBoot" />
//                             <IconWithText icon={<DiDjango style={{ color: "#092E20", fontSize: "48px" }} />} text="Django" />
//                             <IconWithText icon={<FaAws style={{ color: "#252F3E", fontSize: "48px" }} />} text="AWS" />
//                             <IconWithText icon={<SiNginx style={{ color: "#009900", fontSize: "48px" }} />} text="NGINX" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div

//                 className="p-20 flex flex-col items-center justify-center "
//             >
//                 <h1
//                     data-aos="fade-right"
//                     className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500" style={{ textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)" }}
//                 >
//                     Packages
//                 </h1>

//                 <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-around text-center">

//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                         <p className="text-lg font-bold mb-2 text-red-400">
//                             FlexiWeb Pro
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             Static/Dynamic WebApp
//                         </h3>
//                         <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic WebApp' – Choose Flexibility, Optimize Performance</p>
//                         {/* <p className="text-[12px] font-bold">1. Maximum page 7</p><p className="text-[12px] font-bold" onClick={openContactForm}>2. Only Frontend Service</p><p className="text-[12px] font-bold">3. Delivery within 3 Working Days</p> */}

//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $17.99 or ₹ 1,499.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $199.99 or ₹ 16,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $499.99 or ₹ 41,499.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full" onClick={openContactForm}>
//                                 Contact
//                             </button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}

//                         </div>

//                     </div>


//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                         <p className="text-lg font-bold mb-2 text-red-400">
//                             Quickflex Android
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             Static/Dynamic Android App
//                         </h3>
//                         <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic Android App' – Choose Flexibility, Optimize Performance</p>
//                         {/* <p className="text-[12px] font-bold">1. Maximum page 5</p><p className="text-[12px] font-bold">2. Only Frontend Service</p><p className="text-[12px] font-bold">3. Delivery within 10 Working Days</p> */}

//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $44.99 or ₹ 3,499.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $499.99 or ₹ 41,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $999.99 or ₹ 83,499.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>

//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                         <p className="text-lg font-bold mb-2 text-red-400">
//                             PeakWeb & DroidBoost Bundle
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             [Combo Offer] <p className="">Static/Dynamic WebApp & Android App</p>
//                         </h3>
//                         <p className="text-gray-600">Revolutionize Your Online Presence with Our 'Static or Dynamic WebApp & Android App' – Choose Flexibility, Optimize Performance</p>


//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $60 or ₹ 4,999.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $999.99 or ₹ 83,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $1999.99 or ₹ 1,66,999.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>






//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                         <p className="text-lg font-bold mb-2 text-red-400">
//                             CodeSync Pro
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             Java(SpringBoot)/Python(Django) + API Services + DataBase
//                         </h3>
//                         <p className="text-gray-600">Empower your business with seamless integration: Java(SpringBoot)/Python(Django) + API Services + Database - Unleashing the Power of Connectivity</p>
//                         {/* <p className="text-[12px] font-bold">1. Maximum API 10</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 - 30 Working Days</p> */}

//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $499.99 or ₹ 16,499.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $1999.99 or ₹ 83,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $2999.99 or ₹ 2,50,000.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>






//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                         <p className="text-lg font-bold mb-2 text-red-400">
//                             UniFlex Suite
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             <p className="">WebApp + Android + Backend + Deployment</p>
//                         </h3>
//                         <p className="text-gray-600">Empower Your Digital Presence with Seamless WebApp, Android App, Backend, and Deployment - All-in-One Solution for Your Success</p>
//                         {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 35 Working Days</p> */}

//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $559.99 or ₹ 46,499.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $2999.99 or ₹ 2,50,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $4999.99 or ₹ 4,17,499.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>






//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                     <p className="text-lg font-bold mb-2 text-red-400">
//                     ConveniShop Pro
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             <p className="">E-commerce Solutions</p>
//                         </h3>
//                         <p className="text-gray-600">Revolutionize Your Shopping Experience with your business – Where Convenience Meets Quality</p>
//                         {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p> */}

//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $659.99 or ₹ 55,000.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $3199.99 or ₹ 2,60,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $5199.99 or ₹ 4,34,499.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>







//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                     <p className="text-lg font-bold mb-2 text-red-400">
//                     FlowFuse
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                             DevOps
//                         </h3>
//                         <p className="text-gray-600">Empower Your Business with Seamless Flow: Middleware Integration, AWS Solutions Unlocked</p>
//                         {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Only Backend Service</p><p className="text-[12px] font-bold">3. Delivery within 15 Working Days</p> */}

//                         <div className="mt-4">
//                             <p className="text-lg font-semibold text-slate-600">Silver: Starting at $29.99 or ₹ 2,500.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $99.99 or ₹ 8,299.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $199.99 or ₹ 16,499.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>







//                     <div data-aos="fade-up" className="bg-gray-100 p-8 rounded-lg shadow-md text-center">
//                     <p className="text-lg font-bold mb-2 text-red-400">
//                     DataMind Pro
//                         </p>
//                         <h3 className="text-sm font-semibold mb-2">
//                             {/* <FaJava style={{ color: "#5382a1", fontSize: "48px" }} /> */}
//                              <p className="">AI/ML/DS</p>
//                         </h3>
//                         <p className="text-gray-600">Illuminate Insights, Unleash Potential: AI, ML, Data Science Excellence</p>
//                         {/* <p className="text-[12px] font-bold">1. Rate may change depending on the job details and complexity</p><p className="text-[12px] font-bold">2. Delivery within 30 - 45 Working Days</p> */}

//                         <div className="mt-4">
//                         <p className="text-lg font-semibold text-slate-600">Silver: Starting at $999.99 or ₹ 85,499.00</p>
//                             <p className="text-lg font-semibold text-yellow-600">Gold: Starting at $2999.99 or ₹ 2,50,499.00</p>
//                             <p className="text-lg font-semibold text-slate-800">Platinum: Starting at $4999.99 or ₹ 4,17,499.00</p>
//                             {/* <form action="" className="">
//                                 <input
//                                     type="text"
//                                     className="border border-red-800 rounded p-2 w-full"
//                                     placeholder="Name"
//                                     name="name"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-green-800 rounded p-2 w-full mt-2"
//                                     placeholder="Email"
//                                     name="email"
//                                 />
//                                 <input
//                                     type="text"
//                                     className="border border-blue-800 rounded p-2 w-full mt-2"
//                                     placeholder="PhoneNumber with CountryCode"
//                                     name="phone"
//                                 />
//                                 <textarea
//                                     className="border border-yellow-400 rounded p-2 w-full mt-2"
//                                     placeholder="Any Additional Information"
//                                     rows="5"
//                                     cols="30"
//                                     name="additionalInfo"
//                                 ></textarea>
//                             </form>
//                             <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full">Contact</button> */}
//                             {/* <div className="flex flex-row items-center justify-center">
//                                 <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
//                                     <FaLinkedinIn style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://wa.me/message/SOPBPN6JSYZ7K1" target="_blank" rel="noopener noreferrer">
//                                     <FaWhatsapp style={{ color: "#075E54", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://ig.me/m/arindam_atjoy" target="_blank" rel="noopener noreferrer">
//                                     <FaInstagram style={{ color: "#d62976", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="https://m.me/ArindamChakraborty747" target="_blank" rel="noopener noreferrer">
//                                     <FaFacebook style={{ color: "#316FF6", fontSize: "48px", marginRight: "10px" }} />
//                                 </a>
//                                 <a href="tel:+919830410335">
//                                     <FaMobile style={{ color: "#A2AAAD", fontSize: "48px" }} />
//                                 </a>
//                             </div> */}
//                         </div>
//                     </div>

//                 </div>

//             </div>
//         </div>
//     );
// };

// const IconWithText = ({ icon, text }) => (
//     <div className="flex flex-col items-center">
//         {icon}
//         <h3 className="text-lg font-semibold mt-2">{text}</h3>
//     </div>
// );

// export default Services;







