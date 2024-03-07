import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectBrandingCola from '../views/ProjectBrandingColaView.vue'

const router = createRouter({
    // history: createWebHashHistory(import.meta.env.BASE_URL),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView,
        },
        {
            path: '/projects/branding-cola',
            name: 'branding-cola',
            component: ProjectBrandingCola,
        },
    ],
})

export default router
