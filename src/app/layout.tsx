import type { Metadata } from "next";
import { Satisfy, Josefin_Slab } from "next/font/google";
import "./globals.scss";

const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
});

const josefin = Josefin_Slab({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "Jacob & Jianan are getting married!",
  description:
    "Join us for our wedding on November 16th, 2024 in Northallerton, UK.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${josefin.className} ${satisfy.variable}`}>
      <body>{children}</body>
    </html>
  );
}
