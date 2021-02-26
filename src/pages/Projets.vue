<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page sections -->
      <HeroBlog />
      <FeaturedPosts />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import HeroBlog from './../partials/HeroBlog.vue'
import FeaturedPosts from './../partials/FeaturedPosts.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Projets',
  components: {
    Header,
    HeroBlog,
    FeaturedPosts,
    Footer,
  },
};
</script>
