import React, { useState } from 'react';
import Agile from '../components/icons/agile';
import Business from '../components/icons/business';
import Design from '../components/icons/design';
import Gift from '../components/icons/gift';
import Product from '../components/icons/product';
import Tech from '../components/icons/tech';
import FeaturesImage from '../images/profile.jpeg';
import Experiences from './Experiences';
import Formations from './Formations';
import Hobbies from './Hobbies';

function HeroFeatures() {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };
  for (const card of document.querySelectorAll('.card')) {
    card.onmousemove = (e) => handleOnMouseMove(e);
  }
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-24">
        <div className="grid grid-rows-3 grid-cols-4 gap-4" id="cards">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="card col-span-3 p-4 bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 rounded-lg shadow-md hover:shadow-lg dark:shadow-md dark:hover:shadow-lg dark:bg-gray-800/40"
            onMouseMove={handleOnMouseMove}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <Product />
                <a href="#">
                  <h5 className="ml-2 font-custom mb-2 text-2xl font-semibold tracking-tight text-gray-800 dark:text-gray-200">
                    Product Management
                  </h5>
                </a>
              </div>
              {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                +3 ans en conseil en transformation digitale
              </p> */}
              <a
                href="#"
                className="inline-flex items-center text-sm text-gray-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
                  />
                </svg>
                Cajoo | mc2i
              </a>
            </div>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="700"
            onMouseMove={handleOnMouseMove}
            className="col-span-1 row-span-3 dark:bg-gray-800/40 rounded-xl"
          >
            <img
              className="card object-cover rounded-lg w-full h-full"
              src={FeaturesImage}
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="100"
            onMouseMove={handleOnMouseMove}
            className="card col-span-1 p-4 bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 rounded-lg shadow-sm hover:shadow-md dark:shadow-sm dark:hover:shadow-md dark:bg-gray-800/40"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <Business />
                <a href="#">
                  <h5 className="font-custom ml-2 text-2xl font-semibold tracking-tight text-gray-700 dark:text-white">
                    Business
                  </h5>
                </a>
              </div>
              {/* <p className="font-normal text-gray-500 dark:text-gray-400 ">
                +3 ans en conseil en transformation digitale
              </p> */}
              <a
                href="#"
                className="inline-flex text-sm text-gray-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                Neoma Business School
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            onMouseMove={handleOnMouseMove}
            className="card col-span-2 p-4 bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 rounded-lg shadow-sm hover:shadow-md dark:shadow-sm dark:hover:shadow-md dark:bg-gray-800/40"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex space-x-2 ">
                <Design />
                <a href="#">
                  <h5 className="font-custom mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    UX
                  </h5>
                </a>
              </div>
              {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 ">
                +3 ans en conseil en transformation digitale
              </p> */}
              <a
                href="#"
                className="inline-flex text-sm text-gray-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                The Design Crew
              </a>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            onMouseMove={handleOnMouseMove}
            className="card col-span-2 p-4 bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 rounded-lg shadow-sm hover:shadow-md dark:shadow-sm dark:hover:shadow-md dark:bg-gray-800/40"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <Tech />
                <a href="#">
                  <h5 className="font-custom mb-2 pl-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    IT
                  </h5>
                </a>
              </div>
              {/* <p className="mb-3 font-normal text-gray-500 dark:text-gray-400 ">
                +3 ans en conseil en transformation digitale
              </p> */}
              <a
                href="#"
                className="inline-flex items-center text-sm text-gray-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                Le Wagon
              </a>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            onMouseMove={handleOnMouseMove}
            className="card col-span-1 p-4 bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 rounded-lg shadow-sm hover:shadow-md dark:shadow-sm dark:hover:shadow-md dark:bg-gray-800/40"
          >
            <div className="h-full flex flex-col justify-between">
              <div className="flex">
                <Agile />
                <a href="#">
                  <h5 className="pl-2 font-custom mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-200">
                    Agilité
                  </h5>
                </a>
              </div>

              <a
                href="#"
                className="inline-flex flex items-end text-sm text-gray-600 hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 pr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
                Certifié PSPO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroFeatures;
