import { AiFillGithub } from "react-icons/ai";
import { FaInstagram, FaLinkedinIn, FaMobile, FaWhatsapp, FaFacebook, FaGlobeAmericas } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import globeAnimation from '../assets/Globalanimation.json';

import logo from "../assets/logo1.png";
import img1 from '../assets/image_1.png';
import img2 from '../assets/image_2.png';
import img3 from '../assets/image_3.png';
import img4 from '../assets/image_4.png';
import img5 from '../assets/image_5.png';
import img6 from '../assets/image_6.png';
import img7 from '../assets/image_7.png';
import img8 from '../assets/image_8.png';

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-gradient-to-br from-blue-50 to-white">
        <motion.img
  src={logo}
  alt="Company Logo"
  className="w-28 mb-6"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: [1, 1.8, 1] }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
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
        {[{ img: img1, title: "Cutting-Edge Web Development", desc: "Modern, scalable, and responsive websites crafted with precision." },
        { img: img2, title: "Enterprise Software", desc: "Custom solutions that streamline business workflows and operations." },
        { img: img3, title: "E-Commerce Platforms", desc: "Boost your sales with secure, user-centric shopping solutions." },
        { img: img4, title: "Digital Branding", desc: "Make your mark with a strong, digital-first brand identity." },
        { img: img5, title: "Mobile App Development", desc: "Cross-platform mobile apps with robust performance and UX." },
        { img: img6, title: "Startup Acceleration", desc: "From idea to MVP — we help startups launch fast and smart." },
        { img: img7, title: "UI/UX Design Excellence", desc: "Pixel-perfect, intuitive designs that users love." },
        { img: img8, title: "Enterprise Resource Planning (ERP) and business software solutions", desc: "Robust platforms like SAP and Oracle power global businesses with deep industry-specific modules and seamless cloud integration." },
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
<section className="relative bg-gradient-to-b from-white via-blue-50 to-white py-24 px-6 text-center overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Heading */}
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-sm"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        From Local Roots to Global Reach
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        What began as a local innovation hub has now grown into a global presence. With our core team in <strong>India</strong> and a thriving partner office in the <span className="text-blue-700 font-semibold">USA</span>, we’re connected across time zones and transforming ideas worldwide.
      </motion.p>

      {/* CTA */}
      <motion.a
        href="https://techtonictrends.net/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block text-white bg-red-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-red-700 transition"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        Visit Our US Partner Site
      </motion.a>

      {/* Lottie Globe Animation */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Player
          autoplay
          loop
          src={globeAnimation}
          style={{ height: "300px", width: "300px" }}
        />
      </motion.div>
    </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-blue-800">What Our Clients Say</h2>
          <p className="text-gray-600 mt-2">Trusted by businesses around the globe</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            // {
            //   name: "Dr. Sonal Ghosh, Principal SVIST",
            //   feedback: "What once felt like a nightmare in our organization turned into a seamless experience once R J R Infinity took charge. Their exceptional support and professionalism gave us the confidence that we were truly in capable hands.",
            // },
            {
              name: "Miss. Ananya Chakraborty, Onwer Garage Merchendise",
              feedback: "The transition from local operations to a global digital presence was executed flawlessly — the outreach has been phenomenal and delivered well within the committed timeline.",
            },
            {
              name: "Dr. S Das, ScienceTech Secretary",
              feedback: "With deep expertise in digitalization, R J R Infinity made the development of a digital platform for student engagement and counseling effortless and highly effective.",
            },
            {
              name: "Dr Surajit Nundy, CEO Raxa Health Information Services Private Limited",
              feedback: "Our long-standing relationship with R J R Infinity is built on their technological expertise and practical, real-world understanding — a rare and crucial combination for building impactful digital health services.",
            },
            {
              name: "Mrs. Arpita Dey Chakraborty, Secretary Konak Kutir Apartment",
              feedback: "Managing our apartment complex used to be a nightmare — scattered payments, endless WhatsApp messages, and missed complaints. Since switching to OneStop, everything is streamlined. From maintenance collections to visitor logs, it’s all in one place. It's like having a full management team in our pockets.",
            },
            {
              name: "Mr. Indranil Sengupta, Secretary Chunilal Apartment",
              feedback: "OneStop has revolutionized the way we run our society. The billing, staff attendance, and notice board features save us hours every week. Even senior residents appreciate how easy it is to use. Truly a game-changer for apartment communities.",
            },
            {
              name: "Dr. Suman Das, Vice-President ICAMEIM",
              feedback: "The reach of our conference exceeded expectations, and the strategic SEO-driven outreach by R J R Infinity played a key role in its outstanding success.",
            },
            {
              name: "Mr. Somnath D, Joint Secretary Loknath Apartment",
              feedback: "Managing repetitive administrative tasks and paperwork in our apartment community had become overwhelming. R J R Infinity’s comprehensive in-house apartment management software has transformed the experience — from chaos to comfort.",
            },
            {
              name: "Mr. Arpan Dolui, CEO Arpan Stell Furniture",
              feedback: "The transition from a traditional local showroom to a dynamic global digital storefront was executed flawlessly. The outreach and visibility for our steel furniture brand have grown tremendously — all delivered within the promised timeline.",
            },
            {
              name: "Mrs. S Sarkar, Principal",
              feedback: "What once felt like a nightmare in our organization turned into a seamless experience once R J R Infinity took charge. Their exceptional support and professionalism gave us the confidence that we were truly in capable hands.",
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
      {/* Knowledge Blog Section */}
<div className="mt-24 pt-10 border-t border-gray-300">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Knowledge Blog</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
    {[
      { title: "Web Development Services", path: "blog/web-development-services.html" },
      { title: "Android Auto Tech Overview", path: "blog/android-auto-guide.html" },
      { title: "Kafka for Scalable Apps", path: "blog/kafka-software-guide.html" },
      { title: "Android Development in 2025", path: "blog/android-app-development-2025.html" },
      { title: "Web Dev Trends in India", path: "blog/web-development-trends-2025.html" },
    ].map((blog, index) => (
      <a
        key={index}
        href={blog.path}
        className="block p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 hover:border-indigo-600"
      >
        <h3 className="text-lg font-semibold text-gray-800 hover:text-indigo-600">{blog.title}</h3>
        <p className="text-sm text-gray-500 mt-2">Read more →</p>
      </a>
    ))}
  </div>
</div>
      {/* Footer Icons */}
<footer className="flex justify-center gap-6 py-8 text-2xl">
  <a href="https://github.com/Arindamonlive" target="_blank" className="text-gray-800 hover:text-black">
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
</footer>
    </div>
  );
};

export default Banner;
