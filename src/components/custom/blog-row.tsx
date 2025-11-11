import { Blog } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import Link from "./link";

export default function BlogRow(blog: Blog) {
  return (
    <Link href={`/${blog.url}`} className="text-sm font-medium">
      <li className="flex flex-col">
        <h3 className="lowercase">{blog.title}</h3>
        <span className="text-secondary text-xs">
          {formatDate(blog.date)}
        </span>
      </li>
    </Link>
  );
}
