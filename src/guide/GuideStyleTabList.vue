<template>
  <div class="pub-guie-wrap">
    <header>Tab Style Guide</header>

    <section>
      <div>
        <h3 class="pub-guide-tit-s">Tab style 01</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <div class="tab-box">
            <ul class="tabs">
              <UiTab
                v-for="(tab, index) in tabs"
                :key="index"
                :active="activeTabIndex === index"
                :disabled="tab.disabled"
                @tab-selected="handleTabSelected(index)"
              >
                {{ tab.label }}
              </UiTab>
            </ul>
          </div>
          
          <!-- Tabs Content -->
          <div class="tabs-content">
            <UiTabPanel v-if="activeTabIndex === 0">
              <div>content01</div>
            </UiTabPanel>
            <UiTabPanel v-if="activeTabIndex === 1">
              <div>content02</div>
            </UiTabPanel>
            <UiTabPanel v-if="activeTabIndex === 2">
              <div>content03</div>
            </UiTabPanel>
          </div>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;div class="tab-box"&gt;
  &lt;ul class="tabs"&gt;
    &lt;UiTab
      v-for="(tab, index) in tabs"
      :key="index"
      :active="activeTabIndex === index"
      :disabled="tab.disabled"
      @tab-selected="handleTabSelected(index)"
    &gt;
      &#123;&#123; tab.label &#125;&#125;
    &lt;/UiTab&gt;
  &lt;/ul&gt;
&lt;/div&gt;

<span class="comment">&lt;!-- Tabs Content --&gt;</span>
&lt;div class="tabs-content"&gt;
  &lt;UiTabPanel v-if="activeTabIndex === 0"&gt;
    &lt;div&gt;content01&lt;/div&gt;
  &lt;/UiTabPanel&gt;
  &lt;UiTabPanel v-if="activeTabIndex === 1"&gt;
    &lt;div&gt;content02&lt;/div&gt;
  &lt;/UiTabPanel&gt;
  &lt;UiTabPanel v-if="activeTabIndex === 2"&gt;
    &lt;div&gt;content03&lt;/div&gt;
  &lt;/UiTabPanel&gt;
&lt;/div&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
      </div>
      
      <div>
        <h3 class="pub-guide-tit-s">Tab style 02</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <div class="tab-box type-box">
            <ul class="tabs">
              <UiTab
                v-for="(tab, index) in tabs"
                :key="index"
                :active="activeTabIndex === index"
                :disabled="tab.disabled"
                @tab-selected="handleTabSelected(index)"
              >
                {{ tab.label }}
              </UiTab>
            </ul>
          </div>
          
          <!-- Tabs Content -->
          <div class="tabs-content">
            <UiTabPanel v-if="activeTabIndex === 0">
              <div>content01</div>
            </UiTabPanel>
            <UiTabPanel v-if="activeTabIndex === 1">
              <div>content02</div>
            </UiTabPanel>
            <UiTabPanel v-if="activeTabIndex === 2">
              <div>content03</div>
            </UiTabPanel>
          </div>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;div class="tab-box type-box"&gt;
  &lt;ul class="tabs"&gt;
    &lt;UiTab
      v-for="(tab, index) in tabs"
      :key="index"
      :active="activeTabIndex === index"
      :disabled="tab.disabled"
      @tab-selected="handleTabSelected(index)"
    &gt;
      &#123;&#123; tab.label &#125;&#125;
    &lt;/UiTab&gt;
  &lt;/ul&gt;
&lt;/div&gt;

<span class="comment">&lt;!-- Tabs Content --&gt;</span>
&lt;div class="tabs-content"&gt;
  &lt;UiTabPanel v-if="activeTabIndex === 0"&gt;
    &lt;div&gt;content01&lt;/div&gt;
  &lt;/UiTabPanel&gt;
  &lt;UiTabPanel v-if="activeTabIndex === 1"&gt;
    &lt;div&gt;content02&lt;/div&gt;
  &lt;/UiTabPanel&gt;
  &lt;UiTabPanel v-if="activeTabIndex === 2"&gt;
    &lt;div&gt;content03&lt;/div&gt;
  &lt;/UiTabPanel&gt;
&lt;/div&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import UiTab from '@/components/baseCommonUI/UiTab.vue';
import UiTabPanel from '@/components/baseCommonUI/UiTabPanel.vue';

export default {
  name: "StyleTabList",
  components: {
    UiTab,
    UiTabPanel,
  },
  setup() {
    // 현재 활성화된 탭의 인덱스
    const activeTabIndex = ref(0);

    // 탭 데이터
    const tabs = ref([
      { label: "Tab 1", disabled: false },
      { label: "Tab 2", disabled: false },
      { label: "Tab 3", disabled: false },
    ]);

    // 탭이 선택될 때 호출되는 메서드
    const handleTabSelected = (index) => {
      activeTabIndex.value = index;
    };

    return {
      activeTabIndex,
      tabs,
      handleTabSelected,
    };
  },
};
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
