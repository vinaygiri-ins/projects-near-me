// src/components/ProjectForm.jsx
import { useState } from "react";
import "../styles/ProjectForm.css";


export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // don't reload page

    // simple validation
    if (!title.trim()) return alert("Please enter a project title.");

    const newProject = {
      id: Date.now(), // simple unique id
      title: title.trim(),
      description: description.trim(),
      location: location.trim() || "Unknown",
      owner: "You",
      createdAt: new Date().toISOString()
    };

    onAddProject(newProject); // send project up to App
    setTitle("");
    setDescription("");
    setLocation("");
  }

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Short description"
      ></textarea>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location (city / pincode)"
      />
      <button type="submit">Post Project</button>
    </form>
  );
}
