<template>
  <main>
    <div class="flex-center">
      <div class="img-container">
        <img
          class="logo-img"
          alt="Logo Kiez-Komplizen"
          src="@/assets/logo-final/Kiezkomplizen_logo.png"
        />
      </div>
    </div>
    <section class="all-p-container">
      <p class="third-p p-center">
        Werde ein <span class="corp-orange">Kiez-Komplize:</span><br />
        Leihe und verleihe Gegenstände oder<br />
        finde jemanden für gemeinsame Hobbys.<br />
        Kostenlos und gleich nebenan.
      </p>
      <RouterLink to="/about"
        ><p class="corp-orange">Du willst mehr über uns erfahren?</p></RouterLink
      >
      <RouterLink :to="{ name: 'login' }"><button class="button">Login</button></RouterLink>
      <p class="last-p">
        Noch nicht dabei?
        <RouterLink to="/registration"
          ><span class="corp-orange registration">Registrieren</span></RouterLink
        >
      </p>
    </section>
    <img class="bg-img" alt="Hintergrund-Bild" src="@/assets/hg_kk_iPhone15promax2.png" />
    <img class="bg-img-large" src="@/assets/hg-kiezkomplizen.webp" alt="Hintergrund-Bild" />
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
@import url('@/assets/base.css');

p {
  color: var(--cc-text-lightmode);
}

.corp-orange {
  text-shadow: 1.3px 1px 1px black;
}

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  z-index: 2;
}

.registration {
  font-size: 0.9rem;
}

.logo-img {
  top: 20px;
  width: 250px;
  position: absolute;
  object-fit: cover;
}

.bg-img-large {
  display: none;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.all-p-container {
  background: linear-gradient(transparent, #000);
  margin-top: 300px;
  color: var(--cc-text-lightmode);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 50px;
}

.link-about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.login-button-with-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.third-p,
.last-p {
  font-weight: 400;
}

.last-p {
  color: #fff;
}

.p-center {
  text-align: center;
}

.corp-orange {
  color: var(--cc-orange);
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
}

button:hover {
  background-color: var(--cc-orange);
}

.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

@media screen and (min-height: 750px) {
  .logo-img {
    top: 40px;
  }
  .all-p-container {
    padding-bottom: 100px;
  }

  .button {
    margin: 3rem 0 1.5rem 0;
  }
}

@media screen and (min-width: 700px) {
  .logo-img {
    width: 600px;
  }
  .bg-img {
    display: none;
  }
  .bg-img-large {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .all-p-container {
    padding-bottom: 40px;
  }
  .registration {
    font-size: 1.5rem;
  }
}
</style>
