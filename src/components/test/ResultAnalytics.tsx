import React, { useState, useEffect } from 'react';
import { TestAttemptResult, Question } from '../../types/olympiad';
import { Trophy, CheckCircle, XCircle, Clock, Sparkles, Brain, RotateCcw, ChevronRight, HelpCircle, ArrowLeft, Zap } from 'lucide-react';
import { triggerGrandChampionFireworks, triggerConfettiCelebration } from '../common/ConfettiCelebration';
import { RichMathText } from '../common/LatexRenderer';
import { playClickSound } from '../../services/audioService';

interface ResultAnalyticsProps {
  result: TestAttemptResult;
  questions: Question[];
  onRetakeTest: () => void;
  onBackToDashboard: () => void;
  onAskAiDoubt: (q: Question) => void;
}

export const ResultAnalytics: React.FC<ResultAnalyticsProps> = ({
  result,
  questions,
  onRetakeTest,
  onBackToDashboard,
  onAskAiDoubt
}) => {
  const [reviewFilter, setReviewFilter] = useState<'all' | 'incorrect' | 'correct' | 'achievers'>('all');

  useEffect(() => {
    if (result.percentage >= 80) {
      triggerGrandChampionFireworks();
    } else {
      triggerConfettiCelebration();
    }
  }, [result]);

  const getMedalInfo = (pct: number) => {
    if (pct >= 90) return { title: 'Gold Medal Distinction 🥇', color: 'from-amber-400 to-yellow-600', badge: 'International Gold Rank' };
    if (pct >= 75) return { title: 'Silver Medalist 🥈', color: 'from-slate-300 to-slate-500', badge: 'School Top Rank' };
    if (pct >= 60) return { title: 'Bronze Medalist 🥉', color: 'from-amber-600 to-amber-800', badge: 'State Rank Finalist' };
    return { title: 'Certificate of Merit 🎖️', color: 'from-indigo-500 to-purple-600', badge: 'Olympiad Participant' };
  };

  const medal = getMedalInfo(result.percentage);

  const filteredQuestions = questions.map((q, originalIdx) => {
    const userChoice = result.userAnswers[originalIdx];
    const isCorrect = userChoice === q.correctOptionIndex;
    const isAnswered = userChoice !== undefined;
    return { q, originalIdx, userChoice, isCorrect, isAnswered };
  }).filter(({ q, isCorrect, isAnswered }) => {
    if (reviewFilter === 'correct') return isCorrect;
    if (reviewFilter === 'incorrect') return isAnswered && !isCorrect;
    if (reviewFilter === 'achievers') return q.section === 'achievers' || q.isLevel2;
    return true;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fade-in pb-16">
      {/* 1. Champion Header Card */}
      <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/60 to-purple-950 border border-indigo-500/30 shadow-2xl text-center relative overflow-hidden">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 to-yellow-600 flex items-center justify-center text-4xl shadow-lg shadow-amber-500/30 mb-4 animate-bounce-slow">
          🏆
        </div>

        <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider">
          {medal.badge}
        </span>

        <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
          {medal.title}
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-lg mx-auto">
          Completed <strong className="text-white">{result.testTitle}</strong> with excellence!
        </p>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mt-6">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium uppercase">Score</span>
            <div className="text-2xl font-black text-indigo-400 mt-0.5">
              {result.score} <span className="text-xs text-slate-400">/ {result.totalMarks}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium uppercase">Accuracy</span>
            <div className="text-2xl font-black text-emerald-400 mt-0.5">
              {result.percentage}%
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium uppercase">Correct / Total</span>
            <div className="text-2xl font-black text-purple-400 mt-0.5">
              {result.correctCount} <span className="text-xs text-slate-400">/ {result.totalQuestions}</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-slate-400 font-medium uppercase">Time Taken</span>
            <div className="text-2xl font-black text-amber-400 mt-0.5">
              {Math.floor(result.timeTakenSeconds / 60)}m {result.timeTakenSeconds % 60}s
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <button
            onClick={() => { playClickSound(); onRetakeTest(); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Retake Test
          </button>

          <button
            onClick={() => { playClickSound(); onBackToDashboard(); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Explore
          </button>
        </div>
      </div>

      {/* 2. Section-Wise Breakdown */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400" /> Section-Wise Performance & Achiever Weightage
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(result.sectionBreakdown).map(([secKey, stats]) => {
            const secAcc = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
            const isAchiever = secKey === 'achievers';

            return (
              <div 
                key={secKey}
                className={`p-4 rounded-2xl border ${
                  isAchiever ? 'bg-amber-500/10 border-amber-500/30' : 'bg-slate-800/60 border-slate-700/60'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${isAchiever ? 'text-amber-400' : 'text-slate-300'}`}>
                    {secKey === 'logical' ? 'Logical' : secKey === 'subject' ? 'Subject Core' : secKey === 'everyday' ? 'Everyday' : 'Achievers (HOTS)'}
                  </span>
                  <span className="text-xs font-extrabold text-white">{secAcc}%</span>
                </div>
                <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden my-2">
                  <div 
                    className={`h-full rounded-full ${isAchiever ? 'bg-amber-400' : 'bg-indigo-500'}`}
                    style={{ width: `${secAcc}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{stats.correct} / {stats.total} correct</span>
                  <span>{stats.marks} pts</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Detailed Question Review List */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" /> Step-by-Step Question Review & AI Explanations
          </h3>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[
              { id: 'all', label: `All (${questions.length})` },
              { id: 'incorrect', label: `Incorrect (${result.incorrectCount})` },
              { id: 'correct', label: `Correct (${result.correctCount})` },
              { id: 'achievers', label: `Achievers Section` },
            ].map(f => (
              <button
                key={f.id}
                onClick={() => { playClickSound(); setReviewFilter(f.id as any); }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  reviewFilter === f.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-850 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-4">
          {filteredQuestions.map(({ q, originalIdx, userChoice, isCorrect, isAnswered }) => (
            <div
              key={q.id || originalIdx}
              className={`p-6 rounded-3xl border transition-all ${
                isCorrect
                  ? 'bg-slate-900/90 border-emerald-500/30'
                  : !isAnswered
                  ? 'bg-slate-900/90 border-slate-700'
                  : 'bg-slate-900/90 border-rose-500/30'
              }`}
            >
              {/* Question Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-800 text-xs font-bold text-slate-300">
                    Q{originalIdx + 1}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {q.examId} • {q.chapter}
                  </span>
                  {q.section === 'achievers' && (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] uppercase">
                      Achiever HOTS (2x Marks)
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {isCorrect ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-xl border border-emerald-500/30">
                      <CheckCircle className="w-3.5 h-3.5" /> Correct (+{q.marks || 1})
                    </span>
                  ) : !isAnswered ? (
                    <span className="text-xs font-semibold text-slate-400 bg-slate-800 px-2.5 py-1 rounded-xl">
                      Unanswered (0)
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-xl border border-rose-500/30">
                      <XCircle className="w-3.5 h-3.5" /> Incorrect (0)
                    </span>
                  )}

                  <button
                    onClick={() => { playClickSound(); onAskAiDoubt(q); }}
                    className="flex items-center gap-1 px-3 py-1 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs font-semibold transition-colors"
                  >
                    <Brain className="w-3.5 h-3.5" /> Ask AI Doubt
                  </button>
                </div>
              </div>

              {/* Question Text */}
              <div className="text-sm font-medium text-white mb-4 leading-relaxed">
                <RichMathText text={q.questionText} />
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                {q.options.map((opt, optIdx) => {
                  const isUserSelection = userChoice === optIdx;
                  const isCorrectChoice = optIdx === q.correctOptionIndex;

                  let optClass = 'bg-slate-800/50 border-slate-700 text-slate-300';
                  if (isCorrectChoice) {
                    optClass = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-200 font-bold';
                  } else if (isUserSelection && !isCorrectChoice) {
                    optClass = 'bg-rose-500/20 border-rose-500/50 text-rose-200 line-through';
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-3 rounded-2xl border text-xs flex items-center justify-between gap-2 ${optClass}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center font-bold text-[10px]">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <RichMathText text={opt} />
                      </div>
                      {isCorrectChoice && <span className="text-[10px] uppercase font-black text-emerald-400">Correct</span>}
                      {isUserSelection && !isCorrectChoice && <span className="text-[10px] uppercase font-black text-rose-400">Your Choice</span>}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Box */}
              <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300 space-y-1">
                <div className="font-bold text-indigo-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Complete Step-by-Step Solution:
                </div>
                <p className="leading-relaxed text-slate-200">
                  {q.explanation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
