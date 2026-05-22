<template>
  <div class="pub-guie-wrap">
    <header>Form Style Guide</header>

    <section>
      <div>
        <h3 class="pub-guide-tit-s">Radio button &amp; Checkbox</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <div class="ipt-box type-no-txt">
            <input type="radio" name="radio01" id="rdo01-01" class="ipt-radio">
            <label for="rdo01-01"><span class="blind">radio</span></label>
            <input type="radio" name="radio01" id="rdo01-02" class="ipt-radio" checked>
            <label for="rdo01-02"><span class="blind">radio checked</span></label>
            <input type="radio" name="radio01" id="rdo01-03" class="ipt-radio" disabled>
            <label for="rdo01-03"><span class="blind">radio disabled</span></label>
            <input type="radio" name="radio01" id="rdo01-04" class="ipt-radio" checked disabled>
            <label for="rdo01-04"><span class="blind">radio checked disabled</span></label>
          </div>
          <div class="ipt-box">
            <input type="radio" name="radio02" id="rdo02-01" class="ipt-radio">
            <label for="rdo02-01">radio</label>
            <input type="radio" name="radio02" id="rdo02-02" class="ipt-radio" checked>
            <label for="rdo02-02">radio checked</label>
            <input type="radio" name="radio02" id="rdo02-03" class="ipt-radio" disabled>
            <label for="rdo02-03">radio disabled</label>
            <input type="radio" name="radio02" id="rdo02-04" class="ipt-radio" checked disabled>
            <label for="rdo01-04">radio checked disabled</label>
          </div>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;div class="ipt-box type-no-txt"&gt;
  &lt;input type="radio" name="radio01" id="rdo01-01" class="ipt-radio"&gt;
  &lt;label for="rdo01-01"&gt;&lt;span class="blind"&gt;radio&lt;/span&gt;&lt;/label&gt;
  &lt;input type="radio" name="radio01" id="rdo01-02" class="ipt-radio" checked&gt;
  &lt;label for="rdo01-02"&gt;&lt;span class="blind"&gt;radio checked&lt;/span&gt;&lt;/label&gt;
  &lt;input type="radio" name="radio01" id="rdo01-03" class="ipt-radio" disabled&gt;
  &lt;label for="rdo01-03"&gt;&lt;span class="blind"&gt;radio disabled&lt;/span&gt;&lt;/label&gt;
&lt;/div&gt;

&lt;div class="ipt-box"&gt;
  &lt;input type="radio" name="radio02" id="rdo02-01" class="ipt-radio"&gt;
  &lt;label for="rdo02-01"&gt;radio&lt;/label&gt;
  &lt;input type="radio" name="radio02" id="rdo02-02" class="ipt-radio" checked&gt;
  &lt;label for="rdo02-02"&gt;radio checked&lt;/label&gt;
  &lt;input type="radio" name="radio02" id="rdo02-03" class="ipt-radio" disabled&gt;
  &lt;label for="rdo02-03"&gt;radio disabled&lt;/label&gt;
