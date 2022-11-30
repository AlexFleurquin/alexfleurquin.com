import React from 'react';
import OrangeBank from '../images/Orange_Bank.png';
import Cajoo from '../images/cajoo.svg';
import CDC from '../images/Cdc.svg';
import Nalo from '../images/nalo.svg';

const ExperiencesData = [
  {
    id: 1,
    company: 'Cajoo',
    logo: Cajoo,
    poste: 'Product Manager',
    date: 'Juin 2022',
  },
  {
    id: 2,
    company: 'Caisse des Dépôts',
    poste: 'Proxy Product Owner',
    logo: CDC,
    date: 'Avril 2021 - Mai 2022',
  },
  {
    id: 3,
    company: 'Orange Bank',
    logo: OrangeBank,
    poste: 'QA Analyst',
    date: 'Avril 2019 - Mars 2021',
  },
  {
    id: 4,
    company: 'Nalo',
    logo: Nalo,
    poste: 'Marketing Manager',
    date: 'Janvier 2017 - Juillet 2017',
  },
];

function ExperienceCard({ id, logo, company, poste, date }) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/30 rounded-lg shadow-sm hover:shadow-lg border border-slate-100 dark:border-gray-700 dark:hover:bg-gray-900/60 ">
      <div className="p-5">
        <div className="flex justify-between items-start">
          {/* Icon */}
          <div className="flex justify-start">
            <img
              src={logo}
              width="48"
              height="48"
              alt="Icon 01"
              className="rounded-lg"
            />
            <div className="flex-column">
              <h2 className="text-lg font-semibold dark:text-slate-200 text-slate-800 ml-2">
                {poste}
              </h2>
              <p className="text-xs dark:text-slate-500 text-slate-500 ml-2">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {ExperiencesData.map((item) => (
        <ExperienceCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Experiences;
