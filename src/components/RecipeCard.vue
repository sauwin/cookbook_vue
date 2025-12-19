<script>
import { useRouter } from 'vue-router'

export default {
    name: 'RecipeCard',
    props: {
        recipe: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            router: useRouter()
        }
    },
    methods: {
        goToDetail() {
            this.router.push(`/recipe/${this.recipe.slug}`)
        },
        getImage(imageName) {
            return new URL(`../assets/${imageName}`, import.meta.url).href;
        }
    }
}
</script>

<template>
<v-card class="recipe-card" elevation="2">
    <v-img :src="getImage(recipe.image)" height="180" cover />

    <v-card-title class="text-h6">{{ recipe.title }}</v-card-title>

    <v-card-subtitle>{{ recipe.time }} min</v-card-subtitle>

    <v-card-text class="text-body-2">{{ recipe.description }}</v-card-text>

    <v-card-actions class="justify-space-between">
        <v-btn color="#2b9931" variant="flat" @click="goToDetail">View recipe</v-btn>

        <v-btn icon variant="text">
            <v-icon :color="recipe.favorites ? 'red' : 'grey'">mdi-heart</v-icon>
        </v-btn>
    </v-card-actions>
</v-card>
</template>

<style>
.recipe-card {
    border-radius: 16px;
}
</style>
