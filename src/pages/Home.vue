<template>
  <div class="home">
    <BannerTop />
    <SmallerBanners />
    <Categories />
    <ProductsHome />
    <BannerBottom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BannerTop from '@/components/BannerTop.vue';
import SmallerBanners from '@/components/SmallerBanners.vue';
import Categories from '@/components/Categories.vue';
import ProductsHome from '@/components/ProductsHome.vue';
import BannerBottom from '@/components/BannerBottom.vue';

export default defineComponent({
  name: 'Home',
  components: { BannerTop, SmallerBanners, BannerBottom, Categories, ProductsHome },
});
</script>

<style scoped>
</style>
