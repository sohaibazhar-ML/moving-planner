import type { Metadata } from "next";
import { Suspense } from "react";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moving Planner - Settlement Documents Guide",
  description: "Help migrants settle in a new area with essential documents and guidance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50">
        <Suspense fallback={<div className="h-16 bg-white border-b border-gray-200" />}>
          <Navbar />
        </Suspense>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

