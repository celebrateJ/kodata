<template>
  <div class="chatbot-list-wrap">
    <div class="content-inner">
      <div class="page-title-wrap">
        <h2 class="page-ttl">지식관리시스템 <span class="cnt">10</span></h2>
        <p class="desc">규정, 시행문, 계약서 등 회사 내 각종 문서를 검색하고 확인할 수 있습니다.</p>
      </div>
      
      <ul class="chatbot-list">
        <li class="chatbot-item">
          <button type="button" class="btn-favorite"><span class="blind">즐겨찾기</span></button>
          
          <div class="chatbot-ttl">
            <!-- symbolType 종류  
              ai : AI / doc : 문서 / knowledge : 지식 / counsel : 상담 / contract : 계약
              code : 코드 / prediction : 예측 / report : 보고서 / security : 보안 / strategy : 전략
              planning : 기획 / operation : 운영 / data : 데이터 / algorithms : 알고리즘 / material : 자료
            -->
            <span class="symbol"></span>
            <span class="ttl">Chat-KODATA</span>
          </div>
  
          <p class="desc">KODATA 직원이 분석보고서 작성 등을 위해 활동하는 업무용 챗봇 입니다.</p>
  
          <div class="chatbot-info">
            <span class="dept">마케팅 AX</span>
            <span class="name">홍길동 전문연구원</span>
            <span class="model-type">GPT-5</span>
          </div>
          
          <router-link class="btn-chatbot" to="#/"><span class="blind">앱 이동</span></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'ACA0107M01',
  components: {
  },
  setup() {

    return {
      
    };
  },
}
</script>
