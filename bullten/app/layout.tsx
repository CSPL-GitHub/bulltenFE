import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/CommonComponents/HeaderComponents/Header";
import Footer from "@/components/ServerSideComponents/FooterComponent/Footer";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
