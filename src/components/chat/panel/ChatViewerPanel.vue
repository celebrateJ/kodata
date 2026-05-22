<template>
  <div class="viewer-info-box">
    <span class="viewer-ttl">{{ viewerTitle }}</span>
    <div class="viewer-page-info">
      (
        <UiTextField :showClearBtn="false">
          <input type="number" :value="viewerPage">
        </UiTextField>
        <span class="total">/{{ totalPage }}</span>
      )
    </div>
    <UiTooltip>
      <template v-slot:tooltipBtn>
        <button type="button" class="btn-close" @click="handleClosePanel"><span class="blind">닫기</span></button>
      </template>
      <template v-slot:tooltipContent>닫기</template>
    </UiTooltip>
  </div>
  <div class="viewer-option-box">
    <div class="ipt-box">
      <input type="checkbox" id="chkViewPage" class="ipt-check">
      <label for="chkViewPage">관련 페이지만 보기</label>
    </div>
  </div>
  <div class="viewer-content">
    <div style="background-color: rgba(255, 0, 0, .3); height: 1000px">
      문서뷰어 임시 영역
    </div>
  </div>
</template>

<script>
import UiTextField from '@/components/baseCommonUI/UiTextField.vue';
import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';

export default {
  name: 'ChatViewerPanel',
  components: {
    UiTextField,
    UiTooltip,
  },
  props: {
    viewerTitle: {
      type: String,
      default: '',
    },
    viewerPage: {
      type: String,
      default: '',
    },
    totalPage: {
      type: String,
      default: '',
    },
  },
  emits: ['close-panel'],
  setup(props, { emit }) {
    const handleClosePanel = () => {
      emit('close-panel');
      console.log('handleClosePanel');
    };
    return {
      handleClosePanel,
    };
  },
}
</script>
