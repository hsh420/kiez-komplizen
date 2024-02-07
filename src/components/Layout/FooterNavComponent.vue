<template>
  <nav class="container">
    <RouterLink to="/home"
      ><img class="item" alt="Home Navigation" src="@/assets/pictures-layout/home-icon.png"
    /></RouterLink>
    <RouterLink to="/search"
      ><img class="item" alt="Search Navigation" src="@/assets/pictures-layout/search-icon.png"
    /></RouterLink>
    <RouterLink to="/offer"
      ><img class="item" alt="Offer Navigation" src="@/assets/pictures-layout/offer-icon.png"
    /></RouterLink>
    <RouterLink to="/messages"
      ><img class="item" alt="Messenger" src="@/assets/pictures-layout/message-icon.png"
    /></RouterLink>
    <RouterLink to="/favorites"
      ><img class="item" alt="Favorit Navigation" src="@/assets/pictures-layout/favorites-icon.png"
    /></RouterLink>
  </nav>
</template>

<script>
export default {
  name: 'FooterNav'
}
</script>

<style scoped>
.container {
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 16px;
  background-color: var(--cc-egg);
  padding: 10px;
  position: fixed;
  bottom: 60px;
  left: 0;
  margin-bottom: auto;
}

.item {
  height: 25px;
  display: flex;
  justify-content: center;
}
</style>
