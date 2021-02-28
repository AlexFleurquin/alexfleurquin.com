<template>
  <header class="absolute w-full z-30">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between h-20">

        <!-- Site branding -->
        <div class="flex-shrink-0 mr-5">
          <!-- Logo -->
          <router-link to="/" class="block" aria-label="Cruip">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="af-logo-light-a" x1="96.924%" x2="50%" y1="-133.961%" y2="100%">
                  <stop offset="0%" stop-color="#FCDFBF"/>
                  <stop offset="100%" stop-color="#F8BC8B"/>
                </linearGradient>
                <polygon id="af-logo-light-b" points=".259 .018 13.117 .018 13.117 5.425 .259 5.425"/>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path fill="url(#af-logo-light-a)" fill-rule="nonzero" d="M15.5,0 L0,32 L5.73477943,32 L8.36997615,26.6398985 L10.9276759,21.3597939 L15.5,11.9601554 L20.0335756,21.3597939 L25.8461501,21.3597939 L15.5,0 Z M22.6690704,26.6798969 L25.226174,32 L31,32 L31,31.9993846 L28.4038499,26.6798969 L22.6690704,26.6798969 Z"/>
                <g transform="translate(1)">
                  <path fill="#F8BC8B" fill-rule="nonzero" d="M2.61651923,21.5037621 L0.00834615385,26.909969 L13.3711346,26.909969 C13.8650481,26.909969 14.2653654,26.4928655 14.2653654,25.9789345 L14.2653654,22.4347966 C14.2653654,21.9205552 13.8650481,21.5037621 13.3711346,21.5037621 L2.61651923,21.5037621 Z"/>
                  <g transform="translate(17.288)">
                    <mask id="af-logo-light-c" fill="#fff">
                      <use xlink:href="#af-logo-light-b"/>
                    </mask>
                    <path fill="#F8BC8B" fill-rule="nonzero" d="M13.1167558,0.949468966 L13.1167558,4.4936069 C13.1167558,5.00567586 12.7140538,5.42464138 12.222525,5.42464138 L3.46740962,5.42464138 L0.258909615,0.0184344828 L12.222525,0.0184344828 C12.7140538,0.0184344828 13.1167558,0.4374 13.1167558,0.949468966" mask="url(#af-logo-light-c)"/>
                  </g>
                  <polygon fill="#F8BC8B" fill-rule="nonzero" points="20.078 .018 25.232 5.425 22.683 5.418"/>
                  <polygon fill="#F8BC8B" fill-rule="nonzero" points="11.491 26.909 14.265 26.91 14.265 21.504"/>
                </g>
              </g>
            </svg>
          </router-link>
        </div>

        <!-- Desktop navigation -->
        <nav class="hidden md:flex md:flex-grow">

          <!-- Desktop menu links -->
          <ul class="flex flex-grow flex-wrap items-center font-medium">
            <li>
              <router-link to="/parcours" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">Parcours</router-link>
            </li>
             <li>
              <router-link to="/projets" class="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out">Projets</router-link>
            </li>
          </ul>

          <!-- Desktop lights switch -->
          <div class="form-switch focus-within:outline-blue flex flex-col justify-center ml-3">
            <input type="checkbox" name="light-switch" id="light-switch-desktop" v-model="darkMode" class="light-switch sr-only" />
            <label class="relative" for="light-switch-desktop">
              <span class="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10" aria-hidden="true"></span>
              <svg class="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                <g class="fill-current text-white" fill-rule="nonzero" opacity=".88">
                  <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                  <circle cx="32" cy="12" r="3" />
                  <circle fill-opacity=".4" cx="12" cy="12" r="6" />
                  <circle fill-opacity=".88" cx="12" cy="12" r="3" />
                </g>
              </svg>
              <span class="sr-only">Switch to light / dark version</span>
            </label>
          </div>

          <!-- Desktop CTA on the right -->
          <ul class="flex justify-end flex-wrap items-center">
            <li>
              <router-link to="/contact" class="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">Discuter</router-link>
            </li>
          </ul>

        </nav>

        <!-- Mobile menu -->
        <div class="inline-flex md:hidden">

          <!-- Mobile lights switch -->
          <div class="form-switch focus-within:outline-blue flex flex-col justify-center mr-6 -mt-0.5">
            <input type="checkbox" name="light-switch" id="light-switch-mobile" v-model="darkMode" class="light-switch sr-only" />
            <label class="relative" for="light-switch-mobile">
              <span class="relative bg-gradient-to-t from-gray-100 to-white dark:from-gray-800 dark:to-gray-700 shadow-sm z-10" aria-hidden="true"></span>
              <svg class="absolute inset-0" width="44" height="24" viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
                <g class="fill-current text-white" fill-rule="nonzero" opacity=".88">
                  <path d="M32 8a.5.5 0 00.5-.5v-1a.5.5 0 10-1 0v1a.5.5 0 00.5.5zM35.182 9.318a.5.5 0 00.354-.147l.707-.707a.5.5 0 00-.707-.707l-.707.707a.5.5 0 00.353.854zM37.5 11.5h-1a.5.5 0 100 1h1a.5.5 0 100-1zM35.536 14.829a.5.5 0 00-.707.707l.707.707a.5.5 0 00.707-.707l-.707-.707zM32 16a.5.5 0 00-.5.5v1a.5.5 0 101 0v-1a.5.5 0 00-.5-.5zM28.464 14.829l-.707.707a.5.5 0 00.707.707l.707-.707a.5.5 0 00-.707-.707zM28 12a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM28.464 9.171a.5.5 0 00.707-.707l-.707-.707a.5.5 0 00-.707.707l.707.707z" />
                  <circle cx="32" cy="12" r="3" />
                  <circle fill-opacity=".4" cx="12" cy="12" r="6" />
                  <circle fill-opacity=".88" cx="12" cy="12" r="3" />
                </g>
              </svg>
              <span class="sr-only">Switch to light / dark version</span>
            </label>
          </div>          

          <!-- Hamburger button -->
          <button class="hamburger" ref="hamburger" :class="{ active: mobileNavOpen }" aria-controls="mobile-nav" :aria-expanded="mobileNavOpen" @click="mobileNavOpen = !mobileNavOpen">
            <span class="sr-only">Menu</span>
            <svg class="w-6 h-6 fill-current text-gray-900 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition duration-150 ease-in-out" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect y="4" width="24" height="2" rx="1" />
              <rect y="11" width="24" height="2" rx="1" />
              <rect y="18" width="24" height="2" rx="1" />
            </svg>
          </button>

          <!-- Mobile navigation -->
          <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-class="opacity-0 -translate-x-full"
            enter-to-class="opacity-100 translate-x-0"
            leave-active-class="transition ease-out duration-200"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <nav v-show="mobileNavOpen" id="mobile-nav" ref="mobileNav" class="fixed top-0 h-screen z-20 left-0 w-full max-w-sm -ml-16 overflow-scroll bg-white dark:bg-gray-900 shadow-lg">
              <div class="py-6 pr-4 pl-20">
                <!-- Logo -->
                <svg class="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_a">
                      <stop stop-color="#3ABAB4" offset="0%" />
                      <stop stop-color="#7F9CF5" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="26%" y1="100%" x2="100%" y2="100%" id="menulogo_b">
                      <stop stop-color="#3ABAB4" offset="0%" />
                      <stop stop-color="#3ABAB4" stop-opacity="0" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path d="M32 16h-8a8 8 0 10-16 0H0C0 7.163 7.163 0 16 0s16 7.163 16 16z" fill="url(#menulogo_a)" />
                  <path d="M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16h8a8 8 0 1016 0h8z" fill="url(#menulogo_b)" />
                </svg>
                <!-- Links -->
                <ul>
                  <li>
                    <router-link to="/about" class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">About</router-link>
                  </li>
                  <li>
                    <router-link to="/blog" class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">Blog</router-link>
                  </li>
                  <li>
                    <router-link to="/testimonials" class="flex text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 py-2">Testimonials</router-link>
                  </li>
                  <li class="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-800">
                    <span class="flex text-gray-600 dark:text-gray-400 py-2">Resources</span>
                    <ul class="pl-4">
                      <li>
                        <router-link to="/help" class="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2">Help center</router-link>
                      </li>
                      <li>
                        <router-link to="/404" class="text-sm flex font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 py-2">404</router-link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <router-link to="/contact" class="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded text-white bg-teal-500 hover:bg-teal-400 transition duration-150 ease-in-out">Request code</router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </transition>

        </div>

      </div>
    </div>
  </header>
</template>

<script>


export default {
  name: 'Header',
  
  data: function () {
    return {
      mobileNavOpen: false,
      darkMode: this.handleLights()
    }
  },
  methods: {
    clickOutside(e) {
      if (!this.mobileNavOpen || this.$refs.mobileNav.contains(e.target) || this.$refs.hamburger.contains(e.target)) return
      this.mobileNavOpen = false
    },
    keyPress() {
      if (!this.mobileNavOpen || event.keyCode !== 27) return
      this.mobileNavOpen = false
    },
		handleLights: function() {
			const dark = localStorage.getItem('dark-mode')
			if (dark === null) {
				return true
			} else {
				return dark === 'true'
			}
		}
  },
	watch: {
		darkMode() {
      localStorage.setItem('dark-mode', this.darkMode)
      if (this.darkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
		}
	},
  mounted() {
    document.addEventListener('click', this.clickOutside)    
    document.addEventListener('keydown', this.keyPress)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutside)
    document.removeEventListener('keydown', this.keyPress)
  }
};
</script>