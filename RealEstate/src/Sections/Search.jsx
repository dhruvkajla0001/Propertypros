import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../Components/DarkModeContext';
import { useLocation ,useNavigate} from 'react-router-dom';


const Search = ({ searchParams }) => {
  const { darkMode } = useDarkMode();
  const navigate = useNavigate();
  console.log("search parms: ", searchParams);
  let params = { ...searchParams };

  const location = useLocation()
  console.log("Parms: ", location.state)
  if (location.state && location.state.params){
    params = location.state.params
  }

  console.log("Params: ", params)

    // Updated property listings with at least 5 properties from each city
    const propertyListings = [
      // Mumbai Listings (8)
      { id: 1, type: 'Rentals', category: 'Condos', city: 'Mumbai', price: 75000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 2, type: 'Sales', category: 'Townhouses', city: 'Mumbai', price: 55000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 3, type: 'Commercials', category: 'Villas', city: 'Mumbai', price: 83000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 4, type: 'Rentals', category: 'Duplex', city: 'Mumbai', price: 47000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 5, type: 'Sales', category: 'Apartments', city: 'Mumbai', price: 67000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 6, type: 'Commercials', category: 'Townhouses', city: 'Mumbai', price: 58000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 7, type: 'Rentals', category: 'Apartments', city: 'Mumbai', price: 91000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 8, type: 'Sales', category: 'Condos', city: 'Mumbai', price: 49000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 9, type: 'Commercials', category: 'Duplex', city: 'Mumbai', price: 81000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 10, type: 'Rentals', category: 'Villas', city: 'Mumbai', price: 37000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 11, type: 'Sales', category: 'Condos', city: 'Mumbai', price: 69000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 12, type: 'Commercials', category: 'Villas', city: 'Mumbai', price: 41000, img: 'https://th.bing.com/th/id/OIP.WRm9s99nDIolkqa8wDmjiAHaEm?w=363&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 13, type: 'Rentals', category: 'Townhouses', city: 'Mumbai', price: 78000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 14, type: 'Sales', category: 'Duplex', city: 'Mumbai', price: 49000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 15, type: 'Commercials', category: 'Villas', city: 'Mumbai', price: 97000, img: 'https://th.bing.com/th/id/OIP.VSXpauTTdnVZcyZawDXVFwHaE8?w=244&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 16, type: 'Rentals', category: 'Townhouses', city: 'Mumbai', price: 37000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 17, type: 'Sales', category: 'Condos', city: 'Mumbai', price: 56000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 18, type: 'Commercials', category: 'Villas', city: 'Mumbai', price: 45000, img: 'https://th.bing.com/th/id/OIP.uypebwJwgNxcYvoA_lRp9gHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 19, type: 'Rentals', category: 'Duplex', city: 'Mumbai', price: 61000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 20, type: 'Sales', category: 'Apartments', city: 'Mumbai', price: 87000, img: 'https://th.bing.com/th/id/OIP.cbdh21wZqTlTbOMFc1bHLQHaFj?w=237&h=180&c=7&r=0&o=5&pid=1.7' },
      { id: 21, type: 'Commercials', category: 'Villas', city: 'Mumbai', price: 38000, img: 'https://th.bing.com/th/id/OIP.kO2bcuaM1ayTc_f3G0AxeQHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 22, type: 'Rentals', category: 'Duplex', city: 'Mumbai', price: 45000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 86, type: 'Commercials', category: 'Villas', city: 'Mumbai', price: 38000, img: 'https://th.bing.com/th/id/OIP.tOwFo8liyR98QbclbeobRgHaFk?w=219&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },

//Bengaluru

      { id: 23, type: 'Sales', category: 'Condos', city: 'Bengaluru', price: 71000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 24, type: 'Commercials', category: 'Townhouses', city: 'Bengaluru', price: 56000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 25, type: 'Rentals', category: 'Apartments', city: 'Bengaluru', price: 80000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 26, type: 'Sales', category: 'Villas', city: 'Bengaluru', price: 67000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 27, type: 'Commercials', category: 'Duplex', city: 'Bengaluru', price: 94000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 28, type: 'Rentals', category: 'Villas', city: 'Bengaluru', price: 38000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 29, type: 'Sales', category: 'Apartments', city: 'Bengaluru', price: 62000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 30, type: 'Commercials', category: 'Villas', city: 'Bengaluru', price: 53000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 31, type: 'Sales', category: 'Duplex', city: 'Bengaluru', price: 49000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 32, type: 'Rentals', category: 'Townhouses', city: 'Bengaluru', price: 87000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 33, type: 'Sales', category: 'Condos', city: 'Bengaluru', price: 56000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 34, type: 'Commercials', category: 'Townhouses', city: 'Bengaluru', price: 65000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 35, type: 'Rentals', category: 'Apartments', city: 'Bengaluru', price: 42000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 36, type: 'Sales', category: 'Villas', city: 'Bengaluru', price: 91000, img: 'https://th.bing.com/th/id/OIP.hjAB5lGLo_KmWJ2FqjaXwAHaFj?w=240&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 37, type: 'Sales', category: 'Condos', city: 'Bengaluru', price: 56000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 38, type: 'Commercials', category: 'Villas', city: 'Bengaluru', price: 67000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 39, type: 'Rentals', category: 'Apartments', city: 'Bengaluru', price: 45000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 40, type: 'Sales', category: 'Townhouses', city: 'Bengaluru', price: 62000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 41, type: 'Rentals', category: 'Duplex', city: 'Bengaluru', price: 50000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 42, type: 'Commercials', category: 'Apartments', city: 'Bengaluru', price: 75000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 43, type: 'Sales', category: 'Villas', city: 'Bengaluru', price: 80000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 44, type: 'Rentals', category: 'Condos', city: 'Bengaluru', price: 53000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 45, type: 'Commercials', category: 'Townhouses', city: 'Bengaluru', price: 59000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 46, type: 'Sales', category: 'Duplex', city: 'Bengaluru', price: 73000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 47, type: 'Rentals', category: 'Apartments', city: 'Bengaluru', price: 46000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
      { id: 48, type: 'Commercials', category: 'Villas', city: 'Bengaluru', price: 68000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },

//Noida

{ id: 49, type: 'Sales', category: 'Apartments', city: 'Noida', price: 52000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 50, type: 'Rentals', category: 'Villas', city: 'Noida', price: 42000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 51, type: 'Commercials', category: 'Condos', city: 'Noida', price: 67000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 52, type: 'Sales', category: 'Townhouses', city: 'Noida', price: 75000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 53, type: 'Rentals', category: 'Duplex', city: 'Noida', price: 54000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 54, type: 'Commercials', category: 'Apartments', city: 'Noida', price: 68000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 55, type: 'Sales', category: 'Villas', city: 'Noida', price: 72000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 56, type: 'Rentals', category: 'Condos', city: 'Noida', price: 50000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 57, type: 'Commercials', category: 'Villas', city: 'Noida', price: 69000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 58, type: 'Sales', category: 'Townhouses', city: 'Noida', price: 76000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 59, type: 'Rentals', category: 'Apartments', city: 'Noida', price: 47000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 60, type: 'Commercials', category: 'Duplex', city: 'Noida', price: 71000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 61, type: 'Sales', category: 'Condos', city: 'Noida', price: 73000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 62, type: 'Rentals', category: 'Townhouses', city: 'Noida', price: 49000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 63, type: 'Commercials', category: 'Apartments', city: 'Noida', price: 75000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 64, type: 'Sales', category: 'Duplex', city: 'Noida', price: 74000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },


//Delhi
       
{ id: 65, type: 'Sales', category: 'Apartments', city: 'Delhi', price: 54000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 66, type: 'Rentals', category: 'Villas', city: 'Delhi', price: 41000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 67, type: 'Commercials', category: 'Condos', city: 'Delhi', price: 68000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 68, type: 'Sales', category: 'Townhouses', city: 'Delhi', price: 75000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 69, type: 'Rentals', category: 'Duplex', city: 'Delhi', price: 54000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 70, type: 'Commercials', category: 'Apartments', city: 'Delhi', price: 71000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 71, type: 'Sales', category: 'Villas', city: 'Delhi', price: 72000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 72, type: 'Rentals', category: 'Condos', city: 'Delhi', price: 50000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 73, type: 'Commercials', category: 'Villas', city: 'Delhi', price: 69000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 74, type: 'Sales', category: 'Townhouses', city: 'Delhi', price: 76000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 75, type: 'Rentals', category: 'Apartments', city: 'Delhi', price: 47000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 76, type: 'Commercials', category: 'Duplex', city: 'Delhi', price: 71000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 77, type: 'Sales', category: 'Condos', city: 'Delhi', price: 73000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 78, type: 'Rentals', category: 'Townhouses', city: 'Delhi', price: 49000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 79, type: 'Commercials', category: 'Apartments', city: 'Delhi', price: 75000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 80, type: 'Sales', category: 'Duplex', city: 'Delhi', price: 74000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 81, type: 'Rentals', category: 'Villas', city: 'Delhi', price: 43000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 82, type: 'Commercials', category: 'Condos', city: 'Delhi', price: 67000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 83, type: 'Sales', category: 'Apartments', city: 'Delhi', price: 55000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 84, type: 'Rentals', category: 'Duplex', city: 'Delhi', price: 52000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },
{ id: 85, type: 'Commercials', category: 'Villas', city: 'Delhi', price: 70000, img: 'https://th.bing.com/th/id/OIP.UyWYm-1TY-RbsD4JPECM-AHaFj?w=239&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7' },


];
    
  const filteredListings = propertyListings.filter((property) => {
    return (
      property.price <= params.maxPrice &&
      property.city.toLowerCase().includes(params.location.toLowerCase()) &&
      property.type === params.type &&
      property.category === params.category
    );
  });

  const goBackToMainPage = () => {
    navigate('/property-pros'); // Change this route to the actual route of your main page
  };
  return (
    <section
      className={`${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      } p-10 relative min-h-screen transition-colors duration-300`}
    >
      {/* Back to Main Page Button */}
      <button
        className={`absolute top-5 right-5 px-6 py-2 rounded-full shadow-lg transform transition-transform duration-300 ${
          darkMode
            ? 'bg-red-600 text-white hover:bg-red-700 hover:scale-105'
            : 'bg-red-500 text-white hover:bg-red-600 hover:scale-105'
        }`}
        onClick={goBackToMainPage}
      >
        Back to Main Page
      </button>

      {/* Search Results Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 tracking-widest uppercase">
        Search Results
      </h1>

      {/* Property Listings */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div
              key={listing.id}
              className="relative border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
            >
              {/* Property Image */}
              <img
                src={listing.img}
                alt={listing.type}
                className="w-full h-52 object-cover transition-transform transform hover:scale-110 duration-500"
              />

              {/* Property Info */}
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-b-lg">
                {/* Save Button */}
                <button
                  className="absolute top-3 right-3 bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                  onClick={() => saveProperty(listing.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="text-gray-700 dark:text-gray-300"
                  >
                    <path d="M7 2a2 2 0 00-2 2v16a1 1 0 001.447.894l6.553-3.276 6.553 3.276A1 1 0 0021 20V4a2 2 0 00-2-2H7zm0 2h10v14.382l-5.553-2.776a1 1 0 00-.894 0L7 18.382V4z" />
                  </svg>
                </button>

                {/* Property Details */}
                <h2 className="text-2xl font-bold mb-3 text-red-500">{listing.type}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">City:</span> {listing.city}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <span className="font-semibold">Price:</span> ₹{listing.price.toLocaleString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  <span className="font-semibold">Category:</span> {listing.category}
                </p>

                {/* View Details Button */}
                <button
                  className="mt-4 w-full bg-red-500 text-white py-2 rounded-full shadow hover:bg-red-600 transition duration-300"
                  onClick={() => viewDetails(listing.id)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold text-gray-500 dark:text-gray-400">
            No properties found for the given criteria.
          </p>
        )}
      </div>
    </section>
  );
};

export default Search;