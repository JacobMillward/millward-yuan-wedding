import type { Metadata } from "next";
import "./globals.scss";
import { garamond, satisfy } from "./styles/fonts";

export const metadata: Metadata = {
  title: "Jianan & Jacob got married!",
  description:
    "We got married on November 16th, 2024 in Northallerton, UK. Thank you to everyone who attended and celebrated with us!",
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
