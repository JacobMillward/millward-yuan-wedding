import type { Metadata } from "next";
import "../globals.scss";
import { garamond, satisfy } from "../styles/fonts";

export const metadata: Metadata = {
  title: "Jianan & Jacob are getting married!",
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
