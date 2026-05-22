<template>
  <div class="wrapper">
    <div class="pub-guie-wrap">
      <header>Popup Style Guide</header>

      <section>
        <div>
          <h3 class="pub-guide-tit-s">Alert Popup</h3>
          <div class="pub-guide-view">
            <!-- 예제 Start -->
            <button type="button" class="btn-txt line-gray" @click="handlePopOpen('pop-alert')">알럿 팝업 열기</button>
            <PopAlert
              :active-alert="activePopups.has('pop-alert')"
              :pop-close-handler="() => handlePopClose('pop-alert')"
              alert-message="알럿 메시지 내용"
            />
            <!-- //예제 End -->
          </div>
        </div>
        <div>
          <h3 class="pub-guide-tit-s">Layer Popup(default w600)</h3>
          <div class="pub-guide-view">
            <!-- 예제 Start -->
            <button type="button" class="btn-txt line-gray" @click="handlePopOpen('pop-default-w600')">default w600</button>
            <popup 
              :is-pop-show="activePopups.has('pop-default-w600')"
              :pop-close-handler="() => handlePopClose('pop-default-w600')"
              pop-title="Default Popup Title"
              add-class-name="pop-w600"
            >
              <template v-slot:popBody>
                팝업 내용 팝업 내용
                <br><br>
                <button type="button" class="btn-txt line-gray" @click="handlePopOpen('pop-default-w1000')">팝업 위 팝업 열기</button>
              <div style="height: 10000px;"></div>
              </template>
              <template v-slot:popFooter>
                <div class="btn-wrap">
                  <button type="button" class="btn-txt line-gray" @click="handlePopClose('pop-default-w600')">닫기</button>
                  <button type="button" class="btn-txt primary">저장</button>
                </div>
              </template>  
            </popup>
            <!-- //예제 End -->
          </div>
        </div>
        <div style="display: none;">
          <h3 class="pub-guide-tit-s">Layer Popup(xlarge w1000)</h3>
          <div class="pub-guide-view">
            <!-- 예제 Start -->     
            <button type="button" class="btn-txt line-gray" @click="handlePopOpen('pop-default-w1000')">xlarge w1000</button>
            <popup 
              :is-pop-show="activePopups.has('pop-default-w1000')"
              :pop-close-handler="() => handlePopClose('pop-default-w1000')"
              pop-title="xlarge Popup Title"
              add-class-name="pop-w1000"
            >
              <template v-slot:popBody>
                  팝업 내용 팝업 내용
              </template>
              <template v-slot:popFooter>
                <div class="btn-wrap right">
                  <button type="button" class="btn-txt line-gray" @click="handlePopClose('pop-default-w1000')">닫기</button>
                  <button type="button" class="btn-txt primary">저장</button>
                </div>
              </template> 
            </popup>
            <!-- //예제 End -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import popup from '@/components/baseCommonUI/UiModal.vue'
import PopAlert from '@/components/popup/PopAlert.vue';

import { ref } from 'vue';

export default {
  name: 'StylePopup',
  components: {
    popup,
    PopAlert,
  },
  setup() {
    //popup 
    const activePopups = ref(new Set());
    const handlePopOpen = (label) => {
      activePopups.value = new Set([...activePopups.value, label]);
    };
    const handlePopClose = (label) => {
      const newSet = new Set(activePopups.value);
      newSet.delete(label);
      activePopups.value = newSet;
      console.log('handlePopClose', activePopups.value);
    };

    return {
      //pop open/close handler
      activePopups,
      handlePopOpen,
      handlePopClose,
    }
  },  
}
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
