<template>
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
  if (authStore.user && authStore.user.uid) {
    //calling getUserOffers from database.js with current user ID to fetch their offers
    databaseStore.getUserOffers(authStore.user.uid)
  } else {
    console.error('No user logged in')
  }
})
</script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');
</style>
