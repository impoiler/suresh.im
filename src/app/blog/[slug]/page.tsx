import EmptyPlaceholder from "@/components/custom/empty-placeholder";
import Link from "@/components/custom/link";
import { externals } from "@/constant/data";
import { Blog, allBlogs } from "contentlayer/generated";
import { ArrowLeft, NotebookPen } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import type { Metadata } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";
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
    return notFound();
  }

  const { title, description, date, url } = post;

  return {
    title: `${title} | ${externals.name}`,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: date,
      url: `${externals.base_url}/blog/${url}`,
      authors: externals.name,
      images: [`/${url}.png`, "/og.png"],
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
  // pre: ({ children }) => <CustomCodeBlock>{children}</CustomCodeBlock>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allBlogs.find(
    (post: Blog) => post._raw.flattenedPath === params.slug
  );

  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  if (post.published === false) {
    return (
      <EmptyPlaceholder
        title="Post is not published yet."
        icon={<NotebookPen size={50} />}
        description={"Please check back later."}
      />
    );
  }

  return (
    <div className="mt-7 animate-reveal">
      <header className="flex text-secondary justify-between items-center py-3 sticky top-0 bg-background">
        <Link
          href={"/blog"}
          className="text-sm font-newsreader italic font-medium flex items-start gap-1"
          passHref
        >
          <ArrowLeft size={16} /> Back
        </Link>
        <span className="text-sm capitalize italic font-newsreader font-medium">
          {post.date}
        </span>
      </header>

      <h1 className="post-title font-semibold">{post.title}</h1>

      <article className="blog-content">
        <MDXContent
          components={{
            ...mdxComponents,
            a: ({ href, children }) =>
              href?.startsWith("http") ? (
                <a href={`${href}?ref=${externals.referrer}`} target="_blank">
                  {children}
                </a>
              ) : (
                <Link href={href as string}>{children}</Link>
              ),
          }}
        />
      </article>
    </div>
  );
};

export default PostLayout;
