import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/pages/MainPage.vue')
const PlacePage = () => import('@/pages/PlacePage.vue')
const EmpthyPage = () => import('@/pages/EmpthyPage.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/place/:id',
    name: 'place',
    component: PlacePage,
    props: true,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    name: 'empthy',
    component: EmpthyPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
