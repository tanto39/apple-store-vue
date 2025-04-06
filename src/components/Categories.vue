<template>
  <section class="categories-section">
    <HomeTitle title="Browse By Category" :nav="true" />
    <div class="categories">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="category.id"
        :imageUrl="category.imageUrl"
        :categoryName="category.name"
        @click="$router.push(`/category/${category.id}`)"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoryCard from "./CategoryCard.vue";
import HomeTitle from "./HomeTitle.vue";

interface Category {
  id: number;
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
          id: 2,
          name: "Phones",
          imageUrl: "/images/Phones.svg",
        },
        {
          id: 5,
          name: "Smart Watches",
          imageUrl: "/images/SmartWatches.svg",
        },
        {
          id: 1,
          name: "Accessories",
          imageUrl: "/images/Cameras.svg",
        },
        {
          id: 6,
          name: "Headphones",
          imageUrl: "/images/Headphones.svg",
        },
        {
          id: 3,
          name: "Computers",
          imageUrl: "/images/Computers.svg",
        },
        {
          id: 4,
          name: "Tablets",
          imageUrl: "/images/Gaming.svg",
        },
      ] as Category[],
    };
  },
});
</script>

<style scoped>
.categories-section {
  padding: 80px 0;
  max-width: 1120px;
  margin: 0 auto;
}
.categories {
  display: flex;
  align-items: start;
  gap: 32px;
  font-style: italic;
  font-weight: 400;
  flex-wrap: wrap;
}
</style>
