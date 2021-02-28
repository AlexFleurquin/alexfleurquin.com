<template>
  <section>
    <div class="max-w-6xl mx-auto sm:px-6 flex flex-col justify-center pt-80">
        <div class="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
        <div class="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl">
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
              <div class="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-3" :src="require('@/images/user-alex.jpg')" width="64" height="64" alt="Avatar" />
                </a>
              
              </div>   
              <div class="hidden lg:flex items-center justify-center antialiased lg:ml-20 pt-1">
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 dark:text-white text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Parcours
                  
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 dark:text-white text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Projets
                  
                </a>
                <a href="#" class="flex items-center justify-center mr-10 text-base text-gray-700 dark:text-white text-opacity-90 font-medium tracking-tight hover:text-cool-gray-600 transition duration-150 ease-in-out">
                  Plans
                </a>
              </div>
            </div>
            <div class="hidden md:flex items-center justify-center">
              <a href="#" class="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">Login</a>
              <button class="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Sign Up</button>
            </div>
          </div>
          <!-- /nav -->

          <!-- hero section -->
          <div class="lg:2/6 xl:w-2/4 mt-20 lg:mt-20 lg:ml-16 text-left">
            <div class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9 pt-6">Hello !</div>
            <div class="mt-6 text-xl font-light text-true-gray-500 antialiased">A better experience for yout attendees and less stress yout team.</div>
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