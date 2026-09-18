import { Link } from "react-router-dom";
import "../assets/styles/home.css";
import { pages } from "../data/homeData";

function Home() {
  return (
    <main className="home-root">
      <section className="container py-5">
        <h1 className="home-title">React Learning — Playground</h1>
        <p className="home-sub">
          Click a card to open the demo page and learn the concept.
        </p>

        <div className="learn-grid">
          {pages.map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="learn-card"
              style={{ borderTopColor: p.color }}
            >
              <div className="card-content">
                <h3>{p.title}</h3>
                <span className="card-arrow">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
