import { defineStore } from 'pinia'
import data from '@/datas/data.json'

export const useRecipesStore = defineStore('recipes', {
  state: () => ({
    recipes: data.recipes
  }),

  getters: {
    favorites() {
      return this.recipes.filter(r => r.favorites)
    },
    recipesCount() {
      return this.recipes.length
    },
    getBySlug: (state) => {
      return (slug) => state.recipes.find(r => r.slug === slug)
    }
  },

  actions: {
    favorite(id) {
      const recipe = this.recipes.find(r => r.id === id)
      if (recipe) {
        recipe.favorites = !recipe.favorites
      }
    },
    addRecipe(recipe) {
      this.recipes.push(recipe)
    }
  }
})