<template>
  <ul class="acdn-list" :class="[classList ? classList : '']">
    <li v-for="(item, index) in acdnList" :key="resolveItemKey(item, index)">
      <slot :item="item" :index="index"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'UiAccordionList',
  props: {
    acdnList: {
      type: Array,
      required: true,
    },
    acdnItemKey: {
      type: String,
      default: 'value',
    },
    classList: {
      type: [String, Array],
      default: '',
    }
  },
  setup(props) {
    const resolveItemKey = (item, index) => {
      const key = item?.[props.acdnItemKey];
      if (key !== undefined && key !== null && key !== '') return key;
      return index;
    };

    return {
      resolveItemKey,
    }
  }
}
</script>
