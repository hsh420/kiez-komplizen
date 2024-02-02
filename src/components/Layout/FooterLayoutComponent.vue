<template>
  <footer class="footer-container">
    <section>
      <span class="footer-accent-bar"></span>
      <div class="footer-accent-bar-secondary"></div>
      <img
        class="footer-triangle-image"
        alt="SchwarzesDreieck"
        src="@/assets/pictures-layout/bottom_triangle_black.png"
      />
    </section>
  </footer>
</template>
<script>
export default {
  name: 'FooterLayout'
}
</script>
<style scoped>
.footer-container {
  height: 52px;
  width: 100vw;
}
.footer-accent-bar {
  background-color: #f39305;
  height: 3px;
  left: 0;
  position: absolute;
  top: 12px;
  transform: rotate(-3.17deg);
  width: 100%;
}
.footer-accent-bar-secondary {
  background-color: #f39305;
  height: 3px;
  left: 1px;
  position: absolute;
  top: 16px;
  transform: rotate(3.36deg);
  width: 100%;
}
.footer-triangle-image {
  height: 42px;
  left: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
