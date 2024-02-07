<template>
  <p>{{ authStore.$state.uid }}</p>
  <h1>Dein Kiezkrams</h1>
  <h2>Das hast Du zu bieten</h2>
  <hr />
  <br />

  <div class="content-container">
    <main>
      <ul>
        <li v-for="offer in databaseStore.dataFromApi" :key="offer.id">
          <div class="card">
            <img class="card__img" :src="offer.picture" alt="Bild des Artikels" />
            <div class="card__buttons" @click="editOffer(offer)">
              <button class="card__x--button">
                <span style="font-size: 1.5rem; color: white">&times;</span> Löschen
              </button>
              <button class="card__edit--button">Bearbeiten</button>
            </div>

            <div class="card__details">
              <h3 class="card__headline">{{ offer.title.toUpperCase() }}</h3>
              <p class="card__location"><LocationIcon /> {{ offer.zipcode + ' ' + offer.town }}</p>
              <ArrowRightIcon class="card__arrow" />
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { useAuthStore } from '@/stores/auth'

const databaseStore = useDatabaseStore()
const authStore = useAuthStore()

onMounted(() => {
  console.log(localStorage.getItem('uid'))
  databaseStore.getOffers()
  authStore.init()
})
</script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');

.content-container {
  margin-top: 8rem;
  margin-bottom: 1.5rem;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
  margin: 25px auto;
}
.card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  width: 385px;
  height: 326px;
  margin: 0 auto;
  bottom: 6rem;
  background-color: rgba(26, 26, 26, 0.25);
  /* color: var(--cc-text-darkmode); */
}

.card__img {
  width: 385px;
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
