<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav class="bg-red-400 p-4 space-x-5">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
    </nav>
    <RouterView />
</template>

<style scoped></style>
