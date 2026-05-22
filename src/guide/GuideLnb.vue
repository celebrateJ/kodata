<template>
  <div class="content-guide-list" :class="{collapse: !lnbActive}">
    <button type="button" class="btn-lnb-toggle" :class="{active: !lnbActive}" @click="toggleLnb"></button>

    <div class="guide-lnb-inner">
      <h2>프로세스</h2>
      <ol>
        <li><span class="txt-ing">작업중</span></li>
        <li><span class="txt-confirm">작업 완료</span></li>
        <li><span class="txt-add">작업 추가(금일 전달 화면)</span></li>
        <li><span class="txt-update">작업 수정</span></li>
        <li><span class="txt-del">화면 삭제</span></li>
      </ol>

      <div class="area-btn">
        <div class="tree-control-wrap">
          <button type="button" class="btn-control" @click="expandAll">+ expandAll</button>
          <button type="button" class="btn-control" @click="collapseAll">- collapseAll</button>
        </div>
        <Tree :value="nodes" :expandedKeys="expandedKeys">
          <template #url="{ node }">
            <button
              ref="menuRef"
              class="btn-link" 
              type="button"
              :id="'menuId'+node.key"
              :class="{complete: node.state === '완료', update: node.state === '수정', add: node.state === '추가', del: node.state === '삭제'}" 
              @click="changeUrl(node.key, node.data)" 
            >
              {{ node.label }}
            </button>
            <a :href="node.data" target="_blank" class="link-blank">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0,0,256,256">
                <g fill="#000000" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(2,2)"><path d="M84,11c-1.7,0 -3,1.3 -3,3c0,1.7 1.3,3 3,3h22.80078l-46.40039,46.40039c-1.2,1.2 -1.2,3.09922 0,4.19922c0.6,0.6 1.39961,0.90039 2.09961,0.90039c0.7,0 1.49961,-0.30039 2.09961,-0.90039l46.40039,-46.40039v22.80078c0,1.7 1.3,3 3,3c1.7,0 3,-1.3 3,-3v-30c0,-1.7 -1.3,-3 -3,-3zM24,31c-7.2,0 -13,5.8 -13,13v60c0,7.2 5.8,13 13,13h60c7.2,0 13,-5.8 13,-13v-45c0,-1.7 -1.3,-3 -3,-3c-1.7,0 -3,1.3 -3,3v45c0,3.9 -3.1,7 -7,7h-60c-3.9,0 -7,-3.1 -7,-7v-60c0,-3.9 3.1,-7 7,-7h45c1.7,0 3,-1.3 3,-3c0,-1.7 -1.3,-3 -3,-3z"></path></g></g>
              </svg>
            </a>
          </template>
        </Tree>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineEmits } from 'vue';
import Tree from 'primevue/tree';
import 'primeicons/primeicons.css';

export default{
  components: {
    Tree
  },
  setup(props, { emit }) {
    let lnbActive = ref(true);
    const menuRef = ref(null);
    const toggleLnb = () => {
      lnbActive.value = !lnbActive.value; 
    }

    const nodes = ref([
      {
        key: '0',
        label: 'WSG',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '0-0',
            label: '기본결정사항',
            data: '/guide/basic',
            type: 'url',
            state: '완료', // 상태값 구분 : 작업중, 완료, 수정, 추가, 삭제
            icon: 'pi pi-fw pi-file',
          },
          {
            key: '0-1',
            label: '디렉토리 구조',
            data: '/guide/directory',
            type: 'url',
            state: '완료',
            icon: 'pi pi-fw pi-file',
          },
          {
            key: '0-2',
            label: 'Guide Template',
            icon: 'pi pi-fw pi-inbox',
            children: [
              {
                  key: '0-2-0',
                  label: 'Text/Title',
                  data: '/guide/styletext',
                  type: 'url',
                  state: '완료',
                  icon: 'pi pi-fw pi-file',
              },
              {
                key: '0-2-1',
                label: 'Button',
                data: '/guide/stylebutton',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              {
                key: '0-2-2',
                label: 'Form',
                data: '/guide/styleform',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              {
                key: '0-2-3',
                label: 'Table',
                data: '/guide/styletable',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              {
                key: '0-2-4',
                label: 'Tab',
                data: '/guide/styletablist',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              {
                key: '0-2-5',
                label: 'Popup',
                data: '/guide/stylepopup',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              {
                key: '0-2-6',
                label: 'Loading',
                data: '/guide/styleloading',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
            ]
          },
          {
            key: '0-3',
            label: 'SCSS',
            data: '/guide/scss',
            type: 'url',
            state: '완료',
            icon: 'pi pi-fw pi-file',
          },
          {
            key: '0-4',
            label: 'Component',
            data: '/guide/component',
            type: 'url',
            state: '완료',
            icon: 'pi pi-fw pi-file',
          },
        ]
      },
      {
        key: '1',
        label: 'PAGES CODE',
        icon: 'pi pi-fw pi-inbox',
        children: [
          {
            key: '1-0',
            label: 'ACA',
            icon: 'pi pi-fw pi-file',
            children: [
              { 
                key: '1-0-0', 
                label: '메인 - ACA0107M01', 
                data: '/ACA/ACA0107M01',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
            ]
          },
          {
            key: '1-1',
            label: 'ACZ - 진입 전 유형',
            icon: 'pi pi-fw pi-file',
            children: [
              { 
                key: '1-1-1', 
                label: '기본(ACZ0301S01)', 
                data: '/ACZ/ACZ0301S01',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              { 
                key: '1-1-2', 
                label: '유형선택(ACZ0301S03)', 
                data: '/ACZ/ACZ0301S03',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              { 
                key: '1-1-3', 
                label: '없음(ACZ0301S01NoIntro)', 
                data: '/ACZ/ACZ0301S01NoIntro',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
              { 
                key: '1-1-4', 
                label: '박스형태(ACZ0301S02)', 
                data: '/ACZ/ACZ0301S02',
                type: 'url',
                state: '완료',
                icon: 'pi pi-fw pi-file',
              },
            ]
          },
        ]
      },
    ]);

    // 기본적으로 확장할 노드의 키를 설정
    const expandedKeys = ref({
      "0": true, // Node 1 확장
      "1": true, // Node 2 확장
      "2": true, // Node 3 확장
    });

    // 전체 열기 기능
    const expandAll = () => {
      const keys = {};
      const collectKeys = (nodes) => {
        nodes.forEach(node => {
          keys[node.key] = true; // 노드 키를 추가
          if (node.children) {
            collectKeys(node.children); // 자식 노드 재귀 호출
          }
        });
      };
      collectKeys(nodes.value);
      expandedKeys.value = keys; // 수집한 키를 expandedKeys에 설정
    };

    // 전체 닫기 기능
    const collapseAll = () => {
      expandedKeys.value = {}; // 모든 노드 닫기
    };

    // 메뉴 클릭 시 링크 이동 및 active처리
    let oldEl = null;
    const changeUrl = (el, tg) => {
      const newEl = document.getElementById('menuId'+el);
      if(oldEl) oldEl.classList.remove('active');
      newEl.classList.add('active');
      oldEl = newEl;

      emit('update:iframeSrc', tg); // 부모 컴포넌트에 iframeSrc 업데이트 이벤트 발생
    }

    return {
      lnbActive,
      toggleLnb,
      nodes,
      expandedKeys,
      expandAll,
      collapseAll,
      menuRef,
      changeUrl,
    }
  }
}
</script>

<style lang="scss" scoped></style>
