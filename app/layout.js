import Navbar from "@/components/Navbar";
import "./globals.css";
import { Unbounded, Montserrat } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const unbounded = Unbounded({
  subsets: ["latin"],
  weight: ["600", "800", "900"],
});

export const metadata = {
  title: "Kiranaide",
  description: "Portfolio Website for Kiranaide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} relative bg-almost-white mx-auto`}>
        {/* <Navbar /> */}
        {children}
      </body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
