<template>
  <div id="therapies" class="therapies">
    <therapies-item
      :key="index"
      v-for="(item, index) in items"
      :therapy="item"
    />
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
        { name: "family", label: "Perheterapia" }
      ],
      therapies: therapies
    };
  }
};
</script>

<style lang="scss" scoped></style>
