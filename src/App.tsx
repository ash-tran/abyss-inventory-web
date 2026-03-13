import Index from './pages/fish-index'
import Home from './pages/home'
import Inventory from './pages/inventory'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
        <BrowserRouter>
          <nav className="navigation">
            <div>
              <Link to="/" className="homepage-link">🐟Abyss Inventory</Link>
            </div>
          <div className="navigation-items">
            <div className="nav-links">
              <Link to="/index">Index</Link>
              <Link to="/inventory">Inventory</Link>
              {/* <a href="/">Feedback</a> */}
            </div>
          </div>
          </nav>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
