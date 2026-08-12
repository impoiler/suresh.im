import BlogContent from "@/components/custom/blog-content";
import Link from "@/components/custom/link";
import { externals } from "@/constant/data";
import { getAllBlogs, getBlogBySlug, serializeMDX } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllBlogs().filter((post) => post.published).map((post) => ({
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

  if (!post || !post.published) {
    return notFound();
  }

  const { title, description, date } = post;
  const canonical = `${externals.base_url}/blog/${post.slug}`;
  const image = post.image ?? "/og.png";
  
  return {
    title: `${title} | Blog`,
    description,
    authors: [{ name: externals.fullName }],
    keywords: [
      ...externals.keywords,
      "blog",
      "tech article",
      title.toLowerCase(),
    ],
    openGraph: {
      title: `${title} - ${externals.fullName}`,
      description,
      type: "article",
      publishedTime: date,
      url: canonical,
      authors: [externals.fullName],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - ${externals.fullName}`,
      description,
      creator: "@impoiler",
      images: [image],
    },
    alternates: {
      canonical,
    },
  };
}

const PostLayout = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  const post = getBlogBySlug(params.slug);

  if (!post || !post.published) {
    notFound();
  }

  const mdxSource = await serializeMDX(post.content);
  const canonical = `${externals.base_url}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: post.date,
    ...(post.updated ? { dateModified: post.updated } : {}),
    image: `${externals.base_url}${post.image ?? "/og.png"}`,
    author: { "@id": `${externals.base_url}/#person` },
    publisher: { "@id": `${externals.base_url}/#person` },
  };

  return (
    <div className="mt-7 animate-reveal">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
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
        <BlogContent source={mdxSource} />
      </article>
    </div>
  );
};

export default PostLayout;
