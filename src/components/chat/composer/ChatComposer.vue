<template>
  <!-- 옵션 레이어 영역(ACZ0304P03) -->
  <ChatOption 
    v-if="isOptOpen" 
    @close="handleOptClose" 
    @select-opt-list="setSelectedOpt"
    :optList="optList" 
    :multiSelect="optMultiSelect"
    :optTitle="optTitle"
  />
  <div class="opt-group" v-if="optList.length > 0">
    <button type="button" class="btn-opt" @click="handleOptOpen">{{optTitle}}</button>
    <div class="opt-inner">
      <ul class="opt-list">
        <li class="opt-item" v-for="item in optSelectedList" :key="item.value">
          <span class="badge">{{ item.label }}</span>
          <UiTooltip>
            <template v-slot:tooltipBtn>
              <button type="button" class="btn-opt-del"><span class="blind">삭제</span></button>
            </template>
            <template v-slot:tooltipContent>삭제</template>
          </UiTooltip>
        </li>
      </ul>
    </div>
  </div>
  <div class="chat-input-wrap" 
    :class="{'has-attached': attachedFile.length > 0, 'has-opt': optList.length > 0, 'has-upload': showFileUpload, 'multi-row': isMessageMulti}"
  >
    <!-- 첨부 파일 영역 -->
    <div class="chat-attached-box" v-if="attachedFile.length > 0">
      <div class="attached-item" :class="{'loading': item.isLoading}" v-for="item in attachedFile" :key="item.id">
        <UiLoadingSpinner :fullScreen="false" v-if="item.isLoading" />
        <span class="attached" v-else></span>
        <span class="file-name">{{ item.name }}</span>
        
        <UiTooltip>
          <template v-slot:tooltipBtn>
            <button type="button" class="btn-attached-del"><span class="blind">삭제</span></button>
          </template>
          <template v-slot:tooltipContent>삭제</template>
        </UiTooltip>
      </div>
    </div>

    <!-- 챗봇 입력 영역 -->
    <div ref="composerBoxRef" class="chat-composer-box">
      <textarea ref="ipMessageRef" rows="1" v-model="ipMessage" @input="handleMsgTyping" @focusin="handleMsgTyping" placeholder="내용을 최대한 명확하고 구체적으로 질의해주세요. (Shift + Enter 줄 바꿈 / Enter 전송)"></textarea>
    </div>

    <!-- 입력창 하단 액션 영역 -->
    <div class="chat-action-box">
      <UiTooltip v-if="showFileUpload">
        <template v-slot:tooltipBtn>
          <div class="ipt-file">
            <input type="file" id="fileUpload">
            <label for="fileUpload" class="btn-upload"><span class="blind">첨부파일 추가</span></label>
          </div>
        </template>
        <template v-slot:tooltipContent>첨부파일 추가</template>
      </UiTooltip>

      <div class="right-area">
        <UiTooltip>
          <template v-slot:tooltipBtn>
            <button type="button" class="btn-send" :disabled="!ipMessage" @click="handleSend"><span class="blind">전송</span></button>
          </template>
          <template v-slot:tooltipContent>전송</template>
        </UiTooltip>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, nextTick, onMounted, ref } from 'vue';

import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue'
import ChatOption from '@/components/chat/composer/ChatOption.vue'
import UiLoadingSpinner from '@/components/baseCommonUI/UiLoadingSpiner.vue'

