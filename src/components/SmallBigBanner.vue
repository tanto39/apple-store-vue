<template>
  <article class="smallbig-banner">
    <div class="smallbig-banner__content">
      <div class="smallbig-banner__text">
        <h2 class="smallbig-banner__title">
          {{ title }} <span class="smallbig-banner__title-italic">{{ titleItalic }}</span>
        </h2>
        <p class="smallbig-banner__description">
          {{ description }}
        </p>
      </div>
      <ButtonStore class="smallbig-banner__button">Shop Now</ButtonStore>
    </div>
    <div class="smallbig-banner__image-container">
      <img :src="imageSrc" alt="" class="smallbig-banner__image" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "smallbigBanner",
  props: {
    title: {
      type: String,
      required: true,
    },
    titleItalic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.smallbig-banner {
  background-color: #ededed;
  position: relative;
  display: flex;
  min-width: 240px;
  min-height: 600px;
  align-items: flex-start;
  overflow: hidden;
  flex: 1;
}

.smallbig-banner__content {
  z-index: 1;
  display: flex;
  min-width: 240px;
  margin: auto 0;
  flex-direction: column;
  max-width: 360px;
}

.smallbig-banner__title {
  color: #000;
  font-size: 64px;
  font-family: Abel, sans-serif;
  line-height: 1;
  margin: 0;
}

.smallbig-banner__title-italic {
  font-style: italic;
}

.smallbig-banner__description {
  color: #909090;
  font-size: 14px;
  line-height: 24px;
  margin: 16px 0 0;
}

.smallbig-banner__button {
  align-self: flex-start;
  border-radius: 6px;
  border: 1px solid #000;
  margin-top: 16px;
  padding: 16px 56px;
  font-style: italic;
  font-size: 16px;
  color: #000;
  background: transparent;
  cursor: pointer;
}

.smallbig-banner__image-container {
  position: absolute;
  z-index: 0;
  display: flex;
  min-width: 240px;
  padding: 0 58px 34px;
  flex-direction: column;
  left: 50%;
  bottom: 49px;
  transform: translate(-50%, 0);
  width: 292px;
  height: 502px;
}

.smallbig-banner__image {
  aspect-ratio: 1.46;
  object-fit: contain;
  object-position: center;
  width: 100%;
  margin-right: -464px;
}

@media (max-width: 991px) {
  .smallbig-banner {
    padding: 100px 20px;
  }

  .smallbig-banner__title {
    font-size: 40px;
  }

  .smallbig-banner__button {
    padding: 16px 20px;
  }

  .smallbig-banner__image {
    max-width: 100%;
  }
}
</style>
