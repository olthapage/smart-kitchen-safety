"use client";

import { PageHeader } from "@/components/dashboard/page-header";
import { StatCard } from "@/components/dashboard/stat-card";

export default function DashboardOverviewPage() {

  return (
    <div className="space-y-6">
      <PageHeader
        description="Ringkasan perangkat, alert aktif, pembacaan sensor terbaru, dan chart monitoring."
        title="Dashboard Overview"
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <StatCard
          hint="Total perangkat terdaftar"
          href="/dashboard/devices"
          label="Devices Total"
          value="0"
        />
        <StatCard
          hint="Perangkat aktif dan terhubung"
          href="/dashboard/devices"
          label="Devices Online"
          value="0"
        />
        <StatCard
          hint="Perangkat tidak aktif atau timeout"
          href="/dashboard/devices"
          label="Devices Offline"
          value="0"
        />
        <StatCard
          hint="Alert yang masih membutuhkan tindak lanjut"
          href="/dashboard/alerts"
          label="Active Alerts"
          value="0"
        />
        <StatCard
          hint="Alert level kritis"
          href="/dashboard/alerts"
          label="Critical Alerts"
          value="0"
        />
      </section>
    </div>
  );
}
