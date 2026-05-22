<template>
  <div class="wrapper">
    <LayoutHeader />
    <div class="container">
      <LayoutSideBar />
      <main class="content-wrap">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/layouts/TheHeader.vue'
import LayoutSideBar from '@/layouts/TheSidebar.vue'
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  components: {
    LayoutHeader,
    LayoutSideBar,
  },
      
  setup() {
    onMounted(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);

      // document.querySelector('body').classList.add('dark-mode');
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    })

    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      const bodyMinWidth = 1920;
      const windowWidth = window.innerWidth;
      const scrollLeft = window.scrollX;
      const headerEl = document.querySelector('.header-container');
      const sidebarEl = document.querySelector('.sidebar-wrap');
      
      if(windowWidth < bodyMinWidth){ // 가로 스크롤 시 header, sidebar 위치 고정
        headerEl.style.marginLeft = `-${scrollLeft/10}rem`;
        sidebarEl.style.marginLeft = `-${scrollLeft/10}rem`;
      }
    }
    return {
      handleScroll,
    }
  },
}
</script>
