<template>
  <div class="pub-guie-wrap">
    <header>Loading Style Guide</header>

    <section>
      <div>
        <h3 class="pub-guide-tit-s">page loading</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
           <div style="position: relative;height: 300px;">
            <UiLoadingSpinner  style="position: absolute;"/>
           </div>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&ltrif;UiLoadingSpinner /&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UiLoadingSpinner from '@/components/baseCommonUI/UiLoadingSpiner.vue';

export default {
  name: "StyleLoading",
  components: {
    UiLoadingSpinner,
  },
  setup() {
   

    return {
      
    };
  },
};
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
