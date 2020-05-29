import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/install',
    name: 'Install',
    component: () => import('../views/00-install')
  },
  {
    path: '/multi-root',
    name: 'MultiRoot',
    component: () => import('../views/10-multi-root-element')
  },
  {
    path: '/reactivity',
    name: 'Reactivity',
    component: () => import('../views/30-vue3-component')
  },
  {
    path: '/composition-api',
    name: 'CompositionApi',
    component: () => import('../views/50-vue3-composition')
  },
  {
    path: '/reactive',
    name: 'Reactive',
    component: () => import('../views/60-reactive')
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/70-props-in-setup')
  },
  {
    path: '/filters',
    name: 'Filters',
    component: () => import('../views/90-vue3-no-filters')
  },
  {
    path: '/dynamic-binding',
    name: 'DynamicBinding',
    component: () => import('../views/100-dynamic-binding')
  },
  {
    path: '/teleport',
    name: 'Teleport',
    component: () => import('../views/110-teleport')
  },
  {
    path: '/suspense',
    name: 'Suspense',
    component: () => import('../views/120-suspense')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
