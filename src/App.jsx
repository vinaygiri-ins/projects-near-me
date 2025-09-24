import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import { generateProjects } from "./utils/generateProjects";
import "./styles/App.css";

function App() {
  const [projects, setProjects] = useState(() => {
    try {
      const raw = localStorage.getItem("projects");
      if (raw) return JSON.parse(raw);
      // If nothing in localStorage, generate dummy data
      return generateProjects(1000);
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function addProject(project) {
    setProjects((prev) => [...prev, project]);
  }

  function deleteProject(id) {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  }

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} onDelete={deleteProject} />}
        />
        <Route
          path="/create"
          element={<CreateProject onAddProject={addProject} />}
        />
      </Routes>
    </div>
  );
}

export default App;
