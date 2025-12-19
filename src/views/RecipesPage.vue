<script>
import RecipeList from "@/components/Recipelist.vue";
import data from '../datas/data.json';

export default {
    name: "RecipesPage",
    components: {
        RecipeList
    },
    data() {
        return {
            recipes: data.recipes
        };
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
.page-title {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 20px;
    color: black;
    text-align: center;
}
</style>
