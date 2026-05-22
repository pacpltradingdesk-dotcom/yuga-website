// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YUGA — Bio-Bitumen Consulting & IT Products",
  description:
    "YUGA (PPS Anantams Corporation Private Limited). India's leading bio-bitumen plant consulting firm and industrial IT solutions provider. 25 years experience, 10 plants built.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white overflow-x-hidden`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
