<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

</script>

<template>
  <div id="app">
    <Header />

    <main>
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
* {
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: #F5F1ED;
  color: #3D2C25;
  
}
main {
  min-height: calc(100vh - 160px); /* чтобы футер не прилипал к середине */
}

</style>
