<script>
import { useRecipesStore } from '@/stores/recipes'

export default {
  name: 'RecipeCard',
  props: {
    recipe: { type: Object, required: true }
  },
  methods: {
    detail() {
      this.$router.push(`/recipe/${this.recipe.slug}`)
    },

    getImage(imageName) {
      return new URL(`../assets/${imageName}`, import.meta.url).href;
    },

    favorite() {
      const store = useRecipesStore()
      store.favorite(this.recipe.id)
    }
  }
}
</script>

<template>
<v-container class="pa-0">
    <v-card class="recipe-card" elevation="2">
        <v-img :src="getImage(recipe.image)" height="180" cover />

        <v-card-title class="text-h6">{{ recipe.title }}</v-card-title>

        <v-card-subtitle>{{ recipe.time }} min</v-card-subtitle>

        <v-card-text class="text-body-2">{{ recipe.description }}</v-card-text>

        <v-card-actions class="justify-space-between">
            <v-btn color="#2b9931" variant="flat" @click="detail">View recipe</v-btn>

            <v-btn icon variant="text" @click="favorite">
                <v-icon :color="recipe.favorites ? 'red' : 'grey'">mdi-heart</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</v-container>
</template>

<style>
.recipe-card {
    border-radius: 16px;
    transition: transform 0.2s ease;
}

.recipe-card:hover {
    transform: scale(1.01);
}
</style>
