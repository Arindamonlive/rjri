import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React from "react";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return (
    <div
      id="Contact"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-up"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500 "
      >
        Write to us
      </h1>
      {/* <form
        action=""
        className="flex flex-col gap-2 lg:w-1/2"
      >
        <div className="lg:flex gap-9">
          <input
            className="w-full lg:my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter your Name"
            type="name"
          />
          <input
            className="w-full lg:my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
            placeholder="Enter your Email"
            type="email"
          />
        </div>
        <textarea
          className="w-full lg:my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500"
          placeholder="Write your message"
          name=""
          id=""
          cols="20"
          rows="10"
        ></textarea>
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4"
          type="submit"
        >
          Submit
        </button>
      </form> */}

      {/* Embed Google Form using an iframe */}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSetmWI5mNInWdJZ_xYdET5K4_RbrMrfRIstQgrgPJ17qj2jIw/viewform?usp=sf_link"
        width="100%"
        height="800"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        style={{
            border: "2px solid #0000FF", // Border color
            borderRadius: "10px", // Rounded corners
            boxShadow: "0 0 15px rgba(236, 13, 142, 0.3)", // Box shadow
          }}
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Contact;
