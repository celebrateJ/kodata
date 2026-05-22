<template>
  <li
    :class="{ active: active, disabled: disabled }"
    role="tab"
    :aria-selected="active"
    :aria-disabled="disabled"
    @click="handleClick"
    ref="tabRef"
  >
    <button type="button" class="item">
      <slot></slot>
    </button>
  </li>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'UiTab',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const tabRef = ref(null);

    const scrollToCenter = () => {
      const tabElement = tabRef.value;
      if (!tabElement) return;

      const scrollContainer = tabElement.closest('.tab-box.x-scroll');
      if (!scrollContainer) return;

      const containerWidth = scrollContainer.clientWidth;
      const tabWidth = tabElement.offsetWidth;
      const tabLeft = tabElement.offsetLeft;
      
      const scrollPosition = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    };

    const handleClick = () => {
      if (!props.disabled) {
        emit("tab-selected");
        // 클릭 후 약간의 지연을 주어 active 상태 변경 후 스크롤
        setTimeout(() => {
          scrollToCenter();
        }, 0);
      }
    };

    return {
      tabRef,
      handleClick,
    };
  },
};
</script>