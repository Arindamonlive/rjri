import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";

const Projects =() => {
    useEffect(()=>{
        Aos.init({duration:1000});
    })
    return (
        <div>
            <div id = "Projects" className="p-20 flex flex-col items-center justify-center border-b-2 border-dashed border-blue-400">
                    <h1 data-aos ="fade-right"className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
                    <p className="text-[20px] font-semibold mb-20 leading-normal text-blue-800">Explore the following projects as a mere glimpse into the diverse work, showcasing the spectrum of skills and expertise in tackling unique challenges across various domains</p>
                    <div className="grid lg:grid-cols-4 md: grid-cols-2 grid-cols-1 justify-around gap-10">
                        <img data-aos="fade-up" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img1} alt=""/>
                        <img data-aos="fade-down" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img2} alt=""/>
                        <img data-aos="fade-up" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img3} alt=""/>
                        <img data-aos="fade-down" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img4} alt=""/>
                        <img data-aos="fade-up" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img5} alt=""/>
                        <img data-aos="fade-down" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img6} alt=""/>
                        <img data-aos="fade-up" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img7} alt=""/>
                        <img data-aos="fade-down" style={{ height: "200px", width: "600px" }} className ="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow" src={img8} alt=""/>
                    </div>
                </div>
            </div>
    )
}
export default Projects;