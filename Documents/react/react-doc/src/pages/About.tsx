import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function About() {
  return (
    <main className="page-root container">
      <div className="page-hero">
        <h2 className="page-title">About this project</h2>
        <p className="page-sub">
          A compact playground to learn fundamental React concepts by example.
        </p>
      </div>

      <div className="page-card">
        <h3>What you'll find</h3>
        <ul className="explain">
          <li>State management examples and counters</li>
          <li>Toggling UI with conditional rendering</li>
          <li>Handling input with onChange and controlled components</li>
          <li>Passing props and rendering arrays</li>
        </ul>
        <p className="explain">
          Each page contains a short explanation, an interactive demo and a
          small code snippet to study.
        </p>
        <Link className="page-back" to="/">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default About;
