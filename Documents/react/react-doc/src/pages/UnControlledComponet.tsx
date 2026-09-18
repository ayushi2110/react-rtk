import { Link } from "react-router-dom";
import "../assets/styles/page.css";

function UnControlledComponet() {
  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Uncontrolled Component</h2>
        <p className="page-sub">
          In uncontrolled inputs, the DOM holds the value instead of React
          state.
        </p>
        <p className="page-sub">
          React Components mainly render Ui. But sometimes we need to do things
          after rendering, such as
          <ol>
            <li>Fetch data from an API</li>
            <li>Set up a timer</li>
            <li>Add/ Remove event listeners</li>
            <li>Read write something outside react</li>
            <li>Run code when a particular value changes</li>
            <li> Remove side effect inside/outside component</li>
            <li>Can use as life cycle methods</li>
            <li>Can use for DOM manipulation</li>
          </ol>
        </p>
      </div>

      <div className="page-card">
        <h4>Login form</h4>
        <form
          onSubmit={(e) => e.preventDefault()}
          style={{ display: "grid", gap: ".75rem" }}
        >
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit" className="btn-plain">
            Submit
          </button>
        </form>

        <div style={{ marginTop: ".75rem" }} className="code-block">
          {`<input type="email" defaultValue="" />
<input type="password" defaultValue="" />`}
        </div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default UnControlledComponet;
