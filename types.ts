
export interface VocabularyItem {
  english: string;
  portuguese: string;
}

export interface PhraseItem {
  english: string;
  portuguese: string;
  focus?: string;
}

export interface ExerciseItem {
  portuguese: string;
  correctAnswer: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
}

export interface Lesson {
  id: number;
  title: string;
  topic: string;
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  exercises: ExerciseItem[];
  dialogue: DialogueLine[];
}
