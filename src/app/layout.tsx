import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer/page";

export const metadata: Metadata = {
  title: "Google Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}
