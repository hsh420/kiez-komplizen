<template>
  <button class="button-global">{{ label }}</button>
</template>

<script>
export default {
  name: 'ButtonGlobal',
  props: { label: { type: String } }
}
</script>

<style scoped>
.button-global {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 20px 0;
  border: none;
  background: var(--cc-orange);
  color: var(--cc-text-darkmode);
  border-radius: 50px;
  padding: 14px 80px 14px 80px;
  position: relative;
  font-family: 'SourceSansPro-Semibold', sans-serif;
  font-size: 14px;
  font-weight: 600;
}

button:hover {
  background-color: orange;
}
</style>
