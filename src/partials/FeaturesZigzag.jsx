import React from 'react';

import { Link } from 'react-router-dom';

import YarderImage from '../images/yarder-dark.png';
import JinialImage from '../images/jinial-dark.png';
import SpotifyImage from '../images/spotify-dark.png';

function FeaturesZigzag() {
  return (
    <section className="bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 font-custom text-gray-700 dark:text-white mb-4">
              Mes projets
            </h2>
            <p className="text-xl text-gray-400">
              Mes derniers projets en tant que développeur Front-end
            </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">
            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <a
                  href="https://spotify-alexfleurquin.vercel.app/"
                  target="_blank"
                >
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md drop-shadow-md hover:drop-shadow-xl hover:opacity-80"
                    src={SpotifyImage}
                    width="540"
                    height="405"
                    alt="Spotify Project"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full mb-4">
                    Nouveau
                  </div>
                  <h3 className="h3 font-custom text-gray-700 dark:text-white mb-3">
                    Spotify Clone
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Service de streaming musical.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center text-sm mb-2">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Projet React/Redux</span>
                    </li>
                    <li className="flex items-center text-sm mb-2">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      <span>API Shazam</span>
                    </li>
                    <li className="flex text-sm items-center">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <i class="devicon-react-original"></i>{' '}
                        <i class="devicon-redux-original"></i>{' '}
                        <i class="devicon-tailwindcss-plain"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl"
                data-aos="fade-up"
              >
                <a href="https://jinial.netlify.app/" target="_blank">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md drop-shadow-md hover:drop-shadow-xl hover:opacity-80"
                    src={JinialImage}
                    width="540"
                    height="405"
                    alt="Jinial"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-left"
              >
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="inline-flex text-sm font-semibold py-1 px-3 text-blue-600 bg-blue-200 rounded-full mb-4">
                    En cours
                  </div>
                  <h3 className="h3 font-custom text-gray-700 dark:text-white mb-3">
                    Jinial
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Pariez sur la venue d’un nouveau né.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center text-sm mb-2">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Side Project</span>
                    </li>
                    <li className="flex items-center text-sm mb-2">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      <span>Architecture API</span>
                    </li>
                    <li className="flex text-sm items-center">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <i class="devicon-react-original"></i>{' '}
                        <i class="devicon-tailwindcss-plain"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* 3st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
              >
                <a href="https://yarder.homes/" target="_blank">
                  <img
                    className="max-w-full mx-auto md:max-w-none h-auto rounded-md drop-shadow-md hover:drop-shadow-xl hover:opacity-80"
                    src={YarderImage}
                    width="540"
                    height="405"
                    alt="yarder"
                  />
                </a>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 font-custom text-gray-700 dark:text-white mb-3">
                    yarder.
                  </h3>
                  <p className="text-xl text-gray-400 mb-4">
                    Suivez simplement et sereinement vos projets de rénovation.
                  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center text-sm mb-2">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>Projet final effectué au Wagon</span>
                    </li>
                    <li className="flex items-center text-sm mb-2">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
                      </svg>
                      <span>Architecture MVC</span>
                    </li>
                    <li className="flex text-sm items-center">
                      <svg
                        className="w-3 h-3 fill-current mr-2 shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <i class="devicon-rails-plain"></i>{' '}
                        <i class="devicon-javascript-plain"></i>{' '}
                        <i class="devicon-bootstrap-plain"></i>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;
