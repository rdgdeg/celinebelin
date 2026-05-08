import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.6,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
    const y = direction === "up" ? distance : direction === "down" ? -distance : 0;

    gsap.set(el, { opacity: 0, x, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: "power2.out",
        });
      },
      once: true,
    });

    return () => {
      trigger.kill();
    };
  }, [delay, direction, distance, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
