import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "@/components/Button";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  const cities = ["Silly", "Mons", "Péruwelz", "Bernissart"];

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      if (prefersReduced) {
        gsap.set(
          [
            labelRef.current,
            titleRef.current,
            introRef.current,
            ctaRef.current,
            citiesRef.current,
            imageRef.current,
            frameRef.current,
          ],
          { opacity: 1, x: 0, y: 0, scale: 1 }
        );
        if (citiesRef.current?.children.length) {
          gsap.set(citiesRef.current.children, { opacity: 1, y: 0, scale: 1 });
        }
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        labelRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55 },
        0.15
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 36 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.35"
        )
        .fromTo(
          introRef.current,
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
          "-=0.35"
        );

      if (citiesRef.current?.children.length) {
        gsap.set(citiesRef.current, { opacity: 1 });
        tl.fromTo(
          citiesRef.current.children,
          { opacity: 0, y: 14, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, stagger: 0.07, duration: 0.42, ease: "back.out(1.2)" },
          "-=0.28"
        );
      }

      tl.fromTo(
        frameRef.current,
        { opacity: 0, scale: 0.92, rotate: -1 },
        { opacity: 1, scale: 1, rotate: 0, duration: 0.85, ease: "power2.out" },
        0.35
      ).fromTo(
        imageRef.current,
        { opacity: 0, scale: 1.04, y: 16 },
        { opacity: 1, scale: 1, y: 0, duration: 0.75, ease: "power2.out" },
        "-=0.65"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="relative min-h-screen max-h-[920px] overflow-hidden bg-gradient-to-br from-cream via-mint-soft to-mint/40"
    >
      {/* Fonds verts animés */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_100%_-10%,rgba(82,183,136,0.22),transparent_55%),radial-gradient(ellipse_70%_50%_at_0%_100%,rgba(45,106,79,0.12),transparent_50%),linear-gradient(180deg,rgba(232,245,233,0.9)_0%,rgba(246,250,248,0.3)_45%,transparent_100%)]" />
        <div className="absolute -right-20 top-24 h-80 w-80 rounded-full bg-gradient-to-bl from-fern/35 via-leaf/30 to-jade-light/25 blur-3xl animate-hero-blob motion-reduce:animate-none" />
        <div className="absolute -left-16 bottom-32 h-72 w-72 rounded-full bg-gradient-to-tr from-forest/20 via-sage/25 to-mint/50 blur-3xl animate-hero-blob-slow motion-reduce:animate-none" />
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-jade/10 blur-3xl animate-hero-fade motion-reduce:animate-none" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-center px-6 pt-[calc(72px+1.25rem)] lg:pt-[calc(72px+2rem)]">
        <div className="grid w-full grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:gap-8 lg:py-6 xl:gap-12">
          {/* Texte */}
          <div className="order-2 flex w-full flex-col lg:order-1 lg:col-span-6 lg:max-w-xl xl:max-w-[28rem]">
            <span
              ref={labelRef}
              className="mb-4 inline-block origin-left rounded-full border border-forest/15 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-forest-dark shadow-sm backdrop-blur-sm opacity-0"
            >
              Psychologue agréée · Coach de vie
            </span>

            <h1
              ref={titleRef}
              className="mb-5 font-display text-4xl font-bold leading-[1.08] text-pine opacity-0 md:text-5xl lg:text-[3.35rem]"
            >
              Votre bien-être,
              <br />
              <span className="bg-gradient-to-r from-forest via-jade to-fern bg-clip-text text-transparent">
                ma mission
              </span>
            </h1>

            <div
              ref={introRef}
              className="mb-8 max-w-[540px] space-y-3 opacity-0"
            >
              <p className="border-l-[3px] border-fern pl-4 text-base leading-relaxed text-warm-text-secondary">
                Psychologue agréée à Silly, Mons, Péruwelz &amp; Bernissart.
                J&apos;accompagne adolescents et adultes vers un mieux-être
                durable à travers une approche personnalisée et bienveillante.
              </p>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-warm-text-secondary">
                <span className="rounded-md bg-forest/10 px-2 py-0.5 font-medium text-forest">
                  Psychothérapie
                </span>
                <span className="text-jade" aria-hidden>
                  ·
                </span>
                <span className="rounded-md bg-jade/12 px-2 py-0.5 font-medium text-forest-dark">
                  Hypnose &amp; EMDR
                </span>
                <span className="text-jade" aria-hidden>
                  ·
                </span>
                <span className="rounded-md bg-sage/15 px-2 py-0.5 font-medium text-sage">
                  Coaching
                </span>
                <span className="text-jade" aria-hidden>
                  ·
                </span>
                <span className="rounded-md bg-mint/80 px-2 py-0.5 font-medium text-forest">
                  Soins animaux
                </span>
              </p>
            </div>

            <div
              ref={ctaRef}
              className="mb-10 flex flex-wrap gap-3 opacity-0 md:gap-4"
            >
              <Button
                href="https://www.doctena.be/fr/specialite/psychologue/celine-belin-1886103"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre rendez-vous
              </Button>
              <Button variant="secondary" href="#services">
                Découvrir mes services
              </Button>
            </div>

            <div ref={citiesRef} className="flex flex-wrap gap-2.5 opacity-0 md:gap-3">
              {cities.map((city) => (
                <span
                  key={city}
                  className="rounded-full border border-jade/25 bg-white/80 px-4 py-2 text-sm text-warm-text-secondary shadow-xs backdrop-blur-sm transition-transform duration-300 hover:-translate-y-0.5 hover:border-forest/30 hover:text-forest motion-reduce:transition-none"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-6 lg:justify-end">
            <div
              ref={frameRef}
              className="relative w-full max-w-[340px] opacity-0 sm:max-w-[380px] lg:max-w-[400px]"
            >
              <div
                className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-fern via-forest to-jade opacity-90 blur-[2px] motion-reduce:opacity-0"
                aria-hidden
              />
              <div className="relative rounded-2xl bg-gradient-to-br from-white via-mint-soft to-mint/60 p-[3px] shadow-[0_28px_60px_-12px_rgba(27,67,50,0.35)] ring-1 ring-forest/10">
                <div className="overflow-hidden rounded-[0.9rem] bg-pine/10">
                  <img
                    ref={imageRef}
                    src="/images/hero.jpg"
                    alt="Céline Belin - Psychologue"
                    className="w-full object-cover opacity-0 transition duration-500 ease-out hover:scale-[1.02] motion-reduce:hover:scale-100"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
