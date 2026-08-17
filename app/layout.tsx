import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingActions from "./components/FloatingActions";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aditya Ramariya | Senior Frontend Developer",
  description:
    "Senior Frontend Developer with 8+ years of experience building fast, scalable and beautiful web experiences using React, Next.js and TypeScript.",
  keywords: [
    "Aditya Ramariya",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FloatingActions />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
