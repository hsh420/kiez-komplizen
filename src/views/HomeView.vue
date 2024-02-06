<template>
  <p>{{ authStore.$state.uid }}</p>
  <h1>Dein Kiezkram</h1>
  <h2>Das hast du zu bieten</h2>
  <div class="currentOffers">
    <div v-for="offer in databaseStore.dataFromApi" :key="offer.id">
      <h3>{{ offer.title }}</h3>
      <p>{{ offer.description }}</p>
      //more later, just to see if it works at all...
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { useAuthStore } from '@/stores/auth'

const databaseStore = useDatabaseStore()
const authStore = useAuthStore()

onMounted(() => {
  console.log(localStorage.getItem('uid'))
  databaseStore.getOffers()
  authStore.init()
})
</script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');
</style>
