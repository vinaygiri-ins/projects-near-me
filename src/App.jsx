// src/App.jsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import "./styles/App.css";


function App() {
  const [projects, setProjects] = useState(() => {
    try {
      const raw = localStorage.getItem("projects");
      return raw ? JSON.parse(raw) : [];
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
      <div className="main-content">
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
    </div>
  );
}

export default App;
