import { Link } from "react-router-dom";
import "../assets/styles/page.css";

type UserData = {
  name: string;
  age: number;
};

type PassUserDataProps = {
  userData?: UserData;
};

function PassUserData({ userData = { name: "Ayushi", age: 29 } }: PassUserDataProps) {
  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Passing Props / User Data</h2>
        <p className="page-sub">
          Props let parent components pass data down to children.
        </p>
      </div>

      <div className="page-card">
        <h4>User info (received via props)</h4>
        <div className="explain">
          Name: <strong>{userData?.name ?? "<no name>"}</strong>
        </div>
        <div className="explain">
          Age: <strong>{userData?.age ?? "<unknown>"}</strong>
        </div>
        <div
          style={{ marginTop: ".75rem" }}
          className="code-block"
        >{`// Parent: <PassUserData userData={{ name: 'Ayushi', age: 29 }} />
// Child: function PassUserData({ userData }) { ... }
`}</div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default PassUserData;
