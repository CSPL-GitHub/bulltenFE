import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bullten | Managed-VPS",
    description: "Bullten | Managed-VPS",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div>{ children } </div>;
}
