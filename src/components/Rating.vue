<template>
  <div class="rating-container">
    <HomeTitle class="title" title="Reviews" />
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
import HomeTitle from "./HomeTitle.vue";

export default defineComponent({
  name: "Rating",
  components: {
    HomeTitle
  },
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
  margin: 88px auto 88px auto;
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
  margin: 12px 0 0 0;
}
.rating-image {
  background: url("../assets/Stars.svg") center center no-repeat;
  width: 136px;
  height: 32px;
  margin-top: 10px;
}
.title {
  display: none;
}

@media (max-width: 991px) {
  .title {
    display: block;
  }
  .rating-container {
    padding: 0 5px;
    margin: 88px auto 40px auto;
  }
  .rating {
    margin-top: 8px;
    width: 100%;
    height: 152px;
    align-items: flex-start;
  }
  .rating-inner {
    flex-direction: row;
    margin-left: 52px;
    align-items: center;
    gap: 30px;
  }
  .rating-score, .review-count {
    font-family: 'Abel', 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
