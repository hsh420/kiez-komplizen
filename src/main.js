import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBMsI0IlJCOYxW-lxq3F8tdKAuFMqpMRJA',
  authDomain: 'kiez-komplizen.firebaseapp.com',
  projectId: 'kiez-komplizen',
  storageBucket: 'kiez-komplizen.appspot.com',
  messagingSenderId: '87586074904',
  appId: '1:87586074904:web:d6d6f0a8e1775a2708ee6d',
  measurementId: 'G-PMSD6VY6M6'
}

firebase.initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
