import React from 'react';

import HeroImage from '../images/Darkmode.jpeg';
import Pdf from '../pdf/Resume_Alexandre_Fleurquin.pdf';
import Presentation from './Presentation';
import HeroFeatures from './HeroFeatures';

function HeroHome() {
  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty('--mouse-x', `${x}px`);
    target.style.setProperty('--mouse-y', `${y}px`);
  };
  for (const cta of document.querySelectorAll('.cta')) {
    cta.onmousemove = (e) => handleOnMouseMove(e);
  }
  return (
    <section className="relative">
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
                  <div class="absolute -inset-0.5 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div class="relative px-2 py-2 hover:dark:bg-gray-700 border dark:border-slate-800 hover:shadow-lg rounded-full leading-none flex items-center divide-x divide-gray-600">
                    <span>
                      <div className="badge bg-gray-800">Nouveau</div>

                      <span class="pr-4 bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-orange-200 text-sm">
                        A l'écoute d'opportunités
                      </span>
                    </span>
                    <a
                      class="pl-4 hover:text-gray-700 dark:hover:text-white text-gray-400 transition duration-200 text-sm"
                      href={Pdf}
                      target="_blank"
                    >
                      Découvrir mon CV &rarr;
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
                  onMouseMove={handleOnMouseMove}
                  className="btn cta font-custom font-bold rounded-lg bg-gray-700 dark:bg-white border border-transparent hover:shadow-xl text-white dark:text-gray-700 sm:w-auto sm:ml-4"
                  href="mailto:alexandre.fleurquin@gmail.com"
                >
                  Template Notion
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a
                  onMouseMove={handleOnMouseMove}
                  className="btn cta font-custom font-bold rounded-lg dark:bg-gray-700 bg-white border border-gray-100 dark:border-transparent text-gray-800 shadow-sm hover:shadow-xl dark:text-white sm:w-auto sm:ml-4"
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
