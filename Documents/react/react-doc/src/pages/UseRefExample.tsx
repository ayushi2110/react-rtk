import { useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function UseRefExample() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputHandler = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.style.color = "red";
    }
  };

  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">useRef in React</h2>
        <p className="page-sub">
          useRef keeps a reference to a DOM element or value without triggering
          a re-render.
        </p>
      </div>

      <div className="page-card">
        <h4>Focus input using ref</h4>
        <div className="demo-controls">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter User Name"
            style={{
              padding: ".5rem",
              borderRadius: 6,
              border: "1px solid #e6eef8",
            }}
          />
          <button className="btn-plain" onClick={inputHandler}>
            Focus on Input Field
          </button>
        </div>

        <div style={{ marginTop: ".75rem" }} className="code-block">
          {`const inputRef = useRef(null);
if (inputRef.current) {
  inputRef.current.focus();
}`}
        </div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default UseRefExample;
