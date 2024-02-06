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
      component: HomeView
      //beforeEnter: requireAuth
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
      //beforeEnter: requireAuth
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
      component: () => import('../views/RegistrationView.vue')
    },
    {
      path: '/registration-success',
      name: 'registration-success',
      component: () => import('../views/RegistrationSuccess.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('../views/SettingsView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('../views/SearchView.vue')
      //beforeEnter: requireAuth
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
      component: () => import('../views/MessagesView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/FavoritesView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/nutzerbedingungen',
      name: 'nutzerbedingungen',
      component: () => import('../views/NutzungsbedingungenView.vue')
    },
    {
      path: '/datenschutzvereinbarungen',
      name: 'datenschutzvereinbarungen',
      component: () => import('../views/DatenschutzvereinbarungView.vue')
    }
  ]
})

export default router
