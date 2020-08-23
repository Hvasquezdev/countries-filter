import { createRouter, createWebHistory } from 'vue-router'

// Routes
const Home = () => import('../views/Home.vue')

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    { path: '/', component: Home }
  ]
})

export {
  router
}