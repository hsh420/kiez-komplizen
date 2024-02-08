<template>
  <h1>Suchen</h1>
  <h2>Was willst du finden?</h2>

  <div class="both-inputs">
    <div class="floating-title">
      <div class="whatever">
        <input
          type="text"
          name="search-word"
          id="search-word"
          placeholder=""
          v-model="searchTerm"
        />
        <label for="search-word">Nach Kiezkrams suchen</label>
      </div>
    </div>

    <div class="floating-title">
      <input
        type="text"
        name="search-zip"
        id="ssearch-zip"
        class="search-zipcode"
        placeholder=""
        v-model="searchTermZipCode"
      />
      <label for="search-zip">Nach PLZ filtern</label>
    </div>
  </div>
  <hr />

  <div class="content-container">
    <main>
      <ul>
        <li v-for="offer in filteredOffers" :key="offer.id">
          <div class="card">
            <img
              class="card__img"
              :src="offer.picture || placeholderPic"
              @error="(event) => (event.target.src = placeholderPic)"
              alt="Bild des Artikels"
            />

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
import placeholderPic from '@/assets/kk-placeholder-pic.png'

const store = useDatabaseStore()
const auth = useAuthStore()
let searchTerm = ref('') // Reference to store the search term
let searchTermZipCode = ref('')
/* OLD STUFF 
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
*/

const filteredOffers = computed(() => {
  let offers = store.dataFromApi //assume that all offers should be shown
  if (searchTerm.value) {
    //if a search word is entered
    offers = offers.filter(
      (
        offer //we filter the array on that word and smallen the list of offers
      ) => offer.title.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  }
  if (searchTermZipCode.value) {
    //AFTER filtering the first, we check if a zipcode is given
    offers = offers.filter((offer) => offer.zipcode.startsWith(searchTermZipCode.value)) //if yes, we filter on the smaller array
  }
  return offers
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
hr {
  border: none;
  height: 1px;
  background-color: black;
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

.both-inputs {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0rem 5px 1rem 0;
}

.whatever {
  width: 65vw;
}
</style>
