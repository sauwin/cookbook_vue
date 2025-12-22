<script>
import RecipeList from "@/components/RecipeList.vue";
import { useRecipesStore } from "@/stores/recipes";

export default {
  name: "FavoritesPage",
  components: { RecipeList },
  computed: {
    favoriteRecipes() {
      const store = useRecipesStore();
      return store.recipes.filter(recipe => recipe.favorites);
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
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 36px;
  margin-top: 36px;
  color: black;
  text-align: center;
}
</style>