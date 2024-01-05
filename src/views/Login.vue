<template>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <input name="email" type="email" placeholder="E-Mail" v-model="email" />
    <label for="email">E-Mail</label>
    <input name="password" type="password" placeholder="Passwort" v-model="password" />
    <label for="password">Passwort</label>
    <button type="submit">Login</button>
  </form>
  <p>...oder mit Google anmelden</p>
  <button @click="loginWithGoogle">Login with Google</button>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'
import { useRouter } from 'vue-router'
import { GoogleAuthProvider } from 'firebase/auth'
const router = useRouter()
const email = ref('')
const password = ref('')
const auth = firebase.auth()
const provider = new GoogleAuthProvider()
const login = () => {
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      console.log(data)
      router.push('/')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}
const loginWithGoogle = () => {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result)
      router.push('/')
    })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    })
}
</script>
