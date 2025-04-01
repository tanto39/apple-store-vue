// store/favorites/module.ts
import { Module } from 'vuex';
import { RootState } from "@/types/RootState";

export interface FavoritesState {
  items: number[];
}

const module: Module<FavoritesState, RootState> = {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    ADD_FAVORITE(state, productId: number) {
      if (!state.items.includes(productId)) {
        state.items.push(productId);
      }
    },
    REMOVE_FAVORITE(state, productId: number) {
      state.items = state.items.filter(id => id !== productId);
    }
  },
  getters: {
    isFavorite: (state) => (productId: number) => 
      state.items.includes(productId)
  }
};

export default module;