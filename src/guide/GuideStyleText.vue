<template>
  <div class="pub-guie-wrap">
    <header>Text/Title Style Guide</header>

    <section>
      <div>
        <h3 class="pub-guide-tit-s">Headline</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <h2 class="main-ttl">main title</h2>
          <h3 class="sub-ttl">sub title</h3>
          <!-- 컨텐츠 영역 -->
          <h4 class="section-ttl">section title</h4>
          <h4 class="l-ttl">large title</h4>
          <h4 class="m-ttl">medium title</h4>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;h2 class="main-ttl"&gt;main title&lt;/h2&gt;
&lt;h3 class="sub-ttl"&gt;sub title&lt;/h3&gt;
<span class="comment">&lt;!-- 컨텐츠 영역 --&gt;</span>
&lt;h4 class="section-ttl"&gt;section title&lt;/h4&gt;
&lt;h4 class="l-ttl"&gt;large title&lt;/h4&gt;
&lt;h4 class="m-ttl"&gt;medium title&lt;/h4&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
        
        <h3 class="pub-guide-tit-s">Headline 조합</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <!-- s : page-title-wrap -->
          <div class="page-title-wrap">
            <h2 class="main-ttl">타이틀명은 router에서 meta로 받아옴.(program/program-ScheduleList.vue 화면 참고)</h2>
            <UiBreadcrumbs :breadcrumbs="breadcrumbsList" />
          </div>
          <!-- e : page-title-wrap -->
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;div class=&quot;page-title-wrap&quot;&gt;
&lt;h2 class=&quot;main-ttl&quot;&gt;pageTitle&lt;/h2&gt;
  &lt;UiBreadcrumbs :breadcrumbs=&quot;breadcrumbsList&quot; /&gt;
&lt;/div&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>

        <h3 class="pub-guide-tit-s">Label</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <span class="lb-square">square label</span>
          <span class="lb-round blue">round label blue</span>
          <span class="lb-round sky">round label sky</span>
          <span class="lb-round green">round label green</span>
          <span class="lb-round gray">round label gray</span>
          <span class="lb-round yellow">round label yellow</span>
          <span class="lb-round graybg">round label graybg</span>
          <span class="lb-round orange">round label orange</span>
          <span class="lb-round purple">round label purple</span>
          <span class="lb-round pink">round label pink</span>
          <span class="lb-round black">round label black</span>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;span class="lb-square"&gt;square label&lt;/span&gt;

&lt;span class="lb-round blue"&gt;round label blue&lt;/span&gt;
&lt;span class="lb-round sky"&gt;round label sky&lt;/span&gt;
&lt;span class="lb-round green"&gt;round label green&lt;/span&gt;
&lt;span class="lb-round gray"&gt;round label gray&lt;/span&gt;
&lt;span class="lb-round yellow"&gt;round label yellow&lt;/span&gt;
&lt;span class="lb-round graybg"&gt;round label graybg&lt;/span&gt;
&lt;span class="lb-round orange"&gt;round label orange&lt;/span&gt;
&lt;span class="lb-round purple"&gt;round label purple&lt;/span&gt;
&lt;span class="lb-round pink"&gt;round label pink&lt;/span&gt;
&lt;span class="lb-round black"&gt;round label black&lt;/span&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UiBreadcrumbs from '@/components/baseCommonUI/UiBreadcrumbs.vue';
import { ref } from 'vue'
export default {
  name: 'StyleText',
  components: {
    UiBreadcrumbs,
  },
  setup() {
    //breadcrumbs list
    //추후 라우터에서 받아오는걸로 수정할 수 있음
    const breadcrumbsList = ref([
      { name: '홈', path: '' },
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
