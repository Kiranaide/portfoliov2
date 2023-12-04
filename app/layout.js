import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Kiranaide",
  description: "Portfolio Website for Kiranaide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-almost-white mx-auto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
