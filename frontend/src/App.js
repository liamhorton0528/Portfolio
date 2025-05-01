import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
