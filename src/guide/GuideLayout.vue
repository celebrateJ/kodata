<template>
  <div class="guide-container">
    <guide-lnb @update:iframeSrc="iframeSrc = $event" />
    <main class="guide-wrap">
      <iframe
        :src="iframeSrc"
        width="100%"
        height="100%"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </main>
  </div> 
</template>

<script>
import { ref, onMounted } from 'vue'
import GuideLnb from '@/guide/GuideLnb.vue'

export default {
  components: {
    GuideLnb
  },
  setup() {
    let iframeSrc = ref('/guide/basic');
    onMounted(() =>
      document.body.classList.add('guide') 
    );

    return {
      iframeSrc
    }
  },
}
</script>

<style lang="scss">
	@use '@/assets/sass/guide/guide.scss'; 
</style>
