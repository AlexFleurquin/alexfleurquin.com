import React from 'react';

import HeroImage from '../images/Darkmode.jpeg';
import Pdf from '../pdf/Resume_Alexandre_Fleurquin.pdf';
import Presentation from './Presentation';
import HeroFeatures from './HeroFeatures';

function HeroHome() {
  return (
    <section className="relative bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div class="px-4 py-16">
              <div class="grid gap-8- items-start justify-center">
                <div
                  class="relative group"
                  data-aos="fade-down"
                  data-aos-delay="800"
                >
                  <div class="absolute -inset-0.5 dark:bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div class="relative px-4 py-2 hover:dark:bg-gray-900 border dark:border-slate-800 hover:shadow-lg rounded-full leading-none flex items-center divide-x divide-gray-600">
                    <span class="flex items-center space-x-2 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-blue-400 -rotate-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>

                      <span class="pr-6 bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-orange-200 text-sm">
                        Je suis à la recherche d'opportunités
                      </span>
                    </span>
                    <a
                      class="pl-6 hover:text-gray-700 dark:hover:text-white text-gray-400 transition duration-200 text-sm"
                      href={Pdf}
                      target="_blank"
                    >
                      Découvrez mon CV &rarr;
                    </a>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
            <h1
              class="h1 lg:text-5xl mb-4 font-custom font-extrabold text-gray-700 dark:text-white"
              data-aos="fade-down"
            >
              Alexandre
              <span class="font-custom font-bold  bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-orange-200">
                {' '}
                Fleurquin
              </span>
            </h1>
            <p
              className="text-xl text-gray-400 font-display"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Product Manager
            </p>
            <p
              className="text-xl text-gray-400 font-display"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Junior Front-end Developer
            </p>
            {/* CTA  */}
            <div className="max-w-xs py-10 mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  className="btn rounded-md bg-transparent border border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white w-full sm:w-auto sm:ml-4"
                  href="mailto:alexandre.fleurquin@gmail.com"
                >
                  Me contacter
                  <svg
                    class="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <HeroFeatures />
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
