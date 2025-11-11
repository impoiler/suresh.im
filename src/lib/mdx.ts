import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { SerializeOptions } from "node_modules/next-mdx-remote/dist/types";
import path from "path";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const contentDirectory = path.join(process.cwd(), "src/content/blogs");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  published: boolean;
}

export interface Blog extends BlogFrontmatter {
  slug: string;
  url: string;
  content: string;
}

export function getAllBlogs(): Blog[] {
  const fileNames = fs.readdirSync(contentDirectory);
  const allBlogsData = fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        url: `blog/${slug}`,
        title: data.title,
        description: data.description,
        date: data.date,
        published: data.published ?? true,
        content,
      } as Blog;
    });

  return allBlogsData;
}

export function getBlogBySlug(slug: string): Blog | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      url: `blog/${slug}`,
      title: data.title,
      description: data.description,
      date: data.date,
      published: data.published ?? true,
      content,
    } as Blog;
  } catch {
    return null;
  }
}

export const mdxOptions: SerializeOptions["mdxOptions"] = {
  remarkPlugins: [remarkGfm as any],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode as any,
      {
        theme: "catppuccin-mocha",
        onVisitLine(node: { children: string | any[] }) {
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
          }
        },
        onVisitHighlightedLine(node: {
          properties: { className: string[] };
        }) {
          node.properties.className.push("line--highlighted");
        },
        onVisitHighlightedWord(node: {
          properties: { className: string[] };
        }) {
          node.properties.className = ["word--highlighted"];
        },
      },
    ],
    [
      rehypeAutolinkHeadings,
      {
        properties: {
          className: ["anchor"],
        },
      },
    ],
  ],
};

export async function serializeMDX(content: string) {
  return serialize(content, {
    mdxOptions,
  });
}

