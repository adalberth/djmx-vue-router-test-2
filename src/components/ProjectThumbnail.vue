<script>
export default {
    props: {
        title: String,
        image: String,
        url: String,
    },
}
</script>
<template>
    <div class="bg-gray-100 p-4 rounded-lg shadow-lg">
        <RouterLink :to="url">
            <img :src="image" alt="Project thumbnail" class="w-full h-48 object-cover rounded-lg" />
            <h2 class="text-xl font-semibold mt-2">{{ title }}</h2>
        </RouterLink>
    </div>
</template>
