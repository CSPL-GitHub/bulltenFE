import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "bullten | managed-vps",
  description: "bullten | managed-vps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
