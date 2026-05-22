<template>
  <div class="form-box" 
    :class="[addClassName,]"
  >
    <div class="form-header">
      <span class="form-ttl">{{ formTitle }}</span>
    </div>

    <div class="form-body">
      <slot name="formBody"></slot>
    </div>
    
    <div class="form-footer">
      <slot name="formFooter"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'UiFormBox',
  props: {
    formTitle: {
      type: String,
      default: ''
    },
    addClassName: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return {
      
    };
  }
};
</script>