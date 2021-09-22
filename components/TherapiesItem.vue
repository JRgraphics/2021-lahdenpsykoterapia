<template>
  <div
    v-view="viewHandler"
    :class="['therapies__item', { 'therapies__item--show': viewStatus }]"
  >
    <div class="item__title">{{ therapy.label }}</div>
    <div class="item__details">{{ therapies[therapy.name] }}</div>
  </div>
</template>

<script>
/* -----Scripts-----*/

import { therapies } from "~/assets/scripts/therapies";

/*-----------------*/
export default {
  props: {
    therapy: {
      type: Object
    }
  },
  data() {
    return { viewStatus: false, therapies: therapies };
  },
  methods: {
    viewHandler(e) {
      if (e.percentTop < 0.35 || e.percentTop > 0.7) {
        this.viewStatus = false;
      } else {
        this.viewStatus = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
