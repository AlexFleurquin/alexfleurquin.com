<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-20">

        <!-- Section header -->
        <div class="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h2 class="mt-2 text-2xl leading-8 font-extrabold text-gray-900 dark:text-white sm:text-3xl sm:leading-9 pt-6">En attendant...</h2>
          <p class="text-xl text-gray-600 dark:text-gray-400">Une timeline pour creuser sur mon parcours et mes expériences</p>
        </div>

        <!-- Section content -->
        <div>
          <div class="flex items-start">

            <!-- Timeline buttons -->
            <div class="relative mr-4 sm:mr-12 lg:mr-32">
              <div class="absolute inset-0 my-6 ml-16 pointer-events-none -z-1" aria-hidden="true">
                <div class="absolute inset-0 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <button class="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" @click="year = '2021'">
                <span class="block w-12 truncate">2021</span>
                <span class="block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full" :class="{ 'bg-teal-500 dark:bg-teal-500' : year === '2021' }"></span>
              </button>
              <button class="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" @click="year = '2020'">
                <span class="block w-12 truncate">2020</span>
                <span class="block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full" :class="{ 'bg-teal-500 dark:bg-teal-500' : year === '2020' }"></span>
              </button>
              <button class="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" @click="year = '2019'">
                <span class="block w-12 truncate">2019</span>
                <span class="block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full" :class="{ 'bg-teal-500 dark:bg-teal-500' : year === '2019' }"></span>
              </button>
              <button class="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" @click="year = '2018'">
                <span class="block w-12 truncate">2018</span>
                <span class="block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full" :class="{ 'bg-teal-500 dark:bg-teal-500' : year === '2018' }"></span>
              </button>
              <button class="flex items-center justify-between font-medium text-gray-500 dark:text-gray-400 w-20 py-3 pr-2 text-left" @click="year = '2017'">
                <span class="block w-12 truncate">2017</span>
                <span class="block w-3.5 h-3.5 bg-gray-400 dark:bg-gray-700 border-2 border-white dark:border-gray-900 rounded-full" :class="{ 'bg-teal-500 dark:bg-teal-500' : year === '2017' }"></span>
              </button>
            </div>

            <!-- 2021's articles -->
            <div class="flex-grow" v-show="year === '2021'">
              <div class="grid md:grid-cols-2 gap-4 sm:gap-6">
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/Orange_Bank_logo.png')" width="40" height="40" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Orange Bank</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant Intégration Fonctionnelle</p> 
                    </div>                 
                  </header>
                </article>
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/mc2i_logo.svg')" width="64" height="64" alt="Avatar" />
                      </a>
                    </div> 
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">mc2i</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant en transformation numérique</p> 
                    </div>                 
                  </header>  
                </article>
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/AF-logo-light.svg')" width="32" height="32" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Freelance</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant Intégration Fonctionnelle</p> 
                    </div>                 
                  </header>
                </article>
                
              </div>
            </div>

            <!-- 2020's articles -->
            <div class="flex-grow" v-show="year === '2020'">
              <div class="grid md:grid-cols-2 gap-6">
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/mc2i_logo.svg')" width="64" height="64" alt="Avatar" />
                      </a>
                    </div> 
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">mc2i</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant en transformation numérique</p> 
                    </div>                 
                  </header>  
                </article>
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/Orange_Bank_logo.png')" width="40" height="40" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Orange Bank</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant Intégration Fonctionnelle</p> 
                    </div>                 
                  </header>
                </article>
              </div>
            </div>

            <!-- 2019's articles -->
            <div class="flex-grow" v-show="year === '2019'">
              <div class="grid md:grid-cols-2 gap-6">
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/mc2i_logo.svg')" width="64" height="64" alt="Avatar" />
                      </a>
                    </div> 
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">mc2i</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant en transformation numérique</p> 
                    </div>                 
                  </header>  
                </article>
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/Orange_Bank_logo.png')" width="40" height="40" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Orange Bank</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant Intégration Fonctionnelle</p> 
                    </div>                 
                  </header>
                </article>
              </div>
            </div>

            <!-- 2018's articles -->
            <div class="flex-grow" v-show="year === '2018'">
              <div class="grid md:grid-cols-2 gap-6">
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/Logo-NEOMA.png')" width="96" height="96" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Neoma</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Master in Management</p> 
                    </div>                 
                  </header>
                </article>
                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/BOS_Logo_Bleu.png')" width="64" height="64" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Bali Ocean Surf</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Consultant Intégration Fonctionnelle</p> 
                    </div>                 
                  </header>
                </article>
              </div>
            </div>

            <!-- 2016's articles -->
            <div class="flex-grow" v-show="year === '2017'">
              <div class="grid md:grid-cols-2 gap-6">
                <article class="md:col-span-2 p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/Logo-NEOMA.png')" width="96" height="96" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Neoma</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Master in Management</p> 
                    </div>                 
                  </header>
                </article>
                                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/nalo_logo.png')" width="96" height="96" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Nalo</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Chef de projet Marketing Digital</p> 
                    </div>                 
                  </header>
                </article>
                                <article class="p-6 bg-white dark:bg-gray-800 shadow-2xl flex flex-col rounded-md">
                  <header class="flex items-center">
                    <div class="flex text-3xl font-bold text-true-gray-800">
                      <a href="#0" >
                          <img class="flex-shrink-0 mr-3" :src="require('@/images/AF-logo-light.svg')" width="40" height="40" alt="Avatar" />
                      </a>
                    
                    </div> 
                    
                    <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
                      <a class="h4 font-red-hat-display" href="#0">Autodidacte</a>
                      <p class="text-gray-600 dark:text-gray-400 ">Apprentisage Developement Front End</p> 
                    </div>                 
                  </header>
                </article>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Timeline',
  data: function () {
    return {
      year: '2021',
    }
  },
}
</script>