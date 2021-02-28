<template>
  <section class="relative">

    <!-- Background image -->
    <div class="absolute inset-0 h-128 pt-16 box-content -z-1">
      <img class="absolute inset-0 w-full h-full object-cover opacity-25" :src="require('@/images/bg-hero-case.jpg')" width="1440" height="577" alt="About" />
      <div class="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900" aria-hidden="true"></div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'HeroBlog',
}
</script>