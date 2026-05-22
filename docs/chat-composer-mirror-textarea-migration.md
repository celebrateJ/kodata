# ChatComposer textarea autosize -> 미러 div 전환 가이드

## 목표

- `ChatComposer`에서 `autosize` 플러그인 의존성을 제거한다.
- 퍼블리셔가 유지보수하기 쉬운 단순한 로직으로 구성한다.
- `multi-row` 전환은 "초기 진입 시 저장한 composer 너비"와 "입력 텍스트 폭" 비교로 판정한다.
- `multi-row` 상태에서는 textarea 높이에 맞춰 `div.chat-composer-box` 높이를 inline style로 동기화한다.
- 요구사항 변경 시 문서를 먼저 업데이트하고, 이후 소스에 반영한다.

## 적용 범위

- 대상 컴포넌트: `src/components/chat/composer/ChatComposer.vue`
- 대상 스타일 파일: `src/assets/sass/pages/_chat.scss`
- 선택 정리 대상: `autosize`가 전역에서 더 이상 쓰이지 않으면 패키지 의존성 제거

## 변경 요구사항 요약

1. 로직을 단순화해 퍼블리셔가 수정 가능한 수준으로 유지
2. 1줄 상태에서 실시간 레이아웃 폭 기반 줄 수 계산 제거
3. 초기 화면 진입 시 `div.chat-composer-box`의 width를 1회 저장
4. 입력 텍스트 폭이 `저장된 폭 - 20px`보다 크면 `multi-row` 클래스 추가
5. `multi-row` 상태에서는 textarea 높이에 맞춰 `div.chat-composer-box` 높이를 inline style로 적용
6. 입력값이 비어 있으면 `multi-row` 클래스 제거 + inline style 제거

## 구현 제안

### 1) 템플릿 변경 (`ChatComposer.vue`)

- `div.chat-composer-box`에 ref를 추가해 초기 width를 저장할 수 있게 한다.
- 입력용 `<textarea>`는 그대로 유지한다.

### 2) 스크립트 로직 변경 (`ChatComposer.vue`)

- `autosize` import 및 관련 호출 제거:
  - `autosize(...)`
  - `autosize.update(...)`
  - `autosize.destroy(...)`
- 상태/참조 추가:
  - `composerBoxRef`
  - `initialComposerWidth`
  - `isMessageMulti`
- 텍스트 폭 측정 유틸:
  - canvas 기반으로 현재 textarea font 스타일을 읽어 텍스트 폭(`textWidth`) 계산
  - 여러 줄 입력은 각 줄 폭 중 최대값 사용
- 핵심 동작:
  1. `onMounted`에서 `composerBoxRef.getBoundingClientRect().width`를 저장
  2. 입력 시 `textWidth > (initialComposerWidth - 20)` 또는 줄바꿈 포함이면 `isMessageMulti = true`
  3. `isMessageMulti = true`일 때 textarea `scrollHeight`를 읽어 높이 clamp(`24~72`) 후
     - 측정 전에 `textarea.style.height = 'auto'`로 초기화해 축소 시점 높이 재계산을 보장
     - textarea 높이 inline 반영
     - `composerBoxRef.style.height`에 같은 높이 inline 반영
  4. 입력값이 비면
     - `isMessageMulti = false`
     - textarea/composer-box inline 높이 제거

### 3) 스타일 변경 (`_chat.scss`)

- `chat-composer-box` / `textarea` 기본 구조는 유지
- 높이 애니메이션은 textarea `transition: height .23s` 중심으로 유지
- `multi-row`에서는 position 전환 후에도 inline height가 그대로 적용되도록 충돌 스타일 제거

## 마이그레이션 체크리스트

1. `ChatComposer.vue`에서 `autosize` import/사용 코드 제거
2. `composerBoxRef` 추가 및 초기 width 저장 로직 구현
3. 텍스트 폭 계산 로직(canvas) 구현
4. `textWidth > initialWidth - 20` 기준으로 `multi-row` 전환 처리
5. `multi-row` 상태에서 textarea/composer-box 높이 inline 동기화
6. 입력값 empty 시 `multi-row` + inline style 초기화
7. 확장/축소 UX 확인
8. 다른 사용처가 없으면 `autosize` 패키지 제거

## 확인할 엣지 케이스

- 빈 텍스트에서 정확히 1줄 높이 유지
- 긴 단일 문장에서 `initialWidth - 20` 초과 시 즉시 `multi-row` 적용
- 수동 줄바꿈(`Shift+Enter`) 처리
- 3 -> 2 -> 1줄로 삭제 시 안정적인 축소
- 최대 높이 `72px` 제한 유지
- 한글 IME 조합 입력 중 깜빡임/점프 없음

## 수동 테스트 플랜

1. 빈 상태에서 시작해 기본 높이 동작 확인
2. 초기 composer width 저장값 확인(개발자도구)
3. 텍스트 폭이 `initialWidth - 20`을 넘는 순간 `multi-row`가 즉시 붙는지 확인
4. `multi-row` 상태에서 textarea 높이에 맞춰 `chat-composer-box` inline height가 갱신되는지 확인
5. 입력값 전체 삭제 시 `multi-row` 클래스와 inline height가 제거되는지 확인
6. 계속 입력해도 `72px`에서 제한되는지 확인

## 리스크와 대응

- 리스크: 초기 width 저장 시점이 너무 이르면 부정확할 수 있음
  - 대응: `onMounted + nextTick`에서 저장
- 리스크: 폰트 스타일과 canvas font 설정이 다르면 폭 오차 발생
  - 대응: `getComputedStyle(textarea)` 기반으로 font 문자열을 구성

## 롤백 계획

- 마이그레이션 변경은 컴포넌트 단위로 한 번에 묶어 관리
- 이슈 발생 시 `ChatComposer.vue`와 `_chat.scss`를 함께 롤백

