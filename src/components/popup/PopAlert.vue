<template>
  <!-- s : 알럿 팝업 -->
  <popup 
    :is-pop-show="activeAlert"
    :pop-close-handler="popCloseHandler"
    isAlert
  >
    <template v-slot:popBody>
      <p v-html="alertMessage"></p>
    </template>
    <template v-slot:popFooter>
      <div class="btn-wrap" v-if="alertType===''">
        <button 
          type="button" 
          class="btn-txt line-gray"
          @click="popCloseHandler()"
        >
          확인
        </button>
      </div>
      <div class="btn-wrap" v-if="alertType==='confirm'">
        <button 
          type="button" 
          class="btn-txt line-gray"
          @click="popCloseHandler()"
        >
          닫기
        </button>
        <button 
          type="button" 
          class="btn-txt primary"
          @click="confirm()"
        >
          확인
        </button>
      </div>
    </template>  
  </popup>
  <!-- // e : 알럿 팝업 -->
</template>

<script>
import popup from '@/components/baseCommonUI/UiModal.vue'

export default {
  name: 'PopAlert',
  components: {
    popup
  },
  props: {
    activeAlert: {
      type: Boolean,
      default: false
    },
    popCloseHandler: {
      type: Function,
      default: () => {}
    },
    alertType: {
      type: String,
      default: ''
    },
    alertMessage: {
      type: String,
      default: ''
    },
  },
  setup(props, { emit }) {
    const confirm = () => {
      emit('confirm','Y')
    }

    return{
      confirm,
    }
  },
};
</script>