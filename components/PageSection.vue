<template>
  <div :class="['page-section', `page-section--${name}`]">
    <main-logo v-if="name === 'main-logo'" />
    <introduction v-if="name === 'introduction'" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped></style>
