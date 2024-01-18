<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="text" name="title" v-model="store.title" />
    <label for="title">Titel</label>
    <input type="text" name="picture" v-model="store.imgUrl" />
    <label for="picture">Bild-URL</label>
    <input type="text" name="topic" v-model="store.topic" />
    <label for="topic">Kategorie</label>
    <input type="textarea" name="description" v-model="store.description" />
    <label for="description">Beschreibung</label>
    <input type="text" name="location" v-model="store.location" />
    <label for="location">Ort/Region</label>
    <button type="submit">Abschicken</button>
  </form>
</template>

<script setup>
import { useDatabaseStore } from '@/stores/database'

const store = useDatabaseStore()
const handleSubmit = () => {
  store.createOffer()
}
</script>
