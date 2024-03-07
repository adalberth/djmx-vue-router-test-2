<script>
import ProjectThumbnail from '@/components/ProjectThumbnail.vue'
export default {
    components: {
        ProjectThumbnail,
    },
}
</script>

<template>
    <div>
        <h1>Projects</h1>
        <div class="grid grid-cols-3 gap-10">
            <ProjectThumbnail title="Project 1" image="https://via.placeholder.com/300" url="/projects/branding-cola"></ProjectThumbnail>
            <ProjectThumbnail title="Project 2" image="https://via.placeholder.com/300" url="/projects/2"></ProjectThumbnail>
            <ProjectThumbnail title="Project 3" image="https://via.placeholder.com/300" url="/projects/3"></ProjectThumbnail>
        </div>
    </div>
</template>
