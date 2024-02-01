/* I disabled "beforeEnter: requireAuth" on line 67 in index.js //to make the offer visible in dev
without authentication. //this needs to be undone after finish working on offer. //I also duplicated
the offerView.vue (OfferViewBackup.vue) in case I am doing bullshiut here. //OfferViewBackup.vue
needs deletion if not used.*/

<script>
export default {}
</script>

<style></style>

<template>
  <HeaderNavigation />
  <main>
    <form action="" @submit.prevent="handleSubmit">
      <h1>Anbieten</h1>
      <h2>Was hast Du anzubieten?</h2>
      <p>
        <input type="radio" name="item" value="item" v-model="selectedOption" />
        <label for="item"> Gegenstand </label>
        <input type="radio" name="hobby" value="hobby" v-model="selectedOption" />
        <label for="hobby"> Gemeinsamkeit </label>
      </p>
      <br />

      <section class="offer-card-item" v-if="selectedOption === 'item'">
        <h3>Gegenstand anbieten:</h3>
        <select name="item-list" id="item-list-id" v-model="store.category">
          <option value="" selected disabled>Kategorie wählen</option>
          <option value="item-kids">Baby, Kind</option>
          <option value="item-office">Büro</option>
          <option value="item-garden">Garten</option>
          <option value="item-homestuff">Haus,Haushalt</option>
          <option value="item-transportation">KFZ, Fahhrad</option>
          <option value="item-medical">Medizinische Hilfsmittel</option>
          <option value="item-furniture">Möbel</option>
          <option value="item-party">Party, Veranstaltung</option>
          <option value="item-game">Spiele</option>
          <option value="item-sport">Sport, Freizeit</option>
          <option value="item-vacation">Urlaub, Reise</option>
          <option value="item-tool">Werkzeug, Baumaterialien</option>
          <option value="item-other">Sonstiges</option>
        </select>
        <br />
        <br />
        <label for="picture">Bild-URL: </label>
        <input type="text" name="picture" v-model="store.picture" />
        <br />
        <label for="title">Titel: </label>
        <input type="text" name="title" v-model="store.title" />
        <br />
        <label for="description">Beschreibung: </label>
        <input type="textarea" name="description" v-model="store.description" />
        <br />
        <label for="deposit">Kaution: </label>
        <input type="textarea" name="deposit" v-model="store.deposit" />
        <br />
        <label for="zipcode">PLZ: </label>
        <input type="text" name="zipcode" v-model="store.zipcode" />
        <label for="town">Ort: </label>
        <input type="text" name="town" v-model="store.town" />
        <br />
        <br />
        <button type="submit">Gegenstand Anbieten</button>
      </section>

      <section class="offer-card-hobby" v-else-if="selectedOption === 'hobby'">
        <h3>Gemeinsamkeit anbieten:</h3>
        <select name="hobby-list" id="hobby-list-id">
          <option value="" selected disabled>Kategorie wählen</option>
          <option value="hobby-fishing">Angeln, Aquaristik</option>
          <option value="hobby-crafting">Basteln</option>
          <option value="hobby-fotography">Fotografie</option>
          <option value="hobby-gardening">Gartenarbeit</option>
          <option value="hobby-cooking">Kochen, Backen</option>
          <option value="hobby-art">Kunst, Malerei</option>
          <option value="hobby-music">Musik</option>
          <option value="hobby-sewing">Nähen</option>
          <option value="hobby-offline-gaming">Offline Gaming</option>
          <option value="hobby-online-gaming">Online Gaming</option>
          <option value="hobby-outdoor">Outdoor Aktivitäten</option>
          <option value="hobby-collecting">Sammeln</option>
          <option value="hobby-sporty">Sport und Fitness</option>
          <option value="hobby-animals">Tiere</option>
          <option value="hobby-other">Sonstiges</option>
        </select>
        <br />
        <br />
        <label for="title">Titel: </label>
        <input type="text" name="title" v-model="store.title" />
        <br />
        <label for="description">Beschreibung: </label>
        <input type="textarea" name="description" v-model="store.description" />
        <br />
        <label for="zipcode">PLZ: </label>
        <input type="text" name="zipcode" v-model="store.zipcode" />
        <label for="town">Ort: </label>
        <input type="text" name="town" v-model="store.town" />
        <br />
        <input type="checkbox" name="remote" value="remote" v-model="store.remote" />
        <label for="remote"> Remote möglich </label>
        <br />
        <br />
        <button type="submit">Gemeinsamkeit Anbieten</button>
      </section>
    </form>
  </main>
  <FooterNavigation />
</template>

<script setup>
import HeaderNavigation from '@/components/Layout/HeaderNavigation.vue'
import FooterNavigation from '@/components/Layout/FooterNavigation.vue'
import { ref } from 'vue'
import { useDatabaseStore } from '@/stores/database'

const store = useDatabaseStore()
const selectedOption = ref('') //initialize the selected radio-option gegenstand or gemeinsamkeit
const handleSubmit = () => {
  store.createOffer()
}
</script>
