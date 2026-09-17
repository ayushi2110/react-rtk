import { useState } from "react";
import { Link } from "react-router-dom";

function StateManagement() {
  const [fruit, setFruit] = useState("Apple");
  const [count, setCount] = useState(0);
  const [reverseCount, setReverseCount] = useState(10);

  const changeFruit = () => {
    setFruit("Mango");
  };

  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">State in React</h2>
        <p className="page-sub">
          State lets components remember information and react to user input.
        </p>
      </div>

      <div className="page-card">
        <h4>Simple state example</h4>
        <div className="demo-controls">
          <div>
            <strong>Selected:</strong>
            <div className="explain">{fruit}</div>
          </div>
          <div>
            <button className="btn-plain" onClick={changeFruit}>
              Toggle Fruit
            </button>
          </div>
        </div>
      </div>

      <div className="page-card">
        <h4>Counters</h4>
        <div className="explain">
          Count: {count} — Sub value: {reverseCount}
        </div>
        <div className="demo-controls" style={{ marginTop: "0.75rem" }}>
          <button className="btn-plain" onClick={() => setCount(count + 1)}>
            Increase
          </button>
          <button
            className="btn-ghost"
            onClick={() => setReverseCount(reverseCount - 1)}
          >
            Decrease Reverse
          </button>
        </div>
        <div
          style={{ marginTop: "0.75rem" }}
          className="code-block"
        >{`// Example: useState hooks
const [count, setCount] = useState(0);
setCount(count + 1);
`}</div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default StateManagement;
