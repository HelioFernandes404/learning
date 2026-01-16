import React, { useState, useEffect } from 'react';
import { cardApi } from '../../shared/api/cardApi';
import { Button } from '../../shared/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../../shared/ui/card';
import { CheckCircle2, Circle } from 'lucide-react';

const questions = [
  { id: 'q1', text: 'Implementei 3+ funções/modelos esta semana?' },
  { id: 'q2', text: 'Consegui refazer algo do D2 sem olhar?' },
  { id: 'q3', text: 'Projeto do sábado está funcional?' },
  { id: 'q4', text: 'Cards de revisão estão em dia?' },
  { id: 'q5', text: 'Estou em ritmo (20h/semana)?' },
];

export const WeeklyCheckIn = () => {
  const [answers, setAnswers] = useState({
    q1: false, q2: false, q3: false, q4: false, q5: false
  });
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await cardApi.getTodayCheckIn();
        if (response.data) {
          setCompleted(true);
        }
      } catch (error) {
        console.error('Error checking check-in status', error);
      } finally {
        setLoading(false);
      }
    };
    checkStatus();
  }, []);

  const toggleAnswer = (id) => {
    setAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSubmit = async () => {
    try {
      await cardApi.submitCheckIn(answers);
      setCompleted(true);
    } catch (error) {
      console.error('Error submitting check-in', error);
    }
  };

  const isSunday = new Date().getDay() === 0;

  if (!isSunday && !completed) return null;
  if (loading) return null;
  if (completed) return (
    <Card className="bg-green-50 border-green-200">
      <CardContent className="pt-6">
        <div className="flex items-center gap-2 text-green-700">
          <CheckCircle2 className="h-5 w-5" />
          <p className="font-medium">Check-in semanal concluído! Bom descanso.</p>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Card className="border-blue-200 shadow-md">
      <CardHeader className="bg-blue-50">
        <CardTitle className="text-blue-800 text-lg">Check-in Semanal (Domingo)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {questions.map((q) => (
          <div 
            key={q.id} 
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors"
            onClick={() => toggleAnswer(q.id)}
          >
            <span className="text-sm font-medium text-slate-700">{q.text}</span>
            {answers[q.id] ? (
              <CheckCircle2 className="h-6 w-6 text-blue-600" />
            ) : (
              <Circle className="h-6 w-6 text-slate-300" />
            )}
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700" 
          onClick={handleSubmit}
        >
          Finalizar Check-in
        </Button>
      </CardFooter>
    </Card>
  );
};
