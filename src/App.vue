<script setup>
import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue'
import HeaderLayoutComponent from '@/components/Layout/HeaderLayoutComponent.vue'
import FooterLayoutComponent from '@/components/Layout/FooterLayoutComponent.vue'
const store = useAuthStore()
onMounted(() => {
  store.init()
})
</script>

<template>
  <HeaderLayoutComponent class="header" />
  <main class="main"><RouterView /></main>
  <FooterLayoutComponent class="footer" />
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  z-index: 1000;
  width: 100%;
}
.main {
  margin-top: 150px;
  width: 100%;
  padding: 20px;
}
.footer {
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
}
</style>
