<template>
  <div class="container">
    <img
      src="@/assets/pictures-layout/hamburger-nav.png"
      alt="Menu"
      @click="isMenuOpen = !isMenuOpen"
      class="menu-icon"
    />
    <nav class="menu" v-if="isMenuOpen">
      <router-link to="/settings"
        >Settings
        <img
          class="icon1"
          alt="Home Navigation"
          src="@/assets/pictures-layout/settings.png" /></router-link
      ><br />
      <a @click="logout()">
        Logout<img class="icon2" alt="Home Navigation" src="@/assets/pictures-layout/logout.png" />
      </a>
    </nav>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'

const store = useAuthStore()

let isMenuOpen = ref(false)

function logout() {
  store.logout()
}
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
