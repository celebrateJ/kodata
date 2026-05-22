<template>
  <nav class="breadcrumb-wrap">
    <ul class="breadcrumb-list">
      <li v-for="(crumb, index) in breadcrumbs" :key="index">
        <span class="bc-item">{{ crumb.name }}</span>
      </li>
      
    </ul>
  </nav>
</template>

<script setup>
import { defineProps } from 'vue';

// 부모에서 breadcrumbs 배열을 전달받음
defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});
</script>
