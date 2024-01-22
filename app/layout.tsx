import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/ui/footer";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Dzakwan Irfan Ramdhani",
  description: "Dzakwan Irfan Ramdhani's Portfolio Website",
};

export default function RootLayout({ children}: { children: React.ReactNode; }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
