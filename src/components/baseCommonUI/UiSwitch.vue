<template>
  <div class="switch-box">
    <div class="ipt-switch">
      <input type="checkbox" :disabled="disabled" @change="handleChange" v-model="modelChecked">
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'UiSwitch',
  emits: ['change'],
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    initialChecked: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    // 초기 선택값과 활성화 상태 관리
    const modelChecked = ref(props.initialChecked);

    const handleChange = () => {
      emit('change', modelChecked.value);
    };

    return {
      modelChecked,
      handleChange,
    };
  },
};
</script>