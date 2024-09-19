// App.jsx
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cars from './pages/Cars';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
       <ScrollToTop />
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
