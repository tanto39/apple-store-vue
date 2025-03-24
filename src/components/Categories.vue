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
          id: 1,
          name: "Phones",
          imageUrl: "/images/Phones.svg",
        },
        {
          id: 2,
          name: "Smart Watches",
          imageUrl: "/images/SmartWatches.svg",
        },
        {
          id: 3,
          name: "Cameras",
          imageUrl: "/images/Cameras.svg",
        },
        {
          id: 4,
          name: "Headphones",
          imageUrl: "/images/Headphones.svg",
        },
        {
          id: 5,
          name: "Computers",
          imageUrl: "/images/Computers.svg",
        },
        {
          id: 6,
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
