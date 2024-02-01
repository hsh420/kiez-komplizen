<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HeaderLayout from '@/components/Layout/HeaderLayout.vue'
// import FooterLayout from '@/components/Layout/FooterLayout.vue'
import { useAuthStore } from './stores/auth'
import { onMounted } from 'vue'
const store = useAuthStore()
onMounted(() => {
  store.init()
})
</script>

<template>
  <header>
    <div class="wrapper">
      <!-- <HeaderLayout /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/offer">Anbieten</RouterLink>
        <button v-if="store.$state.isLoggedIn === true" v-on:click="store.logout()">Logout</button>
      </nav>
    </div>
  </header>
  <!-- <FooterLayout /> -->
  <RouterView />
</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
