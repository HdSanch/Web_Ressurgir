import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Emprendimientos from './pages/Emprendimientos/Emprendimientos.jsx';
import Testimonios from './pages/Testimonios/Testimonios.jsx';
import Contactanos from './pages/Contactanos/Contactanos.jsx';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Tests from './pages/Test/SeleccionTest.jsx';
import Chatbot from './components/Chatbot';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Chatbot />
        
        <div className="mt-16 lg:mt-20"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/emprendimientos" element={<Emprendimientos />} />
            <Route path="/testimonios" element={<Testimonios />} />
            <Route path="/contactanos" element={<Contactanos />} />
            {/* Otras rutas */}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
