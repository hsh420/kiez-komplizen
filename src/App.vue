<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderLayout from '@/components/Layout/HeaderLayout.vue'
import FooterLayout from '@/components/Layout/FooterLayout.vue'
import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue'
const store = useAuthStore()
onMounted(() => {
  store.init()
})
</script>

<template>
  <HeaderLayout class="header" />
  <main class="main"><RouterView /></main>
  <FooterLayout class="footer" />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
}
.main {
  margin-top: 135px;
  width: 100%;
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
}
</style>
