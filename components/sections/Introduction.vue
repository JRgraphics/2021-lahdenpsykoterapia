<template>
  <div class="introduction page-section__container">
    <img
      v-view="viewHandlerImage"
      :class="[
        'profile__picture',
        { 'profile__picture--show': viewStatusImage },
      ]"
      :src="profilePicture"
      alt="I"
    />
    <div class="introduction__container">
      <div class="text__container header">
        <text-roller :text="`${introduction.title}`" :show="viewStatus" />
        <text-roller :text="`${introduction.name}`" :show="viewStatus" />
      </div>
      <div
        v-view="viewHandler"
        :class="[
          'text__container text__fader',
          { 'text__fader--show': viewStatus },
        ]"
      >
        <divider />
        <div class="text__section">
          <p>{{ introduction.section1 }}</p>
        </div>
        <divider :invert="true" />
      </div>

      <div
        v-view="viewHandler2"
        :class="[
          'text__container text__fader',
          { 'text__fader--show': viewStatus2 },
        ]"
      >
        <divider />
        <div class="text__section">
          <p>{{ introduction.section2 }}</p>
          <p>{{ introduction.section3 }}</p>
        </div>
        <divider :invert="true" />
      </div>
    </div>
  </div>
</template>

<script>
/* -----Images-----*/

import profilePicture from "~/assets/images/profile_image.png";

/*-----------------*/

/* -----Scripts-----*/

import { introduction } from "~/assets/scripts/introduction";

/*-----------------*/

export default {
  data() {
    return {
      profilePicture,
      introduction,
      viewStatusImage: false,
      viewStatus: false,
      viewStatus2: false,
    };
  },
  mounted() {},
  methods: {
    viewHandlerImage(e) {
      if (e.percentTop >= 0.4 && e.percentTop <= 0.7) {
        this.viewStatusImage = true;
      }
    },
    viewHandler(e) {
      if (e.percentTop < 0.4 || e.percentTop > 0.7) {
        // this.viewStatus = false;
      } else {
        this.viewStatus = true;
      }
    },
    viewHandler2(e) {
      if (e.percentTop < 0.35 || e.percentTop > 0.8) {
        // this.viewStatus2 = false;
      } else {
        this.viewStatus2 = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/settings.scss";
.introduction {
  margin: 135px 140px;
  margin-top: 135px;
  padding: 100px;
  padding-top: 0;
  position: relative;
  text-align: center;
  &__container {
    margin-top: -75px;
  }
}

.profile__picture {
  max-height: 270px;
  max-width: 400px;
  transform: translateY(-135px) scale(1.3);

  /* Transition styling */
  opacity: 0;
  transition: all 0.5s ease;
  &--show {
    opacity: 1;
    transform: translateY(-135px) scale(1);
  }
}

@media screen and (max-width: 1000px) {
  .introduction {
    margin: 135px 70px;
    padding: 100px 70px;
    padding-top: 0;
  }
}

@media screen and (max-width: 700px) {
  .introduction {
    border-radius: 0;
    margin: 135px 0px;
    padding: 100px 30px;
    padding-top: 0;
  }
}

@media screen and (max-width: 700px) {
  .introduction {
    border-radius: 0;
    margin: 135px 0px;
    padding: 100px 30px;
    padding-top: 0;
  }

  .profile__picture {
    max-height: 202.5px;
    max-width: 300px;
    transform: translateY(-101px) scale(1.3);

    /* Transition styling */
    &--show {
      transform: translateY(-101px) scale(1);
    }
  }
}
</style>
