<template>
  <div class="pub-guie-wrap">
    <header>Buttons Style Guide</header>

    <section>
      <div>
        <h3 class="pub-guide-tit-s">Text Button</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <div class="btn-wrap">
            <button type="button" class="btn-txt primary">primary button h40</button>
            <button type="button" class="btn-txt line-gray">line-gray button h40</button>
            <button type="button" class="btn-txt primary" disabled>disabled button</button>
            
          </div>
          <br>
          <!-- //예제 End -->
        </div>

        <h3 class="pub-guide-tit-s">Icon Button</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <button type="button" class="btn-more-list">더보기</button>
          <button type="button" class="btn-more">더보기</button>
          <button type="button" class="btn-refresh"><span class="blind">새로고침</span></button>
          <button type="button" class="btn-refresh white"><span class="blind">새로고침</span></button>
          <button type="button" class="btn-icon exel">엑셀 다운로드</button>
          <button type="button" class="btn-icon add">등록</button>
          <!-- <button type="button" class="btn-txt secondary">수정</button>
          <button type="button" class="btn-txt secondary">삭제</button> -->
          <!-- //예제 End -->
        </div>
         <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;button type="button" class="btn-more-list"&gt;더보기&lt;/button&gt;
&lt;button type="button" class="btn-more"&gt;더보기&lt;/button&gt;
&lt;button type="button" class="btn-refresh"&gt;&lt;span class="blind"&gt;새로고침&lt;/span&gt;&lt;/button&gt;
&lt;button type="button" class="btn-icon exel"&gt;엑셀 다운로드&lt;/button&gt;
&lt;button type="button" class="btn-icon add"&gt;등록&lt;/button&gt;
<!-- &lt;button type="button" class="btn-txt secondary"&gt;수정&lt;/button&gt;
&lt;button type="button" class="btn-txt secondary"&gt;삭제&lt;/button&gt; -->
          </pre>
          <!-- //소스코드 End -->
        </div>

        <h3 class="pub-guide-tit-s">Breadcrumbs</h3>
        <div class="pub-guide-view">
            <!-- 예제 Start -->
            <UiBreadcrumbs :breadcrumbs="breadcrumbsList" />
            <!-- //예제 End -->
        </div>
       
        <h3 class="pub-guide-tit-s">btn-wrap 분할</h3>
          <div class="pub-guide-view">
            <div class="btn-wrap col2">
              <button type="button" class="btn-txt line-gray">버튼</button>
              <button type="button" class="btn-txt line-gray">버튼</button>
              <button type="button" class="btn-txt line-gray">버튼</button>
              <button type="button" class="btn-txt line-gray">버튼</button>
            </div>
          </div>
          <!-- //예제 End -->
          <div class="pub-guide-code">
            <!-- 소스코드 Start -->
            <pre>
&lt;div class=&quot;btn-wrap col2&quot;&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;&#xBC84;&#xD2BC;&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;&#xBC84;&#xD2BC;&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;&#xBC84;&#xD2BC;&lt;/button&gt;
  &lt;button type=&quot;button&quot; class=&quot;btn-txt line-primary&quot;&gt;&#xBC84;&#xD2BC;&lt;/button&gt;
&lt;/div&gt;
          </pre>
        <!-- //소스코드 End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import UiBreadcrumbs from '@/components/baseCommonUI/UiBreadcrumbs.vue';

export default {
  name: 'StyleButton',
  components: {
    UiBreadcrumbs,
  },
  setup() {
    //breadcrumbs list
    const breadcrumbsList = ref([
      { name: '1depth menu', path: '' },
      { name: '2depth menu', path: '#' },
    ]);
    return {
      breadcrumbsList,
    };
  },
}
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
