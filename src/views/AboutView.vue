<template>
  <div class="about">
    <h1>This is an about page!</h1>
  </div>
  <ButtonGlobal :label="'HALLOOOOO'"/>
</template>

<script setup>
import ButtonGlobal from '@/components/ButtonGlobal.vue';
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
