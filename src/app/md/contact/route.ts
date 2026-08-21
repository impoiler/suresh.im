import { externals, Links } from "@/constant/data";
export const dynamic = "force-static";
export function GET() {
  return new Response(`# Contact ${externals.fullName}\n\nContact Suresh about full-stack product engineering, React and Next.js architecture, developer tooling, LLM evaluation and observability, AI gateways, or a technical collaboration. A useful introduction includes the problem, current project stage, proposed kind of collaboration, and relevant timing. Do not include credentials or sensitive production data.\n\n- Email: ${externals.email}\n- GitHub: ${Links.github}\n- LinkedIn: ${Links.linkedin}\n- Calendar: ${Links.cal}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept, Accept-Encoding" } });
}
