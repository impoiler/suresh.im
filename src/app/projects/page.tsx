import Project from "@/components/custom/project";
import { externals, projects } from "@/constant/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `${externals.name} . projects`,
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
