<script>
import recipesData from '@/datas/data.json'

export default {
    name: 'DetailPage',
    data() {
        return {
        recipe: null
        }
    },
    created() {
        const slug = this.$route.params.slug
        this.loadRecipe(slug)
    },
    watch: {
        '$route.params.slug'(newSlug) {
        this.loadRecipe(newSlug)
        }
    },
    methods: {
        loadRecipe(slug) {
            const found = recipesData.recipes.find(r => r.slug === slug)
            if (found) {
                this.recipe = found
            } else {
            this.$router.replace('/notfound')
            }
        },
        getImage(imageName) {
            return new URL(`../assets/${imageName}`, import.meta.url).href;
        }
  }
}
</script>

<template>
<v-container>
    <v-row>
        <v-col cols="12" md="8" class="mx-auto">
            <v-card elevation="3">
                <v-img :src="getImage(recipe.image)" height="400" cover></v-img>

                <v-card-title class="text-h4 font-weight-bold mt-5">
                    {{ recipe.title }}
                </v-card-title>

                <v-card-subtitle class="mb-3">
                    {{ recipe.description }}
                </v-card-subtitle>

                <v-chip color="green" class="mb-3 ml-4" text-color="white">
                ⏱   {{ recipe.time }} min
                </v-chip>

                <v-divider class="my-3"></v-divider>
                <h3 class="ml-4">Ingredients:</h3>
                <v-list dense>
                    <v-list-item v-for="(ing, index) in recipe.ingredients" :key="index">
                        <v-list-item-content>{{ ing }}</v-list-item-content>
                    </v-list-item>
                </v-list>

                <v-divider class="my-3"></v-divider>
                <h3 class="ml-4">Steps:</h3>
                <v-list dense>
                    <v-list-item v-for="(step, index) in recipe.steps" :key="index">
                        <v-list-item-content>
                        {{ index + 1 }}. {{ step }}
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</v-container>
<v-container align="center" class="mb-10">
    <router-link to="/recipes" class="mt-5">
        <v-btn color="#2b9931" variant="flat" size="large">Back to recipes</v-btn>
    </router-link>
</v-container>
</template>

<style>
h3 {
    font-weight: 600;
    margin-bottom: 8px;
}

</style>