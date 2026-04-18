import fs from "fs";
import path from "path";

export const dynamic = "force-static";

export function GET() {
  const llmsPath = path.join(process.cwd(), "public", "llms.txt");
  const body = fs.readFileSync(llmsPath, "utf8");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      Vary: "Accept",
    },
  });
}
