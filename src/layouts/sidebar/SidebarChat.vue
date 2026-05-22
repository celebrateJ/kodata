<template>
  <div class="chat-history-wrap">
    <div class="sidebar-header">
      <UiTooltip>
        <template v-slot:tooltipBtn>
          <button type="button" class="btn-toggle-sidebar" @click="handleSidebar"><span class="blind">채팅 기록 열기</span></button>
        </template>
        <template v-slot:tooltipContent>
          <template v-if="isCollapsed">펼치기</template>
          <template v-if="!isCollapsed">접기</template>
        </template>
      </UiTooltip>
    </div>

    <button type="button" class="btn-new-chat"><span class="text">새 채팅</span></button>
    
    <div class="chat-history-group">
      <!-- 추천 질문 -->
      <div class="chat-history-box" v-if="recommendList.length > 0">
        <span class="chat-history-tit">추천 질문</span>
        <ul class="chat-list">
          <li v-for="item in recommendList" :key="item.value">
            <button type="button" class="btn-history">{{ item.question }}</button>
          </li>
        </ul>
      </div>
      <!-- // 추천 질문 -->
  
      <!-- 대화이력 -->
      <div class="chat-history-box">
        <span class="chat-history-tit">대화이력</span>
  
        <div class="chat-group">
          <span class="chat-history-date">오늘</span>
          <ul class="chat-list">
            <li v-for="item in historyList" :key="`today-${item.value}`" :class="{ 'active': activeHistoryKey === `today-${item.value}` }">
              <button type="button" class="btn-history" @click="handleActiveHistory('today', item.value)">{{ item.history }}</button>
              <UiTooltip>
                <template v-slot:tooltipBtn>
                  <button type="button" class="btn-history-del"><span class="blind">삭제</span></button>
                </template>
                <template v-slot:tooltipContent>삭제</template>
              </UiTooltip>
            </li>
          </ul>
        </div>
        
        <div class="chat-group">
          <span class="chat-history-date">어제</span>
          <ul class="chat-list">
            <li v-for="item in historyList" :key="`yesterday-${item.value}`" :class="{ 'active': activeHistoryKey === `yesterday-${item.value}` }">
              <button type="button" class="btn-history" @click="handleActiveHistory('yesterday', item.value)">{{ item.history }}</button>
              <UiTooltip>
                <template v-slot:tooltipBtn>
                  <button type="button" class="btn-history-del"><span class="blind">삭제</span></button>
                </template>
                <template v-slot:tooltipContent>삭제</template>
              </UiTooltip>
            </li>
          </ul>
        </div>
        
        <div class="chat-group">
          <span class="chat-history-date">4일전</span>
          <ul class="chat-list">
            <li v-for="item in historyList" :key="`yesterday-${item.value}`" :class="{ 'active': activeHistoryKey === `yesterday-${item.value}` }">
              <button type="button" class="btn-history" @click="handleActiveHistory('yesterday', item.value)">{{ item.history }}</button>
              <UiTooltip>
                <template v-slot:tooltipBtn>
                  <button type="button" class="btn-history-del"><span class="blind">삭제</span></button>
                </template>
                <template v-slot:tooltipContent>삭제</template>
              </UiTooltip>
            </li>
          </ul>
        </div>
      </div>
      <!-- 대화이력 -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue'

export default {
  name: 'SidebarChat',
  components: {
    UiTooltip,
  },
  props: {
    recommendList: { // 추천 질문
      type: Array,
      default: [],
    },
    historyList: { // 대화 이력
      type: Array,
      default: [],
    },
  },
  emits: ['sidebar-toggle'],
  setup(_, {emit}) {
    const isCollapsed = ref(false);
    const activeHistoryKey = ref('today-0');
    const handleActiveHistory = (group, value) => {
      activeHistoryKey.value = `${group}-${value}`;
    };

    const handleSidebar = () => {
      emit('sidebar-toggle', !isCollapsed.value);
      isCollapsed.value = !isCollapsed.value;
    };

    return {
      isCollapsed,
      activeHistoryKey,
      handleActiveHistory,
      handleSidebar,
    };
  }
}
</script>

<style lang="scss" scoped></style>
