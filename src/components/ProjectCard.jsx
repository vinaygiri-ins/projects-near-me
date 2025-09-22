// src/components/ProjectCard.jsx
import "./ProjectCard.css";

export default function ProjectCard({ project, onDelete }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <button className="delete-btn" onClick={() => onDelete(project.id)}>
          Delete
        </button>
      </div>

      <p className="project-desc">{project.description}</p>

      <p className="project-meta">
        📍 {project.location} • by {project.owner} • {new Date(project.createdAt).toLocaleString()}
      </p>
    </div>
  );
}
