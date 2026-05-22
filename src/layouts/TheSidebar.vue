<template>
  <div class="sidebar-wrap" :class="{ collapsed: isCollapsed, expanded: isCollapsed === false, 'type-chat': sideBarType === 'chat' }">
    <!-- 화면 케이스별 sidebar 분기(채팅, 메인, 문서아카이브) -->
    <SidebarChat 
      v-if="sideBarType === 'chat'" 
      @sidebar-toggle="handleSidebarToggle" 
      :recommendList="tempRecommendList"
      :historyList="tempHistoryList"
    />
    <SidebarMain 
      v-if="sideBarType === 'main'" 
    />
    <SidebarFolding 
      v-if="sideBarType === 'folding'" 
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import SidebarChat from '@/layouts/sidebar/SidebarChat.vue' // 채팅
import SidebarMain from '@/layouts/sidebar/SidebarMain.vue' // 메인
import SidebarFolding from '@/layouts/sidebar/SidebarFolding.vue' // 문서 아카이브

export default {
  name: 'TheSidebar',
  components: {
    SidebarChat,
    SidebarMain,
    SidebarFolding,
  },
  setup() {
    /* temp로 시작되는 변수or함수명은 퍼블 확인용 임시입니다 */
    const route = useRoute()
    const isCollapsed = ref(null);
    const sideBarType = computed(() => route.meta.sideBarType || 'chat')
    const handleSidebarToggle = (nextActive) => {
      isCollapsed.value = nextActive
    }

    const tempRecommendList = ref([
      { value: '0', question: '추천 질문 1 추천 질문 1 추천 질문 1 추천 질문 1 추천 질문 1' },
      { value: '1', question: '추천 질문 2' },
      { value: '2', question: '추천 질문 3' },
      { value: '3', question: '추천 질문 4' },
      { value: '4', question: '추천 질문 5' },
    ]);

    const tempHistoryList = ref([
      { value: '0', history: '대화이력 1 대화이력 1 대화이력 1 대화이력 1 대화이력 1 대화이력 1 대화이력 1' },
      { value: '1', history: '대화이력 2' },
      { value: '2', history: '대화이력 3' },
      { value: '3', history: '대화이력 4' },
      { value: '4', history: '대화이력 5' },
    
    ]);

    return {
      isCollapsed,
      sideBarType,
      handleSidebarToggle,

      tempRecommendList,
      tempHistoryList,
    }
  }
}
</script>

<style lang="scss" scoped></style>
