import Link from "next/link";

import { Card } from "@/components/ui/card";

export function StatCard({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: string;
  hint: string;
  href?: string;
}) {
  return (
    <Card className="space-y-3">
      <div className="text-sm font-medium text-[var(--color-muted)]">{label}</div>
      <div className="text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
        {value}
      </div>
      <div className="flex items-center justify-between gap-3 text-sm text-[var(--color-muted)]">
        <span>{hint}</span>
        {href ? (
          <Link className="font-semibold text-sky-700" href={href}>
            Open
          </Link>
        ) : null}
      </div>
    </Card>
  );
}
