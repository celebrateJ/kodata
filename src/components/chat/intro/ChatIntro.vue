<template>
  <div class="chat-intro-wrap">
    <span class="symbol" :class="`type-${symbolType}`"></span>
    <p class="intro-title">
      <slot name="introTitle"></slot>
    </p>
    <p class="intro-desc">
      <slot name="introDesc"></slot>
    </p>
  </div>
  <!-- 챗봇 진입 전 유형 : 옵션 버튼 스타일 -->
  <div class="chat-intro-opt" v-if="optList.length > 0">
    <ul class="chat-opt-list">
      <li class="chat-opt-item" v-for="item in optList" :key="item.value">
        <button type="button" class="opt-name" :class="{ active: selectedValues.includes(item.value) }" @click="handleOptSelect(item.value)">{{ item.label }}</button>
      </li>
    </ul>
  </div>
  <!-- 챗봇 진입 전 유형 : 필수형태 스타일 -->
  <div class="chat-intro-type" v-if="typeList.length > 0">
    <ul class="chat-type-list">
      <li class="chat-type-item" v-for="item in typeList" :key="item.value">
        <button type="button" class="btn-type" @click="handleTypeSelect(item)">{{ item.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'ChatIntro',
  components: {
    
  },
  props: {
    symbolType: { // 챗봇 심볼 타입
      type: String,
    },
    optList: { // 옵션 리스트
      type: Array,
      default: [],
    },
    typeList: { // 타입 리스트
      type: Array,
      default: [],
    },
  },
  emits: ['type-select'], // 선택한 타입 전달
  setup(props, { emit }) {
    // 옵션 선택 리스트
    const selectedValues = ref([]);
    const handleOptSelect = (value) => {
      const selectedIndex = selectedValues.value.indexOf(value);
      if (selectedIndex > -1) {
        selectedValues.value.splice(selectedIndex, 1);
        return;
      }
      selectedValues.value.push(value);
    }

    // 타입 선택 리스트
    const handleTypeSelect = (value) => {
      emit('type-select', value);
    }

    return {
      selectedValues,
      handleOptSelect,
      handleTypeSelect,
    }
  },
};
</script>