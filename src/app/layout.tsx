import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Kitchen Safety Dashboard",
  description: "IoT-based gas leak and fire monitoring dashboard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
