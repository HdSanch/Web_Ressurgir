import React from 'react';
import { Card, CardHeader, CardContent } from '@components/ui/card';
import { Button } from '@components/ui/button';
import '@styles/SeleccionTests.css';

const testCategories = [
  {
    id: "alcohol",
    title: "Test de Adicción al Alcohol",
    description:
      "Evalúa si el consumo de alcohol está afectando tu vida y si es recomendable buscar ayuda. Descubre si tu relación con el alcohol es saludable o potencialmente riesgosa.",
    image: "/assets/images/tests/test-taking-tips.jpg",
  },
  {
    id: "drogas",
    title: "Test de Adicción a las Drogas",
    description:
      "Este test te ayudará a identificar si el uso de sustancias ha comenzado a afectar negativamente tu bienestar físico, emocional o social.",
    image: "/assets/images/tests/test-taking-tips.jpg",
  },
  {
    id: "ansiedad",
    title: "Test de Ansiedad",
    description:
      "Si sientes preocupación constante, insomnio o síntomas físicos de estrés, este test puede ayudarte a determinar tu nivel de ansiedad.",
    image: "/assets/images/tests/test-taking-tips.jpg",
  },
  {
    id: "depresion",
    title: "Test de Depresión",
    description:
      "Evalúa si podrías estar experimentando síntomas de depresión como falta de energía, tristeza constante o pérdida de interés en actividades diarias.",
    image: "/assets/images/tests/test-taking-tips.jpg",
  },
  {
    id: "tecnologia",
    title: "Test de Dependencia Tecnológica",
    description:
      "Si pasas demasiado tiempo en redes sociales, videojuegos o internet, este test puede ayudarte a determinar si existe una posible adicción tecnológica.",
    image: "/assets/images/tests/test-taking-tips.jpg",
  },
  {
    id: "estres",
    title: "Test de Estrés",
    description:
      "Descubre si el estrés está afectando tu salud mental y física, y aprende cómo podrías manejarlo mejor en tu día a día.",
    image: "/assets/images/tests/test-taking-tips.jpg",
  },
];

const TestSelection = () => {
  return (
    <div className="test-selection-container">
      {/* 🔹 Sección de introducción */}
      <div className="intro-section">
        <h1 className="main-title">Prueba nuestros diferentes tests</h1>
        <img 
          src="/assets/images/tests/test-taking-tips.jpg"
          alt="Evaluaciones de salud mental y bienestar emocional" 
          className="intro-image" 
        />
        <p className="intro-text">
          El bienestar emocional es clave para una vida equilibrada y plena. Nuestros tests han sido diseñados por expertos 
          para ayudarte a reflexionar sobre tu estado emocional, identificar patrones en tus hábitos y reconocer señales 
          que podrían indicar la necesidad de mayor atención en tu salud mental.  
        </p>
        <p className="intro-text">
          A través de preguntas cuidadosamente elaboradas, podrás obtener información valiosa sobre distintos aspectos de tu 
          bienestar, desde el manejo del estrés hasta tu estado de ánimo general. <strong>Todos nuestros tests son completamente 
          anónimos, gratuitos y fáciles de realizar.</strong> 
        </p>
        <p className="confidence-text">
          Recuerda que estas evaluaciones no reemplazan el diagnóstico de un profesional de la salud mental, pero pueden ser 
          un primer paso importante para comprender mejor tu situación y tomar decisiones informadas sobre tu bienestar.  
        </p>
        <p className="confidence-text">
          ¡Anímate a conocerte mejor y da el primer paso hacia una vida más saludable y equilibrada!
        </p>
      </div>

      {/* 🔹 Grid de tarjetas */}
      <h2 className="section-title">Explora Nuestros Tests</h2>
      <div className="test-grid">
        {testCategories.map((test) => (
          <Card key={test.id} className="test-card">
            <img src={test.image} alt={test.title} className="test-image" />
            <CardContent>
              <CardHeader className="card-header">{test.title}</CardHeader>
              <p className="test-description">{test.description}</p>
              <Button className="more-info-button">Hacer el test</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestSelection;
