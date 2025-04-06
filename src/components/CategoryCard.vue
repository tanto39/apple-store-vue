<template>
  <article class="category-card">
    <img :src="imageUrl" alt="" class="category-image" />
    <p class="category-name">{{ categoryName }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryCard",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.category-card {
  border-radius: 15px;
  background-color: rgba(237, 237, 237, 1);
  display: flex;
  min-width: 77px;
  min-height: 104px;
  padding: 24px 24px 0 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-shrink: 1;
  width: 110px;
  white-space: nowrap;
  cursor: pointer;
}

.category-image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 48px;
}

.category-name {
  margin-top: 8px;
}

@media (max-width: 991px) {
  .category-card {
    padding: 24px 20px;
    white-space: initial;
  }
}
</style>
