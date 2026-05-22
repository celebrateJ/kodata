<template>
  <div class="wrapper">
    <div class="pub-guie-wrap">
      <header>Toast Style Guide</header>

      <section>
        <div>
          <h3 class="pub-guide-tit-s">Toast</h3>
          <div class="pub-guide-view">
            <!-- 예제 Start -->
            <button type="button" class="btn-txt line-gray" @click="handleToastOpen">토스트 열기</button>
            <Toast
              :active-toast="activeToast"
              @toast-close="handleToastClose"
              message="토스트 메시지 내용"
            />
            <!-- //예제 End -->
          </div>
        </div>
        <div>
          <h3 class="pub-guide-tit-s">Toast (확인 버튼 / 프로그레스 있는 case)</h3>
          <div class="pub-guide-view">
            <!-- 예제 Start -->
            <button type="button" class="btn-txt line-gray" @click="handleToastConfirmOpen">토스트 열기</button>
            <Toast
              :active-toast="activeToastConfirm"
              message="토스트 메시지 내용 길어도 한줄로 노출"
              @toast-confirm="handleToastConfirmBtn"
              @toast-close="handleToastConfirmClose"
              confirm
            />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Toast from '@/components/baseCommonUI/UiToast.vue';

import { ref } from 'vue';

export default {
  name: 'StylePopup',
  components: {
    Toast,
  },
  setup() {
    const activeToast = ref(false);
    const handleToastOpen = () => {
      activeToast.value = true;
    };
    const handleToastClose = () => {
      console.log('handleToastClose');
      activeToast.value = false;
    };
    
    const activeToastConfirm = ref(false);
    const handleToastConfirmOpen = () => {
      activeToastConfirm.value = true;
    };

    const handleToastConfirmBtn = () => {
      console.log('handleToastConfirm');
      activeToastConfirm.value = false;
    };
    
    const handleToastConfirmClose = () => {
      console.log('handleToastConfirmClose');
      activeToastConfirm.value = false;
    };

    return {
      //toast
      activeToast,
      handleToastOpen,
      handleToastClose,

      activeToastConfirm,
      handleToastConfirmOpen,
      handleToastConfirmBtn,
      handleToastConfirmClose,
    }
  },  
}
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
