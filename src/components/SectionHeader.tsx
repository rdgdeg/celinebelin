import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  light?: boolean;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  light = false,
  align = "center",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "text-center" : "text-left",
        "mb-12",
        className
      )}
    >
      <span
        className={`inline-block px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-[0.1em] mb-4 ${
          light
            ? "bg-white/15 text-white/80"
            : "bg-forest/10 text-forest-dark"
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-display text-3xl md:text-[42px] font-semibold leading-tight mb-4 ${
          light ? "text-white" : "text-warm-text"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-[60px] h-[3px] rounded-full ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "bg-white/30" : "bg-forest"} mb-4`}
      />
      {subtitle && (
        <p
          className={`text-base max-w-[600px] ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-warm-text-secondary"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
