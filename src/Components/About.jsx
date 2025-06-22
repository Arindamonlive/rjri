import React from "react";
import img from "../assets/about.jpg";
import snd from "../assets/somnathdas.png"
import bg from "../assets/bg.png"
import blc from '../assets/benulal.png'
import amit from '../assets/amit.png'
import km from '../assets/km.png'


const About = () => {
  return (
    <div>
      {/* Founder Section */}
      <div
        id="About"
        className="lg:text-start px-10 py-16 text-center flex lg:flex-row flex-col justify-between items-center border-b-2 border-gray-300 bg-gray-50"
      >
        <img
          // data-aos="fade-down"
          src={img}
          width={400}
          height={400}
          className="rounded-lg shadow-lg"
          alt="Founder Image"
        />
        <div className="h-full lg:py-0 flex flex-col justify-center lg:items-start items-center lg:ml-16">
          <h1
            // data-aos="fade-right"
            className="text-5xl font-bold text-blue-800 mb-6 leading-normal uppercase"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
           Mr. Arindam Chakraborty
          </h1>
          <h1
            // data-aos="fade-right"
            className="text-1xl font-bold text-slate-400 mb-6 leading-normal "

          >
            Chief Executive Officer
          </h1>
          <div className="text-lg font-medium text-gray-700 border-l-4 border-yellow-500 pl-6 leading-relaxed max-w-2xl">
            <p>
              At <span className="font-semibold text-blue-600">RJR Infinity</span>, we deliver strategic digital solutions tailored to your unique needs. Led by <span className="font-semibold text-blue-800">Arindam Chakraborty</span>, Founder & CEO, we are driven by a vision to make innovation simple, purposeful, and impactful.
            </p>
            <p className="mt-4">
              From streamlining operations to creating customer-centric experiences, our work reflects a commitment to quality, clarity, and results. With deep insight and a human-first approach, we help you move forward with confidence.
            </p>


            <p className="mt-4 font-semibold text-blue-700">
              Join us in shaping the future of technology—where innovation knows no
              bounds!
            </p>
          </div>
          <div className="flex mt-8 gap-4">
            <a
              href="https://www.linkedin.com/in/arindam-chakraborty-5177286a/"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      {/* Team Section */}
      <div className="px-10 py-16 bg-gray-100">
        <h2
          // data-aos="fade-up"
          className="text-4xl font-semibold text-blue-800 text-center mb-10"
        >
          Meet Our Team
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-12">




          <div
            // data-aos="fade-up"
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img
              src={blc}
              alt="Team Member 1"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Mr. Benulal Chakraborty</h3>
            <p className="text-gray-600">Co-Founder</p>
            <p className="mt-4 text-gray-700">
              With over 25 years in the public sector, he brings deep institutional knowledge, operational discipline, and grassroots insight—shaping our vision with a grounded and impactful approach.
            </p>
          </div>

          <div
            // data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img
              src={bg}
              alt="Team Member 3"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Mrs. Bindia Goswami Chakraborty</h3>
            <p className="text-gray-600">Chief Financial Officer</p>
            <p className="mt-4 text-gray-700">
              Brings analytical precision and strategic foresight to financial planning and resource optimization—ensuring stability, sustainability, and data-driven decision-making at every level.
            </p>
          </div>


          <div
            // data-aos="fade-up"
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img
              src={amit}
              alt="Team Member 1"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Mr. Amit Kumar Das</h3>
            <p className="text-gray-600">Chief Marketing Officer</p>
            <p className="mt-4 text-gray-700">
              Drives brand strategy and marketing growth through focused campaigns, public engagement, and impactful storytelling—ensuring our vision resonates with the right audience.
            </p>
          </div>

                    <div
            // data-aos="fade-up"
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img
              src={km}
              alt="Team Member 1"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Mr. Kaushik Majumdar</h3>
            <p className="text-gray-600">Chief Business Officer & International Relationship Consultant</p>
            <p className="mt-4 text-gray-700">
              A seasoned global business strategist with over two decades of experience, he has led transformative SAP implementations across Fortune 500 companies like IBM, Estée Lauder, and Swatch Group. With a strong foundation in sales and international consulting, he bridges enterprise technology with strategic global partnerships to drive business growth and innovation.
            </p>
          </div>

          <div
            // data-aos="fade-up"
            data-aos-delay="100"
            className="bg-white p-8 rounded-lg shadow-lg text-center"
          >
            <img
              src={snd}
              alt="Team Member 2"
              className="w-40 h-40 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-700">Dr. Somnath Das</h3>
            <p className="text-gray-600">Head of Strategic Planning & Growth Initiatives</p>
            <p className="mt-4 text-gray-700">
              A visionary academic leader and institutional strategist, he drives growth through structured planning, innovation advocacy, and national-level program coordination. At RJR Infinity, he leads strategic initiatives to ensure impactful and sustainable expansion.
            </p>
          </div>






        </div>
      </div>
    </div>
  );
};

export default About;
