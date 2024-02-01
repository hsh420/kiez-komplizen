import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '@/stores/auth'
import LandingViewVue from '@/views/LandingView.vue'
const requireAuth = (to, from, next) => {
  let store = useAuthStore()
  if (!store.$state.isLoggedIn) {
    next({ name: 'landing' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: LandingViewVue
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      beforeEnter: requireAuth
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/registration-success',
      name: 'registration-success',
      component: () => import('../views/RegistrationSuccess.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/Settings.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/Search.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/offer',
      name: 'offer',
      component: () => import('../views/OfferView.vue')
      //beforeEnter: requireAuth
    },
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/Messages.vue'),
      beforeEnter: requireAuth
    }
  ]
})

export default router
