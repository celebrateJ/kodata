<template>
  <div class="question-item">
    <div class="q-inner">
      <p class="q-text" v-html="qContent"></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'ChatQuestion',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const qContent = ref(props.content);
    return {
      qContent,
    };
  },
}
</script>