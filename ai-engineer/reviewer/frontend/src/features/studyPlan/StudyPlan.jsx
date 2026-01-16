import React, { useState, useEffect } from 'react';
import { cardApi } from '../../shared/api/cardApi';
import { Card, CardHeader, CardTitle, CardContent } from '../../shared/ui/card';
import { Button } from '../../shared/ui/button';
import { Input } from '../../shared/ui/input';
import { PlusCircle, Calendar } from 'lucide-react';

export const StudyPlan = () => {
  const [months, setMonths] = useState([]);
  const [cards, setCards] = useState([]);
  const [newMonthTitle, setNewMonthTitle] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [monthsRes, cardsRes] = await Promise.all([
        cardApi.getMonths(),
        cardApi.getCards()
      ]);
      setMonths(monthsRes.data);
      setCards(cardsRes.data);
    } catch (error) {
      console.error('Error fetching study plan', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMonth = async () => {
    if (!newMonthTitle) return;
    try {
      await cardApi.createMonth({
        title: newMonthTitle,
        number: months.length + 1
      });
      setNewMonthTitle('');
      fetchData();
    } catch (error) {
      console.error('Error adding month', error);
    }
  };

  if (loading) return <div className="p-8 text-center">Carregando plano de estudo...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="h-6 w-6 text-blue-600" /> Plano de Estudo
        </h2>
        <div className="flex gap-2">
          <Input 
            placeholder="Novo Mês (ex: Fundamentos)" 
            value={newMonthTitle}
            onChange={(e) => setNewMonthTitle(e.target.value)}
            className="w-64"
          />
          <Button onClick={handleAddMonth} size="sm">
            <PlusCircle className="h-4 w-4 mr-2" /> Adicionar Mês
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {months.map((month) => {
          const monthCards = cards.filter(c => c.month_id === month.id);
          return (
            <Card key={month.id} className="hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>Mês {month.number}: {month.title}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {monthCards.length} cards
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {monthCards.length > 0 ? (
                    monthCards.slice(0, 5).map(card => (
                      <div key={card.id} className="text-sm border-b pb-1 last:border-0 truncate text-slate-600">
                        • {card.question}
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-400 italic">Nenhum card associado</p>
                  )}
                  {monthCards.length > 5 && (
                    <p className="text-xs text-blue-600 font-medium">+{monthCards.length - 5} mais...</p>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
        {months.length === 0 && (
          <div className="col-span-full p-12 text-center border-2 border-dashed rounded-xl bg-slate-50">
            <p className="text-slate-500">Nenhum mês cadastrado. Comece adicionando o "Mês 1".</p>
          </div>
        )}
      </div>
    </div>
  );
};
