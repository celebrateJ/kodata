<template>
  <h2 class="main-ttl">{{pageTitle}}</h2>
  <p style="font-size: 15px; margin-top: 8px; margin-bottom: 50px;">해당 페이지는 전 카테고리에서 공통으로 사용되는 팝업을 모아놓은 화면입니다.</p>
  
  <h3 class="sub-ttl">공통 알럿 팝업</h3>
  <br>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-alert')">알럿 팝업 열기</button>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-confirm')">컨펌 팝업 열기</button>

  <h3 class="sub-ttl" style="margin-top: 30px">페이지 공통 팝업</h3>
  <br>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-info-register-modify')">정보 등록/수정 팝업 열기</button>
  <br>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-note')">비고 정보 팝업 열기</button>
  <br>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-note-register')">비고 입력 팝업 열기</button>
  <br>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('SM_I_0210')">데이터 생성</button>

  
  <h3 class="sub-ttl" style="margin-top: 30px">PT/OT 공통 팝업</h3>
  <br>
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-repeat-cancel')">반복일정 취소 설정 팝업 열기</button>
  <br>  
  <button type="button" class="btn-txt secondary" @click="handlePopOpen('pop-schedule-set')">스케줄 설정 팝업 열기</button>
  <br>


  <!-- s : 알럿팝업 -->
  <pop-alert
    :active-alert = "activePopups.has('pop-alert')"
    :pop-close-handler="() => handlePopClose('pop-alert')"
    alert-message="알럿 메시지 내용"
  />
  <!-- e : 알럿팝업 -->
  <!-- s : 컨펌팝업 -->
  <pop-alert
    :active-alert = "activePopups.has('pop-confirm')"
    :pop-close-handler="() => handlePopClose('pop-confirm')"
    alert-message="컨펌 메시지 내용"
    alert-type="confirm"
    @confirm="confirmTest($event)"
  />
  <!-- e: 컨펌팝업 -->
  <!-- s : 반복일정 취소 설정 팝업 -->
  <pop-repeat-cancel
    :active-popup = "activePopups.has('pop-repeat-cancel')"
    :pop-close-handler="() => handlePopClose('pop-repeat-cancel')"
  />
  <!-- e : 반복일정 취소 설정 팝업 -->
  <!-- s : 스케줄 설정 팝업 --> 
  <pop-schedule-set
    :active-popup = "activePopups.has('pop-schedule-set')"
    :pop-close-handler="() => handlePopClose('pop-schedule-set')"
  />
  <!-- e : 스케줄 설정 팝업 -->

  <!-- s : 등록/수정 팝업 -->
  <pop-info-register-modify
    :active-popup = "activePopups.has('pop-info-register-modify')"
    :pop-close-handler="() => handlePopClose('pop-info-register-modify')"
  />
  <!-- e : 등록/수정 팝업 -->
  
  <!-- s : 비고 정보 팝업 -->
  <pop-note
    :active-popup = "activePopups.has('pop-note')"
    :pop-close-handler="() => handlePopClose('pop-note')"
  />
  <!-- e : 비고 정보 팝업 -->
  
  <!-- s : 비고 등록 팝업 -->
  <pop-note-register
    :active-popup = "activePopups.has('pop-note-register')"
    :pop-close-handler="() => handlePopClose('pop-note-register')"
  />
  <!-- e : 비고 등록 팝업 -->

  <!-- s : 등록/수정 팝업 -->
  <pop-info-register-modify
    :active-popup = "activePopups.has('pop-info-register-modify')"
    :pop-close-handler="() => handlePopClose('pop-info-register-modify')"
  />
  <!-- e : 등록/수정 팝업 -->

  <!-- s : 데이터 생성 팝업 -->
  <SM_I_0210
    :active-popup = "activePopups.has('SM_I_0210')"
    :pop-close-handler="() => handlePopClose('SM_I_0210')"
  />
  <!-- e : 데이터 생성 팝업 -->

</template>

<script>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import PopAlert from '@/components/popup/PopAlert.vue';
import PopRepeatCancel from '@/components/popup/PopRepeatCancel.vue';
import PopScheduleSet from '@/components/popup/PopScheduleSet.vue';
import PopInfoRegisterModify from '@/components/popup/PopInfoRegisterModify.vue';
import PopNote from '@/components/popup/PopNote.vue';
import PopNoteRegister from '@/components/popup/PopNoteRegister.vue';
import SM_I_0210 from '@/components/popup/SM_I_0210.vue';

export default {
  components: {
    PopAlert,
    PopRepeatCancel,
    PopScheduleSet,
    PopInfoRegisterModify,
    PopNote,
    PopNoteRegister,
    SM_I_0210,
  },
  setup() {
    const route = useRoute();

    // page title set
    const pageTitle = computed(() => {
      return route.meta.title || '';
    });

    // popup 실행
    const activePopups = ref(new Set());

    const handlePopOpen = (label) => {
      activePopups.value = new Set([...activePopups.value, label]);
    };

    const handlePopClose = (label) => {
      const newSet = new Set(activePopups.value);
      newSet.delete(label);
      activePopups.value = newSet;
    };

    // 컨펌 팝업 확인 버튼 클릭 시 실행 test
    const confirmTest = (e) =>{
      console.log('emit test', e)
    }

    return{
      pageTitle,
      activePopups,
      handlePopOpen,
      handlePopClose,
      confirmTest
    }
  },
}
</script>

<style scoped></style>
