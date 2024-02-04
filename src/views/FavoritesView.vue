<template>
  <div>
    <h1>Deine Favoriten</h1>
    <div class="content-container">
      <main>
        <ul>
          <li v-for="favorite in favorites" :key="favorite.id">
            <div class="card">
              <img class="card__img" :src="favorite.picture" alt="Bild des Artikels" />
              <!-- <div class="card__fav" @click="toggleFavorite(offer)">
              <FavoritesIcon class="card__fav--icon" :class="{ 'is-favorite': offer.favorite, 'is-no-favorite' : !offer.favorite }" />
            </div> -->

              <div class="card__details">
                <h3 class="card__headline">{{ favorite.title.toUpperCase() }}</h3>
                <p class="card__location">
                  <LocationIcon /> {{ favorite.zipcode + ' ' + favorite.town }}
                </p>
                <ArrowRightIcon class="card__arrow" />
              </div>
            </div>
          </li>
        </ul>
      </main>
    </div>
    <!-- <ul>
      <li v-for="favorite in favorites" :key="favorite.id">{{ favorite.title }}</li>
    </ul> -->
  </div>
</template>

<script setup>
import { useDatabaseStore } from '@/stores/database'
import { computed, onMounted } from 'vue'
const store = useDatabaseStore()
// const favorites = store.favorites

const favorites = computed(() => store.favorites)

onMounted(()=> store.getFav())
</script>
