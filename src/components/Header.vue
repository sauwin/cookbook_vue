<script>
export default {
    name: "Header"
}
</script>

<template>
<v-app-bar color="white">
    <v-spacer />
    <h1 class="logo">/e.CookBook</h1>
    <v-spacer /><v-spacer />
    <div class="d-flex align-center ga-4">
        <router-link to="/" class="nav-link" exact>Home</router-link>
        <router-link to="/recipes" class="nav-link">Recipes</router-link>
        <router-link to="/favorites" class="nav-link">Favorites</router-link>
        <v-btn to="/addrecipe" variant="flat" rounded="sl" color="#2b9931" class="ml-4">Add Recipe</v-btn>
    </div>
    <v-spacer />
</v-app-bar>
</template>

<style>
.logo {
    font-size: 22px;
    color: #444;
    cursor: pointer;
    text-decoration: none;
    font-weight: 540;
}

.nav-link {
    font-size: 18px;
    padding: 8px 16px;
    color: #444;
    text-decoration: none;
    border-radius: 20px;
    transition: 0.2s;
    font-weight: 500;
}

.nav-link:hover {
    background: #f2f2f2;
}

.router-link-active {
    color: #2b9931;
    background: #f2f2f2;
}
</style>
