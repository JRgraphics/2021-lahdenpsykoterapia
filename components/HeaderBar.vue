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
          label: "Esittely"
        },
        {
          name: "therapies",
          label: "Terapia"
        },
        {
          name: "contact",
          label: "Yhteystiedot"
        }
      ]
    };
  },
  methods: {
    onClick(data) {
      try {
        document
          .querySelector(`#${data}`)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      } catch (error) {}
    }
  }
};
</script>

<style lang="scss" scoped></style>
