import { getAllBlogs, getBlogBySlug } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllBlogs().filter((post) => post.published).map((post) => ({ slug: post.slug }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post || post.published === false) {
    return new Response("Not found", { status: 404 });
  }

  const body = [
    `# ${post.title}`,
    "",
    `_${formatDate(post.date)}_`,
    "",
    post.description,
    "",
    "---",
    "",
    post.content.trim(),
    "",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      Vary: "Accept, Accept-Encoding",
    },
  });
}
