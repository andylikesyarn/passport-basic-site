import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import New from './pages/New';
import Renew from './pages/Renew';
import Change from './pages/Change';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* Navigation */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              QTS Passport Guide
            </Link>
            <div className="nav-menu">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/new" className="nav-link">
                New Passport
              </Link>
              <Link to="/renew" className="nav-link">
                Renew Passport
              </Link>
              <Link to="/change" className="nav-link">
                Change/Correct
              </Link>
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
