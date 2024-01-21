<template>
  <div id="therapies" class="therapies">
    <div></div>
    <div class="therapies__container page-section__container">
      <therapies-item
        :key="index"
        v-for="(item, index) in items"
        :therapy="item"
      />
    </div>
  </div>
</template>

<script>
/* -----Scripts-----*/

import { therapies } from "~/assets/scripts/therapies";

/*-----------------*/
export default {
  data() {
    return {
      items: [
        { name: "solo", label: "Yksilöterapia" },
        { name: "couple", label: "Pariterapia" },
        { name: "family", label: "Perheterapia" },
      ],
      therapies: therapies,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "styles/settings.scss";
.therapies {
  padding: 1px 0;
  &__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 135px 140px;
    padding: 100px;
    position: relative;
    text-align: center;
  }
  &__section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
  &__fader {
    font-style: italic;
    /* Transition styling */
    opacity: 0;
    transform: translateY(20px);
    transition: all 1s ease-out;
    &--show {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

@media screen and (max-width: 1000px) {
  .therapies__container {
    margin: 135px 70px;
    padding: 100px 70px;
  }
}

@media screen and (max-width: 700px) {
  .therapies__container {
    border-radius: 0;
    margin: 135px 0px;
    padding: 100px 30px;
  }
}
</style>
