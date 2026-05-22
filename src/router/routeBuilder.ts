import type { RouteRecordRaw } from 'vue-router'
import { routeMetaByName } from './routeMeta'
import {
  componentOverridesByName,
  layoutOverridesByName,
  manualRouteOverrides,
  pathOverridesByName,
  type LayoutName,
} from './routeOverrides'

type RouteLoader = () => Promise<unknown>
type LayoutRouteMap = Record<LayoutName, RouteRecordRaw[]>

const viewModules = import.meta.glob('/src/views/**/*.vue') as Record<string, RouteLoader>
const componentModules = import.meta.glob('/src/components/**/*.vue') as Record<string, RouteLoader>
const routeModules: Record<string, RouteLoader> = { ...viewModules, ...componentModules }

const layoutOrder: LayoutName[] = ['TheDefaultLayout', 'TheCommonLayout', 'TheWindowPopLayout']

const legacyNameByFileBase: Record<string, string> = {
  comPopCommon: 'commonPopCommon',
  gxPopCommon: 'GxPopCommon',
}

const routeNameHintSet = new Set<string>([
  ...Object.keys(routeMetaByName),
  ...Object.keys(pathOverridesByName),
  ...Object.keys(componentOverridesByName),
  ...Object.keys(layoutOverridesByName),
  ...manualRouteOverrides.map((route) => route.name),
])

const toSrcPath = (aliasPath: string): string => aliasPath.replace(/^@/, '/src')

const parseViewPath = (
  modulePath: string,
): { folderPath: string; fileBase: string } | undefined => {
  const matched = modulePath.match(/^\/src\/views\/(.+)\/([^/]+)\.vue$/)
  if (!matched) return undefined

  return {
    folderPath: matched[1],
    fileBase: matched[2],
  }
}

const resolveRouteName = (fileBase: string): string => {
  const legacyName = legacyNameByFileBase[fileBase]
  if (legacyName) return legacyName
  if (routeNameHintSet.has(fileBase)) return fileBase

  if (fileBase.endsWith('_M')) {
    const noMobileSuffix = fileBase.slice(0, -2)
    if (routeNameHintSet.has(noMobileSuffix)) return noMobileSuffix
  }

  return fileBase
}

const resolveRouteLayout = (routeName: string): LayoutName =>
  layoutOverridesByName[routeName] ?? 'TheDefaultLayout'

const resolveRoutePath = (folderPath: string, fileBase: string, routeName: string): string =>
  pathOverridesByName[routeName] ?? `/${folderPath}/${fileBase}`

const resolveModule = (modulePath: string): RouteLoader => {
  const routeModule = routeModules[modulePath]
  if (!routeModule) {
    throw new Error(`[routeBuilder] Route component not found: ${modulePath}`)
  }
  return routeModule
}

export const buildRouteChildrenByLayout = (): LayoutRouteMap => {
  const routeBuckets: Record<LayoutName, Map<string, RouteRecordRaw>> = {
    TheDefaultLayout: new Map<string, RouteRecordRaw>(),
    TheCommonLayout: new Map<string, RouteRecordRaw>(),
    TheWindowPopLayout: new Map<string, RouteRecordRaw>(),
  }

  const upsertRoute = (layout: LayoutName, route: RouteRecordRaw) => {
    const routeName = String(route.name)
    for (const eachLayout of layoutOrder) {
      routeBuckets[eachLayout].delete(routeName)
    }
    routeBuckets[layout].set(routeName, route)
  }

  for (const [modulePath, routeLoader] of Object.entries(viewModules)) {
    const parsed = parseViewPath(modulePath)
    if (!parsed) continue

    const routeName = resolveRouteName(parsed.fileBase)

    upsertRoute(resolveRouteLayout(routeName), {
      path: resolveRoutePath(parsed.folderPath, parsed.fileBase, routeName),
      name: routeName,
      component: routeLoader,
    })
  }

  for (const [routeName, componentAliasPath] of Object.entries(componentOverridesByName)) {
    const modulePath = toSrcPath(componentAliasPath)
    const routeModule = resolveModule(modulePath)
    const parsed = parseViewPath(modulePath)
    const fallbackFolder = parsed?.folderPath ?? ''
    const fallbackFileBase = parsed?.fileBase ?? routeName

    upsertRoute(resolveRouteLayout(routeName), {
      path: resolveRoutePath(fallbackFolder, fallbackFileBase, routeName),
      name: routeName,
      component: routeModule,
    })
  }

  for (const manualRoute of manualRouteOverrides) {
    upsertRoute(manualRoute.layout, {
      path: manualRoute.path,
      name: manualRoute.name,
      component: resolveModule(toSrcPath(manualRoute.componentPath)),
    })
  }

  return {
    TheDefaultLayout: Array.from(routeBuckets.TheDefaultLayout.values()),
    TheCommonLayout: Array.from(routeBuckets.TheCommonLayout.values()),
    TheWindowPopLayout: Array.from(routeBuckets.TheWindowPopLayout.values()),
  }
}
