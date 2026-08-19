import React, { useState } from 'react';
import { OlympiadExamId, GradeLevel, Question } from '../../types/olympiad';
import { OLYMPIAD_EXAMS } from '../../data/olympiadExams';
import { GRADE_CURRICULUMS } from '../../data/gradeCurriculums';
import { generateAiQuestion } from '../../services/aiService';
import { Sparkles, Brain, RefreshCw, CheckCircle, XCircle, HelpCircle, Play } from 'lucide-react';
import { RichMathText } from '../common/LatexRenderer';
import { playSuccessSound, playErrorSound, playClickSound } from '../../services/audioService';
import { triggerConfettiCelebration } from '../common/ConfettiCelebration';

interface AiQuestionGeneratorProps {
  currentGrade: GradeLevel;
  onOpenAiHint: (q: Question) => void;
}

export const AiQuestionGenerator: React.FC<AiQuestionGeneratorProps> = ({
  currentGrade,
  onOpenAiHint
}) => {
  const [selectedExam, setSelectedExam] = useState<OlympiadExamId>('IMO');
  const [grade, setGrade] = useState<GradeLevel>(currentGrade);
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Achiever'>('Intermediate');
  const [customTopic, setCustomTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedQuestion, setGeneratedQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const curriculum = GRADE_CURRICULUMS[grade];
  const subjectChapters = curriculum?.subjects.find(s => s.examId === selectedExam)?.chapters || [];

  const handleGenerate = async () => {
    playClickSound();
    setLoading(true);
    setSelectedOption(null);
    setIsAnswered(false);

    const topic = customTopic.trim() || (subjectChapters[0]?.name || 'Core Problem Solving');

    try {
      const q = await generateAiQuestion(selectedExam, grade, topic, difficulty);
      setGeneratedQuestion(q);
    } catch (e) {
      console.warn('AI generator fallback', e);
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered || !generatedQuestion) return;
    playClickSound();
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === generatedQuestion.correctOptionIndex) {
      playSuccessSound();
      triggerConfettiCelebration();
    } else {
      playErrorSound();
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Generator Controls Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-xl">
            ✨
          </div>
          <div>
            <h3 className="font-extrabold text-white text-lg">Infinite AI Question Generator</h3>
            <p className="text-xs text-slate-400">Generate brand new unlimited Olympiad problems on any subject or topic</p>
          </div>
        </div>

        {/* Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* Exam Selector */}
          <div>
            <label className="block text-slate-300 font-bold mb-1.5">Olympiad Exam</label>
            <select
              value={selectedExam}
              onChange={e => setSelectedExam(e.target.value as OlympiadExamId)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
            >
              {Object.values(OLYMPIAD_EXAMS).map(ex => (
                <option key={ex.id} value={ex.id}>{ex.name} ({ex.fullName})</option>
              ))}
            </select>
          </div>

          {/* Grade Selector */}
          <div>
            <label className="block text-slate-300 font-bold mb-1.5">Class / Grade</label>
            <select
              value={grade}
              onChange={e => setGrade(Number(e.target.value) as GradeLevel)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                <option key={g} value={g}>Class {g}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-slate-300 font-bold mb-1.5">Difficulty Tier</label>
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-semibold focus:outline-none focus:border-indigo-500"
            >
              <option value="Beginner">Beginner (Foundation)</option>
              <option value="Intermediate">Intermediate (Standard SOF)</option>
              <option value="Advanced">Advanced (High Tier)</option>
              <option value="Achiever">Achiever Section (HOTS 2x)</option>
            </select>
          </div>
        </div>

        {/* Custom Topic Input */}
        <div>
          <label className="block text-xs font-bold text-slate-300 mb-1.5">Chapter / Topic (Optional)</label>
          <input
            type="text"
            placeholder="e.g. Rational Numbers, Plant Photosynthesis, Python Lists, Tenses..."
            value={customTopic}
            onChange={e => setCustomTopic(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-black text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Sparkles className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          {loading ? 'Synthesizing Olympiad Question...' : 'Generate New Olympiad Question'}
        </button>
      </div>

      {/* Generated Question Display */}
      {generatedQuestion && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6 animate-fade-in">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs">
                {generatedQuestion.examId} • Grade {generatedQuestion.grade}
              </span>
              <span className="text-xs text-slate-400 font-medium">{generatedQuestion.chapter}</span>
            </div>

            <button
              onClick={() => onOpenAiHint(generatedQuestion)}
              className="flex items-center gap-1 text-pink-400 hover:text-pink-300 font-bold text-xs transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Hint Ladder</span>
            </button>
          </div>

          {/* Question Text */}
          <div className="text-base font-medium text-white leading-relaxed p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
            <RichMathText text={generatedQuestion.questionText} />
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {generatedQuestion.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === generatedQuestion.correctOptionIndex;

              let btnStyle = 'bg-slate-800/70 border-slate-700/80 text-slate-200 hover:bg-slate-750';
              if (isAnswered) {
                if (isCorrect) btnStyle = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold';
                else if (isSelected) btnStyle = 'bg-rose-500/20 border-rose-500/50 text-rose-300 font-bold';
                else btnStyle = 'bg-slate-850 border-slate-800 text-slate-500 opacity-60';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <RichMathText text={opt} />
                  </div>
                  {isAnswered && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 space-y-2 animate-fade-in">
              <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Step-by-Step Solution:
              </span>
              <p className="text-xs text-slate-200 leading-relaxed">
                {generatedQuestion.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
