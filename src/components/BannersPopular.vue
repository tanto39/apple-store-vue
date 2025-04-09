<template>
  <section class="banner-container">
    <BannerPopular
      title="Popular Products"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner1.png"
      categoryId="2"
    />

    <BannerPopular
      title="Ipad Pro"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner2.png"
      categoryId="4"
      class="light"
    />

    <BannerPopular
      title="Samsung Galaxy"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner3.png"
      categoryId="2"
      class="gray"
    />

    <BannerPopular
      title="Macbook Pro"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner4.png"
      imageAlt="Macbook Pro"
      categoryId="3"
      isDark
    />
  </section>
</template>

<script lang="ts">
import BannerPopular from "./BannerPopular.vue";

export default {
  name: "BannersPopular",
  components: { BannerPopular },
};
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
@media (max-width: 991px) {
  .banner-container {
  }
}
</style>
