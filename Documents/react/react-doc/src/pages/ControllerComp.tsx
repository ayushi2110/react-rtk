/*
A controlled component is a form element whose value 
is managed by React state rather than directly by the DOM.
Here:
name → React state
value={name} → input gets its value from React
onChange → updates React state
React is the source of truth
User types → onChange → setName() → state changes → React re-renders → input gets new value
**/

import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function ControllerComp() {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Controlled Component (Forms)</h2>
        <p className="page-sub">
          Forms should be controlled by React state to keep a single source of
          truth.
        </p>
      </div>

      <div className="page-card">
        <h4>Simple form</h4>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "grid", gap: ".5rem" }}
        >
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
          <div style={{ display: "flex", gap: ".5rem" }}>
            <button className="btn-plain">Submit</button>
            <button
              className="btn-ghost"
              onClick={() => {
                setName("");
                setPassword("");
                setEmail("");
              }}
            >
              Reset
            </button>
          </div>
        </form>

        <div style={{ marginTop: ".75rem" }} className="explain">
          <strong>Live values:</strong>
          <div>Name: {name || "<empty>"}</div>
          <div>Password: {password || "<empty>"}</div>
          <div>Email: {email || "<empty>"}</div>
        </div>
      </div>

      <div className="controlled-section">
        <h4>Why controlled?</h4>

        <p className="explain">
          Controlled components make it easy to validate, modify or submit form
          data because React owns the values.
        </p>

        <h5>Here's how it works</h5>

        <ol className="controlled-steps">
          <li>Store input field value in state</li>
          <li>Use change handler with input field</li>
          <li>Value attribute attached with state</li>
        </ol>

        <div className="code-block">
          {`// Controlled input pattern
const [name, setName] = useState('');
<input value={name} onChange={e => setName(e.target.value)} />`}
        </div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default ControllerComp;
