<template>
  <h1>Registrierung erfolgreich</h1>
  <p>Du wirst gleich zum Login weitergeleitet...</p>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { onMounted, onUnmounted } from 'vue'

const auth = useAuthStore()

onMounted(() => {
  setTimeout(() => {
    auth.logout()
  }, 5000)
})
</script>
