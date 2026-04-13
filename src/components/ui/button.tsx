"use client";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils/format";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "danger" | "ghost";
  }
>;

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-[var(--color-brand)] text-white shadow-sm hover:bg-[var(--color-brand-strong)]",
        variant === "secondary" &&
          "border border-[var(--color-border)] bg-white text-[var(--color-foreground)] hover:bg-[var(--color-surface-muted)]",
        variant === "danger" &&
          "bg-[var(--color-danger)] text-white hover:opacity-90",
        variant === "ghost" &&
          "text-[var(--color-muted)] hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-foreground)]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
