<template>
  <div v-view="viewHandler" id="contact" class="contact">
    <div
      :class="[
        'contact__details',
        'page-section__container',
        { 'contact__details--show': viewStatus },
      ]"
    >
      <div class="details__box">
        <div class="details__title header">Toimitilat</div>
        <div class="details__body">Hämeenkatu 21 A As. 6 15110 Lahti</div>
      </div>
      <div class="details__box">
        <div class="details__title header">Puhelin</div>
        <a href="tel:+358405956511" class="details__body">+358 405956511</a>
      </div>
      <div class="details__box">
        <div class="details__title header">Email</div>
        <a href="mailto:lahdenpsykoterapia@gmail.com" class="details__body"
          >lahdenpsykoterapia@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewStatus: false,
    };
  },
  methods: {
    viewHandler(e) {
      if (e.percentTop < 0.3 || e.percentTop > 0.6) {
        // this.viewStatus = false;
      } else {
        this.viewStatus = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  padding: 25vh 50px 10vh 50px;
  &__details {
    opacity: 0;
    padding: 80px;
    text-align: center;
    transition: all 0.5s ease;
    &--show {
      opacity: 1;
    }
    .details {
      &__box {
        margin: 30px 0;
      }
      &__title {
        margin-bottom: 15px;
      }
      &__body {
        &--small {
          font-size: 12pt;
          font-style: italic;
        }
      }
    }
  }
}

@media screen and (max-width: 450px) {
  .contact {
    padding: 20vh 20px 10vh 20px;
    &__details {
      .details {
        &__box {
          margin: 30px 0;
        }
        &__title {
          font-size: 15pt;
          font-weight: 600;
        }
        &__body {
          font-size: 11pt;
          &--small {
            font-size: 9pt;
            font-style: italic;
          }
        }
      }
    }
  }
}
</style>
