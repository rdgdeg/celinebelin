import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "@/components/Button";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const citiesRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.5, delay: 0.2 })
      .to(titleRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.2")
      .to(introRef.current, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(citiesRef.current, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
      .to(imageRef.current, { opacity: 1, scale: 1, duration: 0.8 }, 0.5);

    return () => { tl.kill(); };
  }, []);

  const cities = ["Silly", "Mons", "Péruwelz", "Bernissart"];

  return (
    <section
      id="accueil"
      ref={sectionRef}
      className="min-h-screen max-h-[900px] bg-cream relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 85% 65% at 100% 0%, rgba(64, 145, 108, 0.14) 0%, #f6faf8 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(27, 67, 50, 0.06) 0%, transparent 55%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center pt-[72px]">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-center w-full py-16 lg:py-0">
          {/* Left: Text */}
          <div className="order-2 lg:order-1">
            <span
              ref={labelRef}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.1em] bg-forest/10 text-forest-dark mb-4 opacity-0 translate-y-5"
            >
              Psychologue agréée · Coach de vie
            </span>

            <h1
              ref={titleRef}
              className="font-display text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] text-warm-text mb-5 opacity-0 translate-y-8"
            >
              Votre bien-être,
              <br />
              <span className="text-forest">ma mission</span>
            </h1>

            <div ref={introRef} className="space-y-3 mb-8 max-w-[520px] opacity-0 translate-y-8">
              <p className="text-base text-warm-text-secondary leading-relaxed">
                Psychologue agréée à Silly, Mons, Péruwelz &amp; Bernissart. J'accompagne
                adolescents et adultes vers un mieux-être durable à travers une approche
                personnalisée et bienveillante.
              </p>
              <p className="text-sm text-warm-text-secondary flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="font-medium text-forest">Psychothérapie</span>
                <span className="text-warm-border" aria-hidden>
                  ·
                </span>
                <span className="font-medium text-forest">Hypnose &amp; EMDR</span>
                <span className="text-warm-border" aria-hidden>
                  ·
                </span>
                <span className="font-medium text-forest">Coaching</span>
                <span className="text-warm-border" aria-hidden>
                  ·
                </span>
                <span className="font-medium text-sage">Soins énergétiques animaux</span>
              </p>
            </div>
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-12 opacity-0 translate-y-5">
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

            <div ref={citiesRef} className="flex flex-wrap gap-3 opacity-0 translate-y-5">
              {cities.map((city) => (
                <span
                  key={city}
                  className="px-5 py-2 rounded-full border border-warm-border text-sm text-warm-text-secondary bg-white/60"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div
            ref={imageRef}
            className="order-1 lg:order-2 flex justify-center lg:justify-end opacity-0 scale-95"
          >
            <div className="relative">
              <img
                src="/images/hero.jpg"
                alt="Céline Belin - Psychologue"
                className="rounded-2xl w-full max-w-[420px] lg:max-w-[480px] object-cover shadow-[0_24px_56px_rgba(27,67,50,0.18)] ring-1 ring-forest/10"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
