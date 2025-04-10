<template>
  <div class="filter-container">
    <Loader v-if="isLoading" />
    <ErrorMessage v-if="error" :message="error" />
    <Filter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Filter from "../components/Filter.vue";
import { useCategory } from "@/hooks/useCategory";

export default defineComponent({
  name: "FilterMobile",
  components: { Filter },
  setup() {
    const { isLoading, error } = useCategory();

    return {
      isLoading,
      error,
    };
  },
});
</script>

<style scoped>
.filter-container {
  padding: 24px 0 56px 0;
  max-width: 500px;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .filter-container {
    padding: 24px 5px 56px 5px;
  }
}
</style>
