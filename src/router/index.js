import { createRouter, createWebHistory } from 'vue-router'
import ListPage from '../components/ListPage.vue'

const routes = [
  {
    path: '',
    name: 'ListPage',
    component: ListPage
  },
  {
    path: '/about/:carId',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: 'detail page' */ '../components/DetailPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
