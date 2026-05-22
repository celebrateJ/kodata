<template>
  <div class="answer-item">
    <!-- 아이콘 영역 -->
    <UiLoadingSpinner :fullScreen="false" v-if="isLoading && showLoading" /> <!-- 로딩 spinner -->
    <template v-else>
      <!-- symbolType 종류  
        ai : AI / doc : 문서 / knowledge : 지식 / counsel : 상담 / contract : 계약
        code : 코드 / prediction : 예측 / report : 보고서 / security : 보안 / strategy : 전략
        planning : 기획 / operation : 운영 / data : 데이터 / algorithms : 알고리즘 / material : 자료
      -->
      <span class="symbol" :class="`type-${symbolType}`" v-if="errType === 'none'"></span> <!-- ai 심볼 -->
      <span class="err-symbol" :class="errType" v-else></span> <!-- 에러 심볼 -->
    </template>

    <!-- 로딩 -->
    <ChatLoading v-if="isLoading && showLoading" />

    <!-- 답변 -->
    <template v-else>
      <!-- 에러 영역 -->
      <ChatErr :errType="errType" v-if="errType !== 'none'" />

      <!-- 답변 영역 -->
      <div class="answer-content" v-if="errType === 'none'">
        <!-- 마크다운 영역 -->
        <div class="ai-assistant" v-html="content">
        </div>

        <!-- 출처 영역 -->
        <div class="answer-source" v-if="sources.length > 0">
          <div class="source-item" v-for="item in sources" :key="item.title">
            <span class="doc-name">{{ item.title }}</span>
            <div class="page-info">
              <template v-for="itemPage in item.pages" :key="itemPage">
                <UiTooltip>
                  <template v-slot:tooltipBtn>
                    <button type="button" class="btn-page" @click="handleViewDoc(item.title, itemPage)">[p.{{ itemPage }}]</button>
                  </template>
                  <template v-slot:tooltipContent>p.{{ itemPage }} 문서 보기</template>
                </UiTooltip>
              </template>
            </div>

            <div class="right-area">
              <span class="date">{{ item.date }}</span>
              <UiTooltip>
                <template v-slot:tooltipBtn>
                  <button type="button" class="ibtn-save"><span class="blind">저장</span></button>
                </template>
                <template v-slot:tooltipContent>원본 다운로드</template>
              </UiTooltip>
            </div>
          </div>
        </div>
        
        <!-- 추천 질문 -->
        <div class="answer-recommend" v-if="recommend && recommend.length > 0">
          <template v-for="item in recommend" :key="item">
            <button type="button" class="btn-recommend">{{ item }}</button>
          </template>
        </div>

        <!-- 피드백 -->
        <div class="answer-feedback" v-if="showFeedback">
          <UiTooltip direction="bottom">
            <template v-slot:tooltipBtn>
              <button type="button" class="ibtn-copy"><span class="blind">복사</span></button>
            </template>
            <template v-slot:tooltipContent>답변 복사</template>
          </UiTooltip>
          <UiTooltip direction="bottom" v-if="isLike">
            <template v-slot:tooltipBtn>
              <button type="button" class="ibtn-like" :class="{ 'active': isStateLike }" @click="handleLike('like')"><span class="blind">좋아요</span></button>
            </template>
            <template v-slot:tooltipContent>답변이 마음에 들어요</template>
          </UiTooltip>
          <UiTooltip direction="bottom" v-if="isLike">
            <template v-slot:tooltipBtn>
              <button type="button" class="ibtn-dislike" :class="{ 'active': isStateDislike }" @click="handleLike('dislike')"><span class="blind">싫어요</span></button>
            </template>
            <template v-slot:tooltipContent>답변이 마음에 들지 않아요</template>
          </UiTooltip>
          <UiTooltip direction="bottom" v-if="isFeedback">
            <template v-slot:tooltipBtn>
              <button type="button" class="ibtn-feedback" @click="handlePopOpen('ACZ0307P02')"><span class="blind">의견 보내기</span></button>
            </template>
            <template v-slot:tooltipContent>의견 보내기</template>
          </UiTooltip>
        </div>
      </div>
    </template>
  </div>

  <!-- s : 의견 보내기 팝업 -->
  <ACZ0307P02
    :active-popup = "activePopups.has('ACZ0307P02')"
    :pop-close-handler="() => handlePopClose('ACZ0307P02')"
  />
  <!-- e : 의견 보내기 팝업 -->
</template>

<script>
import { ref } from 'vue';

import ChatLoading from '@/components/chat/messages/ChatLoading.vue' // 챗봇 로딩
import ChatErr from '@/components/chat/messages/ChatErr.vue' // 답변 - 에러 발생 시
import UiLoadingSpinner from '@/components/baseCommonUI/UiLoadingSpiner.vue' // 답변 - 공통 loading ui
import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue' // tooltip

import ACZ0307P02 from '@/views/ACZ/ACZ0307P02.vue'; // 의견 보내기 팝업

export default {
  name: 'ChatAnswer',
  components: {
    UiLoadingSpinner,
    ChatLoading,
    ChatErr,
    UiTooltip,
    ACZ0307P02,
  },
  props: {
    showFeedback: { // 피드백버튼 영역 표시 여부
      type: Boolean,
      default: true,
    },
    isLike: { // 좋아요,싫어요 버튼 표시 여부
      type: Boolean,
      default: true,
    },
    isFeedback: { // 의견 보내기 버튼 표시 여부
      type: Boolean,  
      default: true,
    },
    symbolType: { // 챗봇 icon 종류
      type: String, 
      default: 'ai', // symbolType 종류 화면 상단 참고
    },
    errType: { // 에러 타입
      type: String, 
      default: 'none', // none : 정상, err : 장애 발생, network-err : 네트워크 장애 발생, privacy : 민감정보 포함 질문 시
    },
    content: { // 답변 내용
      type: String,
      default: '',
    },
    sources: { // 출처 리스트
      type: Array,
      default: [],
    },
    recommend: { // 추천 질문 리스트
      type: Array,
      default: [],
    },
    showLoading: { // 로딩 여부
      type: Boolean,
      default: true,
    },
  },
  emits: ['view-doc'],
  setup(props, { emit }) {
    /* temp로 시작되는 변수or함수명은 퍼블 확인용 임시입니다 */

    const handleViewDoc = (title, page) => {
      emit('view-doc', { title, page });
    };
    
    const isLoading = ref(true);
    const isLoadingCount = ref(0);
    
    const isLoadingInterval = () => { // 로딩 확인용 임시 인터벌
      isLoadingCount.value += 1;
      if (isLoadingCount.value > 5) {
        isLoading.value = false;
        clearInterval(isLoadingInterval);
      }
      setTimeout(() => {
        isLoadingInterval();
      }, 1000);
    }
    isLoadingInterval();

    // popup 실행
    const activePopups = ref(new Set());

    const handlePopOpen = (label) => {
      activePopups.value = new Set([...activePopups.value, label]);
    };

    const handlePopClose = (label) => {
      const newSet = new Set(activePopups.value);
      newSet.delete(label);
      activePopups.value = newSet;
    };

    const isStateLike = ref(false);
    const isStateDislike = ref(false);
    const handleLike = (type) => {
      if (type === 'like') {
        isStateDislike.value = false;
        isStateLike.value = true;
      } else {
        isStateLike.value = false;
        isStateDislike.value = true;
      }
    };
    return {
      isLoading,
      handleViewDoc,
      handleLike,
      isStateLike,
      isStateDislike,
      activePopups,
      handlePopOpen,
      handlePopClose,
    };
  },
}
</script>