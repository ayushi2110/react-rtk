import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function OnChangeEventValue() {
  const [val, setVal] = useState("Guest");
  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Handling Input — onChange</h2>
        <p className="page-sub">
          Capture user input with controlled components using onChange.
        </p>
      </div>

      <div className="page-card">
        <h4>Live input</h4>
        <div className="demo-controls">
          <input
            type="text"
            value={val}
            onChange={(event) => setVal(event?.target.value)}
            placeholder="Enter the value"
            style={{
              padding: ".5rem",
              borderRadius: 6,
              border: "1px solid #e6eef8",
            }}
          />
          <button className="btn-ghost" onClick={() => setVal("")}>
            Clear
          </button>
        </div>
        <div style={{ marginTop: ".75rem" }} className="explain">
          Current value: <strong>{val || "<empty>"}</strong>
        </div>
        <div
          style={{ marginTop: ".75rem" }}
          className="code-block"
        >{`// Controlled input
const [val, setVal] = useState('');
<input value={val} onChange={e => setVal(e.target.value)} />
`}</div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default OnChangeEventValue;
