<template>
  <div v-view="viewHandler" class="main-logo__container">
    <div
      :class="[
        'main-logo main-logo__left',
        { 'main-logo__left--show': viewStatus }
      ]"
      :style="{ backgroundImage: `url(${leftLogo})` }"
    ></div>
    <div
      :class="[
        'main-logo main-logo__right',
        { 'main-logo__right--show': viewStatus }
      ]"
      :style="{ backgroundImage: `url(${rightLogo})` }"
    ></div>
    <div class="main-logo__title">
      <text-roller :text="'Lahden Psykoterapia'" :show="viewStatus" />
    </div>
  </div>
</template>

<script>
/* -----Images-----*/

import leftLogo from "~/assets/images/main_logo_left.png";
import rightLogo from "~/assets/images/main_logo_right.png";

/*-----------------*/

export default {
  data() {
    return {
      leftLogo: leftLogo,
      rightLogo: rightLogo,
      viewStatus: false
    };
  },
  mounted() {},
  methods: {
    viewHandler(e) {
      if (e.percentTop < 0.4 || e.percentTop > 0.7) {
        this.viewStatus = false;
      } else {
        this.viewStatus = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
