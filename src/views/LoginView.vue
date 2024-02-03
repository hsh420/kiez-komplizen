<template>
  <section>
    <HamburgerNavComponent />
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <div class="input-container">
        <label for="inputField1"
          >E-Mail<br />
          <input type="text" id="inputField1" placeholder="E-Mail eingeben" v-model="store.email"
        /></label>
      </div>
      <div class="input-container">
        <label for="password"
          >Passwort<br />
          <input
            type="text"
            id="inputField2"
            placeholder="Passwort eingeben"
            v-model="store.password"
        /></label>
      </div>
    </form>
    <ButtonGlobal :label="'Login'" type="submit" class="login-button" />
    <p>...oder mit Google anmelden</p>
    <button class="google-button" v-on:click="store.loginWithGoogle">
      <img class="icon-google" alt="Google Logo" src="@/assets/pictures-layout/google_icon.png" />
      &nbsp; Login with Google
    </button>
    <FooterNavComponent />
  </section>
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
html,
body {
  box-sizing: border-box;
  position:fixed;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
}

p {
  text-align: center;
  margin-top: 60px;
}

h1 {
  text-align: center;
  margin-top: 160px;
}

.login-button {
  margin: 0 auto;
  width: 22rem;
  margin-top: 10px;
}

.google-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22rem;
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
  margin-top: 10px;
}
button:hover {
  background-color: lightgray;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.input-container label {
  margin-bottom: 50px;
  display: block;
  font-size: 16px;
}

.input-container input[type='text'] {
  width: 22rem;
  height: 3rem;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin-top: 1rem;
}
</style>
