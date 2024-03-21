<template>
  <p>{{ authStore.$state.uid }}</p>
  <h1>Hallo, {{ displayName }}!</h1>
  <h2>Hier findest du deinen Kiezkrams</h2>
  <hr />
  <br />

  <div class="content-container">
    <main>
      <div v-if="databaseStore.userOffers.length > 0">
        <ul>
          <li v-for="(offer, index) of databaseStore.userOffers" :key="offer.id">
            <div class="card">
              <img
                class="card__img"
                :src="offer.picture || placeholderPic"
                @error="(event) => (event.target.src = placeholderPic)"
                alt="Bild des Artikels"
              />
              <div class="card__buttons">
                <button class="card__x--button" @click="deleteOffer(offer.id, index)">
                  <span style="font-size: 1.5rem; color: white">&times;</span> Löschen
                </button>
                <button class="card__edit--button" @click="editOffer(offer)">Bearbeiten</button>
              </div>

              <div class="card__details">
                <h3 class="card__headline">{{ offer.title.toUpperCase() }}</h3>
                <p class="card__location">
                  <LocationIcon /> {{ offer.zipcode + ' ' + offer.town }}
                </p>
                <ArrowRightIcon class="card__arrow" />
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div v-else class="no-offers">
        <img src="@/assets/kk.gif" alt="Kiezkomplizen Logo" class="placeholder-gif" />
        <p class="no-offers">Du hast noch nichts angeboten. Los geht's...</p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { toRaw, onMounted } from 'vue'
//import { onBeforeMount, reactive } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { useAuthStore } from '@/stores/auth'
import placeholderPic from '@/assets/kk-placeholder-pic.png'

const databaseStore = useDatabaseStore()
const authStore = useAuthStore()
const displayName = toRaw(authStore.user.displayName)

function deleteOffer(offerId, index) {
  databaseStore.deleteOffer(offerId)
  databaseStore.userOffers.splice(index, 1)
}

onMounted(() => {
  //databaseStore.getOffers()
  if (authStore.user && authStore.user.uid) {
    databaseStore.getUserOffers(authStore.user.uid)
  }
})
/*
const store = useDatabaseStore()
const auth = useAuthStore()
let userOffers = reactive([])

function getUserOffers() {
  store.dataFromApi.forEach((offer) => {
    toRaw(offer.createdBy).forEach((id) => {
      if (id === auth.user.uid) {
        userOffers.push(toRaw(offer))
      }
    })
  })
}

function addUserOffers(offer) {
  store.updateOfferCreatedBy(offer.id, auth.user.uid)
  setTimeout(() => {
    store.getOffers()
  }, 500)
}

onBeforeMount(() => {
  store.getOffers()
  getUserOffers()
})
*/
</script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');

.content-container {
  margin-top: 8rem;
  margin-bottom: 1.5rem;
}

.no-offers {
  font-family: 'abadi-mt-condensed-light-regular';
  font-size: 1.5rem;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 25px auto;
}

.placeholder-gif {
  width: 80%;
}
.card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 330px;
  height: 326px;
  margin: 0 auto;
  bottom: 6rem;
  background-color: rgba(26, 26, 26, 0.25);
  /* color: var(--cc-text-darkmode); */
}

.card__img {
  width: 330px;
  height: 250px;
  object-fit: contain;
  object-position: center;
}

.card__buttons {
  position: absolute;
  top: 15px;
  right: -50px;
  height: 21px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  gap: 1rem;
}

.card__edit--button {
  _width: 100px;
  height: 25px;
  border: none;
  color: white;
  background-color: black;
  border-radius: 4px;
}

.card__x--button {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  _width: 100px;
  height: 25px;
  border: none;
  color: white;
  background-color: black;
  border-radius: 4px;
}

.card__headline {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: white;
}

.card__location {
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: white;
}

.card__details {
  background-color: black;
  color: white;
  padding: 16px;
}

.card__arrow {
  position: absolute;
  bottom: 20px;
  right: 15px;
}
</style>
