<template>
  <div class="page-header">
    <UiBreadcrumbs :breadcrumbs="breadcrumbsList" />
    <router-link to="#/" class="btn-list">목록</router-link>
  </div>

  <div class="chat-container" :class="{ intro: isIntro, composer: !isIntro, 'view-panel': isPanel }">
    <div class="chat-content-wrapper">
      <div class="content-inner" ref="contentInner">
        <!-- 챗봇 진입 전 유형 -->
        <ChatIntro 
          v-if="isIntro" 
          symbolType="ai"
          :typeList="tempTypeList"
          @type-select="handleTypeSelect"
        >
          <template #introTitle>챗본 진입 전 유형 : 박스형</template>
          <template #introDesc>
            템플릿 상세 내용
          </template>
        </ChatIntro>

        <!-- 채팅 내용 -->
        <div class="chat-messages-wrap" v-else>
          <div class="chat-box" :class="{ 'h-auto': chatList.length > 0 }">
            <ChatAnswer 
              symbolType="contract"
              errType="none"
              :content="`${selectedType} 타입을 선택했어요. `"
              :showFeedback="false"
              :showLoading="false"
            />
          </div>
          <template v-for="chat, index in chatList" :key="index">
            <div class="chat-box" :class="{ 'h-auto': index < chatList.length - 1 }">
              <ChatQuestion 
                v-if="chat.question !== undefined"
                :content="chat.question.content"
              />
              <ChatAnswer 
                v-if="chat.answer !== undefined"
                :symbolType="chat.answer.symbolType" 
                :errType="chat.answer.errType" 
                :content="chat.answer.content"
                :sources="chat.answer.sources"
                :recommend="chat.answer.recommend"
                @view-doc="handleViewDoc"
              />
            </div>
          </template>
        </div>
      </div>
      <ChatComposer 
        v-if="!isIntro"
        @send="handleSend" 
        :optTitle="'업무분야 선택'"
        :optList="tempOptList"
        :optMultiSelect="true"
        :attachedFile="tempAttachedItems"
      />
    </div>
    <div class="chat-panel-wrap" v-if="isPanel">
      <div class="chat-panel-inner">
        <ChatViewerPanel
          @close-panel="handleClosePanel"
          :viewerTitle="viewerTitle"
          :viewerPage="viewerPage"
          :totalPage="totalPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue';

import UiBreadcrumbs from '@/components/baseCommonUI/UiBreadcrumbs.vue';

import ChatIntro from '@/components/chat/intro/ChatIntro.vue'; // 인트로
import ChatComposer from '@/components/chat/composer/ChatComposer.vue'; // 채팅 영역
import ChatQuestion from '@/components/chat/messages/ChatQuestion.vue'; // 질문
import ChatAnswer from '@/components/chat/messages/ChatAnswer.vue'; // 답변
import ChatViewerPanel from '@/components/chat/panel/ChatViewerPanel.vue'; // 문서뷰어 패널

