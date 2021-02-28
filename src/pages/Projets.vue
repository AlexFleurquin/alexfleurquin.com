<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page illustration -->
      <div class="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>


      <!-- Page sections -->
      <FeaturesGallery />
      <portfolio />
      <CtaBlog />
      

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import FeaturesGallery from './../partials/FeaturesGallery.vue'
import portfolio from './../partials/portfolio.vue'
import CtaBlog from './../partials/CtaBlog.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Projets',
  components: {
    Header,
    PageIllustration,
    FeaturesGallery,
    portfolio,
    CtaBlog,
    Footer,
  },
};
</script>
