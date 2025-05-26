import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import EnhancedFoundationHome from './pages/Home/Home.jsx';
import QuienesSomos from "./pages/QuienesSomos/QuienesSomos";
import Donaciones from "./pages/Donaciones/Donaciones";
import PatientEntrepreneurship from './pages/Emprendimientos/Emprendimientos.jsx';
import Testimonios from './pages/Testimonios/Testimonios.jsx';
import Contactanos from './pages/Contactanos/Contactanos.jsx';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Tests from './pages/Test/SeleccionTest.jsx';
import TestPage from './pages/Test/TestPages.jsx';
import Chatbot from './components/Chatbot';
import NotFound from './NotFound.jsx';
import Voluntariados from './pages/Voluntariados/Voluntariados.jsx';
import Servicios from './pages/Servicios/Servicios.jsx';
import './index.css';

function AppLayout() {
  const location = useLocation();
  const [showLayout, setShowLayout] = useState(location.pathname !== '/');

  const showNavFooter = location.pathname !== '/' || showLayout;
  const [showChatbot, setShowChatbot] = useState(location.pathname !== '/');

  return (
    <div className="flex flex-col min-h-screen">
      {showNavFooter && <Navbar />}
      {showChatbot && <Chatbot />}
      <div className="flex-grow">
      <Routes>
          <Route path="/" element={<EnhancedFoundationHome setShowLayout={setShowLayout} setShowChatbot={setShowChatbot} />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/donaciones" element={<Donaciones />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/test/:testId" element={<TestPage />} /> 
          <Route path="/emprendimientos" element={<PatientEntrepreneurship />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="/voluntariados" element={<Voluntariados />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {showNavFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
