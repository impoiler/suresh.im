import { externals, Links } from "@/constant/data";
export const dynamic = "force-static";
export function GET() {
  return new Response(`# Contact ${externals.fullName}\n\n- Email: ${externals.email}\n- GitHub: ${Links.github}\n- LinkedIn: ${Links.linkedin}\n- Calendar: ${Links.cal}\n`, { headers: { "Content-Type": "text/markdown; charset=utf-8", Vary: "Accept" } });
}
