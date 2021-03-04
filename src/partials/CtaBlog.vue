<template>
  <section class="p-24 flex flex-wrap items-center justify-center">
    <div class="p-4 bg-white shadow-xl max-w-lg rounded-xl flex justify-start dark:bg-gray-800 md:flex-row flex-col gap-4">
      <div class="relative w-1/2">
          <img :src="require('@/images/Shild_case.jpg')" class="rounded-xl md:w-auto md:max-h-40"/>
          <span class="px-2 py-1 text-white bg-gray-700 text-xs rounded absolute right-2 bottom-2 bg-opacity-50">
              7 min
          </span>
      </div>
      <div class="flex flex-col justify-center">
        <div class="items-start justify-between text-gray-700 dark:text-white md:m-0">
          <p class="text-sm">
            En savoir plus
          </p>
          <p class="text-xl ">
              L'étude de cas de Shield
            </p>
          
        </div>
        
    </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'CtaBlog',
}
</script>