<template>
  <div class="container">
    <img
      src="@/assets/pictures-layout/hamburger-nav.png"
      alt="Menu"
      @click="toggleMenu"
      class="menu-icon"
    />
    <nav class="menu" v-if="isMenuOpen">
      <router-link @click="closeMenu" to="/settings"
        >Settings
        <img
          class="icon1"
          alt="Home Navigation"
          src="@/assets/pictures-layout/settings.png" /></router-link
      ><br />
      <router-link to="/about">About</router-link><br/>
      <a @click="logout"
        >Logout <img class="icon2" alt="Home Navigation" src="@/assets/pictures-layout/logout.png"
      /></a>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
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
</script>

<style scoped>
.container {
  position: fixed;
  top: 25px;
  left: 25px;
}
.menu {
  position: relative;
  padding: 10px;
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

.icon1 {
  height: 15px;
}

.icon2 {
  height: 18px;
}
</style>
