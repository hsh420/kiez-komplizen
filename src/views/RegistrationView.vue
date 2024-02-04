<template>
  <h1>Account erstellen</h1>
  <form @submit.prevent="handleSubmit">
    <div class="input-container">
      <label for="inputField1"
        >Vorname<br />
        <input
          type="text"
          id="inputField1"
          placeholder="Vorname"
          v-model="store.firstname" /></label
      ><br />
    </div>
    <div class="input-container">
      <label for="inputField2"
        >Nachname<br />
        <input
          type="text"
          id="inputField2"
          placeholder="Nachname"
          v-model="store.lastname" /></label
      ><br />
    </div>
    <div class="input-container">
      <label for="inputField3"
        >E-Mail<br />
        <input type="text" id="inputField3" placeholder="E-Mail" v-model="store.email" /></label
      ><br />
    </div>
    <div class="input-container">
      <label for="password"
        >Passwort<br />
        <input
          type="password"
          id="password"
          placeholder="********"
          @input="validatePassword"
          v-model="store.password" />
        </label>
      <p class="password-lenght" v-if="password.length < 8" style="color: grey;">mindestens 8 Zeichen</p>
    </div>
  </form>
  <ButtonGlobal :label="'Registrierung'" type="submit" class="registration-button" />
  <p>
    Durch deine Registrierung bestätigst Du unsere <br />
    <router-link to="/nutzerbedingungen">Nutzungsbedingungen</router-link> und <router-link to="/datenschutzvereinbarungen">Datenschutzvereinbarungen</router-link>.
  </p>
</template>

<script setup>
import ButtonGlobal from '@/components/ButtonGlobalComponent.vue'
import { useAuthStore } from '@/stores/auth'
import {ref} from 'vue';

const store = useAuthStore()
const handleSubmit = () => {
  store.register()
}

const password = ref('');
const validatePassword = () => {
  if (password.value.length < 8) {
    console.log('Das Passwort muss mindestens 8 Zeichen lang sein');
  }
}
</script>

<style scoped>
@import url('@/assets/main.css');

h1 {
  text-align: center;
  margin-top: 180px;
}
p {
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
}

.password-lenght {
  padding-right: 14rem;
  margin-top: 1rem;
}

.registration-button {
  margin: 0 auto;
  width: 22rem;
  margin-top: 80px;
}

.registration-button:hover {
  background-color: lightgray;
}

.password-lenght {
  text-align: left;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
}

.input-container label {
  display: block;
  font-size: 16px;
}

.input-container input[type='text'],
.input-container input[type='password'] {
  width: 22rem;
  height: 2rem;
  font-size: 14px;
  padding: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: auto;
}
</style>
