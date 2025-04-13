import { computed } from "vue";
import { useStore } from "vuex";

export const usePagination = () => {
  const store = useStore();
  const filteredProducts = computed(() => store.getters["category/filteredProducts"]);
  const currentPage = computed(() => store.state.category.currentPage);
  const itemsPerPage = computed(() => store.state.category.itemsPerPage);
  const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage.value));

  console.log(filteredProducts.value);

  const pages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const pagesArr: Array<number | string> = [];

    if (total <= 4) {
      // Если страниц 4 и меньше – отображаем все номера
      for (let i = 1; i <= total; i++) {
        pagesArr.push(i);
      }
    } else {
      if (current <= 2) {
        // Текущая страница в начале
        for (let i = 1; i <= 3; i++) {
          pagesArr.push(i);
        }
        pagesArr.push("....");
        pagesArr.push(total);
      } else if (current >= total - 2) {
        // Текущая страница в конце
        pagesArr.push(1);
        pagesArr.push("....");
        for (let i = total - 2; i <= total; i++) {
          pagesArr.push(i);
        }
      } else {
        // Текущая страница посередине
        pagesArr.push(1);
        if (current > 3) {
          pagesArr.push("....");
        }
        pagesArr.push(current - 1);
        pagesArr.push(current);
        pagesArr.push(current + 1);
        pagesArr.push("....");
        pagesArr.push(total);
      }
    }
    return pagesArr;
  });

  const setPage = (page: number) => store.commit("category/SET_PAGE", page);

  return {
    pages,
    currentPage,
    itemsPerPage,
    setPage,
  };
};
