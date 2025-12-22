<script>
import RecipeList from "@/components/RecipeList.vue"
import data from '../datas/data.json'
import { useRecipesStore } from "@/stores/recipes";

export default {
    name: "RecipesPage",
    components: { RecipeList },
    computed: {
        recipes() {
            const store = useRecipesStore()
            return store.recipes
        }
    }
};
</script>

<template>
<v-container>
    <h1 class="page-title">All Recipes</h1>
    <RecipeList :recipes="recipes" />
</v-container>
</template>

<style>

</style>
