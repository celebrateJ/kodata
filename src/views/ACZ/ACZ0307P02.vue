<template>
  <popup 
    :is-pop-show="activePopup"
    :pop-close-handler="popCloseHandler"
    pop-title="의견 보내기"
  >
    <template v-slot:popBody>
      <span class="pop-sub-ttl">의견 상세 내용</span>
      <div class="textarea-box">
        <textarea placeholder="구체적인 상황이나 개선 방향을 자유롭게 작성해주세요
예)
1. 인사규정 00조 질문 시 출처가 잘못된 조항을 참조함
2. 답변 시 응답이 자주 끊어짐
3. 질문의 의도를 파악하지 못함 등"></textarea>
      </div>
    </template>
    <template v-slot:popFooter>
      <div class="btn-wrap">
        <button type="button" class="btn-txt line-gray" @click="popCloseHandler">취소</button>
        <button type="button" class="btn-txt primary">제출하기</button>
      </div>
    </template>  
  </popup>
</template>

<script>
import popup from '@/components/baseCommonUI/UiModal.vue'

export default {
  name: 'ACZ0307P02',
  components: {
    popup,
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
