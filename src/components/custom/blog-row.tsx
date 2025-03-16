import { allBlogs } from "contentlayer/generated";
import Link from "next/link";

export default function BlogRow(blog: (typeof allBlogs)[0]) {
  return (
    <Link href={`/${blog.url}`} className="text-sm font-medium">
      <li className="flex flex-col">
        <h3 className="">{blog.title}</h3>
        <span className="text-secondary text-xs">
          {blog.date.toLowerCase()}
        </span>
      </li>
    </Link>
  );
}
