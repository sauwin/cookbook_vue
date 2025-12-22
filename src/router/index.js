import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import AddPage from '@/views/AddPage.vue'
import DetailPage from '@/views/DetailPage.vue'
import RecipesPage from '@/views/RecipesPage.vue'
import FavoritesPage from '@/views/FavoritesPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const routes = [
  { path: '/', name: 'homepage', component: HomePage },
  { path: '/addrecipe', name: 'addpage', component: AddPage },
  { path: '/recipes', name: 'recipespage', component: RecipesPage },
  { path: '/recipe/:slug', name: 'detailpage', component: DetailPage },
  { path: '/favorites', name: 'favoritespage', component: FavoritesPage },
  { path: '/:pathMatch(.*)*', name: 'notfoundpage', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory('/cookbook_vue/'),
  routes
})

export default router
