import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@components/ui/card';
import { Button } from '@components/ui/button';
import { Progress } from '@components/ui/progress';
import '@styles/AlcoholAddictionTest.css'; 

const AlcoholAddictionTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      text: "¿Con qué frecuencia consumes alcohol?",
      options: [
        { text: "Nunca", score: 0 },
        { text: "Mensualmente", score: 1 },
        { text: "Semanalmente", score: 2 },
        { text: "A diario", score: 3 }
      ]
    },
    {
      text: "¿Has intentado reducir el consumo de alcohol sin éxito?",
      options: [
        { text: "Nunca", score: 0 },
        { text: "Pocas veces", score: 1 },
        { text: "Varias veces", score: 2 },
        { text: "Constantemente", score: 3 }
      ]
    },
    {
      text: "¿Te resulta difícil pasar el día sin consumir alcohol?",
      options: [
        { text: "Nada difícil", score: 0 },
        { text: "Un poco difícil", score: 1 },
        { text: "Bastante difícil", score: 2 },
        { text: "Muy difícil", score: 3 }
      ]
    }
  ];

  const handleAnswer = (score) => {
    setAnswers([...answers, score]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateResults = () => {
    const totalScore = answers.reduce((sum, score) => sum + score, 0);

    if (totalScore <= 2) return "No parece haber indicios de adicción al alcohol.";
    if (totalScore <= 5) return "Hay algunos indicios de consumo problemático de alcohol.";
    return "Se observan signos claros de adicción al alcohol. Considere buscar ayuda profesional.";
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="test-container">
      <Card className="card">
        <CardHeader className="card-header">
          Test de Adicción al Alcohol
        </CardHeader>
        <CardContent>
          {!showResults ? (
            <div className="space-y-6">
              <Progress value={progress} className="progress-bar" />
              <div className="text-lg font-sans font-medium mt-4">
                {questions[currentQuestion].text}
              </div>
              <div className="space-y-2">
                {questions[currentQuestion].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="option-button"
                    onClick={() => handleAnswer(option.score)}
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="text-xl font-sans font-medium text-center text-primary">
                Resultados del Test
              </div>
              <div className="results-container">
                <p className="results-text">{calculateResults()}</p>
              </div>
              <Button 
                className="restart-button"
                onClick={restartTest}
              >
                Realizar el test nuevamente
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AlcoholAddictionTest;
