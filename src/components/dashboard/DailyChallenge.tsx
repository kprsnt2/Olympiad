import React, { useState } from 'react';
import { Flame, CheckCircle, XCircle, Sparkles, ChevronRight, HelpCircle, Trophy, RotateCcw } from 'lucide-react';
import { Question, UserProfile } from '../../types/olympiad';
import { QUESTION_BANK } from '../../data/questionBank';
import { playSuccessSound, playErrorSound, playClickSound } from '../../services/audioService';
import { triggerConfettiCelebration } from '../common/ConfettiCelebration';
import { RichMathText } from '../common/LatexRenderer';

interface DailyChallengeProps {
  userProfile: UserProfile;
  onQuestionSolved: (xpGained: number) => void;
  onOpenAiHint: (q: Question) => void;
}

export const DailyChallenge: React.FC<DailyChallengeProps> = ({
  userProfile,
  onQuestionSolved,
  onOpenAiHint
}) => {
  // Get 3 questions matching user's grade
  const dailyQuestions = QUESTION_BANK.filter(q => q.grade === userProfile.grade).slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentQ = dailyQuestions[currentIndex] || QUESTION_BANK[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    playClickSound();
    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctOptionIndex) {
      playSuccessSound();
      setScore(prev => prev + 1);
      triggerConfettiCelebration();
      onQuestionSolved(20); // 20 XP for correct daily challenge question
    } else {
      playErrorSound();
      onQuestionSolved(5); // 5 XP for effort
    }
  };

  const handleNext = () => {
    playClickSound();
    if (currentIndex + 1 < dailyQuestions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    playClickSound();
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCompleted(false);
  };

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-xl mb-8 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
            <Flame className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Daily Olympiad Arena</h2>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-[10px] uppercase">
                {userProfile.streakDays} Day Streak 🔥
              </span>
            </div>
            <p className="text-xs text-slate-400">3 daily speed questions to sharpen your logic and earn bonus XP</p>
          </div>
        </div>

        {!completed && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-300 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
            <span>Question {currentIndex + 1} of {dailyQuestions.length}</span>
          </div>
        )}
      </div>

      {completed ? (
        /* Completed State */
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-3xl shadow-lg shadow-amber-500/20 animate-bounce-slow">
            🏆
          </div>
          <div>
            <h3 className="text-2xl font-black text-white">Daily Arena Completed!</h3>
            <p className="text-sm text-slate-300 mt-1">
              You scored <strong className="text-amber-400 font-bold">{score} / {dailyQuestions.length}</strong> today.
            </p>
            <p className="text-xs text-slate-400 mt-0.5">+50 Bonus Daily Streak XP Earned!</p>
          </div>
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Practice Again
          </button>
        </div>
      ) : (
        /* Question Active State */
        <div className="space-y-5">
          {/* Question Meta */}
          <div className="flex items-center justify-between text-xs">
            <span className="px-2.5 py-1 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-semibold">
              {currentQ.examId} • {currentQ.chapter}
            </span>
            <button
              onClick={() => onOpenAiHint(currentQ)}
              className="flex items-center gap-1 text-pink-400 hover:text-pink-300 font-semibold transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Need a Hint?</span>
            </button>
          </div>

          {/* Question Text */}
          <div className="text-sm sm:text-base font-medium text-white leading-relaxed bg-slate-800/40 p-4 rounded-2xl border border-slate-800">
            <RichMathText text={currentQ.questionText} />
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctOptionIndex;

              let btnStyle = 'bg-slate-800/70 border-slate-700/80 text-slate-200 hover:bg-slate-700/80 hover:border-slate-600';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 font-bold';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-500/20 border-rose-500/50 text-rose-300 font-bold';
                } else {
                  btnStyle = 'bg-slate-850 border-slate-800 text-slate-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${btnStyle}`}
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

          {/* Explanation & Next */}
          {isAnswered && (
            <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Explanation & Olympiad Concept
                </span>
                <button
                  onClick={handleNext}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
                >
                  {currentIndex + 1 === dailyQuestions.length ? 'See Results' : 'Next Question'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
