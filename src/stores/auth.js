import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import router from '@/router/index.js'

const firebaseConfig = {
  apiKey: 'AIzaSyBMsI0IlJCOYxW-lxq3F8tdKAuFMqpMRJA',
  authDomain: 'kiez-komplizen.firebaseapp.com',
  projectId: 'kiez-komplizen',
  storageBucket: 'kiez-komplizen.appspot.com',
  messagingSenderId: '87586074904',
  appId: '1:87586074904:web:d6d6f0a8e1775a2708ee6d',
  measurementId: 'G-PMSD6VY6M6'
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore()
const createUser = (userId, displayName, email) => {
  db.collection('users')
    .add({ userId: userId, displayName: displayName, email: email })
    .catch((error) => {
      console.log(error)
      alert(error.message)
    })
}

export const useAuthStore = defineStore({
  id: 'authStore',
  state: () => {
    return {
      firstname: '',
      lastname: '',
      displayname: '',
      email: '',
      password: '',
      user: {},
      isLoggedIn: false
    }
  },
  actions: {
    init() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.isLoggedIn = true
        } else {
          this.isLoggedIn = false
        }
      })
    },
    register() {
      auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          // @TODO: Welche Daten sollen noch gespeichert werden?
          if (data.additionalUserInfo.isNewUser === true) {
            const displayName = this.firstname + ' ' + this.lastname
            createUser(data.user.uid, displayName, this.email)
          }
          router.push('/registration-success')
        })
        .catch((error) => {
          console.log(error.code)
          alert(error.message)
        })
    },
    login() {
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.user = {
            uid: data.user.uid
          }
          router.push('/')
        })
        .catch((error) => {
          console.log(error.code)
          alert(error.message)
        })
    },
    loginWithGoogle() {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          if (result.additionalUserInfo.isNewUser === true) {
            createUser(result.user.uid, result.user.displayName, result.user.email)
          }
          this.user = {
            uid: result.user.uid
          }
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
    },
    logout() {
      auth.signOut()
      this.user = {}
      router.replace({ name: 'login' })
    }
  }
})
