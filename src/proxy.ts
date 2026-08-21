import { NextRequest, NextResponse } from "next/server";

function prefersMarkdown(accept: string | null): boolean {
  if (!accept) return false;
  const parts = accept.split(",").map((s) => s.trim().toLowerCase());
  let mdQ = -1;
  let htmlQ = -1;
  for (const part of parts) {
    const [type, ...params] = part.split(";").map((p) => p.trim());
    const qParam = params.find((p) => p.startsWith("q="));
    const q = qParam ? parseFloat(qParam.slice(2)) : 1;
    if (type === "text/markdown") mdQ = Math.max(mdQ, q);
    else if (type === "text/html") htmlQ = Math.max(htmlQ, q);
  }
  return mdQ > 0 && mdQ >= htmlQ;
}

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const url = req.nextUrl.clone();

  const blogMdMatch = pathname.match(/^\/blog\/([^/]+)\.md$/);
  if (blogMdMatch) {
    url.pathname = `/md/blog/${blogMdMatch[1]}`;
    return NextResponse.rewrite(url);
  }

  if (!prefersMarkdown(req.headers.get("accept"))) {
    const res = NextResponse.next();
    res.headers.append("Vary", "Accept");
    return res;
  }

  url.pathname = `/md${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.rewrite(url);
  res.headers.append("Vary", "Accept");
  return res;
}

export const config = {
  matcher: ["/", "/about", "/projects", "/contact", "/privacy", "/blog/:path*"],
};
