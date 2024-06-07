import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Service from '@/views/Service.vue'
import WhyUs from '@/views/WhyUs.vue'
import Team from '@/views/Team.vue'
import SignUp from '@/views/SignUp.vue'
import Users from '@/views/Users.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/why-us', component: WhyUs },
    { path: '/team', component: Team },
    { path: '/users', component: Users },
    { path: '/sign-up', component: SignUp }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router