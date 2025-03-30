import { createStore } from 'vuex'
import categoryModule from '@/store/modules/CategoryModule';
import { RootState } from '@/types/RootState';

export default createStore({
  state: {} as RootState,
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category: categoryModule
  }
})
