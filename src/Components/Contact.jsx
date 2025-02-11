import React from "react";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img from '../assets/bgp5.jpg'


const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const response = await fetch("https://formspree.io/f/xvoeqbzk", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      console.error("Form submission failed");
    }
  };

  const handleAddMore = () => {
    setSubmitted(false);
  };

  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center border-b-2 border-solid border-red-200"style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h1
        data-aos="fade-up"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 " style={{textShadow: "0 2px 2px rgba(0, 0, 0, 0.5)"}}
      >
        Write to us
      </h1>

      {submitted ? (
        <div>
          <p className="text-green-600 font-semibold mb-4">
            Your message has been saved successfully!
          </p>
          <button
            className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-24 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4"
            onClick={handleAddMore}
          >
            Add More
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
          <div className="lg:flex gap-9">
            <input
              className="w-full lg:my-3 rounded-lg bg-white p-4 border-2 border-fuchsia-800 b_glow text-xl text-blue-800"
              placeholder="Name"
              type="text"
              name="name"
              required
            />
            <input
              className="w-full lg:my-3 rounded-lg bg-white p-4 border-2 border-fuchsia-800 b_glow text-xl text-blue-800"
              placeholder="Email"
              type="email"
              name="email"
              required
            />
          </div>
          <textarea
            className="w-full lg:my-3 rounded-lg bg-white p-4 border-2 border-fuchsia-800 b_glow text-xl text-blue-800"
            placeholder="Write your Message"
            name="message"
            id="message"
            cols="20"
            rows="10"
          ></textarea>
          <button
            className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4"
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
