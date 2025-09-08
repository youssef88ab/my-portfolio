// src/App.tsx
import { type JSX } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import BlogPage from "./pages/blogs";
import "devicon/devicon.min.css";


function App(): JSX.Element {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<BlogPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
