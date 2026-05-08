import React from "react";

type ButtonVariant = "primary" | "secondary" | "sage";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(45,106,79,0.28)] active:bg-forest-dark active:translate-y-0",
  secondary:
    "bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-white active:bg-forest-dark",
  sage: "bg-transparent border-2 border-sage text-sage hover:bg-sage hover:text-white active:bg-sage-light",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
