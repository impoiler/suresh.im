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
  const posts = allBlogs
    .filter((blog) => blog.published)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <div className="mt-10 animate-reveal">
      <p className="font-newsreader font-medium italic text-lg">thoughts</p>
      <div className="mt-2">
        <ul className="flex flex-col gap-3">
          {posts.map((blog) => (
            <BlogRow key={blog._id} {...blog} />
          ))}
        </ul>
      </div>
    </div>
  );
}
