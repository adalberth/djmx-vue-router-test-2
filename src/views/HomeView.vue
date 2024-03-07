<script>
import Hero from '@/components/Hero.vue'
export default {
    components: {
        Hero,
    },
}
</script>

<template>
    <Hero media="http://placekitten.com/1024" title="Velkommen til min forside"></Hero>
    <main style="background-color: yellow; padding: 2rem">Hello From HomeView!</main>
</template>
