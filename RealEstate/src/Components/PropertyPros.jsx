import React, { useState } from 'react';
import Header from '../Components/Header';
import Hero from '../Sections/Hero';
import About from '../Sections/About';
import PopularAreas from '../Sections/PopularAreas';
import Properties from '../Sections/Properties';
import Services from '../Sections/Services';
import Clients from '../Sections/Clients';
import Contact from '../Sections/Contacts';
import Footer from '../Components/Footer'
import Search from '../Sections/Search';
import { useNavigate } from 'react-router-dom';

const PropertyPros = () => {
  const [searchParams, setSearchParams] = useState({
    minPrice: 10000,
    maxPrice: 100000,
    type: 'Rentals',
    category: 'Apartments',
    location: '',
  });
  const navigate = useNavigate();

  const handleSearchSubmit = (params) => {
    setSearchParams(params);
    console.log("parms: ", params);
    // window.location.href = '#search-results';
    navigate("/search", { state: { params } })
  };

  return (
    <>
      <Header />
      <Hero onSearchSubmit={handleSearchSubmit} />
      <About />
      <PopularAreas />
      <Properties />
      <Services />
      <Clients />
      <Contact />
      {/* <Search searchParams={searchParams} /> */}
      <Footer />
    </>
  );
};

export default PropertyPros;
