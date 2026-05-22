
<template>
  <div class="err-message">
    <p class="message" v-html="errMessage[errType]"></p>
    <UiTooltip direction="bottom" v-if="errType === 'err'">
      <template v-slot:tooltipBtn>
        <button type="button" class="ibtn-refresh"><span class="blind">다시 실행</span></button>
      </template>
      <template v-slot:tooltipContent>다시 실행</template>
    </UiTooltip>
    <UiTooltip direction="bottom" v-if="errType === 'network-err'">
      <template v-slot:tooltipBtn>
        <button type="button" class="ibtn-new-chat"><span class="blind">새 채팅</span></button>
      </template>
      <template v-slot:tooltipContent>새 채팅</template>
    </UiTooltip>
  </div>
</template>

<script>
import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue'


export default {
  name: 'ChatErr',
  components: {
    UiTooltip,
  },
  props: {
    errType: {
      type: String, 
      default: 'err', // err : 장애 발생, network-err : 네트워크 장애 발생, privacy : 민감정보 포함 질문 시, unknown : 의도 불명확
    },
  },
  setup(props) {
    const errMessage = {
      err: '일시적인 오류가 발생했습니다. <br>잠시 후 다시 시도해주세요',
      'network-err': '네트워크가 끊겼거나 답변에 오류가 있어요. <br> 새로고침 하거나 다시 요청해주세요.',
      privacy: '<span class="fc-err">가드레인 차단</span><br>민감정보 (주민번호, 계좌번호 등) 가 감지되었습니다.',
      unknown: '이해하지 못했어요. 혹시 오타나 제가 이해할 수 없는 단어가 포함되어 있지 않은 지 확인 후 다시 질문해주세요.',
    };

    return {
      errMessage,
    };
  },
}
</script>