import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/home.vue"
import Team from "@/views/team.vue"
import Radio from "@/views/radio.vue"
import Movie from "@/views/movie.vue"
import No from "@/views/no.vue"
import All from "@/views/all.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        // path: '/all/:xiaoming', //多个参数的话，可以继续往后拼接  params
        path: "/all",
        name: 'all',
        component: All
    },
    {
        path: '/movie',
        name: 'Movie',
        component: Movie
    },
    {
        path: '/radio',
        name: 'Radio',
        component: Radio
    },
    {
        path: '/team',
        name: 'Team',
        component: Team
    },
    // 重定向
    {
        path: "/",
        redirect: "/home"
    },
    // 404
    {
        path: '*',
        name: 'No',
        component: No
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router