import { Link } from "react-router-dom";
import "../assets/styles/page.css";

type PassDataInArrayProps = {
  data: string[];
};

function PassDataInArray({ data }: PassDataInArrayProps) {
  return (
    <main className="container page-root">
      <div className="page-hero">
        <h2 className="page-title">Pass Data In Array</h2>

        <p className="page-sub">
          Demonstrates passing and rendering an array from a parent component.
        </p>
      </div>

      <div className="page-card">
        <h4>Array items</h4>

        <ul className="explain">
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="code-block">
          {`// Parent
<PassDataInArray data={["GIT", "GITHUB", "React"]} />

// Child
data.map(item => <li>{item}</li>)`}
        </div>
      </div>

      <Link className="page-back" to="/">
        ← Back to Home
      </Link>
    </main>
  );
}

export default PassDataInArray;
