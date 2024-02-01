<template>
  <HeaderLayout />
  <h1>Account erstellen</h1>
  <form @submit.prevent="handleSubmit">
    <input name="firstname" type="text" placeholder="Vorname" v-model="store.firstname" />
    <label for="firstname">Vorname</label>
    <input name="lastname" type="text" placeholder="Nachname" v-model="store.lastname" />
    <label for="lastname">Nachname</label>
    <input name="email" type="email" placeholder="E-Mail" v-model="store.email" />
    <label for="email">E-Mail</label>
    <input name="password" type="password" placeholder="Passwort" v-model="store.password" />
    <label for="password">Passwort</label>
    <button type="submit">Registrieren</button>
  </form>
  <FooterLayout />
</template>

<script setup>
import HeaderLayout from '@/components/Layout/HeaderLayout.vue'
import FooterLayout from '@/components/Layout/FooterLayout.vue'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const handleSubmit = () => {
  store.register()
}
</script>
