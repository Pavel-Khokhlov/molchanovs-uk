import { create } from 'zustand';

interface UIState {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  toggleMenu: () => void;
}

const setBodyScrollLock = (locked: boolean) => {
  if (typeof document === 'undefined') return; // SSR guard
  document.body.style.overflow = locked ? 'hidden' : '';
  // опционально: компенсировать ширину скроллбара, чтобы не было "прыжка"
  // document.body.style.paddingRight = locked
  //   ? `${window.innerWidth - document.documentElement.clientWidth}px`
  //   : "";
};

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  openMenu: () => {
    setBodyScrollLock(true);
    set({ isMenuOpen: true });
  },
  closeMenu: () => {
    setBodyScrollLock(false);
    set({ isMenuOpen: false });
  },
  toggleMenu: () =>
    set((s) => {
      const next = !s.isMenuOpen;
      setBodyScrollLock(next);
      return { isMenuOpen: next };
    }),
}));
