<template>
  <main>
    <div class="fullscreen">
      <div class="flex-center">
        <img
          class="logo-img"
          alt="Hintergrund-Bild"
          src="@/assets/logo-final/Kiezkomplizen_logo.png"
        />
        <img class="bg-img" alt="Hintergrund-Bild" src="@/assets/hg_kk_iPhone15promax2.png" />
      </div>
      <div class="backdrop-shadow">
        <section class="all-p-and-button-container1">
          <p class="first-p uppercase p-left"></p>
          <h1>Du wurdest erfolgreich abgemeldet!</h1>
          <p class="second-p uppercase p-right">Schade, dass du uns schon verlässt!</p>
        </section>

        <section class="all-p-and-button-container2">
          <p class="third-p p-center">
            Wir hoffen, dich bald wieder auf unserer Plattform<br /><span class="corp-orange bold"
              >Kiez-Kompliezen</span
            >
            begrüßen zu dürfen.<br />
            <span class="bold">Vielen Dank für die Nutzung unserer Dienste.</span><br />
            Wenn du dich erneut anmelden möchtest, klicke bitte auf den<br /><span
              class="corp-orange bold"
              >Login-Button unten</span
            >.
            <span class="bold"
              ><br />Bei Fragen oder Anliegen stehen wir dir gerne zur Verfügung.</span
            ><span class="bold"><br />Du kannst du uns jederzeit kontaktieren.</span>
          </p>
        </section>

        <section class="link-login">
          <RouterLink :to="{ name: 'login' }"><button class="button">Login</button></RouterLink>
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
@import url('@/assets/base.css');

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
  margin-top: 50px;
}

.flex-center {
  display: flex;
  justify-content: center;
}

.all-p-and-button-container1 {
  position: absolute;
  bottom: 0;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 320px;
}

.all-p-and-button-container2 {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  margin-left: 30px;
}

.link-login {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
}

.first-p,
.second-p {
  font-size: 16px;
}

.third-p,
.last-p {
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
  font-weight: bolder;
}

.uppercase {
  text-transform: uppercase;
}
/* 
.bold {
  font-weight: bolder;
  color: white;
} */

.button {
  border: none;
  background: var(--cc-orange);
  color: var(--cc-text-darkmode);
  border-radius: 50px;
  padding: 14px 80px 14px 80px;
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  position: fixed;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
}
</style>
