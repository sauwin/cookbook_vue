<script>
import { useRecipesStore } from '@/stores/recipes'

export default {
    name: 'DetailPage',

    computed: {
        recipe() {
            const store = useRecipesStore()
            const slug = this.$route.params.slug
            return store.getBySlug(slug) || null
        }
    },

     watch: {
        '$route.params.slug'(newSlug) {
            if (!this.recipe) {
                this.$router.replace('/notfound')
            }
        }
    },

    methods: {
        getImage(imageName) {
            return new URL(`../assets/${imageName}`, import.meta.url).href
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

                <v-chip color="#2b9931" class="mb-3 ml-4" text-color="white">
            ⏱       {{ recipe.time }} min
                </v-chip>

                <v-divider class="my-3"></v-divider>
                <h3 class="ml-4">Ingredients:</h3>
                <v-list dense>
                    <v-list-item v-for="(ing, index) in recipe.ingredients" :key="index">
                        {{ ing }}
                    </v-list-item>
                </v-list>

                <v-divider class="my-3"></v-divider>
                <h3 class="ml-4">Steps:</h3>
                <v-list dense>
                    <v-list-item v-for="(step, index) in recipe.steps" :key="index">
                            {{ index + 1 }}. {{ step }}
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</v-container>
</template>

<style>

</style>