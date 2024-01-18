import { defineStore } from 'pinia'
import firebase from 'firebase/compat/app'
import { useAuthStore } from './auth'

const db = firebase.firestore()
const auth = useAuthStore()

export const useDatabaseStore = defineStore({
  id: 'databaseStore',
  state: () => {
    return {
      title: '',
      createdByUser: auth.user,
      dateCreated: new Date(),
      imgUrl: '',
      description: '',
      topic: '',
      location: '',
      dataFromApi: ''
    }
  },
  getters: {},
  actions: {
    createOffer() {
      db.collection('offers')
        .add({
          title: this.title,
          createdByUser: this.createdByUser,
          dateCreated: this.dateCreated,
          imgUrl: this.imgUrl,
          description: this.description,
          topic: this.topic,
          location: this.location
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
              imgUrl: doc.data().imgUrl,
              description: doc.data().description,
              topic: doc.data().topic,
              location: doc.data().location
            })
            this.dataFromApi = offerData
            console.log(offerData, this.dataFromApi)
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
