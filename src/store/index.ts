import { createStore } from 'vuex'
import categoryModule from '@/store/modules/CategoryModule';
import cartModule from '@/store/modules/CartModule';
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
    category: categoryModule,
    cart: cartModule
  }
})
