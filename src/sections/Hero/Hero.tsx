import { useEffect } from "react";
import { useHeroStore } from "../../store/useHeroStore";
import { Button } from "../../elements/Button/Button";

import "./Hero.scss";

export const Hero = () => {
  const { slides, activeIndex, nextSlide } = useHeroStore();

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="hero" id="hero">
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`hero__slide ${
              i === activeIndex ? "hero__slide--active" : ""
            }`}
            aria-label={slide.alt}
          >
            <picture>
              <source media="(max-width: 768px)" srcSet={slide.mobileImage} />
              <img
                src={slide.image}
                alt={slide.alt}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                decoding="async"
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="hero__overlay" />

      <div className="hero__content">
        <span className="hero__eyebrow">Freediving</span>
        <h1 className="hero__title">
          LONDON Goodby
          <br />
          Breathe deeper
        </h1>
        <p className="hero__subtitle">
          Training sessions in the pool and trips to open water. Individual approach, safety and comfort on every dive.
        </p>
        <div className="hero__actions">
          <Button href="#contact">Contact with me</Button>
          <Button variant="ghost">
            Learn more...
          </Button>
        </div>
      </div>

      <div className="hero__dots">
        {slides.map((s, i) => (
          <span
            key={s.id}
            className={`hero__dot ${i === activeIndex ? "hero__dot--active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};
