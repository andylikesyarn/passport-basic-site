import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import New from "./pages/New";
import Renew from "./pages/Renew";
import Change from "./pages/Change";
import gftoImage from "./assets/GTFO!.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <div className="nav-left">
              <Link to="/" className="nav-logo-link">
                <img src={gftoImage} alt="GTFO" className="nav-logo-image" />
              </Link>
              <Link to="/" className="nav-logo">
                QTS Passport Guide
              </Link>
            </div>
            <div className="nav-menu">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <div className="dropdown">
                <span className="dropdown-trigger">
                  Application Types
                  <span className="dropdown-arrow">▼</span>
                </span>
                <div className="dropdown-content">
                  <Link to="/new" className="dropdown-link">
                    First-time Passport
                  </Link>
                  <Link to="/renew" className="dropdown-link">
                    Renew Passport
                  </Link>
                  <Link to="/change" className="dropdown-link">
                    Change/Correct Passport
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/renew" element={<Renew />} />
            <Route path="/change" element={<Change />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
