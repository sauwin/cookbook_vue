<script>
export default {
  name: 'Header',
  data() {
    return {}
  }
}
</script>

<template>
    <header>
        <nav>
            <router-link to="/" class="">
                Cookbook
            </router-link>
            <router-link to="/" active-class="text-green-700" class="">
                Home
            </router-link>                        
            <router-link to="/recipes" active-class="text-green-700" class="">
                Recipes
            </router-link>                        
            <router-link to="/favorites" active-class="text-green-700" class="">
                Favorites
            </router-link>
            <router-link to="/addrecipe" class="text-green">
                Add Recipe
            </router-link>
        </nav>
    </header>
</template>

<style>
</style>