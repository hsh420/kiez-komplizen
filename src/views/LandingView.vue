<template>
  <main>
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
      <button class="button" type="submit">Login</button>
      <p class="last-p">Noch nicht dabei? <a class="bold" :href="dynamicUrl">Registrieren.</a></p>
    </section>
    <div class="backdrop-shadow"></div>
    <img class="bg-img" alt="Hintergrund-Bild" src="@/assets/hg_kk_iPhone15promax.png" />
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

p {
  color: var(--cc-text-darkmode);
  margin-top: 0;
}

.logo-img {
  top: 270px;
  left: 51px;
  width: 328px;
  height: 140px;
  position: relative;
  object-fit: cover;
  z-index: 3;
}

.all-p-and-button-container {
  z-index: 4;
  margin-top: 370px;
  position: relative;
  width: 430px;
  min-height: 931;
  min-width: 430px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.first-p,
.second-p {
  font-family: 'Abadi MT Condensed Extra Bold', sans-serif;
  font-size: 22px;
}

.third-p,
.last-p {
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 16px;
  font-weight: 400;
}

.p-right {
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

.backdrop-shadow,
.backdrop-shadow * {
  box-sizing: border-box;
}
.backdrop-shadow {
  width: 430px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 17.70833283662796%,
    rgba(0, 0, 0, 0.72) 29.16666567325592%
  );
  height: 560px;
  bottom: 0;
  position: fixed;
  z-index: 2;
}

.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: 1;
}
</style>