&lt;/div&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>

        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <div class="ipt-box type-no-txt">
            <input type="checkbox" id="chk01-01" class="ipt-check">
            <label for="chk01-01"><span class="blind">check</span></label>
            <input type="checkbox" id="chk01-02" class="ipt-check" checked>
            <label for="chk01-02"><span class="blind">checkbox checked</span></label>
            <input type="checkbox" id="chk01-03" class="ipt-check" disabled>
            <label for="chk01-03"><span class="blind">checkbox disabled</span></label>
            <!-- <input type="checkbox" id="chk01-04" class="ipt-check" checked disabled>
            <label for="chk01-04"><span class="blind">checkbox checked disabled</span></label> -->
          </div>
          <div class="ipt-box">
            <input type="checkbox" id="chk02-01" class="ipt-check">
            <label for="chk02-01">checkbox</label>
            <input type="checkbox" id="chk02-02" class="ipt-check" checked>
            <label for="chk02-02">checkbox checked</label>
            <input type="checkbox" id="chk03-03" class="ipt-check" disabled>
            <label for="chk03-03">checkbox disabled</label>
            <input type="checkbox" id="chk04-04" class="ipt-check" checked disabled>
            <label for="chk04-04">checkbox checked disabled</label>
          </div>
          <div class="ipt-box type02">
            <input type="checkbox" id="chk03-01" class="ipt-check">
            <label for="chk03-01">checkbox</label>
            <input type="checkbox" id="chk03-02" class="ipt-check" checked>
            <label for="chk03-02">checkbox checked</label>
             <input type="checkbox" id="chk03-03" class="ipt-check" disabled>
            <label for="chk03-03">checkbox disabled</label>
            <input type="checkbox" id="chk03-04" class="ipt-check" checked disabled>
            <label for="chk03-04">checkbox checked disabled</label>
          </div>
          <div class="ipt-box type03">
            <input type="checkbox" id="chk04-01" class="ipt-check">
            <label for="chk04-01">checkbox</label>
            <input type="checkbox" id="chk04-02" class="ipt-check" checked>
            <label for="chk04-02">checkbox checked</label>
             <input type="checkbox" id="chk04-03" class="ipt-check" disabled>
            <label for="chk04-03">checkbox disabled</label>
            <input type="checkbox" id="chk04-04" class="ipt-check" checked disabled>
            <label for="chk04-04">checkbox checked disabled</label>
          </div>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;div class="ipt-box type-no-txt"&gt;
  &lt;input type="checkbox" id="chk01-01" class="ipt-check"&gt;
  &lt;label for="chk01-01"&gt;&lt;span class="blind"&gt;check&lt;/span&gt;&lt;/label&gt;
  &lt;input type="checkbox" id="chk01-02" class="ipt-check" checked&gt;
  &lt;label for="chk01-02"&gt;&lt;span class="blind"&gt;checkbox checked&lt;/span&gt;&lt;/label&gt;
  &lt;input type="checkbox" id="chk01-03" class="ipt-check" disabled&gt;
  &lt;label for="chk01-03"&gt;&lt;span class="blind"&gt;checkbox disabled&lt;/span&gt;&lt;/label&gt;
&lt;/div&gt;

&lt;div class="ipt-box"&gt;
  &lt;input type="checkbox" id="chk02-01" class="ipt-check"&gt;
  &lt;label for="chk02-01"&gt;checkbox&lt;/label&gt;
  &lt;input type="checkbox" id="chk02-02" class="ipt-check" checked&gt;
  &lt;label for="chk02-02"&gt;checkbox checked&lt;/label&gt;
  &lt;input type="checkbox" id="chk03-03" class="ipt-check" disabled&gt;
  &lt;label for="chk03-03"&gt;checkbox disabled&lt;/label&gt;
&lt;/div&gt;

&lt;div class="ipt-box type02"&gt;
  &lt;input type="checkbox" id="chk03-01" class="ipt-check"&gt;
  &lt;label for="chk03-01"&gt;checkbox&lt;/label&gt;
  &lt;input type="checkbox" id="chk03-02" class="ipt-check" checked&gt;
  &lt;label for="chk03-02"&gt;checkbox checked&lt;/label&gt;
&lt;/div&gt;

&lt;div class="ipt-box type03"&gt;
  &lt;input type="checkbox" id="chk04-01" class="ipt-check"&gt;
  &lt;label for="chk04-01"&gt;checkbox&lt;/label&gt;
  &lt;input type="checkbox" id="chk04-02" class="ipt-check" checked&gt;
  &lt;label for="chk04-02"&gt;checkbox checked&lt;/label&gt;
&lt;/div&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>

        <h3 class="pub-guide-tit-s">Switch</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <div class="switch-box">
            <div class="ipt-switch">
              <input type="checkbox" title="타이틀 작성">
            </div>
          </div>
          <div class="switch-box">
            <div class="ipt-switch">
              <input type="checkbox" title="타이틀 작성" disabled>
            </div>
          </div>
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;div class="switch-box"&gt;
  &lt;div class="ipt-switch"&gt;
    &lt;input type="checkbox" title="타이틀 작성"&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div class="switch-box"&gt;
  &lt;div class="ipt-switch"&gt;
    &lt;input type="checkbox" title="타이틀 작성" disabled&gt;
  &lt;/div&gt;
