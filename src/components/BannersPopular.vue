<template>
  <section class="banner-container">
    <!-- Мобильная версия -->
    <div v-if="isMobile" class="mobile-slider">
      <BannerPopular v-bind="banners[currentIndex]" :class="banners[currentIndex].class" />

      <!-- Кружки-переключатели -->
      <div class="pagination-dots">
        <span
          v-for="(_, index) in banners"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="currentIndex = index"
        />
      </div>
    </div>

    <!-- Десктоп версия -->
    <template v-else>
      <BannerPopular v-for="(banner, index) in banners" :key="index" v-bind="banner" :class="banner.class" />
    </template>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from "vue";
import BannerPopular from "./BannerPopular.vue";

export default defineComponent({
  name: "BannersPopular",
  components: { BannerPopular },
  setup() {
    const currentIndex = ref(0);
    const isMobile = ref(window.innerWidth <= 991);

    const banners = ref([
      {
        title: "Popular Products",
        description:
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        image: "/images/banner1.png",
        categoryId: "2",
      },
      {
        title: "Ipad Pro",
        description:
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        image: "/images/banner2.png",
        categoryId: "4",
        class: "light",
      },
      {
        title: "Samsung Galaxy",
        description:
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        image: "/images/banner3.png",
        categoryId: "2",
        class: "gray",
      },
      {
        title: "Macbook Pro",
        description:
          "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
        image: "/images/banner4.png",
        categoryId: "3",
        isDark: true,
      },
    ]);

    const checkIsMobile = () => {
      isMobile.value = window.innerWidth <= 991;
    };

    onMounted(() => {
      window.addEventListener("resize", checkIsMobile);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", checkIsMobile);
    });

    return {
      banners,
      currentIndex,
      isMobile,
    };
  },
});
</script>

<style scoped>
.banner-container {
  max-width: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}
.light {
  background-color: #f9f9f9;
}
.gray {
  background-color: #eaeaea;
}
.mobile-slider {
  width: 100%;
  position: relative;
}
.pagination-dots {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: -56px;
  gap: 9px;
  z-index: 1000;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #d0d0d0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.dot.active {
  background-color: #000;
}
</style>
