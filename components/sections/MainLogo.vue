<template>
  <div v-view="viewHandler" class="main-logo__container">
    <div
      :class="[
        'main-logo main-logo__left',
        { 'main-logo__left--show': viewStatus },
      ]"
      :style="{ backgroundImage: `url(${leftLogo})` }"
    ></div>
    <div
      :class="[
        'main-logo main-logo__right',
        { 'main-logo__right--show': viewStatus },
      ]"
      :style="{ backgroundImage: `url(${rightLogo})` }"
    ></div>
    <div class="main-logo__title">
      <text-roller
        :text="'Lahden Psykoterapia'"
        :show="viewStatus"
        :color="'white'"
      />
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
      viewStatus: false,
    };
  },
  mounted() {},
  methods: {
    viewHandler(e) {
      if (e.percentTop < 0.4 || e.percentTop > 0.7) {
        // this.viewStatus = false;
      } else {
        this.viewStatus = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./styles/settings.scss";
.main-logo {
  background-size: cover;
  height: 303px;
  left: 20px;
  position: absolute;
  top: 0;
  width: 303px;
  &__container {
    height: 350px;
    margin: auto;
    position: relative;
    width: 350px;
  }
  &__title {
    bottom: 0;
    display: flex;
    font-family: $font-playfair;
    font-size: 30px;
    justify-content: center;
    position: absolute;
    width: 100%;
  }
  &__left {
    opacity: 0;
    transform: translateX(-70%);
    transition: all 0.6s ease;
    &--show {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &__right {
    opacity: 0;
    transform: translateX(70%);
    transition: all 0.6s ease;
    &--show {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

@keyframes slide-logo-in-left {
  0% {
    opacity: 0;
    transform: translateX(-70%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@keyframes slide-logo-in-right {
  0% {
    opacity: 0;
    transform: translateX(70%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
}

@media screen and (max-width: 1600px) {
  .main-logo {
    height: 260px;
    width: 260px;
    &__container {
      height: 300px;
      width: 300px;
    }
  }
}

@media screen and (max-width: 500px) {
  .main-logo {
    &__title {
      font-size: 20px;
    }
  }
}
</style>
