import React, { useState } from 'react';
import IllusttrationNewsletter from './../utils/IllustrationNewsletter';

function Newsletter() {
  const [status, setStatus] = useState(null);
  const [email, setEmail] = useState('');
  const FORM_URL = 'https://app.convertkit.com/forms/3839223/subscriptions';

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      });

      setEmail('');
      const json = await response.json();

      if (json.status === 'success') {
        setStatus('SUCCESS');
        return;
      }
    } catch (err) {
      setStatus('ERROR');
      console.log(err);
    }
  };
  return (
    <section
      className="bg-white dark:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 to-black"
      id="#newsletter"
    >
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 ">
        {/* CTA box */}
        <div
          className="relative bg-white border border-gray-200 dark:border-gray-800 dark:hover:border-gray-700 rounded-lg shadow-sm hover:shadow-md dark:shadow-sm dark:hover:shadow-md dark:bg-gray-800/40 py-10 px-8 md:py-16 md:px-12 "
          data-aos="fade-up"
        >
          <IllusttrationNewsletter />

          <div className="relative flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2">
              <h3 className="h3 font-custom text-gray-800 dark:text-white mb-2">
                <span class="bg-gradient-to-r text-transparent bg-clip-text from-blue-400 to-orange-200">
                  {' '}
                  Jinial{' '}
                </span>
                arrive (très) bientôt
              </h3>
              <p className="text-gray-700 dark:text-purple-200 text-lg">
                Soyez le premier informé de sa sortie.
              </p>
            </div>

            {/* CTA form */}

            {status === 'SUCCESS' && (
              <>
                <p>
                  Welcome aboard{name ? `, ${name}` : ''}{' '}
                  <span role="img" aria-label="Ship">
                    🚢
                  </span>
                </p>
                <p>Please check your inbox to confirm the subscription!</p>
              </>
            )}
            {status === 'ERROR' && (
              <>
                <p>Oops, something went wrong...</p>
                <p>
                  Please,{' '}
                  <button onClick={() => setStatus(null)}>try again.</button>
                </p>
              </>
            )}
            {status === null && (
              <form
                name="jinial_contact"
                method="POST"
                className="w-full lg:w-1/2"
                data-netlify="true"
                action="https://app.convertkit.com/forms/3839223/subscriptions"
                onSubmit={handleSubmit}
              >
                <div className="flex justify-center max-w-xs mx-auto sm:max-w-md lg:max-w-none">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleEmail}
                    className="w-1/2 appearance-none bg-white dark:bg-slate-600 border border-slate-300 dark:border-slate-500 focus:border-slate-300 rounded-lg px-4 py-2 mb-2 sm:mb-0 sm:mr-2 dark:text-white text-slate-700 placeholder-slate-400 dark:placeholder-slate-400"
                    placeholder="hello@alexfleurquin.com"
                    aria-label="Email"
                  />
                  <button
                    className="btn py-1 cta font-custom font-bold rounded-lg bg-gray-700 dark:bg-white border border-transparent hover:shadow-xl text-white dark:text-gray-700 sm:w-auto "
                    type="submit"
                  >
                    Être notifié
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
