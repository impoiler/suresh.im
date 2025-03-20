import Navbar from "@/components/custom/navbar";
import { externals } from "@/constant/data";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = (await cookies()).get("theme")?.value;

  return (
    <html lang="en" data-theme={theme ?? "light"}>
      <body className={`${newsreader.variable} antialiased py-8 px-4`}>
        <div
          className={`max-w-2xl mx-auto ${GeistSans.variable} ${GeistMono.variable} font-[family-name:var(--font-geist-sans)]`}
        >
          <Navbar />
          {children}
          <Analytics mode="production" />
        </div>
      </body>
    </html>
  );
}
