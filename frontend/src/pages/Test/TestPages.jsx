import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardHeader, CardContent } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '@styles/TestPage.css';

const tests = {
  alcohol: {
    title: "Test de Adicción al Alcohol",
    questions: [
      { text: "¿Has tenido alguna vez la impresión de que deberías beber menos?", options: ["Sí", "No"], score: [4, 0] },
      { text: "¿Te ha molestado alguna vez la gente criticándote por tu forma de beber?", options: ["Sí", "No"], score: [4, 0] },
      { text: "¿Te has sentido alguna vez mal o culpable por tu costumbre de beber?", options: ["Sí", "No"], score: [4, 0] },
      { text: "¿Alguna vez lo primero que has hecho por la mañana ha sido beber para calmar los nervios o librarte de una resaca?", options: ["Sí", "No"], score: [4, 0] },
      { text: "¿Con qué frecuencia consumes alcohol?", options: ["Nunca", "Mensualmente", "Semanalmente", "Diariamente"], score: [1, 2, 3, 4] },
      { text: "¿Cuántas bebidas alcohólicas sueles consumir en un día normal?", options: ["Menos de 3", "3-5", "6-9", "Más de 10"], score: [1, 2, 3, 4] },
      { text: "¿Con qué frecuencia tomas 6 o más bebidas en una sola ocasión?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿En el último año, has sido incapaz de parar de beber una vez que habías empezado?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿En el último año, has tenido dificultades para cumplir tus responsabilidades debido al consumo de alcohol?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿En el último año, has necesitado beber en ayunas para recuperarte después de haber bebido mucho el día anterior?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿En el último año, has tenido remordimientos o sentimientos de culpa después de haber bebido?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿En el último año, has olvidado lo que sucedió la noche anterior porque habías estado bebiendo?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Alguien ha resultado herido debido a tu consumo de alcohol?", options: ["No", "Sí"], score: [0, 4] },
      { text: "¿Algún familiar, amigo o médico te ha sugerido que dejes de beber?", options: ["No", "Sí"], score: [0, 4] },
    ],
    recommendations: [
      "🟢 No hay indicios de un problema con el alcohol. Sigue manteniendo hábitos saludables.",
      "🟡 Consumo moderado, es recomendable llevar un control y ser consciente de los riesgos.",
      "🟠 Se detectan señales de riesgo. Considera buscar apoyo profesional.",
      "🔴 Alto riesgo de adicción. Se recomienda buscar ayuda profesional lo antes posible.",
    ],
  },
  drogas: {
    title: "Test de Adicción a las Drogas",
    questions: [
      { text: "¿Ha usado drogas que no eran requeridas por razones médicas?", options: ["Sí", "No"], score: [4, 0] },
      { text: "¿Usted abusa de más de una droga a la vez?", options: ["Sí", "No"], score: [4, 0] },
      { text: "¿Es usted capaz de parar de usar drogas siempre que se lo propone?", options: ["Sí", "No"], score: [0, 4] },
      { text: "¿Ha tenido pérdidas de conocimiento o episodios de 'memoria repentina' debido al uso de drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Se ha sentido mal o culpable debido a su uso de drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Alguna vez su pareja o familiares se han quejado de su consumo de drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Ha descuidado sus responsabilidades familiares o laborales debido al uso de drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Ha cometido actividades ilegales para obtener drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Ha experimentado síntomas de abstinencia (temblores, sudoración, ansiedad intensa) cuando deja de consumir drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Ha tenido problemas médicos graves relacionados con el consumo de drogas (pérdida de memoria, hepatitis, convulsiones, hemorragias)?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Ha intentado dejar el consumo de drogas pero ha recaído en varias ocasiones?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Siente que su consumo de drogas ha aumentado con el tiempo?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Se ha sentido ansioso, deprimido o con cambios de humor cuando no tiene acceso a drogas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Algún familiar, amigo o profesional de la salud le ha sugerido que deje de consumir drogas?", options: ["No", "Sí"], score: [0, 4] },
    ],
    recommendations: [
      "🟢 No hay indicios de un problema con las drogas. Sigue manteniendo hábitos saludables.",
      "🟡 Consumo moderado, es recomendable llevar un control y ser consciente de los riesgos.",
      "🟠 Se detectan señales de riesgo. Considera buscar apoyo profesional.",
      "🔴 Alto riesgo de adicción. Se recomienda buscar ayuda profesional lo antes posible.",
    ],
  },
  ansiedad: {
    title: "Test de Ansiedad",
    questions: [
      { text: "¿Te sientes ansioso sin motivo aparente?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes problemas para dormir debido a preocupaciones?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes síntomas físicos como sudoración, temblores o taquicardia sin razón aparente?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te cuesta relajarte incluso en momentos de descanso?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes pensamientos negativos recurrentes que afectan tu bienestar?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Evitas situaciones o lugares por miedo a sentir ansiedad?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que la ansiedad afecta tu rendimiento en el trabajo, estudios o vida personal?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sufres dolores de cabeza, musculares o problemas digestivos relacionados con la ansiedad?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que te cuesta controlar tus pensamientos cuando estás ansioso?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has tenido ataques de pánico o episodios de ansiedad intensa?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que tu estado de ánimo cambia drásticamente debido a la ansiedad?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿La ansiedad ha afectado tus relaciones personales o familiares?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿La ansiedad ha limitado tu capacidad para disfrutar actividades que antes te gustaban?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Algún médico, psicólogo o ser querido te ha sugerido que busques ayuda para tu ansiedad?", options: ["No", "Sí"], score: [0, 4] },
    ],
    recommendations: [
      "🟢 No hay indicios de ansiedad significativa. Mantén un equilibrio en tu bienestar emocional.",
      "🟡 Leve ansiedad, es recomendable llevar hábitos saludables para reducir el estrés.",
      "🟠 Se detectan señales de ansiedad moderada. Considera buscar apoyo profesional.",
      "🔴 Alto nivel de ansiedad. Se recomienda buscar ayuda profesional lo antes posible.",
    ],
  },
  depresion: {
    title: "Test de Depresión",
    questions: [
      { text: "¿Te sientes triste o vacío la mayor parte del día?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has perdido interés o placer en actividades que antes disfrutabas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que tienes poca energía o estás constantemente cansado?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes dificultades para concentrarte o tomar decisiones?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has notado cambios en tu apetito o peso sin razón aparente?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes problemas para dormir o duermes demasiado?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que te mueves o hablas más lento de lo habitual, o al contrario, te sientes inquieto?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te sientes inútil o con una baja autoestima?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes pensamientos recurrentes sobre la muerte o el suicidio?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que la vida no tiene sentido o que no vale la pena vivirla?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿La depresión ha afectado tu rendimiento en el trabajo o en los estudios?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tus relaciones personales han sido afectadas por tu estado de ánimo?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Evitas socializar porque te sientes sin ganas o con poca energía?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Un médico, psicólogo o ser querido te ha sugerido que busques ayuda para tu estado de ánimo?", options: ["No", "Sí"], score: [0, 4] },
    ],
    recommendations: [
      "🟢 No hay indicios de depresión. Sigue manteniendo hábitos saludables y equilibrio emocional.",
      "🟡 Síntomas leves de depresión. Es importante cuidar tu bienestar emocional y hablar con alguien de confianza.",
      "🟠 Síntomas moderados de depresión. Considera buscar ayuda profesional para mejorar tu calidad de vida.",
      "🔴 Alto riesgo de depresión. Se recomienda buscar apoyo profesional lo antes posible.",
    ],
  },
  tecnologia: {
    title: "Test de Dependencia Tecnológica",
    questions: [
      { text: "¿Pasas más de 4 horas al día en redes sociales, videojuegos o internet?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te resulta difícil dejar tu teléfono o computadora, incluso cuando no lo necesitas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes ansiedad o irritabilidad cuando no puedes usar dispositivos electrónicos?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tu uso de la tecnología ha afectado tu rendimiento académico o laboral?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Prefieres interactuar en línea en lugar de socializar cara a cara?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has intentado reducir tu tiempo de pantalla sin éxito?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Revisas tu teléfono inmediatamente después de despertarte y antes de dormir?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has perdido horas de sueño por estar en internet o jugando videojuegos?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te distraes constantemente en clases, reuniones o trabajo debido a la tecnología?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Dejas de realizar actividades físicas o al aire libre por estar en dispositivos electrónicos?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tus relaciones familiares o de pareja se han visto afectadas por tu uso excesivo de la tecnología?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes dolores de cabeza, fatiga visual o problemas en las manos por el uso excesivo de dispositivos?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes la necesidad de revisar tu teléfono incluso cuando no has recibido notificaciones?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Alguien te ha dicho que usas demasiado la tecnología y que deberías reducir su uso?", options: ["No", "Sí"], score: [0, 4] },
    ],
    recommendations: [
      "🟢 No hay indicios de dependencia tecnológica. Sigues un uso equilibrado de la tecnología.",
      "🟡 Uso moderado, pero es recomendable establecer límites y tiempos de descanso de las pantallas.",
      "🟠 Signos de dependencia tecnológica. Considera reducir el uso de dispositivos y buscar actividades alternativas.",
      "🔴 Alta dependencia tecnológica. Se recomienda buscar apoyo para mejorar hábitos digitales y evitar impactos negativos.",
    ],
  },
  estres: {
    title: "Test de Estrés",
    questions: [
      { text: "¿Sientes que estás bajo una gran presión la mayor parte del tiempo?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes dificultades para relajarte incluso en tu tiempo libre?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sufres dolores de cabeza o musculares debido al estrés?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te resulta difícil conciliar el sueño por preocupaciones constantes?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te sientes agotado mental o físicamente sin razón aparente?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te irritas fácilmente o te enojas por cosas pequeñas?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que no tienes suficiente tiempo para cumplir con tus responsabilidades?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has notado cambios en tu apetito debido al estrés (comer demasiado o perder el hambre)?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Te cuesta concentrarte en tus tareas diarias?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has tenido pensamientos negativos constantes o sensación de desesperanza?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Sientes que el estrés está afectando tu rendimiento en el trabajo o estudios?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Tienes síntomas físicos como taquicardia, sudoración o temblores debido al estrés?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Has evitado situaciones o actividades por miedo a sentirte estresado?", options: ["Nunca", "Rara vez", "Frecuentemente", "Siempre"], score: [1, 2, 3, 4] },
      { text: "¿Algún amigo, familiar o compañero te ha dicho que pareces demasiado estresado?", options: ["No", "Sí"], score: [0, 4] },
    ],
    recommendations: [
      "🟢 No hay indicios de estrés significativo. Continúa manteniendo un estilo de vida equilibrado.",
      "🟡 Estrés moderado, intenta encontrar momentos de relajación y establecer prioridades.",
      "🟠 Estrés elevado. Considera técnicas de manejo del estrés y buscar apoyo si es necesario.",
      "🔴 Alto nivel de estrés. Se recomienda hablar con un profesional para evitar consecuencias en la salud.",
    ],
  },
};