&lt;/div&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>

        <h3 class="pub-guide-tit-s">Select</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <UiSelect 
            :options="selectOptions" 
            :initialValue="selectedOption" 
          />
          <UiSelect 
            :options="selectOptions" 
            :initialValue="selectedOption" 
            :disabled="true"
          />
          <!-- //예제 End -->
        </div>
        <div class="pub-guide-code">
          <!-- 소스코드 Start -->
          <pre>
&lt;UiSelect 
  :options="selectOptions" 
  :initialValue="selectedOption" 
/&gt;

&lt;UiSelect 
  :options="selectOptions" 
  :initialValue="selectedOption" 
  :disabled="true"
/&gt;
          </pre>
          <!-- //소스코드 End -->
        </div>
        <div class="pub-guide-code js">
          <!-- 소스코드 Start -->
          <pre>
import UiSelect from '../components/baseCommonUI/UiSelect.vue';

export default {
  setup() {
    const selectOptions = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];
    const selectedOption = ''; <span class="comment">// 초기 선택값</span>

    return {
      selectOptions,
      selectedOption,
    };
  },
}
          </pre>
          <!-- //소스코드 End -->
        </div>

        <h3 class="pub-guide-tit-s">Input text</h3>
        <div class="pub-guide-view">
          <!-- 예제 Start -->
          <!-- 입력 필드 : 기본 -->
          <UiTextField >
            <input type="text" placeholder="입력" title="타이틀 입력">
          </UiTextField>
          <br>
          <!-- 입력 필드 : error -->
          <UiTextField class="error">
            <input type="text" value="error" placeholder="입력" title="타이틀 입력">
          </UiTextField>
          <p class="err-msg">error message</p>
          <p class="ok-msg">ok message</p>
          <br>
          
          <!-- 입력 필드 : disabled -->
          <UiTextField :disabled="true">
            <input type="text" placeholder="입력" title="타이틀 입력" disabled>
          </UiTextField>
          <br>
          <!-- 입력 필드 : 기본 + 단위 -->
          <div class="ipt-row">
            <UiTextField >
              <input type="text" placeholder="입력" title="타이틀 입력">
            </UiTextField>
            <span class="unit">%</span>
          </div>
          <br>
          <!-- 입력 필드 : file -->
          <!-- 입력 필드 : datepicker -->
          <UiDatePicker v-model="selectedDate01" />
          <br>
          <!-- //예제 End -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import UiSelect from '@/components/baseCommonUI/UiSelect.vue';
import UiTextField from '@/components/baseCommonUI/UiTextField.vue';
import UiDatePicker from '@/components/baseCommonUI/UiDatePicker.vue';

export default {
  name: 'StyleForm',
  components: {
    UiSelect,
    UiTextField,
    UiDatePicker,
  },
  setup() {
    const selectOptions = [
      { value: '1', label: '전체' },
      { value: '2', label: 'Option 1' },
      { value: '3', label: 'Option 2' },
    ];
    const selectedOption = '1'; // 초기 선택값

    const selectedDate01 = ref('2025-01-01'); // 작성된 날짜 제공
    const selectedDate02 = ref(new Date()); // 오늘 날짜 제공
    const selectedDate03 = ref(); // placeholder 제공

    const selectedTime = ref(''); // placeholder 제공
    const selectedStartTime = ref(new Date()); //현재 시간 제공
    //작성된 시간 제공
    const selectedEndTime = ref({ 
      hours: 10,
      minutes: 0,
    });

    //작성된 년-월 제공
    const selectedDateYear = ref({
      year: 2025,
      month: 1,
    });


    return {
      selectOptions,
      selectedOption,
      selectedDate01,
      selectedDate02,
      selectedDate03,
      selectedTime,
      selectedStartTime,
      selectedEndTime,
      selectedDateYear
    };
  },
}
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
