<template>
  <footer class="relative">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="py-12 md:py-16 -mt-px">

        <!-- Footer illustration -->
        <div class="pointer-events-none -z-1" aria-hidden="true">
          <svg class="absolute bottom-0 left-0 transform -translate-x-1/2 ml-24 dark:opacity-40" width="800" height="264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="url(#footerglow_paint0_radial)" fill-opacity=".4" />
            <defs>
              <radialGradient id="footerglow_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 0 400) scale(315.089)">
                <stop stop-color="#3ABAB4" />
                <stop offset="1" stop-color="#3ABAB4" stop-opacity=".01" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <!-- Bottom area -->
        <div class="md:flex md:items-center md:justify-between">

          <!-- Social links -->
          <ul class="flex mb-4 md:order-2 md:ml-4 md:mb-0">
            <li>
              <a class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="https://twitter.com/flexsender" aria-label="Twitter">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li class="ml-4">
              <a class="flex justify-center items-center text-white bg-teal-500 dark:text-teal-500 dark:bg-gray-800 hover:underline hover:bg-teal-600 rounded-full transition duration-150 ease-in-out" href="https://www.linkedin.com/in/alexfleurquin/" aria-label="Linkedin">
                <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                </svg>
              </a>
            </li>
          </ul>

          <!-- Middle links -->
          <div class="text-sm md:order-1 text-gray-700 mb-2 md:mb-0">
            <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#"></router-link> · <router-link class="text-gray-600 dark:text-gray-400 hover:underline transition duration-150 ease-in-out" to="#"></router-link>
          </div>

          <!-- Copyrights note -->
          <div class="text-gray-600 dark:text-gray-400 text-sm mr-4">&copy; 2020 Alex Fleurquin. Tous droits réservés.</div>

        </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>