import Project from "@/components/custom/project";
import { externals, projects } from "@/constant/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects by ${externals.fullName} - Open Source & Side Projects`,
  description: `Explore projects built by ${externals.fullName}: tini.fyi URL shortener, ip-info.site, developer tools, and more. Full-Stack Engineer specializing in React and Next.js.`,
  keywords: [
    ...externals.keywords,
    "Suresh Chaudhary projects",
    "tini.fyi",
    "ip-info.site",
    "developer tools",
    "open source projects",
    "@poiler/utils",
  ],
  alternates: {
    canonical: `${externals.base_url}/projects`,
  },
  openGraph: {
    title: `Projects by ${externals.fullName}`,
    description: `Side projects and open source work by ${externals.fullName}, Full-Stack Engineer.`,
    url: `${externals.base_url}/projects`,
    images: ["/og.png"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="mt-10 animate-reveal">
      <p className="font-newsreader font-medium italic text-lg">projects</p>
      <div className="mt-2">
        <ul className="flex flex-col gap-3 projects">
          {projects.map((project) => (
            <Project key={project.name} {...project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
