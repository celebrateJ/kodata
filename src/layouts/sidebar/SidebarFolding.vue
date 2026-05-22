<template>
  <UiAccordionList :acdnList="acdnList" acdnItemKey="value" v-slot="{ item }">
    <UiAccordion
      :itemKey="item.value"
      :open="activeKey === item.value"
      @request-toggle="handleAccordionToggle"
    >
      <template #title>{{ item.name }} <span class="cnt">{{ item.subCategory.length }}</span></template>
      <template #content>
        <ul class="category-list">
          <li class="category-item" :class="{'active': subActiveKey === `${item.value}-${subItem.value}`}" @click="handleCategoryToggle(subItem.value)" v-for="subItem in item.subCategory" :key="subItem.value">
            <router-link :to="subItem.url" class="category-link">{{ subItem.name }}</router-link>
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
      { value: '0', name: '업무 분야', subCategory: [{ value: '0', name: '전체', url: '#/' }, { value: '1', name: '경영', url: '#/' }, { value: '2', name: '마케팅', url: '#/' }, { value: '3', name: '서비스', url: '#/' }, { value: '4', name: '계약현황 챗봇', url: '#/' }]},
      { value: '1', name: '문서유형', subCategory: [{ value: '0', name: '전체', url: '#/' }]},
    ];

    const activeKey = ref(acdnList[0].value);
    const subActiveKey = ref(`${acdnList[0].value}-${acdnList[0].subCategory[0].value}`);

    const handleAccordionToggle = (key) => {
      activeKey.value = activeKey.value === key ? null : key;
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
