<template>
  <div class="page">
    <header-bar />
    <page-section :key="index" v-for="(item, index) in sections" :name="item" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      sections: ["main-logo", "introduction", "main-logo"]
    };
  }
};
</script>
