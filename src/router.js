import Vue from 'vue'
import VueRouter from 'vue-router'

import One from '@/components/one'
import Two from '@/components/two'
import User from '@/pages/User'
import UserProfile from '@/pages/UserProfile'

Vue.use(VueRouter)
const routes = [
    {path: '/', component: One},
    {path: '/about', component: Two},
    {path: '/user', component: User},
    {path: '/user/:id', component: UserProfile}

]

const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router