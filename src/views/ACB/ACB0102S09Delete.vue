<template>
  <popup 
    :is-pop-show="activePopup"
    :pop-close-handler="popCloseHandler"
    pop-title="문서 삭제"
  >
    <template v-slot:popBody>
      <p class="pop-noti-desc">삭제할 문서명을  정확하게 입력하세요</p>
      <div class="form-wrap">
        <UiFormBox formTitle="삭제할 문서" class="vt-top">
          <template #formBody>
            <span class="form-txt">경영정보.hwp</span>
            <UiTextField>
              <input type="text" placeholder="삭제할 파일명 입력">
            </UiTextField>
          </template>
        </UiFormBox>
      </div>
    </template>
    <template v-slot:popFooter>
      <div class="btn-wrap">
        <button type="button" class="btn-txt line-gray" @click="popCloseHandler">취소</button>
        <button type="button" class="btn-txt primary">삭제</button>
      </div>
    </template>  
  </popup>
</template>

<script>
import popup from '@/components/baseCommonUI/UiModal.vue'
import UiFormBox from '@/components/baseCommonUI/UiFormBox.vue';
import UiTextField from '@/components/baseCommonUI/UiTextField.vue'

export default {
  name: 'ACB0102S09Delete',
  components: {
    popup,
    UiFormBox,
    UiTextField,
  },
  props: {
    activePopup: {
      type: Boolean,
      default: false
    },
    popCloseHandler: {
      type: Function,
      default: () => {}
    },
  },
  setup() {

    return {
      
    };
  },
}
</script>
