<template>
  <header class="header-container">
    <div class="header-inner">
      <h1 class="logo">
        <router-link to="#/">
          <img src="@/assets/images/common/img-logo.png" alt="KODATA">
          <span>AI Portal</span>
        </router-link>
      </h1>
      
      <UiTextField v-if="sideBarType === 'main'">
        <input type="text" placeholder="앱명, 앱 설명 검색" title="검색">
        <template #suffix>
          <UiTooltip direction="bottom">
            <template v-slot:tooltipBtn>
              <button type="button" class="ibtn-search"><span class="blind">검색</span></button>
            </template>
            <template v-slot:tooltipContent>검색</template>
          </UiTooltip>
        </template>
      </UiTextField>
      
      <div class="util-wrap">
        <button type="button" class="btn-util bookmark" v-if="sideBarType === 'folding'">북마크 <span class="cnt">14</span></button>
        <button type="button" class="btn-util">Admin</button>
        <div class="util-menu-box" :class="{ active: utilActive }">
          <span class="user-role">관리자</span>
          <UiTooltip direction="bottom">
            <template v-slot:tooltipBtn>
              <button type="button" class="user-name" @click="utilToggle">홍길동 (81500)</button>
            </template>
            <template v-slot:tooltipContent>사용자 메뉴 열기</template>
          </UiTooltip>

          <ul class="util-list">
            <li class="menu-favorite"><router-link to="#/">즐겨찾기</router-link></li>
            <li class="menu-dark">
              다크모드
              <UiSwitch @change="handleDarkModeChange"></UiSwitch>
            </li>
            <!-- <li class="menu-pw"><router-link to="#/">비밀번호 변경</router-link></li> -->
            <li><button type="button" class="btn-logout">LOG OUT</button></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import UiTextField from '@/components/baseCommonUI/UiTextField.vue';
import UiSwitch from '@/components/baseCommonUI/UiSwitch.vue';
import UiTooltip from '@/components/baseCommonUI/UiTooltip.vue';

export default {
  name: 'TheHeader',
  components: {
    UiTextField,
    UiSwitch,
    UiTooltip,
  },
  setup() {
    const route = useRoute();
    const sideBarType = route.meta.sideBarType || 'chat';

    const isActive = ref(0);

    const setSelectMenu = (index) => {
      isActive.value = index;
    }

    const utilActive = ref(false);
    const utilToggle = () => {
      utilActive.value = !utilActive.value;
    }

    const handleClickOutside = (event) => { // 유틸메뉴 이외의 영역 클릭 시 유틸메뉴 닫기
      const utilMenuBox = document.querySelector('.util-menu-box');
      if (utilActive.value && utilMenuBox && !utilMenuBox.contains(event.target)) {
        utilActive.value = false;
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside);
    });

    const isDarkMode = ref(false);
    const handleDarkModeChange = (checked) => { // 다크모드 switch on/off 체크 여부
      isDarkMode.value = checked;
      document.body.classList.toggle('dark-mode', checked);
    }

    return {
      sideBarType,
      isActive,
      setSelectMenu,
      utilActive,
      utilToggle,
      isDarkMode,
      handleDarkModeChange,
    };

  },
}
</script>

<style lang="scss" scoped></style>