import { Module } from 'vuex';
import { RootState } from '@/types/RootState';
import { Product } from '@/types/Product';
import { fetchCategoryProducts } from '@/services/categoryService';

export interface CategoryState {
  products: Product[];
  filters: {
    priceRange?: [number, number];
    characteristics: Record<string, string[]>;
  };
  sortBy: 'rating' | 'price' | 'createdAt';
  currentPage: number;
  itemsPerPage: number;
}

const module: Module<CategoryState, RootState> = {
  namespaced: true,
  state: () => ({
    products: [],
    filters: {
      characteristics: {}
    },
    sortBy: 'rating',
    currentPage: 1,
    itemsPerPage: 12
  }),
  mutations: {
    SET_PRODUCTS(state, products: Product[]) {
      state.products = products;
    },
    SET_FILTERS(state, filters) {
      state.filters = filters;
    },
    SET_SORT(state, sortBy) {
      state.sortBy = sortBy;
    },
    SET_PAGE(state, page) {
      state.currentPage = page;
    }
  },
  actions: {
    async loadProducts({ commit }, categoryId: number) {
      const products = await fetchCategoryProducts(categoryId);
      commit('SET_PRODUCTS', products);
    }
  },
  getters: {
    filteredProducts: (state) => {
      return state.products.filter(product => {
        const price = product.discount_price || product.price;
        const [min, max] = state.filters.priceRange || [0, Infinity];
        if (price < min || price > max) return false;
        
        return Object.entries(state.filters.characteristics).every(([key, values]) => {
          const char = product.characteristics?.find(c => c.characteristic === key);
          return char && values.includes(char.value);
        });
      });
    },
    sortedProducts: (state, getters) => {
      return [...getters.filteredProducts].sort((a, b) => {
        if (state.sortBy === 'price') {
          return a.price - b.price;
        }
        if (state.sortBy === 'createdAt') {
          return new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime();
        }
        return b.rating - a.rating;
      });
    },
    paginatedProducts: (state, getters) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return getters.sortedProducts.slice(start, end);
    },
    characteristicsOptions: (state) => {
      const characteristics: Record<string, Set<string>> = {};
      
      state.products.forEach(product => {
        product.characteristics?.forEach(char => {
          if (!characteristics[char.characteristic]) {
            characteristics[char.characteristic] = new Set();
          }
          characteristics[char.characteristic].add(char.value);
        });
      });
      
      return Object.entries(characteristics).map(([name, values]) => ({
        name,
        values: Array.from(values)
      }));
    }
  }
};

export default module;