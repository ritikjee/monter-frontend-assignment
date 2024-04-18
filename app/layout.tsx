import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { DataProvider } from "@/providers/data-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Monter",
  description: "A modern and minimalist blog starter for Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DataProvider>
        <body className={inter.className}>{children}</body>
      </DataProvider>
    </html>
  );
}
