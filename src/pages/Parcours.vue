<template>
  <div class="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="flex-grow">

      <!-- Page sections -->
      <HeroBlog />
      <curriculum />
      <Timeline />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import HeroBlog from './../partials/HeroBlog.vue'
import curriculum from './../partials/curriculum.vue'
import Timeline from './../partials/Timeline.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Parcours',
  components: {
    Header,
    HeroBlog,
    curriculum,
    Timeline,
    Footer,
  },
}
</script>