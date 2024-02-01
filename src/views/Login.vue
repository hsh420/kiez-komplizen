<template>
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <input name="email" type="email" placeholder="E-Mail" v-model="store.email" />
    <label for="email">E-Mail</label><br />
    <input name="password" type="password" placeholder="Passwort" v-model="store.password" />
    <label for="password">Passwort</label>
    <ButtonGlobal :label="'Login'" type="submit" />
  </form>
  <p>...oder mit Google anmelden</p>
  <button class="google-button" v-on:click="store.loginWithGoogle">
    <img class="icon-google" alt="Google Logo" src="@/assets/pictures-layout/google_icon.png" />
    &nbsp; Login with Google
  </button>
</template>

<script setup>
import ButtonGlobal from '@/components/ButtonGlobal.vue'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const handleSubmit = () => {
  store.login()
}
</script>

<style scoped>
.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 358px;
  height: 54px;
  margin: 10px 0 20px 0;
  position: relative;
  top: 200px;
  left: 36px;
  border-radius: 50px;
  border: 2px solid;
  border-color: var(--color-neutral-n200);
  font-family: 'SourceSansPro-Semibold', sans-serif;
  font-size: 14px;
  font-weight: 500;
}
button:hover {
  background-color: lightgray;
}
</style>
