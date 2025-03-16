import { projects } from "@/constant/data";
import React from "react";

export default function Project(project: (typeof projects)[0]) {
  return (
    <li key={project.name}>
      <a
        href={project.link}
        target="_blank"
        className="text-sm out font-medium"
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
