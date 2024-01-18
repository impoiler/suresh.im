import BlogRow from "@/components/custom/blog-row";
import { allBlogs } from "contentlayer/generated";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suresh | Blog",
  description: "Less, but I share my thoughts here.",
};

export default function Blog() {
  return (
    <main className="mt-8">
      <h2 className="text-xl md:text-2xl font-medium">Blog</h2>
      <span className="mt-4 h-0 block" />
      {allBlogs.map((blog) => (
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
