
import React, { useState } from 'react';
import { Lesson } from '../types';
import AudioButton from './AudioButton';
import ExerciseCard from './ExerciseCard';
// Fix: Added missing import for playAudio from geminiService
import { playAudio } from '../geminiService';

interface LessonViewProps {
  lesson: Lesson;
  onBack: () => void;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson, onBack }) => {
  const [activeTab, setActiveTab] = useState<'vocabulary' | 'phrases' | 'exercises' | 'dialogue'>('vocabulary');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button 
        onClick={onBack}
        className="mb-6 flex items-center text-slate-500 hover:text-blue-600 transition-colors"
      >
        <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        Voltar para Lições
      </button>

      <header className="mb-8 bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-2">{lesson.title}</h1>
        <p className="text-blue-100 text-lg uppercase tracking-wider font-semibold">{lesson.topic}</p>
      </header>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {(['vocabulary', 'phrases', 'exercises', 'dialogue'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-4 font-semibold text-sm transition-all border-b-2 capitalize ${
              activeTab === tab 
                ? 'border-blue-600 text-blue-600' 
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab === 'vocabulary' ? 'Vocabulário' : 
             tab === 'phrases' ? 'Frases' : 
             tab === 'exercises' ? 'Exercícios' : 'Diálogo'}
          </button>
        ))}
      </div>

      <main className="animate-in fade-in duration-500">
        {activeTab === 'vocabulary' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.vocabulary.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
                <div>
                  <p className="text-lg font-bold text-slate-900">{item.english}</p>
                  <p className="text-slate-500 italic">{item.portuguese}</p>
                </div>
                <AudioButton text={item.english} />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'phrases' && (
          <div className="space-y-4">
            {lesson.phrases.map((item, idx) => (
              <div key={idx} className="p-5 bg-white border border-slate-200 rounded-xl hover:border-blue-200 transition-colors">
                <div className="flex justify-between items-start">
                  <div className="flex-1 pr-4">
                    <p className="text-xl font-semibold text-slate-800 leading-tight mb-2">{item.english}</p>
                    <p className="text-slate-600">{item.portuguese}</p>
                  </div>
                  <AudioButton text={item.english} />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'exercises' && (
          <div className="space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
              <p className="text-amber-800 font-medium">Instrução: Traduza as frases abaixo do português para o inglês.</p>
            </div>
            {lesson.exercises.map((item, idx) => (
              <ExerciseCard key={idx} exercise={item} index={idx} />
            ))}
          </div>
        )}

        {activeTab === 'dialogue' && (
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex justify-center mb-8">
               <div className="bg-slate-100 p-4 rounded-full flex gap-4">
                  <button 
                    onClick={() => playAudio(lesson.dialogue.map(d => `${d.speaker} says: ${d.text}`).join(". "))}
                    className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-bold"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Ouvir Diálogo Completo
                  </button>
               </div>
            </div>
            <div className="space-y-6">
              {lesson.dialogue.map((line, idx) => (
                <div key={idx} className={`flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${idx % 2 === 0 ? 'bg-white rounded-bl-none border border-slate-100' : 'bg-blue-50 rounded-br-none border border-blue-100'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-xs uppercase text-slate-400">{line.speaker}</span>
                      <AudioButton text={line.text} size="sm" className="bg-transparent text-slate-400 hover:text-blue-500" />
                    </div>
                    <p className="text-slate-900 font-medium text-lg leading-relaxed">{line.text}</p>
                    <p className="text-slate-500 text-sm italic mt-1">{line.translation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default LessonView;
