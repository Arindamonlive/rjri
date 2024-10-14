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
import img from '../assets/bgp4.jpg';

const Images = [img1, img2, img3, img4, img5, img6, img7, img8,img9,img10];

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const openModal = (index) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div id="Projects" className="p-20 flex flex-col items-center justify-center border-b-2 border-solid border-blue-400" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"style={{textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)"}}>Projects</h1>
        <p className="text-[20px] font-semibold mb-20 leading-normal text-blue-800">Explore the following projects as a mere glimpse into the diverse work, showcasing the spectrum of skills and expertise in tackling unique challenges across various domains</p><p className=" text-[24px] text-red-600 font-semibold items-center">(Click on the tiles)</p>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-10">
          {Images.map((img, index) => (
            <div key={index}>
              <img
                onClick={() => openModal(index)}
                data-aos="fade-up"
                style={{ height: "200px", width: "600px" }}
                className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-blue-800 b_glow cursor-pointer"
                src={img}
                alt=""
              />
            </div>
          ))}
        </div>

        
        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={closeModal}
          contentLabel="Enlarged Image"
        >
          <button onClick={closeModal} className="absolute top-4 right-4 text-blue-800 font-semibold cursor-pointer">Close</button>
          {selectedImage !== null && (
            <img
              src={Images[selectedImage]}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              alt=""
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Projects;
