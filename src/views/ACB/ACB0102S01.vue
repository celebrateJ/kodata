<template>
  <div class="page-header">
    <UiBreadcrumbs :breadcrumbs="breadcrumbsList" />
    <router-link to="#/" class="btn-list">목록</router-link>
  </div>
  <div class="work-container" :class="{ 'view-panel': isPanel }">
    <div class="work-content-wrapper">
      <div class="content-inner">
        <div class="archive-wrap">
          <div class="page-title-wrap">
            <h2 class="page-ttl">문서 아카이브</h2>
            <p class="desc">규정, 시행문, 계약서 등 회사 내 각종 문서를 검색하고 확인할 수 있습니다.</p>
          </div>
    
          <div class="filter-box">
            <div class="ipt-row">
              <UiSelect 
                :options="tempSelectOptions" 
                :initialValue="tempSelectedOption" 
              />
              <UiSelect 
                :options="tempSelectOptions" 
                :initialValue="tempSelectedOption" 
              />
              <UiSelect 
                :options="tempSelectOptions" 
                :initialValue="tempSelectedOption" 
              />
              <UiSelect 
                :options="tempSelectOptions" 
                :initialValue="tempSelectedOption" 
              />
            </div>
            <div class="ipt-row">
              <UiTextField>
                <input type="text" placeholder="문서 제목으로 검색">
                <template #suffix>
                  <UiTooltip direction="bottom">
                    <template v-slot:tooltipBtn>
                      <button type="button" class="ibtn-search"><span class="blind">검색</span></button>
                    </template>
                    <template v-slot:tooltipContent>검색</template>
                  </UiTooltip>
                </template>
              </UiTextField>
            </div>
            <div class="keyword-group">
              <span class="txt">최근 검색어</span>
              <ul class="opt-list">
                <li class="opt-item" v-for="item in tempOptSelectedList" :key="item.value">
                  <span class="badge">{{ item.label }}</span>
                  <UiTooltip>
                    <template v-slot:tooltipBtn>
                      <button type="button" class="ibtn-opt-del"><span class="blind">삭제</span></button>
                    </template>
                    <template v-slot:tooltipContent>삭제</template>
                  </UiTooltip>
                </li>
              </ul>
            </div>
          </div>
    
          <div class="result-box">
            <div class="result-info">
              <span class="txt">검색 결과 <span class="cnt">10</span>건 (검색어 : 경영)</span>
      
              <div class="util-group">
                <div class="btn-wrap auto">
                  <button type="button" class="btn-txt primary sm" @click="handlePopOpen('ACB0102S09')">문서업로드</button>
                  <button type="button" class="btn-txt line-gray sm">삭제</button>
                </div>
                
                <div class="ipt-row">
                  <UiSelect 
                    :options="tempSelectOptions" 
                    :initialValue="tempSelectedOption" 
                  />
                  <UiSelect 
                    :options="tempSelectOptions" 
                    :initialValue="tempSelectedOption" 
                  />
                </div>
              </div>
            </div>
          </div>
          <ul class="archive-list">
            <li class="archive-item" v-for="(item, index) in tempArchiveList" :key="index">
              <div class="info-head">
                <UiTooltip>
                  <template v-slot:tooltipBtn>
                    <button type="button" class="btn-ttl" @click="handleViewDoc({ title: item.title })">{{ item.title }}</button>
                  </template>
                  <template v-slot:tooltipContent>문서 보기</template>
                </UiTooltip>
                <span class="date">{{ item.date }}</span>
              </div>

              <ul class="info-list">
                <li>
                  <span class="label">업무 분야</span>
                  <span class="value">{{ item.businessArea }}</span>
                </li>
                <li>
                  <span class="label">문서 유형</span>
                  <span class="value">{{ item.documentType }}</span>
                </li>
                <li>
                  <span class="label">작성 부서</span>
                  <span class="value">{{ item.department }}</span>
                </li>
                <li>
                  <span class="label">파일 속성</span>
                  <span class="value">{{ item.fileAttribute }}</span>
                </li>
              </ul>

              <div class="info-btm">
                <UiTooltip>
                  <template v-slot:tooltipBtn>
                    <button type="button" class="ibtn-trash" @click="handlePopOpen('ACB0102S09Delete')"><span class="blind">삭제</span></button>
                  </template>
                  <template v-slot:tooltipContent>삭제</template>
                </UiTooltip>

                <div class="right-area">
                  <UiTooltip>
                    <template v-slot:tooltipBtn>
                      <button type="button" class="ibtn-save"><span class="blind">저장</span></button>
                    </template>
                    <template v-slot:tooltipContent>저장</template>
                  </UiTooltip>
                  <UiTooltip>
                    <template v-slot:tooltipBtn>
                      <button type="button" class="ibtn-bookmark" :class="{ active: item.bookmark }" @click="handleBookmark(item)"><span class="blind">북마크</span></button>
                    </template>
                    <template v-slot:tooltipContent>북마크</template>
                  </UiTooltip>
                  <UiTooltip>
                    <template v-slot:tooltipBtn>
                      <button type="button" class="ibtn-chatbot"><span class="blind">챗봇 질문하기</span></button>
                    </template>
                    <template v-slot:tooltipContent>챗봇 질문하기</template>
                  </UiTooltip>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="work-panel-wrap" v-if="isPanel">
      <div class="work-panel-inner">
        <div class="viewer-opt-box">
          <span class="opt-ttl">붙임문서(12건)</span>
          
          <div class="ipt-multi-wrap">
            <UiSelect 
              :options="tempSelectOptions" 
              :initialValue="tempSelectedOption" 
            />
            <UiTooltip>
              <template v-slot:tooltipBtn>
                <button type="button" class="ibtn-save"><span class="blind">저장</span></button>
              </template>
              <template v-slot:tooltipContent>저장</template>
            </UiTooltip>
          </div>
        </div>
        <PanelViewer
          @close-panel="handleClosePanel"
          :viewerTitle="viewerTitle"
          :viewerPage="viewerPage"
          :totalPage="totalPage"
          :chkPage="false"
        />
      </div>
    </div>
  </div>

  <!-- s : 문서업로드 팝업 -->
  <ACB0102S09
    :active-popup = "activePopups.has('ACB0102S09')"
    :pop-close-handler="() => handlePopClose('ACB0102S09')"
  />
  <!-- e : 문서업로드 팝업 -->
  <!-- s : 문서삭제 팝업 -->
  <ACB0102S09Delete
    :active-popup = "activePopups.has('ACB0102S09Delete')"
    :pop-close-handler="() => handlePopClose('ACB0102S09Delete')"
  />
  <!-- e : 문서삭제 팝업 -->
