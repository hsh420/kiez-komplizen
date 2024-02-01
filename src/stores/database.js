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
      dataFromApi: ''
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
              title: doc.data().title,
              createdByUser: doc.data().createdByUser,
              dateCreated: doc.data().dateCreated,
              picture: doc.data().picture,
              description: doc.data().description,
              topic: doc.data().topic,
              town: doc.data().town,
              zipcode: doc.data().zipcode,
              remote: doc.data().remote,
              deposit: doc.data().deposit
            })
            this.dataFromApi = offerData
          })
          return offerData
        })
        .catch((error) => {
          console.log(error)
          alert(error.message)
        })
    }
  }
})
