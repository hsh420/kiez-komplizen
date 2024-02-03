/*disabled authentication of this page for dev purposes in the index.js. Needs turning back on when
done. Created Backup SearchView file that needs deleten before deploy.*/

<template>
 
  <header>
    <h1>Suchen</h1>
    <h2>Was willst du finden?</h2>
    <!-- <p>
      <input type="radio" name="item" value="item" />
      <label for="item"> Gegenstand </label>
      <input type="radio" name="hobby" value="hobby" />
      <label for="hobby"> Gemeinsamkeit </label>
    </p> -->
    <input type="text" name="search" placeholder="Suche..." v-model="searchTerm" />
  </header>
  <main>
    <ul>
      <li v-for="offer in filteredOffers" :key="offer.id">
        <div class="card">
          <img class="card__img" :src="offer.picture" alt="Bild des Artikels" />
          <div class="card__fav"><FavoritesIcon class="card__fav--icon" /></div>
          <div class="card__details">
            <h3 class="card__headline">{{ offer.title.toUpperCase() }}</h3>
            <p class="card__location"><LocationIcon /> {{ offer.zipcode + ' ' + offer.town }}</p>
            <ArrowRightIcon class="card__arrow" />
          </div>
        </div>
      </li>
    </ul>
  </main>
   <HeaderLayoutComponent/>
  <footer>
    <FooterLayoutComponent />
  </footer>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import LocationIcon from '@/components/icons/IconLocation.vue'
import FavoritesIcon from '@/components/icons/IconFavorites.vue'
import ArrowRightIcon from '@/components/icons/IconArrowRight.vue'
import HeaderLayoutComponent from '@/components/Layout/HeaderLayoutComponent.vue'
import FooterLayoutComponent from '@/components/Layout/FooterLayoutComponent.vue'

const store = useDatabaseStore()
let searchTerm = ref('') // Reference to store the search term

const filteredOffers = computed(() => {
  if (!searchTerm.value) {
    return store.dataFromApi
  }
  return store.dataFromApi.filter((offer) =>
    offer.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
onMounted(() => store.getOffers())
</script>

<style scoped>
@import url('@/assets/main.css');

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
  background-color: rgba(26, 26, 26, 0.25);
}

.card__img {
  width: 385px;
  height: 250px;
  object-fit: contain;
  object-position: center;
}

.card__fav {
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 50%;
  background-color: white;
  height: 21px;
  width: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__fav--icon {
  width: 17.5px;
  height: 15.75px;
}

.card__headline {
  font-family: 'Bebas Neue';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.card__location {
  font-family: 'KoHo';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
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
