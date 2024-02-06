<template>
  <div class="offer-details">
    <img :src="offer.picture" alt="Offer image" class="offer-image" />
    <h2>{{ offer.title }}</h2>
    <p>{{ offer.description }}</p>
    <!-- Add more later -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useDatabaseStore } from '@/stores/database'

const route = useRoute()
const store = useDatabaseStore()
const offer = ref({})

onMounted(async () => {
  const offerId = route.params.offerId
  offer.value = await store.getOffer(offerId)
})
</script>

<style scoped>
/* Needs adding */
</style>
