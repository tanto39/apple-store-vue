<template>
  <article
    :class="[
      'small-banner',
      `small-banner--${variant}`,
      `small-banner--${imagePosition}`,
    ]"
  >
    <img :src="imageSrc" :alt="title" class="small-banner__image" />
    <div class="small-banner__content">
      <h2
        :class="[
          'small-banner__title',
          { 'small-banner__title--italic': titleStyle === 'italic' },
        ]"
        v-html="title"
      ></h2>
      <p class="small-banner__description">{{ description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SmallBanner",
  props: {
    title: {
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
    variant: {
      type: String,
      default: "light",
      validator: (value: string) => ["light", "dark"].includes(value),
    },
    imagePosition: {
      type: String,
      default: "left",
      validator: (value: string) => ["left", "right"].includes(value),
    },
    titleStyle: {
      type: String,
      default: "regular",
      validator: (value: string) => ["regular", "italic"].includes(value),
    },
  },
});
</script>

<style scoped>
.small-banner {
  position: relative;
  display: flex;
  min-width: 240px;
  overflow: hidden;
}

.small-banner--light {
  background-color: #fff;
}

.small-banner--dark {
  background-color: #353535;
}

.small-banner__image {
  position: absolute;
  left: -30%;
}

.wide-banner .small-banner__image {
  left: -60px;
}

.small-banner__content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 0 auto 200px;
}

.wide-banner .small-banner__content{
  margin: auto 0;
}

.small-banner__title {
  line-height: 1;
  margin: 0;
}

.small-banner__title--italic {
  font-style: italic;
}

.small-banner--dark .small-banner__title {
  color: #fff;
}

.small-banner__description {
  color: #909090;
  font-size: 14px;
  line-height: 24px;
  margin: 16px 0 0;
}

@media (max-width: 991px) {
  .small-banner {
    padding: 20px;
  }
}
</style>
