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
      <label for="inputField4"
        >Passwort<br />
        <input
          type="password"
          id="inputField4"
          placeholder="********"
          minlength="8"
          maxlength="15"
          v-model="store.password" /></label
      ><br />
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

const store = useAuthStore()
const handleSubmit = () => {
  store.register()
}
</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 160px;
}
p {
  font-size: 14px;
  text-align: center;
  margin-top: 30px;
}

.registration-button {
  margin: 0 auto;
  width: 22rem;
  margin-top: 20px;
}

.registration-button:hover {
  background-color: lightgray;
}

.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 5px;
}

.input-container label {
  /* margin-bottom: 50px; */
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
  /* margin-top: 1rem; */
  margin: auto;
}
</style>
