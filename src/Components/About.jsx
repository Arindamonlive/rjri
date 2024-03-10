import React, { useState, useEffect } from "react";
import img1 from '../assets/bgp2.jpg';
import img from "../assets/about.png";

const About = () => {
  const [textColor, setTextColor] = useState("text-blue-800");
  const textColors = ["text-red-800", "text-green-800", "text-blue-800"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextColor =
        textColors[(textColors.indexOf(textColor) + 1) % textColors.length];
      setTextColor(nextColor);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [textColor, textColors]);

  return (
    <div
      id="About"
      className="lg:text-start px-10 lg:py-0 py-0 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center border-b-2 border-solid border-gray-300"
      style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <img
        data-aos="fade-down"
        src={img}
        width={400}
        height={400}
        className=""
        alt=""
      />
      <div className="h-full lg:py-0 flex flex-col justify-center lg:items-start items-center">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold text-blue-800 mb-8 leading-normal uppercase"style={{textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)"}}
        >
          Arindam Chakraborty
        </h1>
        <div className="text-[20px] font-semibold text-justify border border-yellow-200 border-b-4 border-r-4 border-t-4 border-l-4">
          <p className={textColor}>
            Embark on a transformative digital journey with RJR Infinity, where innovation meets expertise in the ever-evolving realm of IT. Our founder, a visionary in Java, Spring, SQL, AWS, and REST API development, has set the stage for groundbreaking projects within the SpringBoot Framework. At the forefront of open-source healthcare initiatives, our proficiency in NGINX for API rerouting and seamless AWS support for networked instances is unparalleled. With a decade of hands-on experience, our founder brings substantial technical acumen to the table, steering the team through impactful web development ventures, such as an Apartment Management System, Conference Webpage, JNI+Django System, e-commerce, payment solutions, and much more. RJR Infinity is committed to continuous evolution under the guidance of our founder, delivering cutting-edge IT solutions with a results-oriented approach. Join us in shaping the future of technology – where innovation knows no bounds!
          </p>
        </div>

        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              {/* Add your button or other components here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
