<template>
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

</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const handleSubmit = () => {
  store.register()
}
</script>
