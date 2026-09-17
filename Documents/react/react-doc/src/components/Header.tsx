function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">
            ⚛️ React Learning
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-lg-center">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/state">
                  State
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/hide-show">
                  Hide&Show
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/on-change">
                  OnChange
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/controller-component">
                  ControlComp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
