import { CategoryState } from '@/store/modules/CategoryModule';

export interface RootState {
  category: CategoryState;
}

// Расширяем типы Vuex
declare module 'vuex' {
  export function useStore<S = RootState>(): import('vuex').Store<S>;
}