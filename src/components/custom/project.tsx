import { projects } from "@/constant/data";

export default function Project(project: (typeof projects)[0]) {
  return (
      <li key={project.name} className="flex flex-col">
        <a target="_blank" href={project.link} className="text-sm out font-medium">
          {project.name}
          {project.inactive && (
            <span className="text-secondary"> (inactive)</span>
          )}
        </a>
        <p className="text-xs text-secondary">{project.description}</p>
      </li>
  );
}
