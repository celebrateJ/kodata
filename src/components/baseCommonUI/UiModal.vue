<template>
  <transition :name="transitionName" @enter="openRun" appear>
    <div ref="popRef" v-show="isPopShow" class="pop-wrapper" :class="{'type-alert':isAlert}">
      <div class="dimmed"></div>
      <div ref="popContRef" class="pop-container" :class="[addClassName, {'btm-none': !isPopFooter}]" tabindex="0">
        <div class="pop-wrap">
          <div class="pop-inner">
            <div v-if="isPopHeader && !isAlert" class="pop-header">
              <h4 class="pop-ttl" v-html="popTitle"></h4>
            </div>
            <div class="pop-body">
              <slot name="popBody">
              </slot>
            </div>
            <div v-if="isPopFooter" class="pop-footer">
              <slot name="popFooter"></slot>
            </div>
            <button v-if="isPopCloseBtn && isPopHeader && !isAlert" type="button" class="pop-close" @click="popCloseHandler();">
              <span class="blind">팝업 닫기</span>
            </button>
          </div>
        </div>
    </div>
  </div>
  </transition>
</template>

<script>
import { ref, watch, nextTick } from 'vue';

export default {
  props: {
    transitionName: {
      type: String,
      default: 'modal'
    },
    popTitle: {
      type: String,
      default: ''
    },
    isPopShow: {
      type: Boolean,
      default: false
    },
    popCloseHandler: {
      type: Function,
      default: () => {}
    },
    addClassName: {
      type: String,
      default: '',
    },
    isPopFooter: {
      type: Boolean,
      default: true,
    },
    isPopHeader: {
      type: Boolean,
      default: true,
    },
    isPopCloseBtn: {
      type: Boolean,
      default: true,
    },
    isAlert: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const popRef = ref(null); // 팝업 전체(pop-wrapper)
    const popContRef = ref(null); // 팝업 컨텐츠 영역(pop-container)
    
    const openRun = () => { // popup 열릴 때 #app append처리
      nextTick(() => {
        if (props.isPopShow) { 
          document.getElementById('app').appendChild(popRef.value);
        }
      });
    };

    const updateLastPopupClass = () => {
      // 모든 활성화된 팝업에서 last-popup 클래스 제거
      document.querySelectorAll('.pop-wrapper.active').forEach(popup => {
        popup.classList.remove('last-popup');
      });
      
      // 가장 높은 z-index를 가진 팝업 찾기
      const activePopups = Array.from(document.querySelectorAll('.pop-wrapper.active'));
      if (activePopups.length > 0) {
        const lastPopup = activePopups.reduce((highest, current) => {
          const currentZ = parseInt(current.style.zIndex) || 0;
          const highestZ = parseInt(highest.style.zIndex) || 0;
          return currentZ > highestZ ? current : highest;
        });
        lastPopup.classList.add('last-popup');
      }
    };

    const scrLock = () => {
      const popNum = document.querySelectorAll('.pop-wrapper.active').length;
      
      if(popNum === 0) {
        // console.log(popNum)
        popRef.value.classList.add('active');

        const isChat = document.querySelector('.chat-container') ? true : false;
        
        const contentsEl =  isChat ? document.querySelector('.chat-container .content-inner') : document.querySelector('.wrapper');
        const scrTop = !isChat ?window.pageYOffset || document.documentElement.scrollTop : contentsEl.scrollTop;
        
        document.body.classList.add('scrlock');
        document.documentElement.setAttribute('data-scroll-y', scrTop);
        // contentsEl.style.top = -scrTop + 'px';
        // if(isChat) document.querySelector('.chat-input-wrap').style.top = -scrTop + 'px';
        
        setTimeout(() => {
          document.body.classList.add('scrlock-after'); // scrlock 처리 완료 후 후처리 필요하여 class 한번 더 추가
        }, 10);
      } else {
        popRef.value.classList.add('active');
      }

      const zIndex = 1000 + popNum;
      popRef.value.style.zIndex = zIndex;

      // setTimeout으로 변경하여 팝업이 완전히 열린 후 last-popup클래스 적용
      setTimeout(() => {
        updateLastPopupClass();
        popContRef.value.focus(); // 웹접근성
      }, 10);
    };
    
    const scrUnLock = () => {
      popRef.value.classList.remove('active');
      
      const popNum = document.querySelectorAll('.pop-wrapper.active').length;
      
      if (popNum === 0) {
        const offsetY = document.documentElement.getAttribute('data-scroll-y');
        document.documentElement.removeAttribute('data-scroll-y');
        
        const isChat = document.querySelector('.chat-container') ? true : false;
        
        const contentsEl =  isChat ? document.querySelector('.chat-container .content-inner') : document.querySelector('.wrapper');
        
        document.body.classList.remove('scrlock');
        document.body.classList.remove('scrlock-after');
        // contentsEl.style.top = '';
        // if(isChat) document.querySelector('.chat-input-wrap').style.top = '';
  
        !isChat ? window.scrollTo(0, offsetY) : contentsEl.scrollTo(0, offsetY);
      }

      popRef.value.style.zIndex = '';

      // 팝업 닫힌 후 last-popup 클래스 업데이트
      nextTick(() => {
        updateLastPopupClass();
      });
    };

    watch(() => props.isPopShow, (v) => {
      if (v) {
        scrLock();
      } else {
        scrUnLock();

        nextTick(() => {
          if (popRef.value && popRef.value.parentNode) {
            popRef.value.parentNode.removeChild(popRef.value);
          }
        });
      }
    });


    return {
      openRun,
      popRef,
      popContRef,
    };
  }
}
</script>

<style scoped>
</style>
