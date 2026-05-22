<template>
  <div class="pub-guie-wrap">
    <header>Table Style Guide</header>

    <section>
      <div>
        <h3 class="pub-guide-tit-s">table column</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <table class="tbl-info">
            <colgroup>
              <col><col><col><col><col>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">title</th>
                <th scope="col">title</th>
                <th scope="col">title</th>
                <th scope="col">title</th>
                <th scope="col">title</th>
              </tr>
            </thead>
            <tbody> 
              <tr>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tr>
              <tr>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
                <td>data</td>
              </tr>
            </tbody>
          </table>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;table class="tbl-info"&gt;
  &lt;colgroup&gt;
    &lt;col&gt;&lt;col&gt;&lt;col&gt;&lt;col&gt;&lt;col&gt;
  &lt;/colgroup&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th scope="col"&gt;title&lt;/th&gt;
      &lt;th scope="col"&gt;title&lt;/th&gt;
      &lt;th scope="col"&gt;title&lt;/th&gt;
      &lt;th scope="col"&gt;title&lt;/th&gt;
      &lt;th scope="col"&gt;title&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt; 
    &lt;tr&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;data&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';
export default {
  name: 'StyleTable',
  components: {
    UiTooltip,
  },
  setup() {
  },
}
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
