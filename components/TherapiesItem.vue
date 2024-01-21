<template>
  <div
    v-view="viewHandler"
    :class="[
      'text__container text__fader',
      { 'text__fader--show': viewStatus },
    ]"
  >
    <div class="text__section">
      <div class="item__title">{{ therapy.label }}</div>
      <divider />
      <div class="item__details">{{ therapies[therapy.name] }}</div>
      <divider :invert="true" />
    </div>
  </div>
</template>

<script>
/* -----Scripts-----*/

import { therapies } from "~/assets/scripts/therapies";

/*-----------------*/
export default {
  props: {
    therapy: {
      type: Object,
    },
  },
  data() {
    return { viewStatus: false, therapies: therapies };
  },
  methods: {
    viewHandler(e) {
      if (e.percentTop >= 0.35 && e.percentTop <= 0.7) {
        this.viewStatus = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/settings.scss";

.item {
  &__title {
    font-size: $font-header;
    margin: 20px 0;
  }
}
</style>
