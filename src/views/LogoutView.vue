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
      <h1 class="third-p p-center corp-orange">Danke tschau!</h1>

      <p>Schauste bald mal wieder rein, wa?</p>

      <RouterLink :to="{ name: 'login' }"><button class="button">Login</button></RouterLink>
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

.img-container {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  z-index: 2;
}

.bg-img-large {
  display: none;
}

.logo-img {
  top: 20px;
  width: 250px;
  position: absolute;
  object-fit: cover;
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
  padding-bottom: 70px;
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

.bold {
  color: black;
  font-weight: 600;
}

.button {
  margin: 30px 0 15px 0;
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

.corp-orange {
  text-shadow: 1.3px 1px 1px black;
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
}
</style>
