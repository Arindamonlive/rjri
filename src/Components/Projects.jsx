import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Images (replace with your own assets)
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import img13 from '../assets/13.png';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projectData = [

    {
      title: "Institutional Website",
      description: "A responsive, information‑rich website for Swami Vivekananda Institute of Science & Technology (SVIST), showcasing academic programs, news & events, faculty profiles, and admissions resources.",
      techStack: ["Wordpress", "Java", "Springboot"],
      image: img10,
      live: "https://svist.org/",
      // github: "#"
    },
    {
      title: "Custom Apparel E‑Commerce Platform",
      description: "Full‑featured on‑demand apparel solution enabling customers to personalize garments, manage orders, and securely process payments.",
      techStack: ["React", "Django", "MongoDB", "AWS"],
      image: img11,
      live: "https://garagemerch.in/",
      // github: "#"
    },
    {
      title: "Digital Learning Platform for ScienceTech Academy",
      description: "An interactive online portal providing comprehensive courses, resources, and assessments to elevate the quality of higher education.",
      techStack: ["React", "Django", "MongoDB", "AWS"],
      image: img12,
      live: "https://www.sciencetechacademy.in/",
      // github: "#"
    },
    {
      title: "Arpan Steel Furniture Online Store",
      description: "A modern e‑commerce experience featuring dynamic product showcases, customizable options, and a seamless checkout flow for premium steel furniture.",
      techStack: ["React", "Django", "MongoDB", "AWS"],
      image: img13,
      live: "https://www.arpansteelfurniture.in/",
      // github: "#"
    },
    {
      title: "Digital Health-Care",
      description: "Full-Stack Development and Comprehensive Testing of Frontend and Backend",
      techStack: ["React", "Java", "SpringBoot", "AWS", "MySQL"],
      image: img1,
      live: "https://www.raxa.io/raxaDesktop/",
      // github: "#"
    },
    {
      title: "Android Health-Care",
      description: "End-to-End Service Testing and Development on Android Platform.",
      techStack: ["Kotlin", "Java", "SpringBoot", "AWS", "MySQL"],
      image: img6,
      live: "https://play.google.com/store/apps/details?id=com.raxa.EMR&hl=en_IN",
      // github: "#"
    },
    {
      title: "Backend Framework for Digital Health-Care",
      description: "Comprehensive API Development & Deployment with Dynamic Rerouting Capabilities",
      techStack: ["Java", "SpringBoot", "AWS", "Nginx"],
      image: img2,
      live: "https://backend.raxa.io/",
      // github: "#"
    },
    {
      title: "EMR Bhamni integration for Health-Care Service",
      description: "Seamless Integration of EMR-Based Facilities for Enhanced Healthcare Functionality",
      techStack: ["Java", "SpringBoot", "AWS",],
      image: img8,
      // live: "#",
      // github: "#"
    },
    {
      title: "API Auto-Documentation",
      description: "Automated API Documentation for Consistent, Up‑to‑Date Developer Reference.",
      techStack: ["Swagger"],
      image: img7,
      // live: "#",
      // github: "#"
    },


    {
      title: "Conference/Seminar/Journal",
      description: "Unified Digital Platform for Conferences, Seminars & Journal Publishing.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: img3,
      // live: "#",
      // github: "#"
    },
    {
      title: "OneStop Solution for Apartment Managment",
      description: "Solution oriented service for apartment/society",
      techStack: ["HTML", "CSS", "Java", "Springboot", "AWS", "Firebase"],
      image: img4,
      // live: "#",
      // github: "#"
    },
    // {
    //   title: "Student Feedback Portal",
    //   description: "Feedback system for academic evaluations across departments.",
    //   techStack: ["React", "Express", "MySQL"],
    //   image: img5,
    //   live: "#",
    //   // github: "#"
    // },






  ];

  return (
    <div className="py-20 px-6 bg-white" id="Projects">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          data-aos="fade-right"
          className="text-4xl font-bold mb-6 uppercase text-indigo-600"
        >
          Portfolio Highlights
        </h1>
        <p className="text-lg text-gray-600 mb-12">
          A curated glimpse at our most impactful digital solutions—many more success stories await.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projectData.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-gray-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-transform hover:-translate-y-2"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1">
                      Live <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black text-sm flex items-center gap-1">
                      GitHub <FaGithub />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
