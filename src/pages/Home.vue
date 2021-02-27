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
      <HeroHome />
      <Cases />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import HeroHome from './../partials/HeroHome.vue'
import Cases from './../partials/Cases'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    PageIllustration,
    HeroHome,
    Cases,
    Footer,
  },
}
</script>