// src/pages/WebDevelopment.jsx
import React from "react";
import { Helmet } from 'react-helmet-async';

const WebDevelopment = () => {
  return (
    <div className="px-6 py-10 md:py-16 lg:px-8 max-w-5xl mx-auto bg-white text-gray-900 rounded-2xl shadow-xl">
      <Helmet>
        <title>Custom Web Development Services in India | YourBrand</title>
        <meta
          name="description"
          content="We build fast, secure, and modern web applications tailored to your business goals. Get expert web development in India today."
        />
        <meta name="keywords" content="web development, custom websites, web apps India, modern website development" />
      </Helmet>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">Custom Web Development Services</h1>

      <p className="mb-6 text-lg leading-relaxed text-center">
        Looking for top-notch <strong>web development</strong> services in India? Our team builds fast, scalable, and
        secure web applications tailored to your business needs. Whether you're a startup or an enterprise, we help you
        bring your digital vision to life.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-2">Why Choose Us for Web Development?</h2>
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Responsive, mobile-first design</li>
        <li>SEO-optimized architecture</li>
        <li>High-performance, scalable backend</li>
        <li>Custom features based on your goals</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-2">Technologies We Use</h2>
      <p className="text-lg">
        We work with the latest frameworks and stacks including <strong>React</strong>, <strong>Node.js</strong>,
        <strong>Express</strong>, <strong>MongoDB</strong>, <strong>PostgreSQL</strong>, and <strong>Firebase</strong> to
        deliver cutting-edge <strong>web applications</strong>.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 border-b pb-2">Get in Touch</h2>
      <p className="text-lg">
        Ready to build your next <strong>custom web solution</strong>?{' '}
        <a href="/contact" className="text-blue-600 hover:underline">Contact us</a> today for a free consultation.
      </p>
    </div>
  );
};

export default WebDevelopment;
