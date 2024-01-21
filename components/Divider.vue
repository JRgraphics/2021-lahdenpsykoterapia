<template>
  <div class="divider-container">
    <img
      :class="['divider', { 'divider--invert': invert }]"
      :src="divider"
      alt="-"
    />
  </div>
</template>

<script>
import divider from "~/assets/images/divider.png";

export default {
  data() {
    return {
      divider,
    };
  },
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.divider {
  filter: invert(1);
  height: auto;
  width: 40px;
  &--invert {
    transform: rotateX(180deg);
  }
  &-container {
    width: 100%;
  }
}
</style>
