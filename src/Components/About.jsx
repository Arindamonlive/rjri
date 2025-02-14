import React from "react";
import img from "../assets/about.png";

const About = () => {
  return (
    <div
      id="About"
      className="lg:text-start px-10 py-16 text-center flex lg:flex-row flex-col justify-between items-center border-b-2 border-gray-300 bg-gray-50"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
        alt="Founder Image"
      />
      <div className="h-full lg:py-0 flex flex-col justify-center lg:items-start items-center lg:ml-16">
        <h1
          data-aos="fade-right"
          className="text-5xl font-bold text-blue-800 mb-6 leading-normal uppercase"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}
        >
          Arindam Chakraborty
        </h1>
        <div className="text-lg font-medium text-gray-700 border-l-4 border-yellow-500 pl-6 leading-relaxed max-w-2xl">
          <p>
            Embark on a transformative digital journey with <span className="font-semibold text-blue-600">RJR Infinity</span>, where innovation meets expertise in the ever-evolving realm of IT. Our founder, a visionary in Java, Spring, SQL, AWS, and REST API development, has spearheaded groundbreaking projects within the SpringBoot Framework.
          </p>
          <p className="mt-4">
            At the forefront of open-source healthcare initiatives, we excel in NGINX for API rerouting and seamless AWS support for networked instances. With a decade of hands-on experience, our expertise extends to impactful web development projects, including an Apartment Management System, Conference Webpage, JNI+Django System, e-commerce, payment solutions, and much more.
          </p>
          <p className="mt-4 font-semibold text-blue-700">
            Join us in shaping the future of technology—where innovation knows no bounds!
          </p>
        </div>
        <div className="flex mt-8 gap-4">
          <a href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/" target="_blank" rel="noopener noreferrer">
            <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </a>
          <a href="/Contact">
            <button className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
