<template>
<!--  <div id="app">-->
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
<!--    <router-view/>-->
<!--  </div>-->
  <section class="app">
    <router-view/>
  </section>
</template>
<script>
export default {
  name: 'app',
  created () {
    document.title = "Prodyme";
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap');
html, body, .app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.2px;
  background-color: #f8f8f8;
}
.anticon-menu svg path {
  fill: #FF7A34;
}
</style>
