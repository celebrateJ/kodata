import { createRouter, createWebHistory } from 'vue-router'

import routes from './routesLoad'
import routesGuide from './routesGuideLoad'

const routesCombined = [...routes, ...routesGuide];

const router = createRouter({
  history: createWebHistory(),
  routes: routesCombined, 
})

export default router
