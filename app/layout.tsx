import React from 'react';
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/app/ui/footer";
import Navbar from "@/app/ui/navbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin']
}) 

export const metadata: Metadata = {
  title: "Dzakwan Irfan Ramdhani",
  description: "Dzakwan Irfan Ramdhani's Portfolio Website",
};

export default function RootLayout({ children}: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
