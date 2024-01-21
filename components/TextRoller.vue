<template>
  <div class="text-roller header">
    <div
      :key="index"
      v-for="(char, index) in textArr"
      :class="[
        'text-roller__char',
        { 'text-roller__char--show': show },
        classes,
      ]"
      :style="{ transitionDelay: `${0 + index / 50}s`, color }"
    >
      <span v-if="char != ''">{{ char }}</span>
      <span v-if="char == ' '">&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: "",
    },
    text: {
      type: String,
      default: "",
    },
    show: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "white",
    },
  },
  data() {
    return {
      textArr: [],
      viewStatus: false,
    };
  },
  mounted() {
    this.textArr = this.$props.text.split("");
  },
  methods: {
    viewHandler(e) {
      e.percentInView >= 0.8 ? (this.viewStatus = true) : null;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/settings.scss";

.text-roller {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  &__char {
    opacity: 0;
    transform: rotateY(90deg);
    transition: all 0.2s ease-out;
    &--show {
      opacity: 1;
      transform: rotateY(0);
    }
  }
}
</style>
