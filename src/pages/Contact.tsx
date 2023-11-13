/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Navbar from '../components/Navbar';
import GitCard from '../components/Contactcards/GitCard';
import InstaCard from '../components/Contactcards/InstaCard';
import LinkedinCard from '../components/Contactcards/LinkedinCard';
import Footer from '../components/Footer';
//import Navbar_1 from '../components/Navbar_1';
const Contact = () => {
  return (
    <>
      <Navbar/>

      <div className='flex flex-col items-start md:flex-row justify-center md:justify-center space-y-4 md:space-y-0 md:space-x-4 '>
          <GitCard />
          <LinkedinCard />
          <InstaCard />
      </div>

    <Footer/>
    </>
  );
};

export default Contact;
