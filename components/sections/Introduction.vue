<template>
  <div class="introduction">
    <div v-view="viewHandler" class="introduction__container">
      <img
        :class="['profile__picture', { 'profile__picture--show': viewStatus }]"
        :src="profilePicture"
        alt="I"
      />
      <div
        :class="[
          'introduction__text',
          { 'introduction__text--show': viewStatus }
        ]"
      >
        <div class="text__section">
          {{ introduction.section1 }}
        </div>
        <div class="text__section text__section--name">
          <text-roller :text="introduction.title" :show="viewStatus" />
          <text-roller :text="introduction.name" :show="viewStatus" />
        </div>
      </div>
    </div>
    <div v-view="viewHandler2" class="introduction__container">
      <div
        :class="[
          'introduction__text-lower',
          { 'introduction__text-lower--show': viewStatus2 }
        ]"
      >
        <div class="text__section">
          {{ introduction.section2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* -----Images-----*/

import profilePicture from "~/assets/images/profile.png";

/*-----------------*/

/* -----Scripts-----*/

import { introduction } from "~/assets/scripts/introduction";

/*-----------------*/

export default {
  data() {
    return {
      profilePicture: profilePicture,
      introduction: introduction,
      viewStatus: false,
      viewStatus2: false
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
    },
    viewHandler2(e) {
      if (e.percentTop < 0.35 || e.percentTop > 0.7) {
        this.viewStatus2 = false;
      } else {
        this.viewStatus2 = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
