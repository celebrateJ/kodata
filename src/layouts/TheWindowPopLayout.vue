<template>
  <div class="window-pop-layout">
    <main class="window-pop-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue'

export default {
  setup() {
    onMounted(() => {
      document.body.classList.add('window-pop');
    })

    onBeforeUnmount(() => {
      document.body.classList.remove('window-pop');
    })

    return {}
  },
}
</script>