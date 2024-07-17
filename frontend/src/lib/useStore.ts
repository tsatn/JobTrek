import { create } from 'zustand'

export type Page = 'home' | 'bad' | 'jobList' | 'jobDetail' | 'login' | 'register' | 'profile';

interface UIState {
  page: Page
  goto: (page: Page) => void;
}

export const useStore = create<UIState>((set) => ({
  page: 'home',
  goto: (page) => set(state => ({ ...state, page })),
}));


