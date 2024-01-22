import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import "./globals-responsive.css";
import Footer from "@/app/ui/footer";
import Navbar from "@/app/ui/navbar";

export const metadata: Metadata = {
  title: "Dzakwan Irfan Ramdhani",
  description: "Dzakwan Irfan Ramdhani's Portfolio Website",
};

export default function RootLayout({ children, i }: { children: React.ReactNode; i: string; }) {
  return (
    <html lang="en">
      <body>
        <Navbar i={i} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
