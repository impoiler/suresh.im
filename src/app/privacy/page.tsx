import { externals } from "@/constant/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: `How ${externals.fullName}'s personal website handles visitor data.`,
  alternates: { canonical: `${externals.base_url}/privacy` },
  openGraph: { type: "website", url: `${externals.base_url}/privacy`, images: ["/og.png"] },
};

export default function PrivacyPage() {
  return (
    <main className="mt-10 pb-20 text-sm leading-relaxed text-secondary">
      <h1 className="font-newsreader text-xl italic text-foreground">privacy policy</h1>
      <p className="mt-6">Last updated: August 21, 2026.</p>
      <h2 className="mt-8 font-medium text-foreground">What this site collects</h2>
      <p className="mt-3">This personal website does not ask visitors to create accounts and does not sell personal information. Basic, aggregated visit information may be processed by Vercel Analytics so I can understand page traffic and improve the site. Hosting providers also process routine request data, such as IP addresses, browser details, requested URLs, timestamps, and diagnostic logs, for security, reliability, and abuse prevention.</p>
      <h2 className="mt-8 font-medium text-foreground">When you contact me</h2>
      <p className="mt-3">If you email me or book a call, I receive the information you choose to provide. Email and calendar providers process that information under their own terms. I use it only to respond, arrange a conversation, maintain relevant correspondence, and meet legal or security obligations. Please do not send sensitive personal information that is not necessary for your enquiry.</p>
      <h2 className="mt-8 font-medium text-foreground">Links, retention, and choices</h2>
      <p className="mt-3">This site links to third-party projects and social profiles; their privacy practices apply after you leave this domain. I retain correspondence only as long as it remains useful or legally necessary. You may ask what information I hold from a direct enquiry, request correction or deletion where applicable, or ask a privacy question by emailing {externals.email}. I may update this notice when the site or its services change, and the date above will identify the latest version.</p>
    </main>
  );
}
