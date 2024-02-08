<template>
  <div class="content">
    <header class="header-container">
      <section>
        <RouterLink :to="{ name: 'home' }">
          <img
            class="header-logo"
            alt="LogoKiezKomplizen"
            src="@/assets/pictures-layout/kiezkomplizen.png"
        /></RouterLink>
        <div class="header-decor-group">
          <span class="header-accent-line"></span>
          <img
            class="header-triangle"
            alt="SchwarzesDreieck"
            src="@/assets/pictures-layout/top_triangle_black.png"
          />
        </div>
      </section>
    </header>
    <HamburgerNavComponent v-if="showBurgerMenu()" />
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import HamburgerNavComponent from './HamburgerNavComponent.vue'

const router = useRouter()

const showBurgerMenu = () =>
  router.currentRoute.value.name !== 'login' &&
  router.currentRoute.value.name !== 'registration' &&
  router.currentRoute.value.name !== 'registration-success'
</script>

<style scoped>
.content {
  margin-top: 135px;
}

.header-container {
  height: 135px;
  width: 100vw;
  background-color: #fff6e9;
  position: fixed;
  top: 0;
}
.header-logo {
  position: absolute;
  width: 188px;
  height: 63.77px;
  top: 15px;
  right: 15px;
  transform: rotate(-4.9deg);
}
.header-decor-group {
  left: 0;
  position: absolute;
  top: 110px;
  width: 100vw;
}

.header-triangle {
  width: 100%;
}
.header-accent-line {
  background-color: var(--cc-orange);
  height: 3px;
  left: -1px;
  position: absolute;
  top: 0;
  transform: rotate(-4.6deg);
  width: 100%;
}
</style>
