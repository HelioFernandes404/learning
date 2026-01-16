import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../../shared/ui/card';
import { Rocket, Gauge, BookOpen } from 'lucide-react';

export const PaceRecommendations = ({ pendingCount }) => {
  // Simple heuristic for pace
  // If many cards pending (> 10), maybe slow down
  // If few cards, maybe speed up
  
  return (
    <div className="space-y-4">
      {pendingCount < 5 && (
        <Card className="border-orange-100 bg-orange-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold flex items-center gap-2 text-orange-800">
              <Rocket className="h-4 w-4" /> Se estiver rápido demais
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-orange-700 space-y-1">
            <p>• Aprofundar (papers, variações)</p>
            <p>• Contribuir open source</p>
            <p>• Avançar especialização</p>
          </CardContent>
        </Card>
      )}

      {pendingCount > 15 && (
        <Card className="border-blue-100 bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-bold flex items-center gap-2 text-blue-800">
              <Gauge className="h-4 w-4" /> Se estiver lento demais
            </CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-blue-700 space-y-1">
            <p>• Reduzir projetos</p>
            <p>• Cortar tópicos opcionais</p>
            <p>• Aumentar horas semanais</p>
          </CardContent>
        </Card>
      )}

      <Card className="border-slate-100 bg-slate-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-bold flex items-center gap-2 text-slate-800">
            <BookOpen className="h-4 w-4" /> Dificuldade de leitura?
          </CardTitle>
        </CardHeader>
        <CardContent className="text-xs text-slate-700 space-y-1">
          <p>• Usar TTS (Text-to-Speech)</p>
          <p>• Priorizar vídeos</p>
          <p>• Implementar antes de ler</p>
        </CardContent>
      </Card>
    </div>
  );
};
