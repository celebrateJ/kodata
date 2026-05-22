<template>
  <VDropdown
    v-bind="$attrs"
    :placement="direction"
    :strategy="'fixed'"
    :triggers="['hover', 'focus']"
    :distance="direction === 'top' ? 0 : direction === 'bottom' ? 5 : 0"
    :skid="0"
    class="tooltip-wrap"
  >
    <!-- 버튼 영역 -->
    <slot name="tooltipBtn"></slot>

    <!-- 툴팁 내용 영역 -->
    <template #popper>
      <div class="tooltip-cont">
        <slot name="tooltipContent"></slot>
      </div>
    </template>
  </VDropdown>
</template>

<script>

export default {
  name: 'UiTooltip',
  props: {
    direction: {
      type: String,
      default: 'top',
    },
  },
};
</script>
