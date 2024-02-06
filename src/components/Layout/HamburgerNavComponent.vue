<template>
  <div class="container">
    <img
      src="@/assets/pictures-layout/hamburger-nav.png"
      alt="Menu"
      @click="toggleMenu"
      class="menu-icon"
    />
    <nav class="menu" v-if="isMenuOpen">
      <router-link @click="closeMenu" :to="{name: 'settings'}">
        <img
          class="icon1"
          alt="Home Navigation"
          src="@/assets/pictures-layout/settings.png"
        />Settings
      </router-link>
      <br />
      <router-link :to="{ name: 'about'}">
        <img
          class="icon2"
          alt="Home Navigation"
          src="@/assets/pictures-layout/about-icon-white.png"
        />About
      </router-link>
      <br />
      <router-link :to="{name:'logout'}" @click="logout">
        <img
          class="icon3"
          alt="Logout Navigation"
          src="@/assets/pictures-layout/logout.png"
        />Logout</router-link
      >
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const store = useAuthStore()
const isMenuOpen = ref(false)
const router = useRouter()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function logout() {
  store.logout()
}

router.beforeEach((to, from, next) => {
  closeMenu()
  next()
})

onMounted(() => {
  document.addEventListener('click', closeMenuOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOutside)
})

function closeMenuOutside(event) {
  if (!event.target.closest('.container')) {
    closeMenu()
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.container {
  position: fixed;
  top: 25px;
  left: 25px;
}
.menu {
  position: relative;
  padding: 18px;
  display: block;
  background-color: black;
  width: 100%;
  border-radius: 8px;
}
.menu-icon {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.icon1,
.icon2,
.icon3 {
  margin-right: 5px;
  height: 20px;
}

.menu a,
.router-link {
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  gap: 10px;
  cursor: pointer;
}

.menu a:hover,
.router-link:hover {
  background-color: rgba(243, 147, 5, 0.8);
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.menu a,
.menu .router-link {
  padding: 8px;
  margin: -8px;
  border-radius: 4px;
}
</style>
