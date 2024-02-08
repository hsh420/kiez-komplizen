<template>
  <div class="container">
    <h1>About us</h1>
    <div class="uppercase-text">
      <p class="first-p uppercase p-left">
        Du brauchst etwas Bestimmtes aber willst es nicht gleich kaufen?
      </p>
      <p class="second-p uppercase p-right">
        Du hast ein bestimmtes Hobby und suchst Leute die mitmachen?
      </p>
    </div>
   
    <div class="text-block"></div>
    <p>
      Im Rahmen eines Webentwicklungs-Bootcamps schlossen sich drei Teilnehmer zusammen: Jenny,
      Hendrik und Katharina. Jeder von ihnen brachte einzigartige Fähigkeiten und Ideen ein, aber
      ihr gemeinsames Ziel war es, eine App zu entwickeln, die Menschen dabei unterstützt,
      Gegenstände zu teilen und gemeinsame Interessen zu finden. Gemeinsam arbeiteten sie hart
      daran, die App zu gestalten und zu entwickeln. Sie überwanden Herausforderungen und
      Hindernisse, indem sie kreative Lösungen fanden und sich gegenseitig unterstützten. Für Jenny,
      Hendrik und Katharina war die Entwicklung von "Kiez Komplizen" nicht nur ein lern Projekt,
      sondern eine Erfahrung, die ihnen zeigte, wie Technologie Menschen zusammenbringen und das
      Leben verbessern kann.
    </p>
  </div>
  
</template>

<script setup></script>

<style scoped>
@import url('@/assets/main.css');
@import url('@/assets/base.css');

.container {
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--cc-egg);
  width: 350px;
  height: 600px;
  border-radius: 3px;
}

.text-block {
  margin-top: 30px;
}

h1 {
  margin-top: -70px;
  margin-bottom: 30px;
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
