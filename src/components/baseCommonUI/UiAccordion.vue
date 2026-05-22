<template>
  <div 
    class="acdn-head"
    :class="{ 'active': isOpen }"
    @click="toggleAccordion"
  >
    <slot name="title"></slot>
    <span class="blind">{{ isOpen ? '접기' : '펼치기' }}</span>
  </div>
  <transition
    name="accordion"
    @enter="onEnter"
    @leave="onLeave"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div 
      v-show="isOpen"
      class="acdn-content"
      ref="content"
    >
      <slot name="content"></slot>
    </div>
  </transition>
</template>

<script>
import { computed, ref } from 'vue'

export default {
  name: 'UiAccordion',
  props: {
    // 초기 상태 설정 (기본값: 닫힘)
    initialOpen: {
      type: Boolean,
      default: false
    },
    open: {
      type: Boolean,
      default: undefined
    },
    itemKey: {
      type: [String, Number],
      default: null
    }
  },
  emits: ['toggle', 'request-toggle'],
  setup(props, { emit }) {
    const internalOpen = ref(props.initialOpen);
    const isControlled = computed(() => typeof props.open === 'boolean');
    const isOpen = computed(() => (isControlled.value ? props.open : internalOpen.value));
    const content = ref(null);

    // 아코디언 토글 함수
    const toggleAccordion = () => {
      const nextOpen = !isOpen.value;
      if (isControlled.value) {
        emit('request-toggle', props.itemKey);
      } else {
        internalOpen.value = nextOpen;
      }
      emit('toggle', nextOpen);
    };

    // 트랜지션 훅
    const onEnter = (el) => {
      el.style.height = 'auto';
      const height = el.scrollHeight;
      el.style.height = '0px';
      // 강제 리플로우
      el.offsetHeight;
      el.style.height = height + 'px';
    };

    const onLeave = (el) => {
      el.style.height = el.scrollHeight + 'px';
      // 강제 리플로우
      el.offsetHeight;
      el.style.height = '0px';
    };

    const afterEnter = (el) => {
      el.style.height = 'auto';
    };

    const afterLeave = (el) => {
      el.style.height = '';
    };

    return {
      isOpen,
      content,
      toggleAccordion,
      onEnter,
      onLeave,
      afterEnter,
      afterLeave
    }
  }
}
</script>
