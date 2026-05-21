// app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PACPL — Bio-Bitumen Consulting & IT Products",
  description:
    "PPS Anantams Corporation Private Limited. India's leading bio-bitumen plant consulting firm and industrial IT solutions provider. 25 years experience, 10 plants built.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans flex flex-col min-h-screen bg-white`}>
        {/* Navbar */}
        <main className="flex-1 pt-[72px]">{children}</main>
        {/* Footer */}
      </body>
    </html>
  );
}
