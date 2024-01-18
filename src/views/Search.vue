<template v-if="offers">
  <ul>
    <li v-for="offer in offers">
      {{ offer.title }}, {{ offer.topic }}, {{ offer.description }}, {{ offer.location }},
      Hinzugefügt: {{ offer.dateCreated }}
    </li>
  </ul>
</template>

<script setup>
import { useDatabaseStore } from '@/stores/database'
import { computed, onMounted, ref } from 'vue'

const store = useDatabaseStore()
const offers = computed(() => store.dataFromApi)

onMounted(() => store.getOffers())
</script>
