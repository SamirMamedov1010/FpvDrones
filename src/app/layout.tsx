import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./providers";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FPV Diller",
  description: "Твій постачальник fpv дронів!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <NavMenu />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
