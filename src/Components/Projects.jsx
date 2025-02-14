import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from "react-modal";
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
import img from '../assets/bgp4.jpg';

const Images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const openModal = (index) => setSelectedImage(index);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="  py-20 px-6">
      <div id="Projects" className="max-w-6xl mx-auto text-center">
        <h1 data-aos="fade-right" className="text-4xl font-bold mb-6 uppercase text-yellow-500">Projects</h1>
        <p className="text-lg text-gray-800 mb-8">Explore a diverse range of projects showcasing expertise across various domains.</p>
        <p className="text-xl text-red-500 font-semibold">(Click on the tiles)</p>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-10">
          {Images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
              <img
                onClick={() => openModal(index)}
                data-aos="fade-up"
                className="w-full h-48 object-cover cursor-pointer rounded-lg border border-gray-700"
                src={img}
                alt={`Project ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={selectedImage !== null} onRequestClose={closeModal} contentLabel="Enlarged Image" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative bg-gray-800 p-6 rounded-lg max-w-3xl mx-auto">
          <button onClick={closeModal} className="absolute top-4 right-4 text-red-500 font-bold">Close</button>
          {selectedImage !== null && <img src={Images[selectedImage]} className="w-full h-auto rounded-lg" alt="Selected Project" />}
        </div>
      </Modal>
    </div>
  );
};

export default Projects;
