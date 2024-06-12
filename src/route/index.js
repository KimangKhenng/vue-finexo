import { createRouter, createWebHistory } from 'vue-router'

// Import your components
const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Service = () => import('@/views/Service.vue')
const WhyUs = () => import('@/views/WhyUs.vue')
const Team = () => import('@/views/Team.vue')
const SignUp = () => import('@/views/SignUp.vue')
const Users = () => import('@/views/Users.vue')
const NotFound = () => import('@/views/NotFound.vue')

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why-us', component: WhyUs },
    { path: '/team', component: Team },
    { path: '/users', component: Users },
    { path: '/sign-up', component: SignUp },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router