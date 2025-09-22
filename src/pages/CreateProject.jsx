// src/pages/CreateProject.jsx
import ProjectForm from "../components/ProjectForm";

export default function CreateProject({ onAddProject }) {
  return (
    <div>
      <h1>Add a New Project</h1>
      <ProjectForm onAddProject={onAddProject} />
    </div>
  );
}
