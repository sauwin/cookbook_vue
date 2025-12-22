<script>
import RecipeCard from './RecipeCard.vue'

export default {
    name: 'RecipeList',
    components: { RecipeCard },
    props: {
        recipes: { type: Array }
    }
}
</script>

<template>
<v-container fluid>
    <v-row dense>
        <v-col
            v-for="recipe in recipes" :key="recipe.id" cols="12" sm="6" md="4">
            <RecipeCard :recipe="recipe" />
        </v-col>
    </v-row>
</v-container>
</template>

<style>

</style>