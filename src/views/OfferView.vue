/* I disabled "beforeEnter: requireAuth" on line 67 in index.js //to make the offer visible in dev
without authentication. //this needs to be undone after finish working on offer. //I also duplicated
the offerView.vue (OfferViewBackup.vue) in case I am doing bullshiut here. //OfferViewBackup.vue
needs deletion if not used.*/

<script>
export default {}
</script>

<template>
  <div class="content">
    <HamburgerNavComponent />
    <main>
      <form action="" @submit.prevent="handleSubmit">
        <h1>Anbieten</h1>
        <h2>Was hast Du anzubieten?</h2>

        <div class="both-radios">
          <div class="radio1">
            <input type="radio" value="item" id="item-tab" name="item" v-model="selectedOption" />
            <label class="radio-label1" for="item-tab"> Gegenstand </label>
          </div>
          <div class="radio2">
            <input type="radio" name="hobby" value="hobby" id="hobby" v-model="selectedOption" />
            <label class="radio-label2" for="hobby"> Gemeinsamkeit </label>
          </div>
        </div>

        <br />
        <hr class="hr" />
        <br />

        <section class="offer-card-item" v-if="selectedOption === 'item'">
          <h3>Gegenstand anbieten:</h3>

          <select name="item-list" id="item-list-id" v-model="itemCategory">
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

          <div class="floating-title">
            <input
              type="text"
              name="picture1"
              id="picture1"
              placeholder=" "
              v-model="store.picture"
            />
            <label for="picture1">Bild-URL</label>
          </div>

          <div class="floating-title">
            <input
              type="text"
              name="title-label1"
              id="title-label1"
              placeholder=" "
              required
              v-model="store.title"
            />
            <label for="title-label1">Titel</label>
          </div>

          <div class="floating-title">
            <textarea
              class="textarea"
              type="textarea"
              name="description-label1"
              id="description-label1"
              placeholder=" "
              required
              v-model="store.description"
              cols="40"
              rows="8"
            ></textarea>
            <label for="description-label1">Beschreibung</label>
          </div>

          <div class="floating-title">
            <input
              type="number"
              step="10"
              name="deposit-label1"
              id="deposit-label1"
              placeholder=" "
              required
              v-model="store.deposit"
            />
            <label for="deposit-label1">Kaution in EUR</label>
          </div>

          <div id="adress-fields">
            <div class="floating-title">
              <input
                type="text"
                id="zipcode-label1"
                name="zipcode-label1"
                pattern="\d{5}"
                placeholder=" "
                required
                v-model="store.zipcode"
              />
              <label for="zipcode-label1">PLZ</label>
            </div>

            <div class="floating-title">
              <input
                type="text"
                name="town-label1"
                id="town-label1"
                placeholder=" "
                required
                v-model="store.town"
              />
              <label for="town-label1">Ort</label>
            </div>
          </div>
          <div class="button-container">
            <ButtonGlobal type="submit" :label="'Gegenstand Anbieten'" />
          </div>
        </section>

        <section class="offer-card-hobby" v-else-if="selectedOption === 'hobby'">
          <h3>Gemeinsamkeit anbieten:</h3>
          <select name="hobby-list" id="hobby-list-id" v-model="hobbyCategory">
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

          <div class="floating-title">
            <input
              type="text"
              name="picture2"
              id="picture2"
              placeholder=" "
              v-model="store.picture"
            />
            <label for="picture2">Bild-URL</label>
          </div>

          <div class="floating-title">
            <input
              type="text"
              name="title-label2"
              id="title-label2"
              placeholder=" "
              required
              v-model="store.title"
            />
            <label for="title-label2">Titel </label>
          </div>

          <div class="floating-title">
            <textarea
              type="textarea"
              name="description-label2"
              id="description-label2"
              placeholder=" "
              required
              v-model="store.description"
              cols="50"
              rows="10"
            ></textarea>
            <label for="description-label2">Beschreibung</label>
          </div>

          <div id="adress-fields">
            <div class="floating-title">
              <input
                type="text"
                id="zipcode-label2"
                name="zipcode-label2"
                pattern="\d{5}"
                placeholder=" "
                required
                v-model="store.zipcode"
              />
              <label for="zipcode-label2">PLZ</label>
            </div>

            <div class="floating-title">
              <input
                type="text"
                name="town-label2"
                id="town-label2"
                placeholder=" "
                required
                v-model="store.town"
              />
              <label for="townel2-lab">Ort</label>
            </div>
          </div>
          <br />
          <input
            type="checkbox"
            name="remote-label2"
            id="remote-label2"
            value="remote"
            v-model="store.remote"
          />
          <label for="remote-label2"> Remote möglich </label>

          <div class="button-container">
            <ButtonGlobal type="submit" :label="'Gemeinsamkeit Anbieten'" />
          </div>
        </section>
      </form>
    </main>
    <FooterNavComponent />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDatabaseStore } from '@/stores/database'
import FooterNavComponent from '@/components/Layout/FooterNavComponent.vue'
import HamburgerNavComponent from '@/components/Layout/HamburgerNavComponent.vue'
import ButtonGlobal from '@/components/ButtonGlobalComponent.vue'

const store = useDatabaseStore()
const selectedOption = ref('') //initialize the selected radio-option gegenstand or gemeinsamkeit
const itemCategory = ref('')
const hobbyCategory = ref('')
const handleSubmit = () => {
  if (selectedOption.value === 'item') {
    store.category = itemCategory.value
  } else if (selectedOption.value === 'hobby') {
    store.category = hobbyCategory.value
  }
  store.createOffer()
}
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
input[type='checkbox'] {
  margin-right: 5px;
}
.content {
  margin-bottom: 100px;
}

.hr {
  border: none;
  height: 1px;
  background-color: black;
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

#adress-fields {
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

#zipcode-label1,
#zipcode-label2 {
  width: 30vw;
}

#town-label1,
#town-label2 {
  width: 50vw;
}

#item-list-id,
#hobby-list-id {
  width: 50%;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  margin-top: 8px;
  margin-bottom: 8px;
  border-radius: 10px;
  border: 2px solid #fff6e9;
  background-color: #fff6e9;
  font-size: 14px;
  color: #1e293b;
}

select:focus {
  outline: none;
}
</style>
