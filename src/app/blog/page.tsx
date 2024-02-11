import BlogRow from "@/components/custom/blog-row";
import { externals } from "@/constant/data";
import { parseDate } from "@/lib/utils";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.name} . blog`,
  description: "Less, but I share my thoughts here.",
};

export default function Blog() {
  return (
    <main className="mt-8 min-h-[calc(100vh_-_132px)]">
      <h2 className="text-xl md:text-2xl font-medium">blog,</h2>
      <span className="mt-4 h-0 block" />
      {allBlogs
        .sort((a, b) => parseDate(b.date) - parseDate(a.date))
        .map((blog) => (
          <BlogRow
            date={blog.date}
            slug={blog.url}
            title={blog.title}
            key={blog._id}
          />
        ))}
    </main>
  );
}
