<template>
  <p>{{ offers }}</p>
</template>

<script setup>
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
</script>
