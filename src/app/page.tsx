import BlogRow from "@/components/custom/blog-row";
import Link from "@/components/custom/link";
import Project from "@/components/custom/project";
import { externals, Links, projects } from "@/constant/data";
import { getAllBlogs } from "@/lib/mdx";
import { parseDate } from "@/lib/utils";
import { CalendarDays } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.fullName} - Full-Stack Engineer from India | Maxim AI`,
  description: `${externals.fullName} is a Full-Stack Engineer from India, building AI testing tools at Maxim AI. Expert in React, Next.js, TypeScript, and LLM applications.`,
  keywords: [
    ...externals.keywords,
    "portfolio",
    "personal website",
    "web developer portfolio",
  ],
  alternates: {
    canonical: externals.base_url,
  },
  openGraph: {
    title: `${externals.fullName} - Full-Stack Engineer from India`,
    description: `${externals.fullName} is a Full-Stack Engineer building AI testing tools at Maxim AI. Expert in React, Next.js, and LLM applications.`,
    url: externals.base_url,
    images: ["/og.png"],
  },
};

export default function Home() {
  const posts = getAllBlogs()
    .filter((blog) => blog.published)
    .sort((a, b) => parseDate(b.date) - parseDate(a.date));

  return (
    <>
      <p className="text-sm animate-reveal text-secondary mt-10">
        I&apos;m a{" "}
        <span className="font-newsreader text-primary font-medium italic mr-0.5">
          full-stack engineer
        </span>{" "}
        from India, crafting things for the internet using the technologies I
        know. I&apos;m currently focused on building tools around AI and LLMs.
      </p>

      <p className="text-sm text-secondary animate-reveal mt-4">
        Presently, I&apos;m working at{" "}
        <Link
          target="_blank"
          href={externals.compony.site}
          className="font-newsreader text-primary out font-medium italic"
        >
          {externals.compony.name}{" "}
        </Link>
        , building a framework for testing and monitoring AI applications.
      </p>

      <div className="animate-reveal mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <p className="text-sm text-secondary">Want to chat?</p>
          <Link
            target="_blank"
            href={Links.cal}
            aria-label="Book a call on my calendar"
            className="inline-flex items-center gap-1 rounded-full text-sm font-newsreader text-primary"
          >
            <CalendarDays size={14} className="" />
            <span className="pt-0.5">Book a call</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10 animate-reveal">
        <div>
          <p className="font-newsreader font-medium italic text-lg">projects</p>
          <div className="mt-3">
            <ul className="flex flex-col projects gap-3">
              {projects.slice(0, 5).map((project) => (
                <Project key={project.name} {...project} />
              ))}
              <li>
                <Link href="/projects" className="text-sm out font-medium">
                  view all
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className="font-newsreader font-medium italic text-lg">thoughts</p>
          <div className="mt-3">
            <ul className="blog-articles flex flex-col gap-3">
              {posts.slice(0, 4).map((blog) => (
                <BlogRow key={blog.slug} {...blog} />
              ))}
              {posts.length > 4 && (
                <li>
                  <Link href="/blog" className="text-sm out font-medium">
                    view all
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
