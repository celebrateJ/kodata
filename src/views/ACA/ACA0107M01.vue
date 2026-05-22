<template>
  <div class="chatbot-list-wrap">
    <div class="content-inner">
      <div class="page-title-wrap">
        <h2 class="page-ttl">지식관리시스템 <span class="cnt">10</span></h2>
        <p class="desc">규정, 시행문, 계약서 등 회사 내 각종 문서를 검색하고 확인할 수 있습니다.</p>
      </div>
      
      <ul class="chatbot-list">
        <li class="chatbot-item" v-for="(item, index) in tempChatbotList" :key="index">
          <div class="chatbot-util">
            <UiTooltip>
              <template v-slot:tooltipBtn>
                <button 
                  type="button" 
                  class="ibtn-favorite" 
                  :class="{ active: item.favorite }" 
                  @click="handleFavorite(item)"
                >
                  <span class="blind">즐겨찾기</span>
                </button>
              </template>
              <template v-slot:tooltipContent>{{ item.favorite ? '즐겨찾기 해제' : '즐겨찾기 추가' }}</template>
            </UiTooltip>
          </div>
          
          <div class="chatbot-ttl">
            <!-- symbolType 종류  
              ai : AI / doc : 문서 / knowledge : 지식 / counsel : 상담 / contract : 계약
              code : 코드 / prediction : 예측 / report : 보고서 / security : 보안 / strategy : 전략
              planning : 기획 / operation : 운영 / data : 데이터 / algorithms : 알고리즘 / material : 자료
            -->
            <span class="symbol" :class="`type-${item.chatbotType}`"></span>
            <span class="ttl">{{ item.chatName }}</span>
          </div>
  
          <p class="desc">{{ item.description }}</p>
  
          <div class="chatbot-info">
            <span class="dept">{{ item.department }}</span>
            <span class="name">{{ item.name }}</span>
          </div>
          
          <router-link class="link-chatbot" target="_blank" to="#/"><span class="blind">앱 이동</span></router-link>
        </li>
      </ul>

      <div class="page-title-wrap">
        <h2 class="page-ttl">평가/분석/진단보고서 초안 <span class="cnt">10</span></h2>
        <p class="desc">규정, 시행문, 계약서 등 회사 내 각종 문서를 검색하고 확인할 수 있습니다.</p>
      </div>

      <ul class="chatbot-list">
        <li class="chatbot-item" v-for="(item, index) in tempChatbotList" :key="index">
          <div class="chatbot-util">
            <UiTooltip>
              <template v-slot:tooltipBtn>
                <button type="button" class="ibtn-favorite" :class="{ active: item.favorite }"  @click="handleFavorite(item)"><span class="blind">즐겨찾기</span></button>
              </template>
              <template v-slot:tooltipContent>{{ item.favorite ? '즐겨찾기 해제' : '즐겨찾기 추가' }}</template>
            </UiTooltip>
          </div>
          
          <div class="chatbot-ttl">
            <!-- symbolType 종류  
              ai : AI / doc : 문서 / knowledge : 지식 / counsel : 상담 / contract : 계약
              code : 코드 / prediction : 예측 / report : 보고서 / security : 보안 / strategy : 전략
              planning : 기획 / operation : 운영 / data : 데이터 / algorithms : 알고리즘 / material : 자료
            -->
            <span class="symbol" :class="`type-${item.chatbotType}`"></span>
            <span class="ttl">{{ item.chatName }}</span>
          </div>
  
          <p class="desc">{{ item.description }}</p>
  
          <div class="chatbot-info">
            <span class="dept">{{ item.department }}</span>
            <span class="name">{{ item.name }}</span>
            <span class="model-type" v-if="item.modelType">{{ item.modelType }}</span>
          </div>
          
          <router-link class="link-chatbot" target="_blank" to="#/"><span class="blind">앱 이동</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';

export default {
  name: 'ACA0107M01',
  components: {
    UiTooltip,
  },
  setup() {
    // 즐겨찾기
    const handleFavorite = (item) => {
      item.favorite = !item.favorite;
    }

    // temp 퍼블 확인용 임시 데이터
    const tempChatbotList = ref([
      {
        id: 1,
        chatName: 'Chat-KODATA',
        description: 'KODATA 직원이 분석보고서 작성 등을 위해',
        department: '마케팅 AX',
        name: '홍길동 전문연구원',
        favorite: true,
        chatbotType: 'ai',
      },
      {
        id: 2,
        chatName: '문서 아카이브',
        description: 'KODATA 직원이 분석보고서 작성 등을 위해 활동하는 업무용 챗봇 입니다.',
        department: '마케팅 AX',
        name: '홍길동 전문연구원',
        favorite: false,
        chatbotType: 'doc',
      },
      {
        id: 3,
        chatName: '업무지식 챗봇',
        description: 'KODATA 직원이 분석보고서 작성 등을 위해 활동하는 업무용 챗봇 입니다.',
        department: '마케팅 AX',
        name: '홍길동 전문연구원',
        favorite: false,
        chatbotType: 'knowledge',
      },
      {
        id: 4,
        chatName: '상담지원 챗봇',
        description: 'KODATA 직원이 분석보고서 작성 등을 위해 활동하는 업무용 챗봇 입니다.',
        department: '마케팅 AX',
        name: '홍길동 전문연구원',
        favorite: false,
        chatbotType: 'counsel',
      },
      {
        id: 5,
        chatName: '계약현황 챗봇',
        description: 'KODATA 직원이 분석보고서 작성 등을 위해 활동하는 업무용 챗봇 입니다.',
        department: '마케팅 AX',
        name: '홍길동 전문연구원',
        favorite: false,
        chatbotType: 'contract',
      },
    ]);

    return {
      handleFavorite,
      
      tempChatbotList,
    };
  },
}
</script>
