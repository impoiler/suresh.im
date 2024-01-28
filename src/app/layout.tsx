import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import { externals } from "@/constant/data";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./blog.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `${externals.name} . home`,
  description: externals.meta_description,
  metadataBase: new URL(externals.base_url),
  openGraph: {
    title: `${externals.name} . home`,
    description: externals.meta_description,
    url: `${externals.base_url}`,
    images: ["/og.png"],
  },
  twitter: {
    title: `${externals.name} . home`,
    description: externals.meta_description,
  },
  alternates: {
    canonical: externals.base_url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, " max-w-2xl px-2 mx-auto")}>
        <Navbar />
        {children}
        <Analytics mode="production" />
        <Footer />
      </body>
    </html>
  );
}
