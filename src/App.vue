<script>
  import data from './datas/data.json';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: { Header, Footer },
    data() {
      return {

      }
    },

  }

</script>

<template>
  <v-app>
    <Header></Header>
    <router-view />
    <Footer></Footer>
  </v-app>
</template>

<style>

</style>