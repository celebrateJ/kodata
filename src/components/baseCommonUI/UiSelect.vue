<template>
  <div class="select-box">
     <select 
      v-model="selectedValue" 
      :disabled="disabled"
    >
      <option value="" disabled hidden selected>선택</option>
      <option v-for="(option, index) in options" :key="index" :value="option.value">
        {{ option.label }}
      </option>
  </select>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'UiSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    initialValue: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false, //기본값 활성화
    },
  },
  setup(props) {
    // 초기 선택값과 활성화 상태 관리
    const selectedValue = ref(props.initialValue);

    // 초기값 변경 시 동기화
    watch(
      () => props.initialValue,
      (newValue) => {
        selectedValue.value = newValue;
      }
    );

    return {
      selectedValue,
    };
  },
};
</script>