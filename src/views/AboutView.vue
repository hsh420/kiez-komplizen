<template>
   <HeaderLayout />
  <div class="about">
    <h1>This is an about page!</h1>
  </div>
   <FooterLayout />
</template>

<script setup>
import HeaderLayout from '@/components/Layout/HeaderLayout.vue'
import FooterLayout from '@/components/Layout/FooterLayout.vue'
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
