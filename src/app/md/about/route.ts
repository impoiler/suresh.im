import { experiences, externals } from "@/constant/data";
export const dynamic = "force-static";
export function GET() {
  const history = experiences.flatMap((e) => e.positions.map((p) => `- **${p.name}, ${e.companyName}** — ${p.fromToTill} (${e.location})`));
  const body = [`# About ${externals.fullName}`, "", externals.meta_description, "", "## Experience", "", ...history, "", `Canonical: ${externals.base_url}/about`, ""].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept, Accept-Encoding" } });
}
