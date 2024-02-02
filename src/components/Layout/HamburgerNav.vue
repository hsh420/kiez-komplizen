<template>
  <div class="container">
    <img src="@/assets/pictures-layout/hamburger-nav.png" alt="Menu" @click="toggleMenu" class="menu-icon"/>
    <nav class="menu" :class="{ open: isMenuOpen }">
      <router-link to="/settings"
        >Settings
        <img class="icon1" alt="Home Navigation" src="@/assets/pictures-layout/settings.png" /></router-link><br />
      <router-link to="/logout">Logout <img class="icon2" alt="Home Navigation" src="@/assets/pictures-layout/logout.png"/></router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
.container {
position: absolute;
top: 25px;
left: 25px;

}
.menu {
position:relative;
  display: none;
  padding: 10px;
}

.menu.open {
  display: block;
  background-color: black;
  width: 100px;
  border-radius: 8px;
}

.menu-icon {
  cursor: pointer;
  width: 30px;
  height: 30px;
}

.icon1 {
  height: 15px;
}

.icon2 {
  height: 18px;
}
</style>
