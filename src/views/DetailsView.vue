<template>
  <div ></div>
<h1 class="offer-title">Details des Angebots</h1>
  <div class="container">
    <ul v-if="offers.length > 0" class="offer-list">
      <li v-for="offer in offers" :key="offer.id" class="offer-item">
        <button class="card__x--button" @click="goBackToSearchPage">
          <span style="font-size: 1rem; color: white">&times; Zurück</span>
        </button>
        <img class="offer-picture" :src="offer.picture" alt="Bild des Artikels" />
        <p class="titel">{{ offer.title }}</p>
        <p class="plz-stadt"><LocationIcon /> {{ offer.zipcode }} {{ offer.town }}</p>
        <p class="erstellt-von">
          <img
            class="icon1"
            src="@/assets/pictures-layout/User-icon.png"
            alt="Bild des Artikels"
          />{{ offer.createdByUser.displayName }}
        </p>
        <p class="erstellt-am">
          <img
            class="icon2"
            src="@/assets/pictures-layout/kalender-icon.png"
            alt="Bild des Artikels"
          />
          {{ formatDate(offer.dateCreated) }}
        </p>

        <p class="kategorie">Kategorie: {{ offer.category }}</p>
        <p class="kaution">Kaution: {{ offer.deposit }}</p>
        <p class="remote">Remote: {{ offer.remote ? 'Ja' : '' }}</p>
        <p class="beschreibung">
          Beschreibung:<br/> 
          {{ offer.description }}
        </p>
      </li>

      
    </ul>

    <p v-else class="no-offers">Keine Angebote gefunden</p>
  </div>
</template>

<script setup>
import LocationIcon from '@/components/icons/IconLocation.vue'
import router from '@/router'
import { useDatabaseStore } from '@/stores/database'
import { onUnmounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const store = useDatabaseStore()
const route = useRoute()

const offers = store.offer

onBeforeMount(() => {
  store.getOffer(route.params.id)
})

onUnmounted(() => {
  store.offer = []
})

const formatDate = (timestamp) => {
  const date = new Date(timestamp)
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' }
  return date.toLocaleDateString('de-DE', options)
}

const goBackToSearchPage = () => {
  router.push('/search')
}
</script>

<style scoped>

h1 {
  text-align: center;
}

.titel {
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-top: -10px;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: var(--cc-egg);
  border-radius: 10px;
  height: 600px;
  margin-top: 20px;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.card__x--button {
  display: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  width: 60px;
  height: 25px;
  border: none;
  color: white;
  background-color: black;
  border-radius: 4px;
  margin-top: 10px;
}

p {
  margin-bottom: 10px;
}

.offer-info {
  margin-bottom: 10px;
}

.offer-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.offer-picture {
  width: 350px;
  height: 250px;
  padding-left: 10px;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
  
}

.icon1,
.icon2 {
  height: 18px;
}
</style>
