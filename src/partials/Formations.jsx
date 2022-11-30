import React from 'react';
import Wagon from '../images/le-wagon-logo.svg';
import TDC from '../images/TDC.svg';
import Neoma from '../images/Neoma.svg';

const FormationsData = [
  {
    id: 1,
    company: 'Le Wagon',
    logo: Wagon,
    label: 'Web Developement',
    date: 'Septembre 2022',
  },
  {
    id: 2,
    company: 'The Design Crew',
    label: 'Product Design',
    logo: TDC,
    date: 'Mai 2019',
  },
  {
    id: 3,
    company: 'Neoma Business Scholl',
    logo: Neoma,
    label: 'Master in Management',
    date: 'Juin 2019',
  },
];

function FormationCard({ id, logo, company, label, date }) {
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
                {label}
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

function Formations() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {FormationsData.map((item) => (
        <FormationCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Formations;
