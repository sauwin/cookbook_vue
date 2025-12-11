<script>
  import data from './datas/data.json';
  import Header from './components/Header.vue';

  export default {
    components: { Header },
    data() {
      return {

      }
    },

  }

</script>

<template>
  <Header></Header>
  <main>
    <router-view :key="$route.fullPath"/>
  </main>
</template>

<style>

</style>