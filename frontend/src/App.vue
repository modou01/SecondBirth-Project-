// src/App.vue
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* Réinitialiser les marges et paddings globaux */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}

/* Assure que le header prend toute la largeur sans espace */
.header {
  width: 100%;
  position: relative;
  z-index: 1000;
}

</style>
