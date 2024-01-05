<template>
  <h1>Account erstellen</h1>
  <form @submit.prevent="register">
    <input name="firstname" type="text" placeholder="Vorname" v-model="firstname" />
    <label for="firstname">Vorname</label>
    <input name="lastname" type="text" placeholder="Nachname" v-model="lastname" />
    <label for="lastname">Nachname</label>
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
import 'firebase/compat/firestore'
const router = useRouter()
const email = ref('')
const password = ref('')
const firstname = ref('')
const lastname = ref('')
const auth = firebase.auth()
const db = firebase.firestore()
const createUser = (userId, firstname, lastname, email) => {
  db.collection('users')
    .add({ userId: userId, displayName: firstname + ' ' + lastname, email: email })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    })
}
const register = () => {
  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((data) => {
      // @TODO: Welche Daten sollen noch gespeichert werden?
      createUser(data.user.uid, firstname.value, lastname.value, email.value)
      router.push('/registration-success')
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.message)
    })
}
</script>
