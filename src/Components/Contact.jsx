import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://arindam.tech/api/contact/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors'
      });
      
      // alert("Form submitted successfully");
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-8 bg-white rounded-md shadow-lg">
      {/* Left - Address */}
      <div className="md:w-1/2 pr-6 border-r border-gray-200">
        <h2 className="text-2xl font-bold mb-4">Our Office</h2>
        <p className="text-gray-700 mb-2">Repository Juncture Resource Infinity</p>
        <p className="text-gray-700 mb-2">Kolkata - 700084, West Bengal, India</p>
        <p className="text-gray-700 mb-2">Phone:91 9830410335 / +91 7308656861</p>
        <p className="text-gray-700">Email: info@rjrinfinity.com / rjriinfo@gmail.com</p>
      </div>

      {/* Right - Contact Form */}
      <div className="md:w-1/2 pl-6 mt-6 md:mt-0">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
