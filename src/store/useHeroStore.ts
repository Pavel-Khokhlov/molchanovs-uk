import { create } from 'zustand';

export interface HeroSlide {
  id: number;
  image: string;
  mobileImage: string;
  alt: string;
}

interface HeroState {
  slides: HeroSlide[];
  activeIndex: number;
  nextSlide: () => void;
}

export const useHeroStore = create<HeroState>((set, get) => ({
  slides: [
    {
      id: 1,
      image:
        '/images/hero/desktop1.webp',
      mobileImage:
        '/images/hero/mobile1.webp',
      alt: 'Freediver in deep blue',
    },
    {
      id: 2,
      image:
        '/images/hero/desktop2.webp',
      mobileImage:
        '/images/hero/mobile2.webp',
      alt: 'Underwater light',
    },
    {
      id: 3,
      image:
        '/images/hero/desktop3.webp',
      mobileImage:
        '/images/hero/mobile3.webp',
      alt: 'Ocean surface',
    },
    {
      id: 4,
      image:
        '/images/hero/desktop4.webp',
      mobileImage:
        '/images/hero/mobile4.webp',
      alt: 'Diver silhouette',
    },
    {
      id: 5,
      image:
        '/images/hero/desktop5.webp',
      mobileImage:
        '/images/hero/mobile5.webp',
      alt: 'Diver silhouette',
    },
    {
      id: 6,
      image:
        '/images/hero/desktop6.webp',
      mobileImage:
        '/images/hero/mobile6.webp',
      alt: 'Diver silhouette',
    },
    {
      id: 7,
      image:
        '/images/hero/desktop7.webp',
      mobileImage:
        '/images/hero/mobile7.webp',
      alt: 'Diver silhouette',
    },
    {
      id: 8,
      image:
        '/images/hero/desktop8.webp',
      mobileImage:
        '/images/hero/mobile8.webp',
      alt: 'Diver silhouette',
    },
    {
      id: 9,
      image:
        '/images/hero/desktop9.webp',
      mobileImage:
        '/images/hero/mobile9.webp',
      alt: 'Diver silhouette',
    },
  ],
  activeIndex: 0,
  nextSlide: () => {
    const { slides, activeIndex } = get();
    set({ activeIndex: (activeIndex + 1) % slides.length });
  },
}));
