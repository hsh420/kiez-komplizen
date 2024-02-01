<script setup>
import HeaderLayout from '@/components/Layout/HeaderLayout.vue'
import FooterLayout from '@/components/Layout/FooterLayout.vue'
import TheWelcome from '../components/TheWelcome.vue'
import { useAuthStore } from '@/stores/auth'
const store = useAuthStore()
</script>

<template>
  <HeaderLayout />
  <main>
    <button v-on:click="store.logout()">Logout</button>
    <RouterLink to="/settings">Einstellungen</RouterLink>
    <RouterLink to="/search">Suchen</RouterLink>
    <RouterLink to="/offer">Anbieten</RouterLink>
    <RouterLink to="/messages">Nachrichten</RouterLink>
  </main>
  <FooterLayout />
</template>
