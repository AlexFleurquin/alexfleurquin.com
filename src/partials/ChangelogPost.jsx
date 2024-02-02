import React from 'react';

import Changelog02 from '../images/changelog-02.png';

function ChangelogPost() {
  return (
    <>
      {/* Content */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Page header */}
            <div className="text-center pb-12 md:pb-20">
              <h1
                class="h1 lg:text-5xl mb-4 font-custom font-bold  bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-green-400"
                data-aos="fade-down"
              >
                Changelog
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="font-custom font-bold text-lg text-slate-400">
                  L'actualité des mises à jour.
                </p>
              </div>
            </div>
            <div
              className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-800  after:animate-shine"
              aria-hidden="true"
            ></div>
            {/* Content */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div
                  className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-300 dark:bg-slate-800  after:animate-shine"
                  aria-hidden="true"
                ></div>
                <article className="pt-12 first-of-type:pt-0 group">
                  <div className="md:flex">
                    <div className="w-48 shrink-0">
                      <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                        <span className="ml-[1.625rem] md:ml-5">
                          1 février 2024
                        </span>
                      </time>
                    </div>
                    <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700),theme(colors.slate.700),theme(colors.slate.700))1] group-last-of-type:border-none">
                      <header>
                        <h2
                          class="h2 lg:text-2xl mb-4 font-custom font-bold  bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-green-400"
                          data-aos="fade-down"
                        >
                          Expériences
                        </h2>
                      </header>
                      <figure className="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        <img
                          className="w-full rounded-[inherit]"
                          src={Changelog02}
                          width={574}
                          height={326}
                          alt="Changelog 1"
                        />
                      </figure>
                      <div>
                        Newly created diagrams are now editable, full screen
                        mode for more editing real estate, and both apps are
                        updated to the latest version supporting new diagram
                        types (eg. C4 architecture). Create professional-looking
                        diagrams with line jumps, making it easy to navigate
                        complex diagrams with ease. You can also apply jumps to
                        individual lines or the entire diagram.
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl mx-auto mb-30">
              <div className="relative">
                <div
                  className="absolute h-full top-4 left-[2px] w-0.5 bg-slate-300 dark:bg-slate-800 after:animate-shine"
                  aria-hidden="true"
                ></div>
                <article className="py-12 group">
                  <div className="md:flex">
                    <div className="w-48 shrink-0">
                      <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
                        <span className="ml-[1.625rem] md:ml-5">
                          1 février 2024
                        </span>
                      </time>
                    </div>
                    <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700),theme(colors.slate.700),theme(colors.slate.700))1] group-last-of-type:border-none">
                      <header>
                        <h2
                          class="h2 lg:text-2xl mb-4 font-custom font-bold  bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-green-400"
                          data-aos="fade-down"
                        >
                          Changelog & About
                        </h2>
                      </header>
                      <figure className="bg-gradient-to-b from-slate-300/20 to-transparent rounded-3xl p-px mb-8">
                        <img
                          className="w-full rounded-[inherit]"
                          src={Changelog02}
                          width={574}
                          height={326}
                          alt="Changelog 1"
                        />
                      </figure>
                      <div>
                        Newly created diagrams are now editable, full screen
                        mode for more editing real estate, and both apps are
                        updated to the latest version supporting new diagram
                        types (eg. C4 architecture). Create professional-looking
                        diagrams with line jumps, making it easy to navigate
                        complex diagrams with ease. You can also apply jumps to
                        individual lines or the entire diagram.
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChangelogPost;
