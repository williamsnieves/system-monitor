import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./(presentation)/styles/globals.css";
import ThemeToggle from "./(presentation)/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "System monitor",
  description: "Next js app to check simulated sistem monitor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="p-4 flex justify-end">
          <ThemeToggle />
        </header>
        {children}
      </body>
    </html>
  );
}
