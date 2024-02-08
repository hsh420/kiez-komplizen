import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import { useAuthStore } from './auth'
import { arrayRemove, arrayUnion } from 'firebase/firestore'

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
      favoriteOffers: []
    }
  },
  getters: {},
  actions: {
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
              likedBy: doc.data().likedBy
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
          this.offer.push(data.data())
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
