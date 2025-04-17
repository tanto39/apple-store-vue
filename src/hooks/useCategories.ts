import { ref, computed } from "vue";
import { Category } from "@/types/Category";


export const useCategories = () => {
  const categories = ref<Category[]>([
    { id: 2, name: "Phones", imageUrl: "/images/Phones.svg" },
    { id: 5, name: "Smart Watches", imageUrl: "/images/SmartWatches.svg" },
    { id: 1, name: "Accessories", imageUrl: "/images/Cameras.svg" },
    { id: 6, name: "Headphones", imageUrl: "/images/Headphones.svg" },
    { id: 3, name: "Computers", imageUrl: "/images/Computers.svg" },
    { id: 4, name: "Tablets", imageUrl: "/images/Gaming.svg" },
  ]);

  const currentIndex = ref(0);
  const visibleCount = 6; // Сколько карточек видно одновременно
  const categoriesContainer = ref<HTMLElement | null>(null);

  const visibleCategories = computed(() => {
    const total = categories.value.length;
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex.value + i) % total;
      return categories.value[index];
    });
  });

  const onNavigate = (direction: "previous" | "next") => {
    const total = categories.value.length;

    if (direction === "next") {
      currentIndex.value = (currentIndex.value + 1) % total;
    } else {
      currentIndex.value =
        (currentIndex.value - 1 + total) % total;
    }
  };

  return {
    categoriesContainer,
    visibleCategories,
    onNavigate,
  };
}