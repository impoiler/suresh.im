import { projects } from "@/constant/data";

export default function Project(project: (typeof projects)[0]) {
  return (
    <li key={project.name} className="flex flex-col">
      <a
        href={project.link}
        target="_blank"
        className="text-sm out font-medium w-max"
      >
        {project.name}
        {project.inactive && (
          <span className="text-secondary"> (inactive)</span>
        )}
      </a>
      <p className="text-xs text-secondary">{project.description}</p>
    </li>
  );
}
