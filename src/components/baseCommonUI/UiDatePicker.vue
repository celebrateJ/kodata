<template>
  <Datepicker 
    :model-value="modelValue"  
    @update:model-value="emit('update:modelValue', $event)" 
    :format="getFormat"
    locale="ko" 
    :enable-time-picker="type === 'time'"
    :time-picker="type === 'time'"
    :date-picker="type !== 'time'"
    :auto-apply="type !== 'time'"
    :placeholder="getPlaceholder"
    :class="[
      type === 'time' ? 'type-time' : '',
      disabled ? 'disabled' : '',
      type === 'only-month' ? 'only-month' : '',
    ]"
    :disabled="disabled"
    :cancel-text="'취소'"
    :select-text="'선택'"
    :weekStart="0"
    :month-picker="type === 'month' || type === 'only-month'"
    :year-picker="type === 'year'"
    :teleport="'body'"
  />
</template>

<script setup>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { computed, onMounted, watch } from 'vue';

// props와 emits 설정
const props = defineProps({
  modelValue: [Date, String, Number], // 다양한 형식의 날짜 지원
  type: {
    type: String,
    default: 'date',
    validator: (value) => ['date', 'time', 'month'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
});

const emit = defineEmits(["update:modelValue"]);

const getFormat = computed(() => {
  switch (props.type) {
    case 'time':
      return 'HH:mm';
    case 'month':
      return 'yyyy-MM';
    case 'year':
      return 'yyyy';
    default:
      return 'yyyy-MM-dd';
  }
});

const getPlaceholder = computed(() => {
  switch (props.type) {
    case 'time':
      return '시간 선택';
    case 'month':
      return '년월 선택';
    case 'year':
      return '년 선택';
    default:
      return '날짜 선택';
  }
});


</script>

<style scoped>


</style>