import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../Pages/HomePage.vue'
import AboutPage from '../Pages/AboutPage.vue'
import PetsPage from '../Pages/PetsPage.vue'
import ContactPage from '../Pages/ContactPage.vue'
import Description from '../Pages/Description.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/pets', component: PetsPage },
  { path: '/contacts', component: ContactPage},
  { path: '/pet/:id', component: Description, props: true},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router