import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';

import Footer from '../partials/Footer';
import ChangelogPost from '../partials/ChangelogPost';

function Changelog() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 to-black">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page sections */}
        <ChangelogPost />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Changelog;
