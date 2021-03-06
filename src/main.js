import Vue from 'vue'
import VueRouter from 'vue-router'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
import App from './App.vue'

import '@/css/style.scss';

Vue.use(VueRouter)
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'
import Projets from './pages/Projets.vue'
import BlogPost from './pages/BlogPost.vue'
import Shild from './pages/Shild.vue'
import Parcours from './pages/Parcours.vue'
import Contact from './pages/Contact.vue'
import PageNotFound from './pages/PageNotFound.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta:{title: 'hello'}
  },
  {
    path: '/blog',
    component: Blog
  },
  {
    path: '/blog-post',
    component: BlogPost
  },
  {
    path: '/Shild',
    component: Shild
  },
  {
    path: '/projets',
    component: Projets
  },
  {
    path: '/Parcours',
    component: Parcours
  },
  {
    path: '/contact',
    component: Contact
  },            
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to) {
    return new Promise(() => {
      if (to.hash) {
        window.scroll({ top: 0 })
      } else {
        document.querySelector('html').style.scrollBehavior = 'auto'
        window.scroll({ top: 0 })
        document.querySelector('html').style.scrollBehavior = ''
      }
    })
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
