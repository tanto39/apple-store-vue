<template>
  <section class="categories-section">
    <HomeTitle title="Browse By Category" :nav="true" />
    <div class="categories">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :imageUrl="category.imageUrl"
        :categoryName="category.name"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoryCard from "./CategoryCard.vue";
import HomeTitle from "./HomeTitle.vue";

interface Category {
  name: string;
  imageUrl: string;
}

export default defineComponent({
  name: "Categories",
  components: { CategoryCard, HomeTitle },
  data() {
    return {
      categories: [
        {
          name: "Phones",
          imageUrl: "/images/Phones.svg",
        },
        {
          name: "Smart Watches",
          imageUrl: "/images/SmartWatches.svg",
        },
        {
          name: "Cameras",
          imageUrl: "/images/Cameras.svg",
        },
        {
          name: "Headphones",
          imageUrl: "/images/Headphones.svg",
        },
        {
          name: "Computers",
          imageUrl: "/images/Computers.svg",
        },
        {
          name: "Gaming",
          imageUrl: "/images/Gaming.svg",
        },
      ] as Category[],
    };
  },
});
</script>

<style scoped>
.categories-section {
  padding: 80px 160px;
}
.categories {
  display: flex;
  align-items: start;
  gap: 32px;
  font-family: ABeeZee, -apple-system, Roboto, Helvetica, sans-serif;
  font-style: italic;
  font-weight: 400;
}
</style>
