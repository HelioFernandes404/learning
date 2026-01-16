import React, { useState, useEffect } from 'react';
import { cardApi } from '@/shared/api/cardApi';
import { Button } from '@/shared/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';
import { Check, X, Info } from 'lucide-react';
import { WeeklyCheckIn } from './WeeklyCheckIn';
import { PaceRecommendations } from './PaceRecommendations';

export function TodayReviews({ onReviewComplete }) {
  const [pendingCards, setPendingCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPace, setShowPace] = useState(false);

  const fetchToday = async () => {
    try {
      const response = await cardApi.getTodayCards();
      setPendingCards(response.data);
      setCurrentIndex(0);
    } catch (error) {
      console.error('Failed to fetch today cards', error);
    }
  };

  useEffect(() => {
    fetchToday();
  }, []);

  const handleReview = async (success) => {
    const card = pendingCards[currentIndex];
    try {
      await cardApi.reviewCard(card.id, success);
      if (currentIndex + 1 < pendingCards.length) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setPendingCards([]);
        if (onReviewComplete) onReviewComplete();
      }
    } catch (error) {
      console.error('Failed to review card', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <WeeklyCheckIn />
        
        {pendingCards.length > 0 ? (
          <Card className="shadow-lg border-2 border-slate-100">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="text-center text-slate-700">
                Sessão de Estudo ({currentIndex + 1}/{pendingCards.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8 pt-8">
              <div className="text-2xl font-bold text-center p-12 border-2 border-slate-200 rounded-xl bg-white shadow-inner">
                {pendingCards[currentIndex].question}
              </div>
              <div className="flex justify-center space-x-4">
                <Button 
                  variant="destructive" 
                  size="lg" 
                  className="flex-1 h-14 text-lg"
                  onClick={() => handleReview(false)}
                >
                  <X className="mr-2 h-6 w-6" /> Reiniciar (D2)
                </Button>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="flex-1 h-14 text-lg bg-green-600 hover:bg-green-700 shadow-md"
                  onClick={() => handleReview(true)}
                >
                  <Check className="mr-2 h-6 w-6" /> Avançar
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="shadow-md border-2 border-dashed border-slate-200 bg-slate-50">
            <CardContent className="p-12 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Tudo em dia!</h3>
              <p className="text-slate-500 mb-6">Você revisou todos os tópicos planejados para hoje.</p>
              <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50" onClick={fetchToday}>
                Recarregar cards
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="space-y-6">
        <Button 
          variant="outline" 
          className="w-full flex justify-between items-center"
          onClick={() => setShowPace(!showPace)}
        >
          <span>Orientações de Ritmo</span>
          <Info className="h-4 w-4" />
        </Button>
        
        {(showPace || pendingCards.length > 0) && (
          <PaceRecommendations pendingCount={pendingCards.length} />
        )}
      </div>
    </div>
  );
}