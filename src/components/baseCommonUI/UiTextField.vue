<template>
  <div class="ipt-wrap" :class="{ disabled: disabled, readonly: readonly }" ref="wrapperRef">
    <!-- Slot으로 input 요소를 받음 -->
    <slot></slot>

    <!-- 삭제 버튼 (옵션에 따라 표시) -->
    <UiTooltip direction="bottom" v-if="hasInputValue && showClearBtn && !disabled && !readonly" >
      <template v-slot:tooltipBtn>
        <button 
          type="button" 
          class="ibtn-ipt-del"
          @click="handleClearInput"
        >
          <span class="blind">초기화</span>
        </button>
      </template>
      <template v-slot:tooltipContent>초기화</template>
    </UiTooltip>

    <!-- 비밀번호 보기 토글 (옵션에 따라 표시) -->
    <UiTooltip direction="bottom" v-if="showPasswordToggle" >
      <template v-slot:tooltipBtn>
        <button 
          type="button" 
          class="ibtn-pw-toggle"
          :class="{ 'active': isPwView }"
          @click="handlePasswordToggle"
        >
          <span class="blind">{{ isPwView ? '비밀번호 숨기기' : '비밀번호 보기' }}</span>
        </button>
      </template>
      <template v-slot:tooltipContent>{{ isPwView ? '비밀번호 숨기기' : '비밀번호 보기' }}</template>
    </UiTooltip>
    

    <slot name="suffix"></slot>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';

export default {
  name: 'UiTextField',
  components: {
    UiTooltip,
  },
  props: {
    showClearBtn: {
      type: Boolean,
      default: true
    },
    showPasswordToggle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  emits: ['pw-view'],
  setup(props, {emit}) {
    const wrapperRef = ref(null);
    const inputElement = ref(null);
    const hasInputValue = ref(false);
    const isPwView = ref(false);

    const handlePasswordToggle = () => {
      isPwView.value = !isPwView.value;
      emit('pw-view', isPwView.value);
    };

    const checkInputValue = (event) => {// input 값이 있는지 확인
      if(event){
        hasInputValue.value = event.target.value.length > 0;
      }else{
        inputElement.value = wrapperRef.value.querySelector('input');
        if(!props.readonly && !props.disabled) hasInputValue.value = inputElement.value.value.length > 0;
      }
    };

    const handleClearInput = () => { // x버튼 클릭 시 input 초기화
      if (inputElement.value) {
        inputElement.value.value = '';
        inputElement.value.focus();
        hasInputValue.value = false;
      }
    };

    const setupInputListener = () => { // input 요소에 이벤트 리스너 추가
      if (wrapperRef.value) {
        inputElement.value = wrapperRef.value.querySelector('input');
        if (inputElement.value) {
          inputElement.value.addEventListener('input', checkInputValue);
        }
      }
    };

    const removeInputListener = () => { // input 요소에 이벤트 리스너 제거
      if (inputElement.value) {
        inputElement.value.removeEventListener('input', checkInputValue);
      }
    };

    onMounted(() => {
      checkInputValue();
      setupInputListener();
    });

    onBeforeUnmount(() => {
      removeInputListener();
    });

    return {
      wrapperRef,
      hasInputValue,
      handleClearInput,
      handlePasswordToggle,
      isPwView,
    };
  }
};
</script>