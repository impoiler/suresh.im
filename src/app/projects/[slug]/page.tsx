import Link from "@/components/custom/link";
import { externals, projects } from "@/constant/data";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const url = `${externals.base_url}/projects/${project.slug}`;
  return { title: `${project.name} — project by ${externals.fullName}`, description: project.summary, alternates: { canonical: url }, openGraph: { title: project.name, description: project.summary, url, images: ["/og.png"] } };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <main className="mt-12 animate-reveal">
    <p className="text-xs uppercase tracking-widest text-secondary">Project case study</p>
    <h1 className="mt-3 font-newsreader text-3xl italic">{project.name}</h1>
    <p className="mt-5 leading-relaxed text-secondary">{project.summary}</p>
    <dl className="mt-8 grid gap-4 text-sm">
      <div><dt className="text-secondary">My role</dt><dd>{project.role}</dd></div>
      <div><dt className="text-secondary">Technology</dt><dd>{project.stack.join(" · ")}</dd></div>
      <div><dt className="text-secondary">Status</dt><dd>{project.inactive ? "Archived experiment" : "Published project"}</dd></div>
    </dl>
    <div className="mt-8 flex gap-5 text-sm"><Link className="out font-medium" href={project.link}>Visit project ↗</Link>{project.article && <Link className="out font-medium" href={project.article}>Read the engineering notes</Link>}</div>
  </main>;
}
