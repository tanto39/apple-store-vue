<template>
  <section class="banner-container">
    <article class="content-wrapper">
      <header class="header-content">
        <p class="subtitle">Pro.Beyond.</p>
        <h1 class="title">IPhone 14 Pro</h1>
      </header>
      <p class="description">Created to change everything for the better. For everyone</p>
      <ButtonStore class="cta-button">Shop Now</ButtonStore>
    </article>
    <figure class="image-container">
      <img
        src="../assets/Banner-top.png"
        alt="iPhone 14 Pro"
        class="product-image"
      />
    </figure>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BannerTop",
  components: {},
});
</script>

<style scoped>
.banner-container {
  display: flex;
  padding: 0 160px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;
  background: linear-gradient(91deg, #211c24 0.64%, #211c24 101%);
}

@media (max-width: 991px) {
  .banner-container {
    padding: 40px;
    justify-content: center;
    text-align: center;
  }
}

@media (max-width: 640px) {
  .banner-container {
    padding: 20px;
  }
}

.content-wrapper {
  display: flex;
  min-width: 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  flex: 1 0 0;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
}

.subtitle {
  align-self: stretch;
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
  opacity: 0.4;
}

.title {
  align-self: stretch;
  color: #fff;
  font-family: "Abel", sans-serif;
  font-size: 96px;
  font-weight: 400;
  line-height: 72px;
  letter-spacing: -0.96px;
}

.description {
  align-self: stretch;
  color: #909090;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
}

.cta-button {
  padding: 16px 56px;
  gap: 8px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: transparent;
}

.cta-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 991px) {
  .content-wrapper {
    min-width: unset;
    align-items: center;
  }

  .header-content {
    align-items: center;
  }

  .title {
    font-size: 72px;
    line-height: 60px;
  }
}

@media (max-width: 640px) {
  .subtitle {
    font-size: 20px;
    line-height: 28px;
  }

  .title {
    font-size: 48px;
    line-height: 40px;
  }

  .description {
    font-size: 16px;
  }
}

.image-container {
  display: flex;
  width: 406px;
  height: 632px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 991px) {
  .image-container {
    width: 300px;
    height: 468px;
  }
}

@media (max-width: 640px) {
  .image-container {
    width: 240px;
    height: 374px;
  }
}
</style>
