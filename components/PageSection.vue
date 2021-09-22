<template>
  <div
    :id="`page-section--${name}`"
    :class="['page-section', `page-section--${name}`]"
  >
    <main-logo v-if="name === 'main-logo'" />
    <introduction v-if="name === 'introduction'" />
    <therapies v-if="name === 'therapies'" />
    <contact v-if="name === 'contact'" />
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
