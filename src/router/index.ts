import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UnitDetailView from '@/views/UnitDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'race-select',
      component: () => import('@/views/RaceSelectView.vue'),
    },
    {
      path: '/units',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/unit/:id',
      name: 'unit-detail',
      component: UnitDetailView,
    },
  ],
})

export default router
