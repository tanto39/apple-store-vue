<template>
  <section class="smaller-banners">
    <div class="left-banners">
      <SmallBanner
        title="Playstation 5"
        description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
        :imageSrc="'/images/PlayStation.png'"
        variant="light"
        class="wide-banner"
      />
      <div class="squares">
        <SmallBanner
          title="Apple <br>AirPods Max"
          description="Computational audio. Listen, it's powerful"
          :imageSrc="'/images/airpodsmax.png'"
          variant="light"
          class="square-banner"
        />
        <SmallBanner
          title="Apple <br>Vision<span style='color: #fff'>Pro</span>"
          description="An immersive way to experience entertainment"
          :imageSrc="'/images/applevisionpro.png'"
          variant="dark"
          titleStyle="italic"
          class="square-banner"
        />
      </div>
    </div>
    <SmallBigBanner
      title="Macbook"
      titleItalic="Air"
      description="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
      :imageSrc="'/images/MacBookPro14.png'"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmallBanner from "./SmallBanner.vue";
import SmallBigBanner from "./SmallBigBanner.vue";

export default defineComponent({
  name: "SmallerBanners",
  components: {
    SmallBanner,
    SmallBigBanner,
  },
});
</script>

<style scoped>
.smaller-banners {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
}

.left-banners {
  display: flex;
  min-width: 240px;
  flex-direction: column;
  align-items: stretch;
  font-weight: 400;
  justify-content: center;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 320px;
}

.wide-banner {
  min-height: 328px;
  padding-left: 334px;
  padding-right: 48px;
}

.squares {
  display: flex;
  height: 272px;
}

.square-banner {
  flex: 1;
}

@media (max-width: 991px) {
  .left-banners {
    max-width: 100%;
  }

  .wide-banner {
    padding: 20px;
  }

  .squares {
    max-width: 100%;
  }

  .square-banner {
    padding: 20px;
  }
}
</style>
