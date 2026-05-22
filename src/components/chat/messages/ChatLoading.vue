
<template>
  <p class="message">{{ typingText }}</p>

  <div class="skeleton-loading">
    <div class="item sort"></div>
    <div class="item long"></div>
    <div class="item medium"></div>
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted, ref } from 'vue'

export default {
  name: 'ChatLoading',
  components: {
  },
  setup() {
    /* temp로 시작되는 변수or함수명은 퍼블 확인용 임시입니다 */
    const tempMessages = ['답변을 생성중입니다...', '질의 분석 중...', '관련 문서 검색 중...']
    const typingText = ref('')
    let messageIndex = 0
    let charIndex = 0
    let typingTimer = null

    const runTyping = () => {
      const currentMessage = tempMessages[messageIndex]

      if (charIndex < currentMessage.length) {
        typingText.value += currentMessage.charAt(charIndex)
        charIndex += 1
        typingTimer = window.setTimeout(runTyping, 90)
        return
      }

      typingTimer = window.setTimeout(() => {
        typingText.value = ''
        charIndex = 0
        messageIndex = (messageIndex + 1) % tempMessages.length
        runTyping()
      }, 750)
    }

    const typing = () => {
      if (typingTimer) {
        window.clearTimeout(typingTimer)
      }

      typingText.value = ''
      charIndex = 0
      messageIndex = 0
      runTyping()
    }

    onMounted(() => {
      setTimeout(() => {
        typing()
      }, 750)
    })

    onBeforeUnmount(() => {
      if (typingTimer) {
        window.clearTimeout(typingTimer)
      }
    })

    return {
      typing,
      typingText,
    };
  },
}
</script>