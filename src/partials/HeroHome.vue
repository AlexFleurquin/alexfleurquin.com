<template>
  <section>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-10 md:pt-40 md:pb-16">

        <!-- Hero content -->
        <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-20 items-center">
        
          <!-- Content -->
          <div class="md:col-span-7 lg:col-span-7 mb-8 md:mb-0 text-center md:text-left">
            <h1 class="h1 lg:text-5xl mb-4 font-extrabold" data-aos="fade-down">Alexandre
              <br>
              <span class="bg-gradient-to-r text-transparent bg-clip-text from-purple-400 to-green-500">FLEURQUIN</span>
            </h1>
            <p class="font-display font-bold text-xl text-gray-300 dark:text-gray-300" data-aos="fade-down" data-aos-delay="150">Transformation digitale</p>
          </div> 

        </div>
        
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'HeroHome',

  data: function () {
    return {
      videoModalOpen: false
    }
  },  
}
</script>