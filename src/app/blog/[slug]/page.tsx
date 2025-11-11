import EmptyPlaceholder from "@/components/custom/empty-placeholder";
import Link from "@/components/custom/link";
import MDXContent from "@/components/custom/mdx-content";
import { externals } from "@/constant/data";
import { getAllBlogs, getBlogBySlug, serializeMDX } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, NotebookPen } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllBlogs().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(
  props: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  const post = getBlogBySlug(params.slug);

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

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  if (post.published === false) {
    return (
      <EmptyPlaceholder
        title="Post is not published yet."
        icon={<NotebookPen size={50} />}
        description={"Please check back later."}
      />
    );
  }

  const mdxSource = await serializeMDX(post.content);

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
          {formatDate(post.date)}
        </span>
      </header>

      <h1 className="post-title font-semibold">{post.title}</h1>

      <article className="blog-content">
        <MDXContent source={mdxSource} />
      </article>
    </div>
  );
};

export default PostLayout;
