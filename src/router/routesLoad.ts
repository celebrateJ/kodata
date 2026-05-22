import { RouteRecordRaw } from 'vue-router'
import { buildRouteChildrenByLayout } from './routeBuilder'
import { attachRouteMeta } from './routeMeta'

const childrenByLayout = buildRouteChildrenByLayout()

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'TheDefaultLayout',
    component: () => import('@/layouts/TheDefaultLayout.vue'),
    children: childrenByLayout.TheDefaultLayout,
  },
  {
    path: '',
    name: 'TheCommonLayout',
    component: () => import('@/layouts/TheCommonLayout.vue'),
    children: childrenByLayout.TheCommonLayout,
  },
  {
    path: '',
    name: 'TheWindowPopLayout',
    component: () => import('@/layouts/TheWindowPopLayout.vue'),
    children: childrenByLayout.TheWindowPopLayout,
  },
]

export default attachRouteMeta(routes)
