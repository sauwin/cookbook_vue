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
  { path: '/recipe/:id', name: 'detailpage', component: DetailPage },
  { path: '/recipes', name: 'recipespage', component: RecipesPage },
  { path: '/favorites', name: 'favoritespage', component: FavoritesPage },
  { path: '/:pathMatch(.*)*', name: 'notfoundpage', component: NotFoundPage }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
