<template>
  <div class="login-wrap">
    <div class="login-inner">
      <h1 class="logo">
        <img src="@/assets/images/login/img-logo-white.png" alt="KODATA">
        <span>AI Portal</span>
      </h1>
  
      <div class="login-form-box">
        <div class="form-inner">
          <span class="ttl">로그인</span>
    
          <UiFormBox formTitle="직원번호">
            <template #formBody>
              <UiTextField class="login-id">
                <input type="text" placeholder="직원번호를 입력하세요">
              </UiTextField>
            </template>
          </UiFormBox>
    
          <UiFormBox formTitle="비밀번호">
            <template #formBody>
              <UiTextField class="login-pw">
                <input type="password" placeholder="비밀번호를 입력하세요">
              </UiTextField>
            </template>
            <template #formFooter>
              <p class="err-msg">로그인이 실패 하였습니다. 남은 횟수 4 / 5</p>
            </template>
          </UiFormBox>
    
          <div class="btn-wrap">
            <button type="button" class="btn-txt primary">로그인</button>
          </div>
        </div>
      </div>
      <p class="login-form-desc">크래파스 계정을 이용하여 로그인 해주세요</p>
    </div>
  </div>
</template>

<script>
import UiTextField from '@/components/baseCommonUI/UiTextField.vue';
import UiFormBox from '@/components/baseCommonUI/UiFormBox.vue';

export default {
  name: 'ACZ0101S01',
  components: {
    UiTextField,
    UiFormBox,
  },
  setup() {
    

    return {
    };
  },
}
</script>
