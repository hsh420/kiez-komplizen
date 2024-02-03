<template>
  <HamburgerNavComponent />
  <h1>Login</h1>
  <form @submit.prevent="handleSubmit">
    <input name="email" type="email" placeholder="E-Mail" v-model="store.email" />
    <label for="email">E-Mail</label><br />
    <input name="password" type="password" placeholder="Passwort" v-model="store.password" />
    <label for="password">Passwort</label>
    <ButtonGlobal :label="'Login'" type="submit" class="login-button" />
  </form>
  <p>...oder mit Google anmelden</p>
  <button class="google-button" v-on:click="store.loginWithGoogle">
    <img class="icon-google" alt="Google Logo" src="@/assets/pictures-layout/google_icon.png" />
    &nbsp; Login with Google
  </button>
  <FooterNavComponent />
</template>

<script setup>
import FooterNavComponent from '@/components/Layout/FooterNavComponent.vue'
import HamburgerNavComponent from '@/components/Layout/HamburgerNavComponent.vue'
import ButtonGlobal from '@/components/ButtonGlobalComponent.vue'
import { useAuthStore } from '@/stores/auth'

const store = useAuthStore()
const handleSubmit = () => {
  store.login()
}
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  padding: 5px;
}
.login-button {
  margin: 0 auto;
  width: 80%;
}
.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 54px;
  margin: 10px 0 20px 0;
  position: relative;
  border-radius: 50px;
  border: 2px solid;
  border-color: var(--color-neutral-n200);
  font-family: 'SourceSansPro-Semibold', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin: 0 auto;
}
button:hover {
  background-color: lightgray;
}
</style>
