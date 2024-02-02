<template>
  <!-- <main>
    <img class="logo-img" alt="Hintergrund-Bild" src="@/assets/logo-final/Kiezkomplizen_logo.png" />
    <section class="all-p-and-button-container">
      <p class="first-p uppercase p-left">
        Du brauchst etwas Bestimmtes <br />aber willst es nicht gleich kaufen?
      </p>
      <p class="second-p uppercase p-right">
        Du hast ein bestimmtes Hobby <br />und suchst Leute die mitmachen?
      </p>
      <p class="third-p p-center">
        Werde ein <span class="corp-orange bold">Kiez-Komplieze:</span><br />
        <span class="bold"> Leihe und verleihe Gegenstände</span> oder <br />
        <span class="bold">finde jemanden</span>für <span class="bold">gemeinsame Hobbys.</span
        ><br />
        Kostenlos und gleich nebenan.
      </p>
      <RouterLink :to="{ name: 'login' }"><button class="button">Login</button></RouterLink>
      <p class="last-p">
        Noch nicht dabei? <RouterLink to="/registration">Registrieren.</RouterLink>
      </p>
    </section>
    <div class="backdrop-shadow"></div>
    <img class="bg-img" alt="Hintergrund-Bild" src="@/assets/hg_kk_iPhone15promax.png" />
  </main> -->
  <main>
    <div class="fullscreen">
      <div class="flex-center">
        <img
          class="logo-img"
          alt="Hintergrund-Bild"
          src="@/assets/logo-final/Kiezkomplizen_logo.png"
        />
        <img class="bg-img" alt="Hintergrund-Bild" src="@/assets/hg_kk_iPhone15promax.png" />
      </div>
      <div class="backdrop-shadow">
        <section class="all-p-and-button-container">
          <p class="first-p uppercase p-left">
            Du brauchst etwas Bestimmtes aber willst es nicht gleich kaufen?
          </p>
          <p class="second-p uppercase p-right">
            Du hast ein bestimmtes Hobby und suchst Leute die mitmachen?
          </p>
          <p class="third-p p-center">
            Werde ein <span class="corp-orange bold">Kiez-Komplieze:</span>
            <span class="bold"> Leihe und verleihe Gegenstände</span> oder
            <span class="bold">finde jemanden</span>für <span class="bold">gemeinsame Hobbys.</span>
            Kostenlos und gleich nebenan.
          </p>
          <RouterLink :to="{ name: 'login' }"><button class="button">Login</button></RouterLink>
          <p class="last-p">
            Noch nicht dabei? <RouterLink to="/registration">Registrieren.</RouterLink>
          </p>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      dynamicUrl: 'XXXXXX-URL-MISSING!' //enter valid url
    }
  }
}
</script>

<style scoped>
@import url('@/assets/main.css');

.fullscreen {
  position: fixed;
  background-color: #000;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;
}

p {
  color: var(--cc-text-darkmode);
  margin-top: 0;
}

.logo-img {
  top: 30%;
  z-index: 300;
  width: 328px;
  height: 140px;
  position: absolute;
  object-fit: cover;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.all-p-and-button-container {
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.first-p,
.second-p {
  font-family: 'Abadi MT Condensed Extra Bold', sans-serif;
  font-size: 16px;
}

.third-p,
.last-p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 14px;
  font-weight: 400;
}

.p-left {
  width: 90%;
  align-self: flex-start;
}

.p-right {
  width: 90%;
  align-self: flex-end;
  text-align: right;
}

.p-center {
  text-align: center;
}

.corp-orange {
  color: var(--cc-orange);
}

.uppercase {
  text-transform: uppercase;
}

.bold {
  font-weight: bolder;
}

.button {
  margin: 10px 0 15px 0;
  border: none;
  background: var(--cc-orange);
  color: var(--cc-text-darkmode);
  border-radius: 50px;
  padding: 14px 80px 14px 80px;
  position: relative;
  font-family: 'SourceSansPro-Semibold', sans-serif;
  font-size: 15px;
}

button:hover {
  background-color: orange;
}

.backdrop-shadow,
.backdrop-shadow * {
  box-sizing: border-box;
}
.backdrop-shadow {
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 17.70833283662796%,
    rgba(0, 0, 0, 0.72) 29.16666567325592%
  );
  height: 70vh;
  bottom: 0;
  position: fixed;
}

.bg-img {
  position: absolute;
  top: -80px;
  left: 0;
  object-fit: cover;
  width: 100%;
}
</style>
