import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import { useAuthStore } from './auth'
import { arrayRemove, arrayUnion } from 'firebase/firestore'
import { toRaw } from 'vue'

const db = firebase.firestore()
const auth = useAuthStore()

export const useDatabaseStore = defineStore({
  id: 'databaseStore',
  state: () => {
    return {
      createdByUser: auth.user,
      dateCreated: new Date(),
      category: '',
      picture: '',
      title: '',
      description: '',
      deposit: '',
      zipcode: '',
      town: '',
      remote: false,
      dataFromApi: [],
      offer: [],
      favorites: [],
      favoriteOffers: [],
      userOffers: []
    }
  },
  getters: {},
  actions: {
    getUserOffers(userId) {
      let userOfferData = []
      db.collection('offers')
        .where('createdByUser.uid', '==', userId)
        .get()
        .then((data) => {
          data.forEach((doc) => {
            userOfferData.push({
              id: doc.id,
              createdByUser: doc.data().createdByUser,
              dateCreated: doc.data().dateCreated,
              category: doc.data().category,
              picture: doc.data().picture,
              title: doc.data().title,
              description: doc.data().description,
              deposit: doc.data().deposit,
              zipcode: doc.data().zipcode,
              topic: doc.data().topic,
              town: doc.data().town,
              remote: doc.data().remote,
              likedBy: doc.data().likedBy,
              createdBy: doc.data().createdBy
            })
          })
          this.userOffers = userOfferData
          console.log(userOfferData)
        })
        .catch((error) => {
          console.error(error)
          alert(error.message)
        })
    },

    deleteOffer(offerId) {
      db.collection('offers').doc(offerId).delete()
    },

    createOffer() {
      db.collection('offers')
        .add({
          createdByUser: this.createdByUser,
          dateCreated: this.dateCreated,
          category: this.category,
          picture: this.picture,
          title: this.title,
          description: this.description,
          deposit: this.deposit,
          zipcode: this.zipcode,
          town: this.town,
          remote: this.remote,
          likedBy: []
        })
        .then(() => {
          console.log('Success')
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
    },
    getOffers() {
      let offerData = []
      db.collection('offers')
        .get()
        .then((data) => {
          data.forEach((doc) => {
            offerData.push({
              id: doc.id,
              createdByUser: doc.data().createdByUser,
              dateCreated: doc.data().dateCreated,
              category: doc.data().category,
              picture: doc.data().picture,
              title: doc.data().title,
              description: doc.data().description,
              deposit: doc.data().deposit,
              zipcode: doc.data().zipcode,
              topic: doc.data().topic,
              town: doc.data().town,
              remote: doc.data().remote,
              likedBy: doc.data().likedBy,
              createdBy: doc.data().createdBy
            })
          })
          this.dataFromApi = offerData
          console.log(offerData)
          return offerData
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
    },

    getOffer(id) {
      db.collection('offers')
        .doc(id)
        .get()
        .then((data) => {
          console.log('Success')
          console.log(toRaw(this.offer).length)
          if (toRaw(this.offer).length === 0) {
            this.offer.push(data.data())
          }
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
    },

    getFavOffers(id) {
      db.collection('offers')
        .doc(id)
        .get()
        .then((data) => {
          console.log('Success')
          this.favoriteOffers.push(data.data())
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
    },

    updateFavorites(id, offerId) {
      db.collection('users')
        .doc(id)
        .update({
          favorites: arrayUnion(offerId)
        })
    },
    deleteOfferLikedBy(offerId, id) {
      db.collection('offers')
        .doc(offerId)
        .update({
          likedBy: arrayRemove(id)
        })
    },
    updateOfferLikedBy(offerId, id) {
      db.collection('offers')
        .doc(offerId)
        .update({
          likedBy: arrayUnion(id)
        })
    },
    updateOfferCreatedBy(offerId, id) {
      db.collection('offers')
        .doc(offerId)
        .update({
          createdBy: arrayUnion(id)
        })
    },

    getUserFavorites(id) {
      db.collection('users')
        .doc(id)
        .get()
        .then((result) => {
          console.log(result.data().favorites)
          this.favorites = result.data().favorites
        })
    }
  },
  persist: true
})
