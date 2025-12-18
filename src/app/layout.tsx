import Navbar from "@/components/custom/navbar";
import { externals } from "@/constant/data";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${externals.fullName} - Full-Stack Engineer | React, Next.js, AI Developer`,
    template: `%s | ${externals.fullName}`,
  },
  description: externals.meta_description,
  keywords: externals.keywords,
  authors: [{ name: externals.fullName, url: externals.base_url }],
  creator: externals.fullName,
  publisher: externals.fullName,
  metadataBase: new URL(externals.base_url),
  alternates: {
    canonical: externals.base_url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: externals.base_url,
    siteName: externals.fullName,
    title: `${externals.fullName} - Full-Stack Engineer from India`,
    description: externals.meta_description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${externals.fullName} - Full-Stack Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${externals.fullName} - Full-Stack Engineer`,
    description: externals.meta_description,
    creator: "@impoiler",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  other: {
    "msvalidate.01": "", // Add Bing verification when available
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${externals.base_url}/#person`,
      name: externals.fullName,
      alternateName: ["Suresh", "impoiler"],
      description:
        "Full-Stack Engineer from India, currently building AI testing tools at Maxim AI. Specializing in React, Next.js, and LLM applications.",
      url: externals.base_url,
      image: `${externals.base_url}/og.png`,
      jobTitle: externals.jobTitle,
      worksFor: {
        "@type": "Organization",
        name: externals.compony.name,
        url: externals.compony.site,
      },
      nationality: {
        "@type": "Country",
        name: "India",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "AI",
        "LLM",
        "Full-Stack Development",
        "Frontend Development",
        "Web Development",
      ],
      sameAs: [
        externals.social.github,
        externals.social.linkedin,
        externals.social.twitter,
        externals.social.peerlist,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${externals.base_url}/#website`,
      url: externals.base_url,
      name: `${externals.fullName} - Personal Website`,
      description: externals.meta_description,
      publisher: {
        "@id": `${externals.base_url}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${externals.base_url}/#profilepage`,
      url: externals.base_url,
      name: externals.fullName,
      isPartOf: {
        "@id": `${externals.base_url}/#website`,
      },
      about: {
        "@id": `${externals.base_url}/#person`,
      },
      mainEntity: {
        "@id": `${externals.base_url}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = document.cookie.split(';').map(c => c.trim()).find(c => c.startsWith('theme='));
                  if (theme) document.documentElement.setAttribute('data-theme', theme.split('=')[1]);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={externals.base_url} />
        <meta name="author" content={externals.fullName} />
        <meta
          name="google-site-verification"
          content=""
        />
      </head>
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
