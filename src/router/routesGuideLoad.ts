/* 퍼블리싱 가이드 확인용 router. 개발 작업과 무관 */
import { RouteRecordRaw } from 'vue-router'

const routesGuide: Array<RouteRecordRaw> = [ // guide router

  {
    path: '/guide',
    name: 'guide',
    component: () => import('@/guide/GuideLayout.vue'),
  },
  {
    path: '/guide/basic',
    name: '기본결정사항',
    component: () => import('@/guide/GuideBasic.vue'),
  },
  {
    path: '/guide/directory',
    name: '디렉토리구조',
    component: () => import('@/guide/GuideDirectory.vue'),
  },
  {
    path: '/guide/scss',
    name: 'scss 폴더 및 파일 명세',
    component: () => import('@/guide/GuideScss.vue'),
  },
  {
    path: '/guide/styletext',
    name: 'StyleText',
    component: () => import('@/guide/GuideStyleText.vue'),
  },
  {
    path: '/guide/stylebutton',
    name: 'StyleButton',
    component: () => import('@/guide/GuideStyleButton.vue'),
  },
  {
    path: '/guide/styleform',
    name: 'StyleForm',
    component: () => import('@/guide/GuideStyleForm.vue'),
  },
  {
    path: '/guide/styletable',
    name: 'StyleTable',
    component: () => import('@/guide/GuideStyleTable.vue'),
  },
  {
    path: '/guide/styletablist',
    name: 'StyleTabList',
    component: () => import('@/guide/GuideStyleTabList.vue'),
  },
  {
    path: '/guide/stylepopup',
    name: 'StyleTab',
    component: () => import('@/guide/GuideStylePopup.vue'),
  },
  {
    path: '/guide/component',
    name: 'Component',
    component: () => import('@/guide/GuideComponent.vue'),
  },
  {
    path: '/guide/styleloading',
    name: 'StyleLoading',
    component: () => import('@/guide/GuideStyleLoading.vue'),
  },
  {
    path: '/guide/styletoast',
    name: 'StyleToast',
    component: () => import('@/guide/GuideStyleToast.vue'),
  },
]

// 라우터 이동 시 스크롤 최상단 이동 setting
const createRouter = () => new Router({
    // mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: routesGuide,
  })

export default routesGuide
