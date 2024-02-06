<template>
  <div class="about">
    <h1>This is an about page!</h1>
  </div>

  <main>
    <div class="all-p-container">
      <p class="first-p uppercase p-left">
        Du brauchst etwas Bestimmtes aber willst es nicht gleich kaufen?
      </p>
      <p class="second-p uppercase p-right">
        Du hast ein bestimmtes Hobby und suchst Leute die mitmachen?
      </p>
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');

.all-p-container {
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.first-p,
.second-p {
  font-size: 16px;
}

.p-left {
  width: 90%;
  align-self: flex-start;
}

.p-right {
  width: 90%;
  align-self: flex-end;
  text-align: right;
}

.uppercase {
  text-transform: uppercase;
}

</style>
