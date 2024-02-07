<template>
  <div class="container">
    <ul v-if="offers.length > 0" class="offer-list">
      <li v-for="offer in offers" :key="offer.id" class="offer-item">

         <h1 class="offer-title">Details des Angebots</h1>
        <!-- <p>{{ offer }}</p> -->
        <img class="card__img" :src="offer.picture" alt="Bild des Artikels" />
        <!-- <p class="offer-info">{{ offer.picture }}</p> -->
        <p class="titel">{{ offer.title }}</p>
        <p class="plz-stadt">{{ offer.zipcode }} {{ offer.town }}</p>
        <p class="erstellt-am">Erstellt von: {{ offer.createdByUser }}</p>
        <p class="erstellt-von">Erstellt am: {{ offer.dateCreated }}</p>
        <p class="kategorie">Kategorie: {{ offer.category }}</p>
        <p class="kaution">Kaution: {{ offer.deposit }}</p>
        <p class="remote">Remote: {{ offer.remote }}</p>
        <p class="beschreibung">Beschreibung: <br/> {{ offer.description }}</p>
      </li>
    </ul>
    <p v-else class="no-offers">Keine Angebote gefunden</p>
  </div>
</template>

<script setup>
import { useDatabaseStore } from '@/stores/database'
import { onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const store = useDatabaseStore()
const route = useRoute()

const offers = store.offer

onMounted(() => {
  store.getOffer(route.params.id)
  console.log(store.offer)
})

onUnmounted(() => {
  store.offer = []
})
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 5px;
}

.titel {
  display: flex;
  justify-content: center;
  font-size: 
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 30px;
  background-color: var(--cc-egg);
  border-radius: 10px;
  height: 800px;
  margin-top: -10px;
  margin-bottom: 120px;
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

.card__img {
  width: 350px;
  height: 250px;
  object-fit: contain;
  object-position: center;
  border-radius: 5px;
}

</style>
