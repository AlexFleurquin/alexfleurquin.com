<template>
  <section>
    <div class="max-w-6xl mx-auto pt-40">

      <!-- Hero content -->
      <div class="md:grid md:grid-cols-12 md:gap-12 lg:gap-6 items-center">
        
        <!-- Section header -->
        <div class="md:col-span-5 lg:col-span-5 md:mb-0 text-center md:text-left">
          
          <h2 class="mt-2 text-2xl font-extrabold text-gray-900 dark:text-white sm:text-3xl pt-6">Concevoir le monde <br>de demain</h2>
          
          <p class="text-xl text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, officiis!</p>
        </div>
        
        
          
          <div class="col-span-3">
            
          
              <div class="w-full h-64 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('@/images/case-1.jpg')">
            
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Shield</h2>
                  <button class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none">
                    <span>En construction</span>
                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-4">
            <div class="w-full h-64 rounded-md overflow-hidden object-cover bg-center" style="background-image: url('@/images/case-1.jpg')">
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Back Pack</h2>
                  
                </div>
              </div>
            </div>
          </div>
          
          <div class="col-span-7">
            <div class="w-full h-64 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('@/images/case-1.jpg')">
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Boursorama</h2>
                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-span-5">
            <div class="w-full h-64 rounded-md overflow-hidden bg-cover bg-center" style="background-image: url('@/images/case-1.jpg')">
              <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                <div class="px-10 max-w-xl">
                  <h2 class="text-2xl text-white font-semibold">Crypto App</h2>
                  
                </div>
              </div>
            </div>
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