<template>
  <div class="toast-wrap" ref="toastWrapRef" :class="{ 'type-confirm': confirm }" v-if="activeToast">
    <div class="toast-inner">
      <p class="toast-message">{{ message }}</p>
      <button v-if="confirm === true" type="button" class="btn-txt primary" @click="handleToastConfirm">확인</button>
  
      <div v-if="confirm === true" class="progress-bar">
        <div class="progress-bar-inner" :class="`duration-${duration/1000}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
export default {
  name: 'UiToast',
  emits: ['toast-confirm', 'toast-close'],
  props: {
    activeToast: { // 토스트 표시 여부
      type: Boolean,
      default: false,
    },
    message: { // 토스트 메시지
      type: String,
      default: '',
    },
    confirm: { // 토스트 확인 버튼/프로그레스바 활성화 여부
      type: Boolean,
      default: false,
    },
    duration: { // 토스트 시간
      type: Number,
      default: 3000,
    }
  },
  setup(props, { emit }) {
    const timer = ref(null);

    watch(() => props.activeToast, (newVal) => {
      if(newVal) {
        toastTimer();
      }else{
        clearToastTimer();
      }
    });

    const toastTimer = () => {
      clearToastTimer();
      timer.value = setTimeout(() => {
        console.log('timer', timer.value);
        emit('toast-close');
      }, props.duration);
    }

    const clearToastTimer = () => {
      clearTimeout(timer.value);
    }

    const handleToastConfirm = () => {
      console.log('handleToastConfirm');
      emit('toast-confirm');
    };

    const toastWrapRef = ref(null);
    const handleToastOffset = () => {
      const bodyMinWidth = 1920;
      const windowWidth = window.innerWidth;
      const scrollLeft = window.scrollX;
      
      if(windowWidth < bodyMinWidth){ // 가로 스크롤 시 toast 위치 조정
        const translateX = ((bodyMinWidth - windowWidth) - scrollLeft) / 10;
        toastWrapRef.value && (toastWrapRef.value.style.transform = `translateX(${translateX - 2}rem)`); 
      }
    }

    onMounted(() => {
      handleToastOffset();
      window.addEventListener('scroll', handleToastOffset);
      window.addEventListener('resize', handleToastOffset);
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleToastOffset);
      window.removeEventListener('resize', handleToastOffset);
    })

    return {
      toastWrapRef,
      handleToastConfirm,
      handleToastOffset,
    };
  },
};
</script>
