<script>
  import data from './datas/data.json';
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';

  export default {
    components: { Header, Footer },
    data() {
      return {
        recipes: data.recipes
      }
    },

  }
</script>

<template>
<v-app class="bg-grey-lighten-4">
  <Header />
  <v-main>
    <router-view :key="$route.fullPath"/>
  </v-main>
  <Footer />
</v-app>
</template>

<style>

</style>