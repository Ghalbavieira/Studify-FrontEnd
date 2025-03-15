import type { Metadata } from "next";
import { Montserrat , Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const OpenSans = Open_Sans({
  variable: "--font-open_sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studify",
  description: "Estude de forma inteligente e eficiente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${OpenSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
