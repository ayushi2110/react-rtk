import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function HideShow() {
  const [display, setDisplay] = useState(true);
  const [count, setValue] = useState(0);

  const increaseValue = () => setValue(count + 1);
  const decreaseValue = () => setValue(Math.max(0, count - 1));

  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Show / Hide (Conditional Rendering)</h2>
        <p className="page-sub">Toggle pieces of UI based on state values.</p>
      </div>

      <div className="page-card">
        <h4>Toggle example</h4>
        <p className="explain">
          When <code>display</code> is true we show the user, otherwise a
          placeholder appears.
        </p>
        <div className="demo-controls">
          <div>
            {display ? <strong>Ayushi Khurana</strong> : <em>No user</em>}
          </div>
          <button className="btn-plain" onClick={() => setDisplay(!display)}>
            Toggle value
          </button>
        </div>
      </div>

      <div className="page-card">
        <h4>Counter</h4>
        <div className="explain">Count: {count}</div>
        <div className="demo-controls" style={{ marginTop: ".5rem" }}>
          <button className="btn-plain" onClick={increaseValue}>
            +
          </button>
          <button className="btn-ghost" onClick={decreaseValue}>
            -
          </button>
        </div>
        <div
          style={{ marginTop: ".75rem" }}
          className="code-block"
        >{`// Toggle with state const [display, setDisplay] = useState(true);
          // render: {display ? <User/> : <Placeholder/>}
          // `}</div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default HideShow;
