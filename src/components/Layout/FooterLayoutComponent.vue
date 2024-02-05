<template>
  <div class="footer-container">
    <section>
      <span class="footer-accent-bar"></span>
      <div class="footer-accent-bar-secondary"></div>
      <img
        class="footer-triangle-image"
        alt="SchwarzesDreieck"
        src="@/assets/pictures-layout/bottom_triangle_black.png"
      />
    </section>
  </div>

  <FooterNavComponent />
</template>
<script>
import FooterNavComponent from './FooterNavComponent.vue'

export default {
  name: 'FooterLayout',
  components: { FooterNavComponent }
}
</script>
<style scoped>
.footer-container {
  height: 60px;
  width: 100vw;
  background-color: #fff6e9;
  position: fixed;
  bottom: 0;
}
.footer-accent-bar {
  background-color: #f39305;
  height: 3px;
  left: 0;
  position: fixed;
  transform: rotate(-3.17deg);
  bottom: 40px;
  width: 100%;
}
.footer-accent-bar-secondary {
  background-color: #f39305;
  height: 3px;
  left: 1px;
  position: fixed;
  transform: rotate(3.36deg);
  bottom: 30px;
  width: 100%;
}
.footer-triangle-image {
  height: 42px;
  left: 0;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
