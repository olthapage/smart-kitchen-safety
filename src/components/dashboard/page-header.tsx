import type { PropsWithChildren } from "react";

export function PageHeader({
  title,
  description,
  children,
}: PropsWithChildren<{ title: string; description: string }>) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
          {title}
        </h1>
        <p className="text-sm text-[var(--color-muted)]">{description}</p>
      </div>
      {children ? <div className="flex items-center gap-3">{children}</div> : null}
    </div>
  );
}
