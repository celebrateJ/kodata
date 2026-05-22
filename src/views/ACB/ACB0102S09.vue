<template>
  <popup 
    :is-pop-show="activePopup"
    :pop-close-handler="popCloseHandler"
    pop-title="문서 업로드"
  >
    <template v-slot:popBody>
      <div class="form-wrap">
        <UiFormBox formTitle="업무 분야">
          <template #formBody>
            <UiSelect 
              :options="tempSelectOptions" 
              :initialValue="tempSelectedOption" 
            />
          </template>
        </UiFormBox>
        <UiFormBox formTitle="문서 유형">
          <template #formBody>
            <UiSelect 
              :options="tempSelectOptions" 
              :initialValue="tempSelectedOption" 
            />
          </template>
        </UiFormBox>
        <UiFormBox class="vt-top" formTitle="업로드">
          <template #formBody>
            <div class="ipt-file">
              <input type="file" id="file01" class="file-hidden">
              <label for="file01" class="btn-attach"><span class="txt-blind">파일선택</span></label>
              <p class="desc">파일을 선택하세요</p>
            </div>
            <UiTextField :disabled="true">
              <input type="text" value="파일명 제목 표시.HWP [1.5MB]" disabled>
            </UiTextField>
          </template>
        </UiFormBox>
      </div>
    </template>
    <template v-slot:popFooter>
      <div class="btn-wrap">
        <button type="button" class="btn-txt line-gray" @click="popCloseHandler">취소</button>
        <button type="button" class="btn-txt primary">문서 업로드</button>
      </div>
    </template>  
  </popup>
</template>

<script>
import { ref } from 'vue';

import popup from '@/components/baseCommonUI/UiModal.vue'
import UiFormBox from '@/components/baseCommonUI/UiFormBox.vue';
import UiSelect from '@/components/baseCommonUI/UiSelect.vue'
import UiTextField from '@/components/baseCommonUI/UiTextField.vue'

export default {
  name: 'ACB0102S09',
  components: {
    popup,
    UiFormBox,
    UiSelect,
    UiTextField,
  },
  props: {
    activePopup: {
      type: Boolean,
      default: false
    },
    popCloseHandler: {
      type: Function,
      default: () => {}
    },
  },
  setup() {

    // 임시 데이터
    const tempSelectedOption = ref('');
    const tempSelectOptions = ref([
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ]);
    return {
      tempSelectOptions,
      tempSelectedOption,
    };
  },
}
</script>
