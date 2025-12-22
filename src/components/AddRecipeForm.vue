<script>
import { useRecipesStore } from '@/stores/recipes'

export default {
    name: "AddRecipeForm",
    data() {
        return {
            recipe: {
                title: "",
                slug: "",
                description: "",
                ingredients: "",
                steps: "",
                time: null,
                image: "",
                favorites: false
            }
        };
    },
    methods: {
        submitForm() {
            const store = useRecipesStore()
            store.addRecipe({
                ...this.recipe,
                id: Date.now(),
                ingredients: this.recipe.ingredients.split("\n"),
                steps: this.recipe.steps.split("\n")
            })

            this.recipe = {
            title: "",
            slug: "",
            description: "",
            ingredients: "",
            steps: "",
            time: null,
            image: "",
            favorites: false
            }
        }
    }
};
</script>

<template>
<v-form @submit.prevent="submitForm">
    <v-text-field v-model="recipe.title" label="Title" required/>
    <v-text-field v-model="recipe.slug" label="Slug (omelette)" required/>
    <v-text-field v-model="recipe.time" type="number" label="Cooking time (minutes)"/>
    <v-text-field v-model="recipe.image" label="Image filename (omelette.jpg)"/>
    <v-textarea v-model="recipe.description" label="Description" rows="3"/>
    <v-textarea v-model="recipe.ingredients" label="Ingredients (one per line)" rows="4"/>
    <v-textarea v-model="recipe.steps" label="Steps (one per line)" rows="4"/>
    <div align="right">
        <v-btn type="submit" color="#2b9931" size="large" class="mt-4 mb-6 mr-16">Add recipe</v-btn>
    </div>
</v-form>
</template>


<style>
    
</style>