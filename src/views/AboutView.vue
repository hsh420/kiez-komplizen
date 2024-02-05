<template>
   <HeaderLayoutComponent />
  <div class="about">
    <h1>This is an about page!</h1>
  </div>
   <FooterLayoutComponent />
</template>

<script setup>
import HeaderLayoutComponent from '@/components/Layout/HeaderLayoutComponent.vue';
import FooterLayoutComponent from '@/components/Layout/FooterLayoutComponent.vue';
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
