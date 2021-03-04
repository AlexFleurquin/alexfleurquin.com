<template>
  <section>
    <div class="max-w-6xl mx-auto sm:px-6 flex flex-col justify-center pt-80">
        <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="500">
        <div class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl" >
        </div>
                <div class="relative bg-white dark:bg-gray-800 shadow-lg sm:rounded-3xl">
                    <div class="flex items-center justify-start pt-6 pl-6">
                    <span class="w-3 h-3 bg-red-400 rounded-full mr-2"></span>
                    <span class="w-3 h-3 bg-yellow-400 rounded-full mr-2"></span>
                    <span class="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                    </div>
        
        <div class="px-20 py-6">
          
          <!-- nav -->
          <div class="flex items-center justify-between">
            <div class="flex items-center justify-center">
              <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="1600">
                <a href="#0" >
                    <img class="rounded-full flex-shrink-0 mr-3" :src="require('@/images/user-alex.jpg')" width="64" height="64" alt="Avatar" />
                </a>
              
              </div>   
              <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 dark:text-white text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="1700">
                  Parcours
                  
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 dark:text-white text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="1800">
                  Projets
                  
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 dark:text-white text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="2000">
                  Plans
                </a>
              </div>
            </div>
            <div class="hidden md:flex items-center justify-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="2500">
              <button class="px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-teal-400 to-teal-500 text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Mon CV</button>
            </div>
          </div>
          <!-- /nav -->

          <!-- hero section -->
          <div class="lg:full xl:w-full mt-20 lg:mt-20 lg:mr-20 lg:ml-5 text-left">
            <div class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9 pt-6">Hello !</div>
            <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">
              Il y a 2 ans, je travaillais comme responsable marketing pour une FinTech, Nalo. 
              <br>J’ai été étroitement impliqué dans le développement et l’amélioration de leur site web. 
              <br>Après avoir travaillé directement avec une équipe de développement et de designers sur le produit, je suis devenu accro.  
              <br>Je savais que c’était ce que je voulais faire: je voulais construire des produits digitaux.
              <div class="mt-10">Aujourd’hui la culture du management de projet glisse vers une culture “produit”, davantage user-centric. 
              <br>Le produit est considéré comme le coeur de la proposition de valeur des entreprises.
              <br>C’est à la fois l’interface de contact avec les utilisateurs, l’argument de vente, et la manière d’achever sa mission.
              <br>Mon rôle est donc crucial : assurer une vision cohérente qui intègre toutes les dimensions du produit (expérience, légale, technique, etc.) pour proposer le plus de valeur selon le contexte donné.</div>
              <br>Travailler sur un produit digital demande donc de comprendre tous les ressorts de la vie d’un produit, et donc tous les métiers impliqués : User researcher, UX/UI designer, back-end ou front-end developer…
              <br>Une diversité de domaine qui m’invite à toujours vous prendre les meilleures pratiques de chaque domaine. 
              <br><b>Le but ?</b> Fournir le meilleur produit et les meilleures features à vos utilisateurs.
              </div>
            <button class="mt-6 px-8 py-4 rounded font-normal tracking-wide bg-gradient-to-r from-teal-400 to-teal-500 text-white outline-none focus:outline-none hover:shadow-lg hover:from-teal-500 transition duration-200 ease-in-out">
              Télécharger mon <b>CV</b>
            </button>
          </div>
          <div class="mt-12 lg:mt-32 lg:ml-20 text-left">
            <bottom type="button" class="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 dark:bg-white text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </bottom>
          </div>

          <!-- /hero section -->

        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
export default {
  name: 'CV',
}
</script>