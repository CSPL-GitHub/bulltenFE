import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderSection from "@/components/CommonComponents/HeaderComponents/HeaderSection";
import FooterSection from "@/components/CommonComponents/FooterComponets/FooterSection";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BullTen",
  description: "BullTen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderSection />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
