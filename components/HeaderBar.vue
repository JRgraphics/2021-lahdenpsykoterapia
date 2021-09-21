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
          name: "intro",
          label: "Esittely"
        },
        {
          name: "therapy",
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
      console.log(data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
