<template>
  <article class="details-container">
    <div class="details-content" id="details">
      <h2 class="details-title">Details</h2>
      <p class="details-description">
        Just as a book is judged by its cover, the first thing you notice when
        you pick up a modern smartphone is the display. Nothing surprising,
        because advanced technologies allow you to practically level the display
        frames and cutouts for the front camera and speaker, leaving no room for
        bold design solutions. And how good that in such realities Apple
        everything is fine with displays. Both critics and mass consumers always
        praise the quality of the picture provided by the products of the
        Californian brand. And last year's 6.7-inch Retina panels, which had
        ProMotion, caused real admiration for many.
      </p>
      <section class="spec-section">
        <dl class="spec-list">
          <SpecificationRow
            v-for="(spec, index) in specifications"
            :key="index"
            :spec="spec"
          />
        </dl>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Characteristic } from "../types/Product";
import SpecificationRow from "./SpecificationRow.vue";

export default defineComponent({
  name: "ProductDetails",
  components: { SpecificationRow },
  props: {
    specifications: {
      type: Array as () => Characteristic[],
      required: false,
    },
  }
});
</script>

<style scoped>
.details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  background-color: #fafafa;
}

.details-content {
  display: flex;
  padding: 48px 40px 30px 40px;
  max-width: 1120px;
  margin: 80px auto;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
}

.details-title {
  width: 100%;
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}

.details-description {
  width: 100%;
  color: #9d9d9d;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  margin: 0;
}

.spec-section {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.spec-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0;
}

@media (max-width: 991px) {
  .details-container {
    padding: 60px 80px;
  }

  .details-content {
    padding: 32px 24px 0px 24px;
  }

  .details-title {
    font-size: 22px;
  }

  .details-description {
    font-size: 13px;
  }
}

@media (max-width: 640px) {
  .details-container {
    padding: 40px 20px;
  }

  .details-content {
    padding: 24px 16px 0px 16px;
  }

  .details-title {
    font-size: 20px;
  }

  .details-description {
    font-size: 12px;
  }
}
</style>
