
import React, { useState, useEffect } from 'react';
import { lessons } from './lessonsData';
import LessonView from './components/LessonView';
import { Lesson } from './types';

const App: React.FC = () => {
  const [selectedLessonId, setSelectedLessonId] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Basic loading delay for smoother entry
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const selectedLesson = lessons.find(l => l.id === selectedLessonId);

  if (!isLoaded) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => setSelectedLessonId(null)}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-black text-xl">F</span>
            </div>
            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-700">Fluentify</span>
          </div>
          <div className="flex gap-4">
            <span className="text-sm font-semibold text-slate-400 hidden sm:block">Aprenda Inglês Passo a Passo</span>
          </div>
        </div>
      </nav>

      {selectedLesson ? (
        <LessonView 
          lesson={selectedLesson} 
          onBack={() => setSelectedLessonId(null)} 
        />
      ) : (
        <main className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Suas Próximas Lições</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">Domine a gramática, melhore sua audição e pratique a escrita com nosso conteúdo interativo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id}
                onClick={() => setSelectedLessonId(lesson.id)}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                   <span className="text-8xl font-black text-slate-400">{lesson.id}</span>
                </div>
                
                <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
                  Módulo Intermediário
                </span>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {lesson.title}
                </h3>
                
                <p className="text-slate-500 font-medium mb-8 min-h-[3rem]">
                  {lesson.topic}
                </p>

                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-4 transition-all">
                  Começar agora
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Footer */}
      {!selectedLessonId && (
        <footer className="mt-12 text-center text-slate-400 py-10 border-t border-slate-200">
          <p>© 2024 Fluentify English. Nível Básico/Intermediário.</p>
        </footer>
      )}
    </div>
  );
};

export default App;
