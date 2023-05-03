import { createRouter, createWebHistory } from 'vue-router'
import SelectorRange from './views/SelectorRange.vue'
import SignUp from './views/SignUp.vue'
import Portfolio from './views/Portfolio.vue'

const routes = [
    {
        path: '/',
        name: 'cvAndreu',
        component: SelectorRange
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes
})

export default router
