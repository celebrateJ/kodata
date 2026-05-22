<template>
  <UiAccordionList :classList="['main']" :acdnList="acdnList" acdnItemKey="value" v-slot="{ item }">
    <UiAccordion
      :itemKey="item.value"
      :open="activeKey === item.value"
      @request-toggle="handleAccordionToggle"
    >
      <template #title>
        <button type="button" class="btn-main-acdn">
          {{ item.name }} <span class="cnt">{{ item.subCategory.length }}</span>
        </button>
      </template>
      <template #content>
        <ul class="category-list">
          <li class="category-item" :class="{'active': subActiveKey === `${item.value}-${subItem.value}`}" @click="handleCategoryToggle(subItem.value)" v-for="subItem in item.subCategory" :key="subItem.value">
            <button type="button" class="category-link">{{ subItem.name }}</button>
          </li>
        </ul>
      </template>
    </UiAccordion>
  </UiAccordionList>
</template>

<script>
import { ref } from 'vue'
import UiAccordionList from '@/components/baseCommonUI/UiAccordionList.vue'
import UiAccordion from '@/components/baseCommonUI/UiAccordion.vue'
export default {
  components: {
    UiAccordionList,
    UiAccordion,
  },
  setup() {
    const acdnList = [
      { value: '0', name: '지식관리시스템', subCategory: [{ value: '0', name: 'Chat-KODATA' }, { value: '1', name: '문서 아카이브' }, { value: '2', name: '업무지식 챗봇' }, { value: '3', name: '상담지원 챗봇' }, { value: '4', name: '계약현황 챗봇' }]},
      { value: '1', name: '평가/분석/진단보고서 초안', subCategory: [{ value: '0', name: '카테고리명' }]},
      { value: '2', name: '법인등기부등본', subCategory: [{ value: '0', name: '카테고리명' }]},
      { value: '3', name: '특정기업 식별', subCategory: [{ value: '0', name: '카테고리명' }]},
    ];

    const activeKey = ref('');
    const subActiveKey = ref(null);

    const handleAccordionToggle = (key) => {
      subActiveKey.value = null;
      activeKey.value = key;
    };

    const handleCategoryToggle = (key) => {
      subActiveKey.value = `${activeKey.value}-${key}`;
    };

    return {
      acdnList,
      activeKey,
      subActiveKey,
      handleAccordionToggle,
      handleCategoryToggle,
    };
  }
}
</script>

<style lang="scss" scoped></style>
