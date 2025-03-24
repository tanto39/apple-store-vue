<template>
  <section class="banner-container">
    <BannerPopular
      title="Popular Products"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner1.png"
    />

    <BannerPopular
      title="Ipad Pro"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner2.png"
      class="light"
    />

    <BannerPopular
      title="Samsung Galaxy"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner3.png"
      class="gray"
    />

    <BannerPopular
      title="Macbook Pro"
      description="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use."
      image="/images/banner4.png"
      imageAlt="Macbook Pro"
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
  width: 100%;
}
.light {
  background-color: #F9F9F9;
}
.gray {
  background-color: #EAEAEA;
} 
@media (max-width: 991px) {
  .banner-container {
    max-width: 991px;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .banner-container {
    max-width: 640px;
  }
}
</style>
