<template>
  <nav class="pagination" aria-label="Pagination">
    <button @click="prevPage" class="nav-button">
      <img src="/images/pag-left.svg" class="nav-icon" alt="" />
    </button>

    <div class="page-numbers">
      <PaginationButton v-for="page in pages" :key="page" :isActive="currentPage === page" @click="setPage(page)">
        {{ page }}
      </PaginationButton>
    </div>

    <button @click="nextPage" class="nav-button">
      <img src="/images/pag-right.svg" class="nav-icon" alt="" />
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import PaginationButton from "./PaginationButton.vue";

export default defineComponent({
  name: "Pagination",
  components: { PaginationButton },
  props: {
    currentPage: { type: Number, required: true },
    totalItems: { type: Number, required: true },
    itemsPerPage: { type: Number, required: true },
  },
  emits: ["page-change"],
  setup(props, { emit }) {
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

    const pages = computed(() => {
      const range: Array<number> = [];
      for (let i = 1; i <= totalPages.value; i++) {
        range.push(i);
      }
      return range;
    });

    const setPage = (page: number) => {
      if (page >= 1 && page <= totalPages.value) {
        emit("page-change", page);
      }
    };

    const prevPage = () => setPage(props.currentPage - 1);
    const nextPage = () => setPage(props.currentPage + 1);

    return { pages, setPage, prevPage, nextPage };
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  padding: 40px 0 0 0;
  align-items: center;
  gap: 16px;
  font-style: italic;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.48px;
  justify-content: center;
}

.page-numbers {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: flex-end;
  gap: 8px;
  justify-content: flex-start;
}

.ellipsis {
  display: flex;
  min-height: 6px;
  padding-bottom: 3px;
  gap: 4px;
  align-items: flex-end;
  font-style: italic;
}
.nav-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto;
  flex-shrink: 0;
}

.nav-button:last-child .nav-icon {
  width: 23px;
  aspect-ratio: 0.96;
}
</style>
