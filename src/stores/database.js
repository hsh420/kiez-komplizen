import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import { useAuthStore } from './auth'

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
      favorite: false,
      offer: []
    }
  },
  getters: {},
  actions: {
    deleteOffer(offerId) {
      db.collection('offers')
        .doc(offerId)
        .delete()
        .then(() => {
          console.log('Offer deleted.')
          this.dataFromApi = this.dataFromApi.filter((offer) => offer.id !== offerId)
        })
        .catch((error) => {
          console.error('Error removing offer:', error)
        })
    },

    getUserOffers(userID) {
      let offerData = []
      let offersQuery = db.collection('offers').where('createdByUser', '==', userID)

      offersQuery
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            let offer = {
              id: doc.id,
              createdByUser: doc.data().createdByUser,
              dateCreated: doc.data().dateCreated,
              category: doc.data().category,
              picture: doc.data().picture,
              title: doc.data().title,
              description: doc.data().description,
              deposit: doc.data().deposit,
              zipcode: doc.data().zipcode,
              town: doc.data().town,
              remote: doc.data().remote,
              favorite: doc.data().favorite
            }
            offerData.push(offer)
          })
          this.dataFromApi = offerData
        })
        .catch((error) => {
          console.error('Error fetching user offers:', error)
          alert(error.message)
        })
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
          favorite: this.favorite
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
              favorite: doc.data().favorite
            })
            this.dataFromApi = offerData
          })
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

    updateFavorites(id) {
      this.dataFromApi.forEach((offer) => {
        if (offer.id === id) {
          offer.favorite = !offer.favorite
          console.log('favorite: ' + offer.favorite)
        }
      })
    }
  },
  persist: true
})
