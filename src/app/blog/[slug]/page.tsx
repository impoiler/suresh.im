import { externals } from "@/constant/info";
import { Blog, allBlogs } from "contentlayer/generated";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post._raw.flattenedPath,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    return;
  }

  const { title, description, date, url } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${externals.base_url}/blog/${url}`,
    },
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${externals.base_url}/blog/${url}`,
    },
  };
}

// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find(
    (post: Blog) => post._raw.flattenedPath === params.slug
  );

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <header className="flex justify-between items-center py-3.5 sticky top-0 bg-background">
        <Link
          href={"/blog"}
          className="text-base font-medium text-muted-foreground  hover:text-secondary-foreground"
          passHref
        >
          ← Back
        </Link>
        <span className="text-base capitalize text-muted-foreground font-medium">
          {post.date}
        </span>
      </header>

      <h1 className="text-xl md:text-2xl font-medium my-8">{post.title}</h1>

      <article className="blog-content">
        <MDXContent components={mdxComponents} />
      </article>
    </>
  );
};

export default PostLayout;
