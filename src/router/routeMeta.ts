import type { RouteRecordRaw } from 'vue-router'

type RouteMeta = NonNullable<RouteRecordRaw['meta']>

export const routeMetaByName: Record<string, RouteMeta> = {
  ACA0107M01: { sideBarType: 'main' },
  ACB0102S01: { sideBarType: 'folding' },
}

export const attachRouteMeta = (routes: RouteRecordRaw[]): RouteRecordRaw[] =>
  routes.map((route) => {
    const nextRoute: RouteRecordRaw = { ...route }
    const routeName = typeof route.name === 'string' ? route.name : undefined
    const externalMeta = routeName ? routeMetaByName[routeName] : undefined

    if (externalMeta) {
      nextRoute.meta = { ...(route.meta ?? {}), ...externalMeta }
    }

    if (route.children?.length) {
      nextRoute.children = attachRouteMeta(route.children)
    }

    return nextRoute
  })
