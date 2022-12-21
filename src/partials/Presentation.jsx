import React, { useState } from 'react';
import FeaturesImage from '../images/profile.jpeg';
import Experiences from './Experiences';
import Formations from './Formations';
import Hobbies from './Hobbies';

function Presentation() {
  const [category, setCategory] = useState('1');
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Box */}
          <div className="dark:bg-gray-800 dark:bg-opacity-70 bg-white bg-opacity-90 rounded overflow-hidden shadow">
            <div className="flex flex-col md:flex-row items-end md:items-start md:justify-between lg:space-x-20">
              <div className="md:min-w-[28rem] p-6 lg:p-10">
                {/* Filters */}
                <div className="mb-6 lg:mb-8">
                  <div className="flex flex-wrap -m-1.5">
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '1'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-transparent dark:bg-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-600/80 hover:text-slate-500 dark:hover:text-slate-100 border-slate-300 dark:border-slate-600'
                      }`}
                      onClick={() => setCategory('1')}
                    >
                      Qui suis-je ?
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '2'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-transparent dark:bg-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-600/80 hover:text-slate-500 dark:hover:text-slate-100 border-slate-300 dark:border-slate-600'
                      }`}
                      onClick={() => setCategory('2')}
                    >
                      Experiences
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '3'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-transparent dark:bg-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-600/80 hover:text-slate-500 dark:hover:text-slate-100 border-slate-300 dark:border-slate-600'
                      }`}
                      onClick={() => setCategory('3')}
                    >
                      Formations
                    </button>
                    <button
                      className={`btn-sm px-3 py-1 shadow-sm rounded-full m-1.5 ${
                        category === '4'
                          ? 'text-white bg-indigo-500'
                          : 'text-slate-300 bg-transparent dark:bg-slate-700 hover:bg-slate-100/80 dark:hover:bg-slate-600/80 hover:text-slate-500 dark:hover:text-slate-100 border-slate-300 dark:border-slate-600'
                      }`}
                      onClick={() => setCategory('4')}
                    >
                      Hobbies
                    </button>
                  </div>
                </div>
                {/* Content */}
                <div>
                  <div className={`${category !== '1' && 'hidden'}`}>
                    <h3 className="h3 font-custom my-6 text-gray-700 dark:text-gray-200">
                      Hello 👋🏼
                    </h3>
                    <div className="flex flex-col space-y-1 text-slate-800 dark:text-slate-300">
                      <p>
                        Je suis Alex, un jeune{' '}
                        <strong>
                          développeur passioné et motivé avec un mindset produit
                        </strong>{' '}
                        et de bonnes compétences de communication.
                      </p>
                      <p>
                        Après 3 ans en Product Management, j'ai ressenti le
                        besoin de pouvoir construire moi-même les produits de
                        demain.
                      </p>
                      <p>
                        Toujours curieux et avide d'apprendre, j'aime travailler
                        avec des personnes ambitieuses et talentueuses pour{' '}
                        <strong>
                          délivrer des produits de la meilleure qualité
                        </strong>{' '}
                        et <strong> des expériences significatives</strong>.
                      </p>
                      <p>
                        Pratiquant actuellement React, je souhaite apporter mes
                        compétences à un projet à long terme.
                      </p>
                    </div>
                  </div>
                  <div className={`${category !== '2' && 'hidden'}`}>
                    <h3 className="h3 font-custom my-6 text-gray-700 dark:text-gray-200">
                      Mes expériences
                    </h3>
                    <Experiences />
                  </div>
                  <div className={`${category !== '3' && 'hidden'}`}>
                    <h3 className="h3 font-custom my-6 text-gray-700 dark:text-gray-200">
                      Mes formations
                    </h3>
                    <Formations />
                  </div>
                  <div className={`${category !== '4' && 'hidden'}`}>
                    <h3 className="h3 font-custom my-6 text-gray-700 dark:text-gray-200">
                      Mes hobbies
                    </h3>
                    <Hobbies />
                  </div>
                </div>
              </div>
              <img
                src={FeaturesImage}
                className="md:max-w-none"
                width="290"
                height="180"
                alt="Feature"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presentation;
