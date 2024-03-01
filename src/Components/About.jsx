import React, { useState, useEffect } from "react";
// import img from "../assets/about.png";
import img from "../assets/about.png";

const About = () => {
  const [textColor, setTextColor] = useState("text-blue-800");
  const textColors = ["text-red-800", "text-green-800", "text-slate-800"]; // Add more colors if needed

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cycle through colors
      const nextColor =
        textColors[(textColors.indexOf(textColor) + 1) % textColors.length];
      setTextColor(nextColor);
    }, 2000); // Change color every 2 seconds

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, [textColor, textColors]);

  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center border-b-2 border-dashed border-gray-300"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className=""
        alt=""
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold text-blue-800 mb-8 leading-normal uppercase"
        >
          Arindam Chakraborty
        </h1>
        <p className={textColor}>
          Embark on a transformative digital journey with RJR Infinity, where innovation meets expertise in the ever-evolving realm of IT. Our founder, a visionary in Java, Spring, SQL, AWS, and REST API development, has set the stage for groundbreaking projects within the SpringBoot Framework. At the forefront of open-source healthcare initiatives, our proficiency in NGINX for API rerouting and seamless AWS support for networked instances is unparalleled. With a decade of hands-on experience, our founder brings substantial technical acumen to the table, steering the team through impactful web development ventures, such as an Apartment Management System, Conference Webpage, JNI+Django System, e-commerce, payment solutions, and much more. RJR Infinity is committed to continuous evolution under the guidance of our founder, delivering cutting-edge IT solutions with a results-oriented approach. Join us in shaping the future of technology – where innovation knows no bounds!
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              {/* <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                Let's Watch
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
