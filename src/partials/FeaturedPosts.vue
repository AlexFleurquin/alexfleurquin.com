<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pb-12 md:pb-16">

        <div class="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4" data-aos-id-featposts>

          <!-- 1st article -->
          <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="100">
            <figure>
              <img class="absolute inset-0 w-full h-full rounded-md object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/bg-hero-case.jpg')" width="258" height="154" alt="Related post 03" />
              <div class="absolute inset-0 bg-gray-900 rounded-md opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link to="/blog-post">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    Boursorama App
                  </h3>
                </router-link>
              </header>
              <footer>
                <div class="text-sm opacity-80">Design</div>
              </footer>
            </div>
          </article>

          <!-- 2nd article -->
          <article class="relative group px-6 py-4 sm:py-8 rounded-md" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="200">
            <figure>
              <img class="absolute inset-0 w-full rounded-md h-full object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/bg-hero-case.jpg')" width="258" height="154" alt="Related post 04" />
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

          <!-- 3rd article -->
          <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="300">
            <figure>
              <img class="absolute inset-0 w-full h-full rounded-md object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/bg-hero-case.jpg')" width="258" height="154" alt="Related post 05" />
              <div class="absolute inset-0 bg-gray-900 rounded-md opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link to="/blog-post">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    Alex Fleurquin
                  </h3>
                </router-link>
              </header>
              <footer>
                <div class="text-sm opacity-80">Design</div>
              </footer>
            </div>
          </article>

          <!-- 4th article -->
          <article class="relative group px-6 py-4 sm:py-8" data-aos="fade-up" data-aos-anchor="[data-aos-id-featposts]" data-aos-delay="400">
            <figure>
              <img class="absolute inset-0 w-full h-full rounded-md	object-cover opacity-50 group-hover:opacity-75 transition duration-700 ease-out" :src="require('@/images/bg-hero-case.jpg')" width="258" height="154" alt="Related post 06" />
              <div class="absolute inset-0 bg-gray-900 rounded-md	opacity-75 group-hover:opacity-50 transition duration-700 ease-out" aria-hidden="true"></div>
            </figure>
            <div class="relative flex flex-col h-full text-white">
              <header class="flex-grow">
                <router-link to="/blog-post">
                  <h3 class="text-lg font-red-hat-display font-bold tracking-tight mb-2">
                    LxBio
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
  name: 'FeaturedPosts',
}
</script>