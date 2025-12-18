
import React, { useState } from 'react';
import { ExerciseItem } from '../types';

interface ExerciseCardProps {
  exercise: ExerciseItem;
  index: number;
}

const ExerciseCard: React.FC<ExerciseCardProps> = ({ exercise, index }) => {
  const [userInput, setUserInput] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');

  const checkAnswer = () => {
    const normalizedInput = userInput.trim().toLowerCase().replace(/[.,?!]/g, "");
    const normalizedCorrect = exercise.correctAnswer.trim().toLowerCase().replace(/[.,?!]/g, "");
    
    if (normalizedInput === normalizedCorrect) {
      setStatus('correct');
    } else {
      setStatus('incorrect');
    }
  };

  return (
    <div className={`p-6 rounded-xl border-2 transition-all ${
      status === 'correct' ? 'border-green-500 bg-green-50' : 
      status === 'incorrect' ? 'border-red-500 bg-red-50' : 
      'border-slate-200 bg-white shadow-sm'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-bold text-sm">
          {index + 1}
        </span>
        <p className="text-slate-800 font-medium">{exercise.portuguese}</p>
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
            setStatus('idle');
          }}
          placeholder="Traduza para o inglês..."
          className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={checkAnswer}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          Checar
        </button>
      </div>

      {status === 'correct' && (
        <p className="mt-3 text-green-700 text-sm font-medium flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          Excelente! Resposta correta.
        </p>
      )}
      {status === 'incorrect' && (
        <div className="mt-3">
          <p className="text-red-700 text-sm font-medium flex items-center gap-2 mb-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            Tente novamente.
          </p>
          <p className="text-slate-500 text-xs">Resposta sugerida: <span className="font-mono">{exercise.correctAnswer}</span></p>
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;
