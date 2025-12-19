<script>
export default {
  name: "HomeView",
  data() {
    return {
      recipesCount: 128,
      images_car: [
        new URL('@/assets/images/carousel/food1.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food2.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food3.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food4.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food5.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food6.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food7.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food8.jpg', import.meta.url).href,
        new URL('@/assets/images/carousel/food9.jpg', import.meta.url).href,
      ]
    }
  }
}
</script>

<template>
    <v-container fluid class="pa-0">
        <div class="banner">
            <div class="overlay"></div>
            <div class="banner-content">
                <h1 class="banner-title">ALL YOUR RECIPES IN ONE PLACE</h1>
                <p class="banner-subtitle">Your personal cookbook for everyday inspiration</p>
                <div class="banner-counter">
                    <span class="counter-number">{{ recipesCount }}</span>
                    <span class="banner-subtitle">recipes available</span>
                </div>
            </div>
        </div>
    </v-container>

    <v-container class="py-16 mt-14">
        <v-row align="center">
            <v-col cols="12" md="6" >
                <h2 class="section-title">Discover New Recipes</h2>
                <p class="section-text">
                    Explore a growing collection of homemade recipes.
                    Find inspiration for every day cooking, from quick meals
                    to special dishes.
                </p>
                <v-btn color="#2b9931" size="large" class="mt-4" to="/recipes">Browse Recipes</v-btn>
            </v-col>
            
            <v-col cols="12" md="6" class="text-center">
                <v-icon size="120" color="#2b9931" > mdi-silverware-fork-knife</v-icon>
            </v-col>
        </v-row>
    </v-container>

    <v-container class="py-16 mt-14">
        <v-row align="center">
            <v-col cols="12" md="6" class="text-center">
                <v-icon size="120" color="#2b9931">mdi-notebook-edit-outline</v-icon>
            </v-col>

            <v-col cols="12" md="6">
                <h2 class="section-title">Add Your Own Recipes</h2>
                <p class="section-text">
                    Create your personal cookbook.
                    Save your favorite recipes and build your own collection
                    in one place.
                </p>
                <v-btn color="#2b9931" size="large" class="mt-4" to="/addrecipe" >Add Recipe</v-btn>
            </v-col>
        </v-row>
    </v-container>

    <v-container fluid class="py-16 pa-0">
        <v-carousel height="740" hide-delimiter-background show-arrows="hover" cycle>
            <v-carousel-item v-for="(img, i) in images_car" :key="i">
                <v-sheet height="100%" class="d-flex align-center justify-center">
                    <v-img :src="img" cover height="100%">
                        <div class="carousel-overlay">
                            <h3>Anyone CAN Cook</h3>
                        </div>
                    </v-img>
                </v-sheet>
            </v-carousel-item>       
        </v-carousel>
    </v-container>

    <v-container class="mb-6 mt-16 pa-0 px-0 banner-content">
        <div class="mb-10 feature-text">
            <h1>Manage your favorite recipes online</h1>
        </div>
        <v-row justify="center ga-1">
            
            <v-col cols="4" md="4">
            <v-sheet class="feature-item" elevation="0" rounded="xl">
                <router-link to="/recipes" class="sheet-link">
                    <v-icon size="48" color="#2b9931">mdi-magnify</v-icon>
                    <h3>Search for recipes</h3>
                    <p>Discover something new in cooking</p>
                </router-link>
            </v-sheet>
            </v-col>

            <v-col cols="4" md="4">
            <v-sheet class="feature-item" elevation="0" rounded="xl">
                <router-link to="/favorites" class="sheet-link">
                    <v-icon size="48" color="#2b9931">mdi-heart</v-icon>
                    <h3>Saved favorites</h3>
                    <p>Save your favorite recipes</p>
                </router-link>
            </v-sheet>
            </v-col>

            <v-col cols="4" md="4">
            <v-sheet class="feature-item mb-16" elevation="0" rounded="xl">
                <router-link to="/addrecipe" class="sheet-link">
                    <v-icon size="48" color="#2b9931">mdi-plus-circle</v-icon>
                    <h3>Create a recipe</h3>
                    <p>Create your own recipes</p>
                </router-link>
            </v-sheet>
            </v-col>

        </v-row>
    </v-container>
</template>

<style>
.carousel-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 28px;
  font-weight: 600;
}

.section-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
    font-family: 'Montserrat', sans-serif;
}

.section-text {
    font-size: 18px;
    color: #555;
    max-width: 500px;
    font-family: 'Montserrat', sans-serif;
}

.feature-text {
    font-size: 16px;
    margin-bottom: 16px;
    color: black;
    text-decoration: none;
}

.sheet-link {
  display: block;
  height: 100%;
  color: inherit;
  text-decoration: none;
}

.feature-item {
    text-align: center;
    cursor: pointer;
    padding: 32px;
    transition: transform 0.2s ease;
    color: black;
    cursor: pointer;
    text-decoration: none;
}

.feature-item:hover {
    transform: translateY(-10px);
}

.banner {
    position: relative;
    height: 740px;
    background-image: url(./banner.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
}

.overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
}

.banner-content {
    position: relative;
    text-align: center;
    color: white;
    max-width: 700px;
    padding: 20px;
}

.banner-title {
    font-size: 38px;
    font-weight: 600;
    margin-bottom: 16px;
}

.banner-subtitle {
    font-size: 18px;
    opacity: 0.9;
    margin-bottom: 24px;
    font-weight: 600;
}

.banner-counter {
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.counter-number {
    font-size: 64px;
    font-weight: 700;
    line-height: 1;
}

.counter-text {
    font-size: 18px;
    opacity: 0.85;
    letter-spacing: 0.5px;
}
</style>