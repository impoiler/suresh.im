import { externals } from "@/constant/data";

export const dynamic = "force-static";

export function GET() {
  const body = `# Privacy policy

Last updated: August 21, 2026.

This site does not require accounts or sell personal information. Vercel Analytics may process aggregated visit information, while hosting systems process routine request and diagnostic data for reliability, security, and abuse prevention.

If you email Suresh or book a call, the relevant email and calendar providers process the information you submit. It is used to respond, arrange a conversation, retain relevant correspondence, and meet legal or security obligations.

Third-party privacy practices apply when you follow an external link. To ask about, correct, or request deletion of information supplied in a direct enquiry, email ${externals.email}.

Canonical: ${externals.base_url}/privacy
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      Vary: "Accept, Accept-Encoding",
    },
  });
}
