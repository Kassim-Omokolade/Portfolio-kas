import './App.css'
import LandingPage from './pages/LandingPage'
import Portfolio from './pages/Portfolio'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
     <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App
