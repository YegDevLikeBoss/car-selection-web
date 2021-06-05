import { createRouter, createWebHistory } from 'vue-router'
import Featured from '../views/Featured.vue'
import Make from '../views/Make.vue'
import Model from '../views/Model.vue'

const routes = [
    {
        path: '/',
        name: 'Featured',
        component: Featured
    },
    {
        path: '/:make',
        name: 'About',
        component: Make
    },
    {
        path: '/car/:id',
        name: "Model",
        component: Model
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
