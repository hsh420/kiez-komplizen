<script setup>
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
</script>

<template>
  <main>
    <button v-on:click="store.logout()">Logout</button>
    <RouterLink to="/settings">Einstellungen</RouterLink>
    <RouterLink to="/search">Suchen</RouterLink>
    <RouterLink to="/offer">Anbieten</RouterLink>
    <RouterLink to="/messages">Nachrichten</RouterLink>
  </main>
</template>
