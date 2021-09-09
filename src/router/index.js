import { createRouter, createWebHistory } from 'vue-router'
import Pokemon from '../views/Pokemon.vue'

const routes = [
  {
    path: '/Pokemon',
    name: 'Pokemon',
    component: Pokemon
  },
  {
    path: '/pokemon/:id',
    name: 'PokemonDetail',
    component: () => import(/* webpackChunkName: "about" */ '../views/PokemonDetail')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
