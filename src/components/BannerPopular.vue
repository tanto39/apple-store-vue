<template>
  <article :class="[isDark ? 'banner-dark' : 'banner', $attrs.class]">
    <div class="content-wrapper">
      <h2 class="title">{{ title }}</h2>
      <p class="description">{{ description }}</p>
      <ButtonStore class="shop-button">Shop Now</ButtonStore>
    </div>
    <img :src="image" :alt="title" class="banner-image" />
  </article>
</template>

<script lang="ts">
interface Props {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  isDark?: boolean;
}

export default {
  name: "BannerPopular",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.banner, .banner-dark {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 280px;
  padding: 376px 32px 56px;
  position: relative;
  background-color: #fff;
}

.banner {
  background-color: #fff;
}

.banner-dark {
  background-color: #2C2C2C;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
}

.title {
  color: #000;
  font-size: 33px;
  font-style: italic;
  font-weight: 400;
  line-height: 48px;
}

.banner-dark .title {
  color: #fff;
}

.description {
  color: #909090;
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
}

.shop-button {
  padding: 16px 56px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: transparent;
  border: 1px solid #000;
  color: #000;
}

.banner-dark .shop-button {
  border: 1px solid #fff;
  color: #fff;
}

.banner-image {
  width: 360px;
  height: 360px;
  position: absolute;
  top: 22px;
  right: 0;
}

@media (max-width: 991px) {
  .banner {
    min-width: 50%;
  }
}

@media (max-width: 640px) {
  .banner {
    min-width: 100%;
    padding: 300px 24px 40px;
  }

  .title {
    font-size: 28px;
    line-height: 40px;
  }

  .description {
    font-size: 13px;
    line-height: 20px;
  }

  .shop-button {
    padding: 12px 40px;
    font-size: 14px;
  }

  .banner-image {
    width: 280px;
    height: 280px;
  }
}
</style>
