import EmptyPlaceholder from "@/components/custom/empty-placeholder";
import { externals } from "@/constant/data";
import { cn } from "@/lib/utils";
import { Blog, allBlogs } from "contentlayer/generated";
import { ArrowLeft, NotebookPen } from "lucide-react";
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

  if (post.published === false) {
    return (
      <EmptyPlaceholder
        className={cn("border-none h-[calc(100vh_-_100px)]")}
        title="Post is not published yet."
        icon={<NotebookPen size={50} />}
        description={"Please check back later."}
      />
    );
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <header className="flex justify-between items-center py-3.5 sticky top-0 bg-background">
        <Link
          href={"/blog"}
          className="text-base font-medium text-muted-foreground flex items-center gap-1 hover:text-secondary-foreground"
          passHref
        >
          <ArrowLeft size={20} /> Back
        </Link>
        <span className="text-base capitalize text-muted-foreground font-medium">
          {post.date}
        </span>
      </header>

      <main className="mt-4 min-h-[calc(100vh_-_168px)]">
        <h1 className="text-xl md:text-2xl font-medium mb-8">{post.title}</h1>

        <article className="blog-content">
          <MDXContent components={mdxComponents} />
        </article>
      </main>
    </>
  );
};

export default PostLayout;