export default {
  name: 'ACZ0601S01',
  components: {
    UiBreadcrumbs,
    ChatIntro,
    ChatComposer,
    ChatQuestion,
    ChatAnswer,
    ChatViewerPanel,
  },
  setup() {
    const breadcrumbsList = ref([
      { name: '지식관리시스템', path: '' },
      { name: '문서 아카이브', path: '' },
    ]);

    const isIntro = ref(true); // 챗봇 진입 전 유형 표시 여부
    const contentInner = ref(null); // 챗봇 내용 영역

    const isPanel = ref(false); // 우측 패널 표시 여부
    const viewerTitle = ref(''); // 출처 파일 제목
    const viewerPage = ref(''); // 활성화된 출처 파일 페이지
    const totalPage = ref('213'); // 임시 213
    const handleViewDoc = ({ title, page }) => {
      isPanel.value = true;
      viewerTitle.value = title;
      viewerPage.value = page;
      console.log('isPanel', isPanel.value, 'title', viewerTitle.value, 'page', viewerPage.value);
    }

    const handleClosePanel = () => {
      console.log('handleClosePanel');
      isPanel.value = false;
      viewerTitle.value = '';
      viewerPage.value = '';
      totalPage.value = '213';
    };

    // 전송 버튼 클릭 시 질문/답변 append 퍼블 확인용 예시
    let tempCnt = 0;
    const handleSend = () => {
      console.log('send');
      isIntro.value = false;

      // (임시) 질문 추가시 퍼블 확인용 
      const tempNewChat = {
        id: tempCnt + 1,
        question: tempAppendChatList.value[tempCnt].question,
        answer: undefined 
      };

      chatList.value.push(tempNewChat);

      // (개발 동일 처리 필요) 질문 출력 후 scroll 최하단 이동 처리
      setTimeout(() => {
        setScrollBottom();
      }, 300);
      
      // (임시) 퍼블 애니메이션 확인용 (임의 0.4s 후에 답변 출력되도록 처리)
      const tempCurrentIndex = chatList.value.length - 1; 
      setTimeout(() => { 
        chatList.value[tempCurrentIndex].answer = tempAppendChatList.value[tempCnt].answer;
        tempCnt++;
      }, 400);
    }

    // scroll 최하단 이동 처리(질문 출력 시 실행 필요)
    const setScrollBottom = () => {
      nextTick(() => {
        if (contentInner.value !== null) {
          contentInner.value.scrollTo({
            top: contentInner.value.scrollHeight,
            behavior: 'smooth',
          });
        }
      });
    }

    // 유형 선택시 챗봇 노출
    const selectedType = ref('');
    const handleTypeSelect = (item) => {
      isIntro.value = false;
      selectedType.value = item.label;
    }

    const chatList = ref([]);

    // 임시 마크다운 예시
    const tempMarkdown = ref(`<p>Markdown 문법별 변환 태그 css 적용 예시입니다.</p>
          
          <h1># 제목1 : h1 태그</h1>
          <h2>## 제목2 : h2 태그</h2>
          <h3>### 제목3 : h3 태그</h3>
          <h4>#### 제목4 : h4 태그</h4>
    
          <strong>**굵게** 또는 __굵게__ : strong 태그</strong> <br>
          <em>*기울임* 또는 _기울임_ : em 태그</em> <br>
          <del>~~취소선~~ : del 태그</del> <br>
    
          <ul>
            <li>markdown : - 항목 또는 * 항목 또는 + 항목</li>
            <li>리스트인 경우 ul 태그를 사용합니다</li>
            <li>각 항목은 li 태그로 구성됩니다</li>
          </ul> 
    
          <ol class="num-list">
            <li>markdown : 항목</li>
            <li>순서가 있는 리스트인 경우 ol 태그를 사용합니다</li>
            <li>각 항목은 li 태그로 구성됩니다</li>
          </ol> 
    
          <p>표 작성 : table 태그</p>
          <table>
            <thead>
              <tr>
                <th scope="col">th 내용</th>
                <th scope="col">th 내용</th>
                <th scope="col">th 내용</th>
                <th scope="col">th 내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>내용</strong></td>
                <td>내용</td>
                <td>내용</td>
                <td>내용</td>
              </tr>
              <tr>
                <td>내용</td>
                <td>내용</td>
                <td>내용</td>
                <td>내용</td>
              </tr>
              <tr>
                <td>내용</td>
                <td>내용</td>
                <td>내용</td>
                <td>내용</td>
              </tr>
            </tbody>
          </table>
    
          <p>--- or *** : hr 태그 </p>
          <hr>
          
          <blockquote>인용문 : blockquote 태그</blockquote> <br>
      
          <p>이외의 다른 markdown 문법은 웹에서 제공하는 기본 css 만 적용되어 노출됩니다. <br> 필요 시 요청주세요</p>`);

    // 임시 챗봇 예시
    const tempAppendChatList = ref([
      {
        'id': 1,
        'question': {'content': '에러타입(전송버튼 클릭 시 다음 타입 보여짐)',},
        'answer': {
          'symbolType': 'ai',
          'errType': 'err',
        },
      },
      {
        'id': 2,
        'question': {'content': '에러타입 - 네트워크 에러',},
        'answer': {
          'symbolType': 'doc',
          'errType': 'network-err',
        }
      },
      {
        'id': 3,
        'question': {'content': '에러타입 - 민감정보 포함 질문 시',},
        'answer': {
          'symbolType': 'knowledge',
          'errType': 'privacy',
        }
      },
      {
        'id': 4,
        'question': {'content': '에러타입 - 의도 불명확',},
        'answer': {
          'symbolType': 'counsel',
          'errType': 'unknown',
        }
      },
      {
        'id': 5,
        'question': {'content': '질문 내용 <br> 답변 내용 마크다운 문법 적용 예시',},
        'answer': {
          'symbolType': 'contract',
          'errType': 'none',
          'content': tempMarkdown.value,
          'sources': [{ title: 'AI RAG 구축 방법론', pages: [12, 14, 16, 18], date: '2026-05-13' }, { title: '파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명 파일명', pages: [12, 14], date: '2026-03-13' }],
          'recommend': ['연차 신청 방법', '휴직 안내'],
        }
      },
      {
        'id': 6,
        'question': {'content': '질문 내용',},
        'answer': {
          'symbolType': 'code',
          'errType': 'none',
          'content': '답변 내용',
          
        }
      },
    ])

    // 임시 선택 옵션 리스트
    const tempOptList = [
      { value: '1', label: '경영' },
      { value: '2', label: '마케팅' },
      { value: '3', label: '서비스' },
      { value: '4', label: '계약현황 챗봇' },
    ];
    
    // 인트로 박스 형태 타입 리스트
    const tempTypeList = [
      { value: '1', label: '유형1' },
      { value: '2', label: '유형2' },
      { value: '3', label: '유형3' },
      { value: '4', label: '유형4' },
      { value: '5', label: '유형5' },
    ];

    const tempAttachedItems = [ // 퍼블용 임시 데이터
      {id: 1, name: '신용평가산정기준신용평가산정기준신용평가산정기준01.pdf', isLoading: false},
      {id: 2, name: '신용평가산정기준02.pdf', isLoading: true},
      {id: 3, name: '신용평가산정기준03.pdf', isLoading: true},
      {id: 4, name: '신용평가산정기준03.pdf', isLoading: true},
    ];

    return {
      breadcrumbsList,
      isIntro,
      isPanel,
      handleViewDoc,
      handleSend,
      contentInner,
      chatList,
      viewerTitle,
      viewerPage,
      totalPage,
      handleClosePanel,
      handleTypeSelect,
      selectedType,

      tempMarkdown,
      tempOptList,
      tempTypeList,
      tempAttachedItems,
    };
  },
}
</script>
