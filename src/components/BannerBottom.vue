<template>
  <section class="banner-container">
    <div class="banner-content">
      <div class="banner-text-container">
        <h2 class="banner-heading">
          <span class="heading-regular">Big Summer</span>
          <span class="heading-italic">Sale</span>
        </h2>
        <p class="banner-description">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
      </div>
      <ButtonStore class="shop-now-button" @click="handleShopNow">Shop Now</ButtonStore>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BannerBottom",
  setup() {
    const handleShopNow = () => {
      console.log("Shop Now clicked");
    };
    return {
      handleShopNow,
    };
  },
});
</script>

<style scoped>
.banner-container {
  display: flex;
  height: 448px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: 
    url("../assets/banner-bottom1.png") left center no-repeat,
    url("../assets/banner-bottom2.png") right center no-repeat,
    linear-gradient(100deg, #2e2e2e 42.36%, #000 98.65%);
}

.banner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.banner-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.banner-heading {
  color: #fff;
  text-align: center;
  font-size: 72px;
  line-height: 72px;
  letter-spacing: -0.72px;
  margin: 0;
}

.heading-regular {
  font-family: "Abel", sans-serif;
  font-weight: 400;
}

.heading-italic {
  font-style: italic;
  font-weight: 400;
}

.banner-description {
  color: #787878;
  text-align: center;
  font-family: "Abel", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  width: 100%;
  margin: 0;
}

.shop-now-button {
  padding: 16px 56px;
  gap: 8px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: transparent;
}

.shop-now-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 991px) {
  .banner-heading {
    font-size: 56px;
    line-height: 56px;
  }

  .banner-description {
    font-size: 14px;
    line-height: 28px;
  }

  .shop-now-button {
    padding: 14px 48px;
  }
}

@media (max-width: 640px) {
  .banner-heading {
    font-size: 40px;
    line-height: 40px;
  }

  .banner-description {
    font-size: 12px;
    line-height: 24px;
    padding: 0 20px;
  }

  .shop-now-button {
    font-size: 14px;
    padding: 12px 40px;
    width: 80%;
  }
}
</style>
