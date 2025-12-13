<script>
export default {
  name: "HomeView",
  data() {
    return {
      recipesCount: 128
    }
  },
  
}
</script>

<template>
    <v-container fluid class="pa-0">
        <div class="banner">
            <div class="overlay"></div>
            <div class="banner-content">
                <h1 class="banner-title">All your recipes in one place</h1>
                <p class="banner-subtitle">Your personal cookbook for everyday inspiration</p>
                <div class="banner-counter">
                    <span class="counter-number">{{ recipesCount }}</span>
                    <span class="banner-subtitle">recipes available</span>
                </div>
            </div>
        </div>
    </v-container>
    <v-container fluid class="pa-0 d-flex justify-center align-center mt-14 mb-14">
        <v-btn color="green" size="large" rounded="sm" to="/recipes">Browse Recipes</v-btn>
    </v-container>
</template>

<style>
.banner {
    position: relative;
    height: 596px;
    background-image: url(./public/photo-1504674900247-0877df9cc836.jpg);
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
    font-size: 48px;
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