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

      <section class="relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Page header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 font-red-hat-display mb-4">A votre service !</h1>
              <p class="text-xl text-gray-600 dark:text-gray-400">Commençons votre projet en quelques secondes...</p>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" for="first-name">Prénom <span class="text-red-600">*</span></label>
                  <input id="first-name" type="text" class="form-input w-full" placeholder="Mon prénom" required />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" for="last-name">Nom <span class="text-red-600">*</span></label>
                  <input id="last-name" type="text" class="form-input w-full" placeholder="Mon nom" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full px-3">
                  <label class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" for="company">Société  <span class="text-red-600">*</span></label>
                  <input id="company" type="text" class="form-input w-full" placeholder="Le nom de mon entreprise 🏛️" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full px-3">
                  <label class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" for="phone">Email <span class="text-red-600">*</span></label>
                  <input id="phone" type="tel" class="form-input w-full" placeholder="Mon adresse email" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full px-3">
                  <label class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1" for="country">Thème <span class="text-red-600">*</span></label>
                  <select id="country" class="form-select w-full" required>
                    <option>Conseil</option>
                    <option>Product Design</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full px-3">
                  <div class="flex justify-between items-center mb-1">
                    <label class="block text-gray-800 dark:text-gray-300 text-sm font-medium" for="message">Details</label>
                    <span class="text-sm text-gray-500">Optional</span>
                  </div>
                  <textarea id="message" rows="4" class="form-textarea w-full" placeholder="Quelle est ma demande ? 📤"></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-5">
                <div class="w-full px-3">
                  <div class="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-3">Dites moi en plus sur votre rôle</div>
                  <label class="flex items-center mb-2">
                    <input type="radio" class="form-radio" name="role" />
                    <span class="text-sm text-gray-600 dark:text-gray-400 ml-3">Founder</span>
                  </label>
                  <label class="flex items-center mb-2">
                    <input type="radio" class="form-radio" name="role" />
                    <span class="text-sm text-gray-600 dark:text-gray-400 ml-3">Developer</span>
                  </label>
                  <label class="flex items-center mb-2">
                    <input type="radio" class="form-radio" name="role" />
                    <span class="text-sm text-gray-600 dark:text-gray-400 ml-3">Design / Marketing</span>
                  </label>
                  <label class="flex items-center mb-2">
                    <input type="radio" class="form-radio" name="role" />
                    <span class="text-sm text-gray-600 dark:text-gray-400 ml-3">Autre</span>
                  </label>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-6">
                <div class="w-full px-3">
                  <button class="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                    <span>Envoyer mon message</span>
                    <svg class="w-3 h-3 flex-shrink-0 mt-px ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'
import PageIllustration from './../partials/PageIllustration.vue'
import Footer from './../partials/Footer.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    PageIllustration,
    Footer,
  },
}
</script>
