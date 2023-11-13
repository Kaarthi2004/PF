/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import nptel_1 from "../assets/Introduction To Industry 4.0 And Industrial Internet Of Things.jpg";
import hackathon_1 from "../assets/hackathon certificate(software edition).jpg"
import ideathon_1 from "../assets/ideathon_poc.png"
import mit from "../assets/mit-presentation.png"

const Certificate = () => {
  return (
    <>
      <Navbar/>
      <br></br>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">My Certificates</h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">My portfolio is a testament to my dedication and a showcase of my tech journey.</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={nptel_1} alt="Bonnie Avatar" />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">NPTEL COURSE</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">Introduction to Industry 4.0 and Industrial Internet of Things.</span>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={hackathon_1} alt="Jese Avatar" />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Hackathon</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">KEC Hackathon 2023 (Software Edition)</span> 
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={ideathon_1} alt="Michael Avatar" />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">IDEATHON</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">KEC Ideathon - Proof of Concept Round</span>
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={mit} alt="Sofia Avatar" />
              </a>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <a href="#">Paper Presentation</a>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">MIT, Chennai</span>
              </div>
          </div>  
      </div>  
  </div>
</section>


      <Footer/>
    </>
  );
};

export default Certificate;