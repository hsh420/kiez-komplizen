/* I disabled "beforeEnter: requireAuth" on line 67 in index.js //to make the offer visible in dev
without authentication. //this needs to be undone after finish working on offer. //I also duplicated
the offerView.vue (OfferViewBackup.vue) in case I am doing bullshiut here. //OfferViewBackup.vue
needs deletion if not used.*/

<script>
export default {}
</script>

<template>
  <HamburgerNav />
  <main>
    <form action="" @submit.prevent="handleSubmit">
      <h1 class="h1">Anbieten</h1>
      <h2 class="h2">Was hast Du anzubieten?</h2>

      <div class="both-radios">
        <div class="radio1">
          <input type="radio" value="item" id="item-tab" name="item" v-model="selectedOption" />
          <label class="radio-label1" for="item"> Gegenstand </label>
        </div>
        <div class="radio2">
          <input type="radio" name="hobby" value="hobby" v-model="selectedOption" />
          <label class="radio-label2" for="hobby"> Gemeinsamkeit </label>
        </div>
      </div>

      <br />
      <hr class="hr" />
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

        <legend for="picture">Bild-URL:</legend>
        <input type="text" name="picture" v-model="store.picture" />

        <div class="floating-title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder=" "
            required
            v-model="store.title"
          />
          <label for="title">Titel</label>
        </div>

        <legend for="description">Beschreibung:</legend>
        <textarea
          type="textarea"
          name="description"
          v-model="store.description"
          cols="50"
          rows="10"
        >
Beschreibe Dein Angebot... </textarea
        >
        <br />
        <br />
        <legend for="deposit">Kaution:</legend>
        <input type="textarea" name="deposit" v-model="store.deposit" />
        <br />
        <div class="adress-fields">
          <legend for="zipcode">PLZ:</legend>
          <input type="text" name="zipcode" v-model="store.zipcode" />
          <legend for="town">Ort:</legend>
          <input type="text" name="town" v-model="store.town" />
        </div>

        <br />
        <ButtonGlobal type="submit" :label="'Gegenstand Anbieten'" />
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
        <legend for="description">Beschreibung:</legend>
        <textarea
          type="textarea"
          name="description"
          v-model="store.description"
          cols="50"
          rows="10"
        >
Beschreibe Dein Angebot... </textarea
        >
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
        <ButtonGlobal type="submit" :label="'Gemeinsamkeit Anbieten'" />
      </section>
    </form>
  </main>
  <FooterNav />
</template>

<script setup>
import { ref } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import ButtonGlobal from '@/components/ButtonGlobal.vue'

const store = useDatabaseStore()
const selectedOption = ref('') //initialize the selected radio-option gegenstand or gemeinsamkeit
const handleSubmit = () => {
  store.createOffer()
}
</script>

<style>
main {
  margin-left: 1rem;
  margin-right: 1rem;
  color: grey;
  font-family: 'SourceSansPro-Regular', sans-serif;
}

.h1 {
  color: #f39305;
  font-size: 2rem;
  font-family: 'Abadi MT Condensed Extra Bold';
  text-transform: uppercase;
}

.h2 {
  font-family: 'Abadi MT Condensed Light';
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.hr {
  margin-left: 10px;
  margin-right: 10px;
  border: none;
  height: 1px;
  background-color: #fff6e9;
}

.both-radios {
  display: flex;
  flex-direction: row;
  gap: 2rem;
}

.radio-label1 {
  margin: 5px;
}

.radio-label2 {
  margin: 5px;
}

.adress-fields {
  display: flex;
  flex-direction: row;
}

.floating-title {
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
}

.floating-title input {
  width: 80%;
  padding-top: 15px;
  padding-bottom: 10px;
  padding-left: 7px;
  margin-top: 8px;
  border-radius: 10px;
  border: 2px solid #fff6e9;
  background-color: #fff6e9;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 14px;
}

.floating-title input:focus {
  outline: none;
  border-color: #f39305;
}

.floating-title label {
  position: absolute;
  top: 10%;
  left: 10px;
  padding: 10px;
  pointer-events: none;
  transition: all 0.2s;
  transform-origin: left top;
  transform: scale(1);
  color: #1e293b;
  font-family: 'SourceSansPro-Regular', sans-serif;
}

.floating-title input:placeholder-shown + label {
  transform: translate(0, 10px) scale(1);
}

.floating-title input:not(:placeholder-shown) + label,
.floating-title input:focus + label {
  transform: translate(0, 5px) scale(0.75);
  color: orange;
}
</style>
