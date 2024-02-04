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
      dataFromApi: '',
      favorites: []
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
          remote: this.remote
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
              remote: doc.data().remote
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
    
    toggleFavorite(offer) {
      const index = this.favorites.findIndex((fav) => fav.id === offer.id)
      if (index === -1) {
        this.favorites.push(offer)
      } else {
        this.favorites.splice(index, 1)
      }
    }
  }
})
