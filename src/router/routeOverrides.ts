export type LayoutName = 'TheDefaultLayout' | 'TheCommonLayout' | 'TheWindowPopLayout'

type ManualRouteOverride = {
  name: string
  path: string
  componentPath: string
  layout: LayoutName
}

/**
 * 기존 라우터 예외처리
 */
export const manualRouteOverrides: ManualRouteOverride[] = [
  {
    name: 'commonPopup',
    path: '/CommonPop',
    componentPath: '@/components/popup/PopCommon.vue',
    layout: 'TheDefaultLayout',
  },
]

/**
 * 파일 경로 규칙으로 만든 기본 path를 유지 path로 덮어쓰기
 */
export const pathOverridesByName: Record<string, string> = {
  // ProgramPopCommon: '/program/ProgramPopCommon',
  // GxPopCommon: '/gx/GxPopCommon',
  // SM_G_0050: '/business/SM_G_0050',
  // SM_G_0060: '/business/SM_G_0060',
  // SM_G_0150: '/business/SM_G_0150',
  // SM_G_0280: '/business/SM_G_0280',
  // SM_G_0300: '/business/SM_G_0300',
  // SM_I_0010: '/stats/SM_I_0010',
  // SM_I_0110: '/stats/SM_I_0110',
  // SM_I_0150: '/stats/SM_I_0150',
  // SM_I_0220: '/stats/SM_I_0220',
  // SM_I_0290: '/stats/SM_I_0290',
  // SM_I_0350: '/stats/SM_I_0350',
  // SM_I_0390: '/stats/SM_I_0390',
  // SM_I_0600: '/stats/SM_I_0600',
}

/**
 * 동일 컴포넌트를 여러 라우트에서 쓰는 케이스
 */
export const componentOverridesByName: Record<string, string> = {
  // SM_S_0030: '@/views/sys/SM_S_0020.vue',
  // SM_S_0140: '@/views/sys/SM_S_0120.vue',
  // SM_S_0270: '@/views/sys/SM_S_0260.vue',
}

/**
 * 기본 레이아웃(TheDefaultLayout)이 아닌 라우트 배치
 */
export const layoutOverridesByName: Record<string, LayoutName> = {
  // SM_A_0010: 'TheCommonLayout',
  // SM_A_0040: 'TheCommonLayout',
  // SM_A_0120: 'TheCommonLayout',
  // SM_A_0210: 'TheCommonLayout',
  // SM_A_0210_basic: 'TheCommonLayout',
  // SM_A_0210_anypass: 'TheCommonLayout',
  // SM_A_0510: 'TheCommonLayout',
  // SM_A_0520: 'TheCommonLayout',
  // SM_A_0530: 'TheCommonLayout',
  // SM_U_0010: 'TheCommonLayout',
  // SM_A_0310: 'TheWindowPopLayout',
  // SM_U_0041: 'TheWindowPopLayout',
}
