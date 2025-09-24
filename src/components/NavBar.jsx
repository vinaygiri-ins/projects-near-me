import "../styles/NavBar.css";  // link CSS file

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">Projects Near Me</div>
      <nav className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">➕ Add Project</Link>
      </nav>
    </header>
  );
}


