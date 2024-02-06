<template>
  <h1>Dein Kiezkram</h1>
  <h2>Das hast du zu bieten</h2>

  <div class="content-container">
    <main>
      <ul>
        <li v-for="offer in filteredOffers" :key="offer.id">
          <div class="card">
            <img class="card__img" :src="offer.picture" alt="Bild des Artikels" />
            <div class="card__fav" @click="updateFavorite(offer)">
              <FavoritesIcon
                class="card__fav--icon"
                :class="{ 'is-favorite': offer.favorite, 'is-no-favorite': !offer.favorite }"
              />
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
import { computed, onMounted } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import { useAuthStore } from '@/stores/auth'
import ArrowRightIcon from '@/components/icons/IconArrowRight.vue'

const databaseStore = useDatabaseStore()
const authStore = useAuthStore()

const filteredOffers = computed(() => {
  return databaseStore.dataFromApi
})

onMounted(() => {
  if (authStore.user && authStore.user.uid) {
    //calling getUserOffers from database.js with current user ID to fetch their offers
    databaseStore.getUserOffers(authStore.user.uid)
  } else {
    console.error('No user logged in')
  }
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
  color: red;
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
