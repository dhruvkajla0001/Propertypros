import React, { useEffect } from 'react';
import aboutimg from '../assets/images/about.jpg';
import { useDarkMode } from '../Components/DarkModeContext';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: 'ease-in-sine',
      offset: 200,
      delay: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className={`${
        darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
      } w-full m-auto lg:px-40 px-10 py-20 grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-10`}
    >
      <div data-aos="zoom-in">
        <img
          src={aboutimg}
          alt="About us"
          className="rounded-2xl lg:w-[500px] lg:h-[600px] object-cover"
        />
      </div>

      <div
        className="flex flex-col justify-center items-start gap-8"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <h1 className="text-red-500 dark:text-red-400 text-3xl font-semibold">
          WHO WE ARE
        </h1>
        <p className="text-gray-700 dark:text-gray-200 text-lg">
          Welcome to Property Pros, your trusted partner in the real estate market.
          We specialize in connecting people with their dream homes, whether they are 
          looking for a cozy apartment, a spacious duplex, or a luxurious condo. 
          Our platform offers a seamless experience for buyers, sellers, and renters 
          alike.
        </p>

        <h2 className="text-red-500 dark:text-red-400 text-2xl font-semibold">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-white text-lg">
          Our mission is to simplify the real estate process by providing innovative 
          solutions that make property transactions more accessible, transparent, and 
          efficient. We aim to be the leading platform that transforms how real estate 
          is bought, sold, and rented in the digital age.
        </p>

        <h2 className="text-red-500 dark:text-red-400 text-2xl font-semibold">
          What We Offer
        </h2>
        <ul className="text-gray-700 dark:text-gray-200 text-lg list-disc list-inside">
          <li>Comprehensive property listings across various categories.</li>
          <li>User-friendly interface with advanced search and filter options.</li>
          <li>Expert guidance from industry professionals to assist in every step.</li>
          <li>Secure transactions and a trustworthy platform for all your real estate needs.</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
