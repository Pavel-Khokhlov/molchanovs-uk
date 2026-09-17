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
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80',
      mobileImage:
        'https://i.pinimg.com/originals/9a/61/7d/9a617daac03aaee102ff5fe1d4d76604.jpg?nii=t',
      alt: 'Freediver in deep blue',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1682686581551-867e0b208bd1?w=1920&q=80',
      mobileImage:
        'https://i.pinimg.com/736x/66/08/ff/6608ff3e358775915597f24ddaa9c905.jpg',
      alt: 'Underwater light',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80',
      mobileImage:
        'https://i.pinimg.com/originals/0b/e4/f4/0be4f4b93b0dceea8aac00ceff0c2079.jpg',
      alt: 'Ocean surface',
    },
    {
      id: 4,
      image:
        'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=1920&q=80',
      mobileImage:
        'https://i.pinimg.com/originals/33/df/59/33df59da3df7f6571e7d95334c91a443.jpg',
      alt: 'Diver silhouette',
    },
  ],
  activeIndex: 0,
  nextSlide: () => {
    const { slides, activeIndex } = get();
    set({ activeIndex: (activeIndex + 1) % slides.length });
  },
}));
