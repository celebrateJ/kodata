<template>
  <div class="chat-opt-wrap">
    <span class="opt-tit">{{ optTitle }}</span>
    <UiTooltip>
      <template v-slot:tooltipBtn>
        <button type="button" class="btn-opt-close" @click="handleOptClose"><span class="blind">닫기</span></button>
      </template>
      <template v-slot:tooltipContent>닫기</template>
    </UiTooltip>
    
    <ul class="chat-opt-list">
      <li class="chat-opt-item" v-for="item in optList" :key="item.value">
        <button type="button" class="opt-name" :class="{ active: multiSelect ? selectedValues.includes(item.value) : selectedValues === item.value }" @click="handleOptSelect(item.value)">{{ item.label }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';

import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';
export default {
  name: 'ChatOption',
  components: {
    UiTooltip,
  },
  emits: ['close', 'select-opt-list'],
  props: {
    optList: { // 옵션 리스트
      type: Array,
      required: true,
    },
    multiSelect: { // 옵션 다중 선택 여부
      type: Boolean,
      default: false,
    },
    optTitle: { // 옵션 타이틀(버튼명, 하단 옵션 레이어 타이틀)
      type: String,
      default: '',
    }
  },
  setup(props, { emit }) {
    // 옵션 레이어 닫기
    const handleOptClose = () => {
      emit('close');
    };

    // 옵션 선택 리스트
    const selectedValues = ref([]);
    const handleOptSelect = (value) => {
      if (props.multiSelect) {
        const selectedIndex = selectedValues.value.indexOf(value);
        if (selectedIndex > -1) {
          selectedValues.value.splice(selectedIndex, 1);
          return;
        }
        selectedValues.value.push(value);
      } else {
        selectedValues.value = value;
      }

      emit('select-opt-list', selectedValues.value);
    };

    
    return {
      selectedValues,
      handleOptSelect,
      handleOptClose,
    };
  },
}
</script>