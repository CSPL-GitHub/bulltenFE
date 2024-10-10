import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bullten | Managed Servers",
  description: "Bullten | Managed Servers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