export default defineComponent({
  name: 'ChatComposer',
  components: {
    UiTooltip,
    UiLoadingSpinner,
    ChatOption,
  },
  emits: ['send'],
  props: {
    optTitle: { // 옵션 타이틀(버튼명, 하단 옵션 레이어 타이틀)
      type: String,
      default: '',
    },
    optList: { // 옵션 리스트
      type: Array,
      default: () => [],
    },
    optMultiSelect: { // 옵션 다중 선택 여부
      type: Boolean,
      default: false,
    },
    showFileUpload: { // 파일 업로드 표시 여부
      type: Boolean,
      default: true,
    },
    attachedFile: { // 업로드 된 첨부 파일 리스트
      type: Array,
      default: () => [],
    }
  },
  setup(props, { emit }) {
    // 옵션 레이어 열기 
    const isOptOpen = ref(false);
    const handleOptOpen = () => {
      isOptOpen.value = true;
    };
    
    // 옵션 레이어 닫기
    const handleOptClose = () => {
      isOptOpen.value = false;
    };

    // 옵션 선택 리스트
    const optSelectedList = ref([]);
    const setSelectedOpt = (selectedValues) => {
      optSelectedList.value = selectedValues;
      optSelectedList.value = props.optList.filter(item => selectedValues.includes(item.value));
    };
    
    // 챗봇 메시지 전송시 이벤트 발생
    const handleSend = () => {
      emit('send');
    }

    // 챗봇 textarea height inline 계산
    const ipMessage = ref('');
    const ipMessageRef = ref(null);
    const composerBoxRef = ref(null);
    const isMessageMulti = ref(false);
    const initialComposerWidth = ref(0);
    const textMeasureCtx = document.createElement('canvas').getContext('2d');

    const getTextWidth = () => {
      if (!ipMessageRef.value || !textMeasureCtx) return 0;

      const textareaEl = ipMessageRef.value;
      const computedStyle = window.getComputedStyle(textareaEl);
      textMeasureCtx.font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;

      const lines = (ipMessage.value || '').split('\n');
      return lines.reduce((maxWidth, lineText) => {
        const lineWidth = textMeasureCtx.measureText(lineText || ' ').width;
        return Math.max(maxWidth, lineWidth);
      }, 0);
    };

    const clearInlineStyles = () => {
      if (!ipMessageRef.value || !composerBoxRef.value) return;
      ipMessageRef.value.style.height = '';
      composerBoxRef.value.style.height = '';
    };

    const syncMultiRowHeight = () => {
      if (!ipMessageRef.value || !composerBoxRef.value) return;

      const textareaEl = ipMessageRef.value;
      textareaEl.style.height = 'auto';
      textareaEl.style.height = `${textareaEl.scrollHeight}px`;
      composerBoxRef.value.style.height = `${textareaEl.scrollHeight}px`;
    };

    const updateComposerState = () => {
      if (!ipMessageRef.value) return;

      const message = ipMessage.value || '';
      if (!message) {
        isMessageMulti.value = false;
        clearInlineStyles();
        return;
      }

      const hasLineBreak = message.includes('\n');
      const textWidth = getTextWidth();
      const thresholdWidth = initialComposerWidth.value - 20;
      const shouldMulti = hasLineBreak || textWidth > thresholdWidth;
      isMessageMulti.value = shouldMulti;

      if (shouldMulti) {
        nextTick(() => {
          syncMultiRowHeight();
        });
        return;
      }

      clearInlineStyles();
    };

    onMounted(() => {
      nextTick(() => {
        if (!composerBoxRef.value) return;
        initialComposerWidth.value = composerBoxRef.value.getBoundingClientRect().width;
        updateComposerState();
      });
    });
    
    // 챗봇 메시지 변경 시 입력창 높이 조절
    const handleMsgTyping = () => {
      updateComposerState();
    };

    // 챗봇 textarea 포커스 아웃 시 입력창 높이 조절
    const handleMsgFocusOut = () => {
      isMessageMulti.value = false;
      clearInlineStyles();
    }

    return{
      isOptOpen,
      handleOptOpen,
      handleOptClose,
      handleSend,
      setSelectedOpt,
      optSelectedList,
      ipMessage,
      ipMessageRef,
      composerBoxRef,
      isMessageMulti,
      handleMsgTyping,
      handleMsgFocusOut,
    };
  },
})
</script>