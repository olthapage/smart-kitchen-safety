import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "@/lib/utils/format";

export function Card({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--color-border)] bg-white/95 p-5 shadow-[0_18px_45px_-30px_rgba(15,23,42,0.35)] backdrop-blur",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
