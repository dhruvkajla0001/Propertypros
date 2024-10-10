import React, { useEffect, useState } from 'react';
import { useDarkMode } from '../Components/DarkModeContext';
import heroimg from '../assets/images/hero1.webp';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = ({ onSearchSubmit }) => {
    const [minPrice] = useState(10000); // Fixed value for min price
    const [maxPrice, setMaxPrice] = useState(10000);
    const [type, setType] = useState('Rentals');
    const [category, setCategory] = useState('Apartments');
    const [location, setLocation] = useState('');

    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: 'ease-in-sine',
            offset: 200,
            delay: 100,
        });
    }, []);

    const { darkMode } = useDarkMode();

    const handlePriceChange = (e) => {
        setMaxPrice(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Validation for empty location field
        if (!location) {
            alert("Please select a valid location.");
            return;
        }
        // Pass the search parameters to the parent component
        onSearchSubmit({
            minPrice,
            maxPrice,
            type,
            category,
            location
        });
    };

    return (
        <>
            <div className={`${darkMode ? 'bg-black' : 'bg-white'} relative`}>
                <div className="absolute inset-0 bg-black opacity-50 rounded-xl" style={{ zIndex: 1 }}></div>

                <section
                    id="hero"
                    className="w-[95%] h-[600px] m-auto bg-cover bg-center rounded-xl flex flex-col justify-center items-start lg:px-28 px-10 gap-7 z-20 relative"
                    style={{ backgroundImage: `url(${heroimg})` }}
                >
                    <h1
                        data-aos="fade-down"
                        data-aos-delay="200"
                        className="text-6xl text-white font-semibold lg:pr-[500px] pr-0 lg:leading-[70px] leading-[60px] drop-shadow-lg"
                        style={{ zIndex: 2 }}
                    >
                        Property Pros: A Real Estate Web App
                    </h1>
                    <h2
                        data-aos="fade"
                        data-aos-delay="600"
                        className="text-white text-2xl lg:pr-[500px] pr-0 drop-shadow-lg"
                        style={{ zIndex: 2 }}
                    >
                        Unlock Your Dream Home with Property Pros
                    </h2>

                    <p
                        data-aos="fade"
                        data-aos-delay="800"
                        className="text-white text-lg lg:pr-[500px] pr-0 drop-shadow-lg"
                        style={{ zIndex: 2 }}
                    >
                        At Property Pros, we simplify your home search by offering curated listings and personalized search tools.
                    </p>
                </section>
            </div>

            {/* Form Section */}
            <div className={`${darkMode ? 'bg-black' : 'bg-white'} z-10 py-4`}>
                <div
                    data-aos="zoom-in"
                    id="form"
                    className={`${darkMode ? 'bg-gray-900' : 'bg-gray-100'} lg:w-[90%] w-full m-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-4 p-4 rounded-lg shadow-lg`}
                >
                    {/* Type Field */}
                    <div className="w-full">
                        <h1 className="text-red-500 font-semibold dark:text-white text-xs mb-1">Type</h1>
                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-2 w-full mt-1 border-b-2 border-transparent`}
                        >
                            <option>Rentals</option>
                            <option>Sales</option>
                            <option>Commercials</option>
                        </select>
                    </div>

                    {/* Category Field */}
                    <div className="w-full">
                        <h1 className="text-red-500 font-semibold dark:text-white text-xs mb-1">Category</h1>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-2 w-full mt-1`}
                        >
                            <option>Apartments</option>
                            <option>Duplex</option>
                            <option>Condos</option>
                            <option>Townhouses</option>
                            <option>Villas</option>
                        </select>
                    </div>

                    {/* Location Field */}
                    <div className="w-full">
                        <h1 className="text-red-500 font-semibold dark:text-white text-xs mb-1">Location</h1>
                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} p-2 w-full mt-1`}
                        >
                            <option value="">Select a location</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Noida">Noida</option>
                            <option value="Bengaluru">Bengaluru</option>
                        </select>
                    </div>

                    {/* Price Range */}
                    <div className="w-full">
                        <h1 className="text-red-500 font-semibold dark:text-white text-xs mb-1">Price Range</h1>
                        <input
                            type="range"
                            min="10000"
                            max="100000"
                            step="5000"
                            value={maxPrice}
                            onChange={handlePriceChange}
                            className="w-full mt-1"
                        />
                        <div className={`${darkMode ? 'text-white' : 'text-gray-700'} mt-1 text-center`}>
                            ₹{maxPrice}
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="w-full lg:col-span-4 text-center">
                        <button
                            onClick={handleSearch}
                            className={`${darkMode ? 'bg-red-600 text-white' : 'bg-red-500 text-white'} p-3 mt-4 w-full rounded-md`}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
