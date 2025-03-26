<template>
  <div class="rating-container">
    <article class="rating">
      <div class="rating-inner">
        <div class="rating-top">
          <h2 class="rating-score">{{ rating }}</h2>
          <p class="review-count">of {{ reviewCount }} reviews</p>
        </div>
        <div class="rating-image"></div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Rating",
  props: {
    rating: {
      type: Number,
      required: true,
      default: 4.8,
    },
    reviewCount: {
      type: Number,
      required: true,
      default: 125,
    },
  },
});
</script>

<style scoped>
.rating-container {
  max-width: 1120px;
  margin: 88px auto 0 auto;
}
.rating {
  border-radius: 25px;
  background-color: rgba(250, 250, 250, 1);
  font-style: italic;
  color: #000;
  font-weight: 400;
  text-align: center;
  width: 184px;
  height: 192px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.rating-inner {
  display: flex;
  flex-direction: column;
}

.rating-score {
  font-size: 56px;
  line-height: 1;
  margin: 0;
}

.review-count {
  font-size: 15px;
  line-height: 1;
  opacity: 0.3;
  margin: 16px 0 0 0;
}

.rating-image {
  background: url("../assets/Stars.svg") center center no-repeat;
  width: 136px;
  height: 32px;
  margin-top: 16px;
}
</style>
