import BlogRow from "@/components/custom/blog-row";
import { externals } from "@/constant/data";
import { parseDate } from "@/lib/utils";
import { getAllBlogs } from "@/lib/mdx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.name} . blog`,
  description: "Less, but I share my thoughts here.",
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
