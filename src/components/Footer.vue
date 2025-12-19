<script>
export default {
    name: "Footer"
}
</script>

<template>
<v-footer position="fixed" color="#2b9931" elevation="3" height="72">
    <v-container class="text-center pa-0">
        <div class="d-flex justify-center ga-3 mb-1">
            <v-btn icon size="small" variant="text" href="https://github.com/sauwin" target="_blank">
                <v-icon size="20" color="white">mdi-github</v-icon>
            </v-btn>
            <v-btn icon size="small" variant="text" href="https://www.instagram.com/druziuk.maksym" target="_blank">
                <v-icon size="20" color="white">mdi-instagram</v-icon>
            </v-btn>
            <v-btn icon size="small" variant="text" href="https://mail.google.com/mail/?view=cm&fs=1&to=druziukmaksym@gmail.com" target="_blank">
                <v-icon size="20" color="white">mdi-gmail</v-icon>
            </v-btn>
            <v-btn icon size="small" variant="text" href="https://www.facebook.com/druzuk.maxim" target="_blank">
                <v-icon size="20" color="white">mdi-facebook</v-icon>
            </v-btn>
        </div>
        <div class="footer">© 2025 Maksym Druziuk</div>
    </v-container>
</v-footer>
</template>

<style>
.footer {
    font-size: 13px;
    color: #ffffff;
    margin-top: 2px;
    margin-bottom: 6px;
    line-height: 1.2;
    font-weight: 600;
}
</style>