</template>

<script>
import { ref } from 'vue';

import UiBreadcrumbs from '@/components/baseCommonUI/UiBreadcrumbs.vue';
import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';
import UiTextField from '@/components/baseCommonUI/UiTextField.vue';
import UiSelect from '@/components/baseCommonUI/UiSelect.vue';

import PanelViewer from '@/layouts/panel/ThePanelViewer.vue'; // 문서뷰어 패널
import ACB0102S09 from '@/views/ACB/ACB0102S09.vue'; // 문서업로드 팝업
import ACB0102S09Delete from '@/views/ACB/ACB0102S09Delete.vue'; // 문서삭제 팝업

export default {
  name: 'ACB0102S01',
  components: {
    UiBreadcrumbs,
    UiTextField,
    UiSelect,
    UiTooltip,
    PanelViewer,
    ACB0102S09,
    ACB0102S09Delete,
  },
  setup() {
    const breadcrumbsList = ref([
      { name: '지식관리시스템', path: '' },
      { name: '문서 아카이브', path: '' },
    ]);

    const isPanel = ref(false); // 우측 패널 표시 여부
    const viewerTitle = ref(''); // 출처 파일 제목
    const viewerPage = ref(''); // 활성화된 출처 파일 페이지
    const totalPage = ref('213'); // 임시 213
    const handleViewDoc = ({ title }) => {
      isPanel.value = true;
      viewerTitle.value = title;
      console.log('isPanel', isPanel.value, 'title', viewerTitle.value, 'page', viewerPage.value);
    }

    const handleClosePanel = () => {
      console.log('handleClosePanel');
      isPanel.value = false;
      viewerTitle.value = '';
      viewerPage.value = '';
      totalPage.value = '213';
    };

    const handleBookmark = (item) => {
      item.bookmark = !item.bookmark;
    };

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

    // 임시 데이터
    const tempSelectOptions = ref([
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ]);
    const tempSelectedOption = ref('');
    const tempOptSelectedList = ref([
      { value: '1', label: '최근 검색어 1' },
      { value: '2', label: '최근 검색어 2' },
      { value: '3', label: '최근 검색어 3' },
    ]);

    const tempArchiveList = ref([
      {
        id: 1,
        title: '연차·휴가 사용 규정',
        date: '2026-01-15',
        businessArea: '경영',
        documentType: '규정',
        department: '재무회계팀',
        fileAttribute: 'hwp / 15.MB',
        bookmark: false,
      },
      {
        id: 2,
        title: '법인카드 사용 및 관리 규정',
        date: '2026-01-15',
        businessArea: '경영',
        documentType: '규정',
        department: '재무회계팀',
        fileAttribute: 'hwp / 15.MB',
        bookmark: true,
      },
    ]);

    return {
      breadcrumbsList,
      isPanel,
      handleViewDoc,
      handleClosePanel,
      handleBookmark,
      viewerTitle,
      viewerPage,
      totalPage,
      activePopups,
      handlePopOpen,
      handlePopClose,

      tempSelectOptions,
      tempSelectedOption,
      tempOptSelectedList,

      tempArchiveList,
    };
  },
}
</script>
