import React from 'react';
import OrangeBank from '../images/Orange_Bank.png';
import Web3 from '../images/Web3.svg';
import Coffee from '../images/coffee.png';
import Sport from '../images/sports.png';

const HobbiesData = [
  {
    id: 1,
    domain: 'Web3',
    logo: Web3,
    description: 'Web3 enthusiast',
    project: 'Juin 2022',
  },
  {
    id: 2,
    domain: 'Sports',
    description: 'Football & Rugby',
    logo: Sport,
    project: 'Rodez',
  },
  {
    id: 3,
    domain: 'Side projects',
    logo: Coffee,
    description: 'Business & Learn',
    project: 'yarder & jinial',
  },
];

function HobbieCard({ id, logo, domain, description, project }) {
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
                {domain}
              </h2>
              <p className="text-xs dark:text-slate-500 text-slate-500 ml-2">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Hobbies() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {HobbiesData.map((item) => (
        <HobbieCard key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Hobbies;
