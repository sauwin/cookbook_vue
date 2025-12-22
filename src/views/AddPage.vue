<script>
import AddRecipeForm from "@/components/AddRecipeForm.vue"

export default {
    name: "AddPage",
    components: { AddRecipeForm }
};
</script>

<template>
<v-container>
    <h1 class="page-title">Add new recipe</h1>
    <AddRecipeForm />
</v-container>
</template>

<style>

</style>