<template>

  <h1 class="offer-title">Details des Angebots</h1>
  <div class="container">
    <ul v-if="offers.length > 0" class="offer-list">
      <li v-for="offer in offers" :key="offer.id" class="offer-item">
        
        <!-- <p>{{ offer }}</p> -->

        <section class="container1">
          <img class="offer-picture" :src="offer.picture" alt="Bild des Artikels" />
          <p class="titel">{{ offer.title }}</p>
          <p class="plz-stadt"><LocationIcon /> {{ offer.zipcode }} {{ offer.town }}</p>
          <p class="erstellt-am"><img class="icon1" src="@/assets/pictures-layout/User-icon.png" alt="Bild des Artikels" />{{ offer.createdByUser }}</p>
          <p class="erstellt-von"><img class="icon2" src="@/assets/pictures-layout/kalender-icon.png" alt="Bild des Artikels" /> {{ formatDate(offer.dateCreated) }}</p>
        </section>
        <section class="container2">
          <p class="kategorie">Kategorie: {{ offer.category }}</p>
          <p class="kaution">Kaution: {{ offer.deposit }}</p>
          <p class="remote">Remote: {{ offer.remote }}</p>
          <p class="beschreibung">
            Beschreibung: <br />
            {{ offer.description }}
          </p>
        </section>
      </li>
    </ul>
    <p v-else class="no-offers">Keine Angebote gefunden</p>
  </div>
</template>

<script setup>
import LocationIcon from '@/components/icons/IconLocation.vue'
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

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return date.toLocaleDateString('de-DE', options);
}
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  margin-top: -10px;
}

.titel {
  display: flex;
  justify-content: center;
  font-size: 18px;
  margin-top: -10px;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 30px;
  background-color: var(--cc-egg);
  border-radius: 10px;
  height: 400px;
  margin-top: 10px;
  margin-bottom: 120px;
}

/* .container1{
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  margin-top: 30px;
  background-color: var(--cc-egg);
  border-radius: 10px;
  height: 200px;
  margin-top: 10px;
  margin-bottom: 120px;
} */

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
  width: 310px;
  height: 250px;
  object-fit: contain;
  object-position: center;
  border-radius: 5px;
  margin-top: -15px;
}

.icon1, .icon2{
  height: 18px;
}
</style>
