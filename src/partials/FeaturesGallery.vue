<template>
  <section>
    <div class="max-w-6xl mx-auto pt-40">

      <!-- Hero content -->
      <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-6 items-center">
        
        <!-- Section header -->
        <div class="md:col-span-5 lg:col-span-5 md:mb-0 text-center md:text-left">
          
          <h2 class="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl pt-6" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="500">Concevoir le monde <br>de demain</h2>
          
          <p class="text-xl text-gray-600 dark:text-gray-400" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officiis!</p>
        </div>
        
        
          
          <div class="col-span-3">
            <article class="relative group px-6 py-20 sm:py-20 rounded-md" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="100">
              <figure>
                <img class="absolute inset-0 w-full rounded-md h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/Shild_case.jpg')" width="458" height="54" alt="Related post 04" />
                <div class="absolute inset-0 rounded-md bg-gray-900 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div class="relative flex flex-col h-full text-white">
                <header class="flex-grow">
                  <router-link to="/Shild">
                    <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Shild
                    </h3>
                  </router-link>
                </header>
                <footer>
                  <div class="text-sm opacity-80">Design</div>
                </footer>
              </div>
            </article>
          </div>

          <div class="col-span-4">
            <article class="relative group px-6 py-20 sm:py-20 rounded-md" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="200">
              <figure>
                <img class="absolute inset-0 w-full rounded-md h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/Bourosrama_case.png')" width="458" height="54" alt="Related post 04" />
                <div class="absolute inset-0 rounded-md bg-gray-900 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div class="relative flex flex-col h-full text-white">
                <header class="flex-grow">
                  <router-link to="/blog-post">
                    <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Boursorama
                    </h3>
                  </router-link>
                </header>
                <footer>
                  <div class="text-sm opacity-80">Design</div>
                </footer>
              </div>
            </article>
          </div>
          
          <div class="col-span-7">
            <article class="relative group px-6 py-20 sm:py-20 rounded-md" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="300">
              <figure>
                <img class="absolute inset-0 w-full rounded-md h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/Shild_case.jpg')" width="458" height="54" alt="Related post 04" />
                <div class="absolute inset-0 rounded-md bg-gray-900 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div class="relative flex flex-col h-full text-white">
                <header class="flex-grow">
                  <router-link to="/blog-post">
                    <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Shild
                    </h3>
                  </router-link>
                </header>
                <footer>
                  <div class="text-sm opacity-80">Design</div>
                </footer>
              </div>
            </article>
          </div>

          <div class="col-span-5">
            <article class="relative group px-6 py-20 sm:py-20 rounded-md" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="400">
              <figure>
                <img class="absolute inset-0 w-full rounded-md h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/Shild_case.jpg')" width="458" height="54" alt="Related post 04" />
                <div class="absolute inset-0 rounded-md bg-gray-900 opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
              </figure>
              <div class="relative flex flex-col h-full text-white">
                <header class="flex-grow">
                  <router-link to="/blog-post">
                    <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                      Shild
                    </h3>
                  </router-link>
                </header>
                <footer>
                  <div class="text-sm opacity-80">Design</div>
                </footer>
              </div>
            </article>
          </div>

        
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'FeaturesGallery',
}
</script>