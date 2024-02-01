<template>
  <header class="header-container">
    <section class="header-content">
      <div class="header-nav-group">
        <div class="header-decor-group">
          <span class="header-accent-line"></span>
          <img
            class="header-triangle-decor"
            alt="SchwarzesDreieck"
            src="@/assets/pictures-layout/top_triangle_black.png"
          />
        </div>
        <RouterLink :to="{ name: 'home' }">
          <img
            class="header-logo"
            alt="LogoKiezKomplizen"
            src="@/assets/pictures-layout/kiezkomplizen.png"
        /></RouterLink>
      </div>
    </section>
  </header>
</template>
<script>
export default {
  name: 'HeaderLayout'
}
</script>

<style scoped>
.header-container {
  height: 135px;
  width: 430px;
}
.header-container .header-content {
  background-color: #fff6e9;
  background-size: 100% 100%;
}
.header-container .header-nav-group {
  height: 112px;
  position: relative;
  top: 23px;
}
.header-container .header-decor-group {
  height: 38px;
  left: 0;
  position: absolute;
  top: 74px;
  width: 430px;
}
.header-container .header-accent-line {
  background-color: var(--cc-orange);
  height: 3px;
  left: -1px;
  position: absolute;
  top: 17px;
  transform: rotate(-4.6deg);
  width: 431px;
}
.header-container .header-triangle-decor {
  height: 28px;
  left: 0;
  position: absolute;
  top: 10px;
  width: 430px;
}
.header-container .header-logo {
  position: absolute;
  width: 188px;
  height: 63.77px;
  top: 0;
  left: 221px;
  transform: rotate(-4.9deg);
}
</style>
