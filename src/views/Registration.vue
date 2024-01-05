<template>
  <h1>Account erstellen</h1>
  <form @submit.prevent="register">
    <input name="email" type="email" placeholder="E-Mail" v-model="email" />
    <label for="email">E-Mail</label>
    <input name="password" type="password" placeholder="Passwort" v-model="password" />
    <label for="password">Passwort</label>
    <button type="submit">Registrieren</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'
import { useRouter } from 'vue-router'
const router = useRouter()
const email = ref('')
const password = ref('')
const auth = firebase.auth()
const register = () => {
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      // @TODO: Logik für Abspeichern von (welchen?!) User-Daten implementieren
      console.log(data)
      router.push('/registration-success')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}
</script>
