<script>

</script>

<template>
<v-container align="center" class="mt-16" height="532">
    <v-sheet class="nfp mt-16">
        <v-icon size="48" color="red">mdi-alert</v-icon>
        <h3>ERROR 404 - Page Not Found!</h3>
        <router-link to="/">
            <v-btn color="red" size="large" class="mt-4">Return to home page</v-btn>
        </router-link>
    </v-sheet>
</v-container>
</template>

<style>
.nfp {
    text-align: center;
    cursor: pointer;
    padding: 32px;
    transition: transform 0.2s ease;
    color: black;
    cursor: pointer;
    text-decoration: none;
}
</style>