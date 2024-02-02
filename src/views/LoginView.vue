<template>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <input name="email" type="email" placeholder="E-Mail" v-model="store.email" />
    <label for="email">E-Mail</label>
    <input name="password" type="password" placeholder="Passwort" v-model="store.password" />
    <label for="password">Passwort</label>
    <button type="submit">Login</button>
  </form>
  <p>...oder mit Google anmelden</p>
  <button v-on:click="store.loginWithGoogle">Login with Google</button>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const handleSubmit = () => {
  store.login()
}
</script>
