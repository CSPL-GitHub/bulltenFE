import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";
import Header from "@/components/CommonComponents/HeaderComponents/Header";
import Footer from "@/components/ServerSideComponents/FooterComponent/Footer";
import ReduxStoreProvider from "./ReduxStoreProvider";
import ReduxPersistStoreProvider from "./ReduxPersistStoreProvider";

const inter = Rubik({ subsets: ["latin"] });

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
        <ReduxStoreProvider>
          <ReduxPersistStoreProvider>
            <Header />
            {children}
            <Footer />
          </ReduxPersistStoreProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
