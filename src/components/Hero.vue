<script>
export default {
    props: {
        title: String,
        media: String,
    },
}
</script>
<template>
    <section>
        <h1>{{ title }}</h1>
        <img :src="media" alt="Hero Image" />
    </section>
</template>
