<script>
import RecipeList from "@/components/RecipeList.vue";
import data from '../datas/data.json';

export default {
  name: "FavoritesPage",
  components: { RecipeList },
  computed: {
    favoriteRecipes() {
      return data.recipes.filter(recipe => recipe.favorites);
    }
  }
};
</script>

<template>
  <v-container>
    <h1 class="page-title">Your Favorite Recipes</h1>
    <RecipeList :recipes="favoriteRecipes" />
  </v-container>
</template>

<style>
.page-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 16px;
}
</style>
