
<script setup>
import { useAuthStore } from './stores/auth'
import { onMounted} from 'vue'
import { useRouter } from 'vue-router'
import HeaderLayoutComponent from '@/components/Layout/HeaderLayoutComponent.vue'
import FooterLayoutComponent from '@/components/Layout/FooterLayoutComponent.vue'
const store = useAuthStore()
onMounted(() => {
  store.init()
})
const router = useRouter()

const showHeader = () => router.currentRoute.value.name !== 'landing' && router.currentRoute.value.name !== 'logout'
const showFooter = () => router.currentRoute.value.name !== 'landing' && router.currentRoute.value.name !== 'logout'

onMounted(() => {
  router.currentRoute.value
})
</script>

<template>
  <HeaderLayoutComponent class="header" v-if="showHeader()"/>
  <main class="main"><RouterView /></main>
  <FooterLayoutComponent class="footer" v-if="showFooter()"/>
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
