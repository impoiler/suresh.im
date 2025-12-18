import BlogRow from "@/components/custom/blog-row";
import { externals } from "@/constant/data";
import { parseDate } from "@/lib/utils";
import { getAllBlogs } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blog - ${externals.fullName}'s Thoughts on Tech & Development`,
  description: `Read ${externals.fullName}'s blog posts on web development, React, Next.js, AI, LLMs, and software engineering. Insights from a Full-Stack Engineer at Maxim AI.`,
  keywords: [
    ...externals.keywords,
    "Suresh Chaudhary blog",
    "tech blog",
    "web development blog",
    "React tutorials",
    "Next.js tips",
    "AI development blog",
  ],
  alternates: {
    canonical: `${externals.base_url}/blog`,
  },
  openGraph: {
    title: `Blog - ${externals.fullName}`,
    description: `Tech insights and thoughts from ${externals.fullName}, Full-Stack Engineer at Maxim AI.`,
    url: `${externals.base_url}/blog`,
    images: ["/og.png"],
  },
};

export default function BlogPage() {
  const posts = getAllBlogs()
    .filter((blog) => blog.published)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <div className="mt-10 animate-reveal blog-articles">
      <p className="font-newsreader font-medium italic text-lg">thoughts</p>
      <div className="mt-2">
        <ul className="flex flex-col gap-3">
          {posts.map((blog) => (
            <BlogRow key={blog.slug} {...blog} />
          ))}
        </ul>
      </div>
    </div>
  );
}
