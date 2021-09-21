<template>
  <div class="text-roller">
    <div
      :key="index"
      v-for="(char, index) in textArr"
      :class="[
        'text-roller__char',
        { 'text-roller__char--show': show },
        classes
      ]"
      :style="{ transitionDelay: `${0 + index / 30}s` }"
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
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      textArr: [],
      viewStatus: false
    };
  },
  mounted() {
    this.textArr = this.$props.text.split("");
  },
  methods: {
    viewHandler(e) {
      e.percentInView >= 0.8
        ? (this.viewStatus = true)
        : (this.viewStatus = false);
    }
  }
};
</script>

<style lang="scss" scoped></style>
