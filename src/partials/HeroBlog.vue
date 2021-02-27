<template>
  <section class="relative">

    <!-- Background image -->
    <div class="absolute inset-0 h-128 pt-16 box-content -z-1">
      <img class="absolute inset-0 w-full h-full object-cover opacity-25" :src="require('@/images/bg-hero-case.jpg')" width="1440" height="577" alt="About" />
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
    </div>

    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-16">

        <!-- Featured article -->
        <div class="max-w-3xl" data-aos="fade-down">
          <article>
            <header>
              <!-- Title and excerpt -->
              <div class="text-center md:text-left">
                <router-link to="/blog-post">
                  <h2 class="h2 font-red-hat-display mb-4">Projets</h2>
                </router-link>
                
              </div>
              <!-- Article meta -->
              <div class="md:flex md:items-center md:justify-between mt-5">
                <!-- Author meta -->
                <div class="flex items-center justify-center">
                  <a href="#0">
                    <img class="rounded-full flex-shrink-0 mr-3" :src="require('@/images/user-alex.jpg')" width="32" height="32" alt="Author 04" />
                  </a>
                  <div>
                    <span class="text-gray-600 dark:text-gray-400">réalisé par </span>
                    <a class="font-medium text-gray-800 dark:text-gray-300 hover:underline" href="#0">Alex</a>
                    <span class="text-gray-600 dark:text-gray-400"> · avec ❤️</span>
                  </div>
                </div>
              </div>
            </header>
          </article>
        </div>

      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroBlog',
}
</script>