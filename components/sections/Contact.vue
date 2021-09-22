<template>
  <div v-view="viewHandler" id="contact" class="contact">
    <div
      :class="['contact__details', { 'contact__details--show': viewStatus }]"
    >
      <div class="details__box">
        <div class="details__title">Toimitilat</div>
        <div class="details__body">Hämeenkatu 21 A As. 6 15110 Lahti</div>
      </div>
      <div class="details__box">
        <div class="details__title">Puhelin</div>
      </div>
      <div class="details__body">+358 405956511</div>
      <div class="details__box">
        <div class="details__title">Email</div>
        <div class="details__body">lahdenpsykoterapia@gmail.com</div>
      </div>
      <div class="details__box">
        <div class="details__body details__body--small">
          Ei vapaita aikoja tällä hetkellä
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewStatus: false
    };
  },
  methods: {
    viewHandler(e) {
      if (e.percentTop < 0.3 || e.percentTop > 0.6) {
        this.viewStatus = false;
      } else {
        this.viewStatus = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
