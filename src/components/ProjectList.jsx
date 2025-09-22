// src/components/ProjectList.jsx
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects, onDelete }) {
  if (!projects || projects.length === 0) {
    return <p>No projects yet — be the first to post.</p>;
  }

  return (
    <div className="project-list">
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onDelete={onDelete} />
      ))}
    </div>
  );
}
