import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, CardHeader, CardContent } from '@components/ui/card';
import { Button } from '@components/ui/button';
import '@styles/SeleccionTests.css';

const testCategories = [
  {
    id: "alcohol",
    title: "Test de Adicción al Alcohol",
    description:
      "¿Tu consumo de alcohol está afectando tu vida? Este test te ayudará a descubrir si hay señales de alerta y si sería recomendable buscar apoyo profesional.",
    image: "/assets/images/tests/alcohol.jpg",
  },
  {
    id: "drogas",
    title: "Test de Adicción a las Drogas",
    description:
      "Evalúa si el uso de sustancias está impactando tu bienestar emocional, físico o social. Un primer paso para tomar el control.",
    image: "/assets/images/tests/drogas.jpg",
  },
  {
    id: "ansiedad",
    title: "Test de Ansiedad",
    description:
      "Si experimentas preocupación constante, tensión o insomnio, este test te ayudará a comprender mejor tu nivel de ansiedad.",
    image: "/assets/images/tests/ansiedad.webp",
  },
  {
    id: "depresion",
    title: "Test de Depresión",
    description:
      "Detecta signos de depresión como tristeza persistente, fatiga o pérdida de interés en actividades diarias.",
    image: "/assets/images/tests/depresion.jpg",
  },
  {
    id: "tecnologia",
    title: "Test de Dependencia Tecnológica",
    description:
      "Evalúa si el uso de redes sociales, videojuegos o internet está afectando tu vida personal, social o laboral.",
    image: "/assets/images/tests/tecnologia.jpg",
  },
  {
    id: "estres",
    title: "Test de Estrés",
    description:
      "Descubre si el estrés está afectando tu salud mental y física, y aprende cómo manejarlo de manera saludable.",
    image: "/assets/images/tests/estres.jpg",
  },
];

const TestSelection = () => {
  const navigate = useNavigate(); // Hook para redirigir a otra página

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <div className="test-selection-container">
      {/* 🔹 Sección de introducción */}
      <div className="intro-section" data-aos="fade-up">
        <h1 className="main-title">Prueba Nuestros Diferentes Tests</h1>
        <img 
          src="/assets/images/tests/test-taking-tips.jpg"
          alt="Evaluaciones de salud mental y bienestar emocional" 
          className="intro-image"
        />
        <p className="intro-text">
          El bienestar emocional es clave para una vida plena. Nuestros tests están diseñados para ayudarte a reflexionar 
          sobre tu estado mental y emocional, identificar patrones de comportamiento y detectar señales de alerta. 
          <strong> Son 100% anónimos y gratuitos.</strong>
        </p>
        <p className="intro-text">
          Cada test consta de preguntas cuidadosamente elaboradas que te brindarán una mejor comprensión sobre tu situación actual.  
          <strong>Estos tests no reemplazan un diagnóstico profesional</strong>, pero pueden ser el primer paso hacia una vida más saludable 
          y equilibrada.
        </p>
        <p className="confidence-text">
          ¡Atrévete a conocerte mejor! Responde con sinceridad y da el primer paso hacia el bienestar emocional.
        </p>
      </div>

      {/* 🔹 Grid de tarjetas con animaciones */}
      <h2 className="section-title" data-aos="fade-up">Explora Nuestros Tests</h2>
      <div className="test-grid">
        {testCategories.map((test, index) => (
          <Card 
            key={test.id} 
            className="test-card" 
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`} // Retraso progresivo para cada tarjeta
          >
            <img src={test.image} alt={test.title} className="test-image" />
            <CardContent>
              <CardHeader className="card-header">{test.title}</CardHeader>
              <p className="test-description">{test.description}</p>
              {/* Redirige al test correspondiente */}
              <Button 
                className="more-info-button" 
                onClick={() => navigate(`/test/${test.id}`)}
              >
                Hacer el test
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestSelection;
