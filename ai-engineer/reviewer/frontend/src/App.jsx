import React, { useState, useEffect } from 'react';
import { CreateCard } from './features/cards/CreateCard';
import { CardList } from './features/cards/CardList';
import { TodayReviews } from './features/reviews/TodayReviews';
import { StudyPlan } from './features/studyPlan/StudyPlan';
import { cardApi } from './shared/api/cardApi';
import { Button } from './shared/ui/button';
import { LayoutGrid, Calendar, ListTodo, Settings } from 'lucide-react';

function App() {
  const [view, setView] = useState('today'); 
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await cardApi.getCards();
      setCards(response.data);
    } catch (error) {
      console.error('Failed to fetch cards', error);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <ListTodo className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Reviewer</h1>
              <p className="text-slate-500 text-sm font-medium">Plano de Estudo Guiado</p>
            </div>
          </div>
          
          <nav className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex gap-1">
            <Button 
              variant={view === 'today' ? 'default' : 'ghost'}
              className={view === 'today' ? 'bg-blue-600 shadow-md' : 'text-slate-600'}
              onClick={() => setView('today')}
            >
              <LayoutGrid className="h-4 w-4 mr-2" /> Hoje
            </Button>
            <Button 
              variant={view === 'plan' ? 'default' : 'ghost'}
              className={view === 'plan' ? 'bg-blue-600 shadow-md' : 'text-slate-600'}
              onClick={() => setView('plan')}
            >
              <Calendar className="h-4 w-4 mr-2" /> Plano de Estudo
            </Button>
            <Button 
              variant={view === 'manage' ? 'default' : 'ghost'}
              className={view === 'manage' ? 'bg-blue-600 shadow-md' : 'text-slate-600'}
              onClick={() => setView('manage')}
            >
              <Settings className="h-4 w-4 mr-2" /> Gerenciar
            </Button>
          </nav>
        </header>

        <main className="animate-in fade-in duration-500">
          {view === 'today' && (
            <TodayReviews onReviewComplete={fetchCards} />
          )}
          
          {view === 'plan' && (
            <StudyPlan />
          )}
          
          {view === 'manage' && (
            <div className="space-y-8 max-w-4xl mx-auto">
              <CreateCard onCardCreated={fetchCards} />
              <CardList cards={cards} onCardDeleted={fetchCards} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
