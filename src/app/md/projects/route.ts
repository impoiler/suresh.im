import { externals, projects } from "@/constant/data";
export const dynamic = "force-static";
export function GET() {
  const list = projects.map((p) => `## ${p.name}\n\n${p.summary}\n\n- Role: ${p.role}\n- Stack: ${p.stack.join(", ")}\n- Case study: ${externals.base_url}/projects/${p.slug}\n- Project: ${p.link}`);
  return new Response([`# Projects by ${externals.fullName}`, "", ...list, ""].join("\n"), { headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept, Accept-Encoding" } });
}
