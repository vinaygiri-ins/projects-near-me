// src/pages/Home.jsx
import { useState } from "react";
import ProjectList from "../components/ProjectList";

export default function Home({ projects, onDelete }) {
  const [search, setSearch] = useState("");

  // filter by multiple fields
  const filteredProjects = projects.filter((p) =>
    [p.title, p.description, p.location].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div>
      <h1>Projects Near Me</h1>
      <input
        type="text"
        placeholder="Search projects by name, description, location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", margin: "12px 0" }}
      />

      <ProjectList projects={filteredProjects} onDelete={onDelete} />
    </div>
  );
}
