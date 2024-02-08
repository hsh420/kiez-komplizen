<template>
  <h1>Suchen</h1>
  <h2>Was willst du finden?</h2>

  <!-- <p>
      <input type="radio" name="item" value="item" />
      <label for="item"> Gegenstand </label>
      <input type="radio" name="hobby" value="hobby" />
      <label for="hobby"> Gemeinsamkeit </label>
    </p> -->
  <input type="text" name="search" placeholder="Suche nach Gegenstand" v-model="searchTerm" />
  <input
    type="text"
    name="search"
    placeholder="Suche nach Postleitzahl"
    v-model="searchTermZipCode"
  />

  <div class="content-container">
    <main>
      <ul>
        <li v-for="offer in filteredOffers" :key="offer.id">
          <div class="card">
            <img class="card__img" :src="offer.picture" alt="Bild des Artikels" />
            <div
              class="card__fav"
              @click="deleteLike(offer)"
              v-if="offer.likedBy.includes(auth.user.uid)"
            >
              <FavoritesIcon class="card__fav--icon is-favorite" />
            </div>
            <div class="card__fav" @click="addLike(offer)" v-else>
              <FavoritesIcon class="card__fav--icon is-no-favorite" />
            </div>
            <div class="card__details">
              <h3 class="card__headline">{{ offer.title }}</h3>
              <p class="card__location"><LocationIcon /> {{ offer.zipcode + ' ' + offer.town }}</p>
              <router-link :to="{ path: 'offer-details/' + offer.id, params: offer.id }"
                ><ArrowRightIcon class="card__arrow"
              /></router-link>
            </div>
          </div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { useAuthStore } from '@/stores/auth'
import LocationIcon from '@/components/icons/IconLocation.vue'
import FavoritesIcon from '@/components/icons/IconFavorites.vue'
import ArrowRightIcon from '@/components/icons/IconArrowRight.vue'

const store = useDatabaseStore()
const auth = useAuthStore()
let searchTerm = ref('') // Reference to store the search term
let searchTermZipCode = ref('')

const filteredOffers = computed(() => {
  if (!searchTerm.value && !searchTermZipCode.value) {
    return store.dataFromApi
  } else if (searchTerm.value) {
    return store.dataFromApi.filter((offer) =>
      offer.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  } else {
    return store.dataFromApi.filter((offer) => offer.zipcode.startsWith(searchTermZipCode.value))
  }
})

function addLike(offer) {
  store.updateOfferLikedBy(offer.id, auth.user.uid)
  setTimeout(() => {
    store.getOffers()
  }, 500)
}

function deleteLike(offer) {
  store.deleteOfferLikedBy(offer.id, auth.user.uid)
  setTimeout(() => {
    store.getOffers()
  }, 500)
}

onMounted(() => store.getOffers())
</script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');
h1 {
  text-align: center;
}

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
  cursor: pointer;
}

.is-favorite {
  color: var(--cc-orange);
}

.is-no-favorite {
  color: white;
}

.card__fav--icon {
  width: 17.5px;
  height: 15.75px;
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
