<template>
  <div class="loading-spinner-wrap" :class="{'full-screen': fullScreen}"></div>
</template>

<script>
export default {
  name: 'UiLoadingSpinner',
  props: {
    fullScreen: {
      type: Boolean,
      default: true,
    }
  },  
  setup() {
    
    return {
    };
  },
};
</script>

