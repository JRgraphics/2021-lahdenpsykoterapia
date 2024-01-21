<template>
  <div class="header-bar">
    <button
      :key="index"
      v-for="(item, index) in headerItem"
      class="button button--transparent header-bar__item"
      @click="onClick(item.name)"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerItem: [
        {
          name: "page-section--main-logo",
          label: "Alkuun",
        },
        {
          name: "therapies",
          label: "Terapia",
        },
        {
          name: "contact",
          label: "Yhteystiedot",
        },
      ],
    };
  },
  methods: {
    onClick(data) {
      try {
        document
          .querySelector(`#${data}`)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
@import "styles/settings.scss";

.header-bar {
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  filter: drop-shadow(0 10px 10px black);
  height: 80px;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  &__item {
    font-family: $font-montserrat;
    font-size: 25px;
    font-weight: 600;
    margin: 0 30px;
  }
}

@media screen and (max-width: 550px) {
  .header-bar {
    &__item {
      font-size: 15px;
      font-weight: 600;
      margin: 0 10px;
    }
  }
}
</style>
