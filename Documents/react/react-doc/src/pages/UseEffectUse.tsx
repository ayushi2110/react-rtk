import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function UseEffectUse() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("Component rendered");
  }, []);

  useEffect(() => {
    console.log("Counter changed:", counter);
  }, [counter]);

  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Use Effect in React</h2>
        <p className="page-sub">
          useEffect runs after render and is useful for side effects such as API
          requests, timers, subscriptions, and DOM work.
        </p>
      </div>

      <div className="page-card">
        <h4>Counter demo</h4>
        <div className="demo-controls">
          <button className="btn-plain" onClick={() => setCounter(counter + 1)}>
            Counter: {counter}
          </button>
        </div>

        <div style={{ marginTop: ".75rem" }} className="code-block">
          {`import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("component rendered");
  }, []);

  return <h1>Hello</h1>;
}`}
        </div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default UseEffectUse;