const TestPage = () => {
    const { testId } = useParams();
    const navigate = useNavigate();
    const test = tests[testId];
  
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
  
    if (!test) {
      return <div className="error-message">⚠️ Test no encontrado. Verifica la URL.</div>;
    }
  
    const handleAnswer = (index) => {
      const score = test.questions[currentQuestion].score[index];
      setTotalScore((prevScore) => prevScore + score);
  
      if (currentQuestion < test.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    };
  
    const goToPreviousQuestion = () => {
      if (currentQuestion > 0) {
        setCurrentQuestion(currentQuestion - 1);
      }
    };
  
    const getRecommendation = () => {
      if (totalScore <= 14) return test.recommendations[0];
      if (totalScore <= 28) return test.recommendations[1];
      if (totalScore <= 42) return test.recommendations[2];
      return test.recommendations[3];
    };
  
    return (
      <div className="test-page-container mt-20"> {/* 🔹 Añadido margin-top para evitar problemas con el Navbar */}
        <Card className="test-card">
          <CardHeader className="test-title">{test.title}</CardHeader>
          <CardContent>
            {!showResults ? (
              <>
                {/* 🔹 Contador de preguntas */}
                <p className="question-counter text-center text-gray-600 mb-3">
                  Pregunta {currentQuestion + 1} de {test.questions.length}
                </p>
  
                {/* 🔹 Pregunta actual */}
                <h2 className="question">{test.questions[currentQuestion].text}</h2>
  
                {/* 🔹 Opciones de respuesta */}
                <div className="options">
                  {test.questions[currentQuestion].options.map((option, index) => (
                    <Button key={index} className="option-button" onClick={() => handleAnswer(index)}>
                      {option}
                    </Button>
                  ))}
                </div>
  
                {/* 🔹 Botones de navegación */}
                <div className="flex justify-center mt-6">
                    <Button 
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                            currentQuestion === 0 
                            ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500"  
                            : "bg-gray-600 hover:bg-gray-700 text-white"
                        }`} 
                        onClick={goToPreviousQuestion} 
                        disabled={currentQuestion === 0}
                        >
                        <FaArrowLeft /> Atrás
                    </Button>
                </div>
              </>
            ) : (
              <div className="results">
                <h2 className="text-xl font-bold text-center text-primary">Resultados</h2>
                <p className="text-center text-gray-700 font-semibold">
                  Tu puntaje es <span className="text-2xl text-blue-500">{totalScore}</span> de un máximo de {test.questions.length * 4}.
                </p>
                <p className="results-text text-center text-gray-700">{getRecommendation()}</p>
  
                {/* 🔹 Mensaje de ayuda */}
                <div className="help-box bg-red-100 border border-red-500 text-red-700 px-4 py-3 rounded mt-4 text-center">
                  <strong>¡Podemos ayudarte! ❤️</strong>  
                  Si necesitas apoyo, la <span className="font-semibold">Fundación Ressurgir</span> está aquí para brindarte asesoramiento y orientación.
                </div>
  
                {/* 🔹 Botones mejorados */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
                  <Button className="restart-button bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg" onClick={() => window.location.reload()}>
                    🔄 Repetir Test
                  </Button>
                  <Button className="back-button bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg" onClick={() => navigate('/tests')}>
                    🔙 Volver a Tests
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  };
  
  export default TestPage;