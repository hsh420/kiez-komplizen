<template v-if="offers">
  <HamburgerNav />
  <ul>
    <li v-for="offer in offers">
      <div class="card">
        <img class="card__img" :src="offer.picture" alt="Bild des Artikels" />
        <div class="card__fav"><FavoritesIcon class="card__fav--icon" /></div>
        <div class="card__details">
          <h3 class="card__headline">{{ offer.title.toUpperCase() }}</h3>
          <p class="card__location"><LocationIcon /> {{ offer.town }}</p>
          <ArrowRightIcon class="card__arrow" />
        </div>
      </div>
    </li>
  </ul>
  <FooterNav />
</template>

<script setup>
import { useDatabaseStore } from '@/stores/database'
import { computed, onMounted, ref } from 'vue'
import LocationIcon from '@/components/icons/IconLocation.vue'
import FavoritesIcon from '@/components/icons/IconFavorites.vue'
import ArrowRightIcon from '@/components/icons/IconArrowRight.vue'
import FooterNav from '@/components/Layout/FooterNav.vue'
import HamburgerNav from '@/components/Layout/HamburgerNav.vue'

const store = useDatabaseStore()
const offers = computed(() => store.dataFromApi)

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
