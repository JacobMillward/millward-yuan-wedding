import type { Metadata } from "next";
import { Satisfy, EB_Garamond } from "next/font/google";
import "./globals.scss";

export const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-satisfy",
});

const garamond = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-garamond",
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
    <html lang="en" className={`${garamond.className} ${satisfy.variable}`}>
      <body>{children}</body>
    </html>
  );
}
