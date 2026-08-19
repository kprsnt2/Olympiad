import React, { useState } from 'react';
import { Flame, CheckCircle, XCircle, Sparkles, ChevronRight, HelpCircle, RotateCcw, Clock, ArrowRight } from 'lucide-react';
import { Question, UserProfile } from '../../types/olympiad';
import { getDailyArenaQuestions } from '../../services/questionRotationService';
import { QUESTION_BANK } from '../../data/questionBank';
import { playSuccessSound, playErrorSound, playClickSound } from '../../services/audioService';
import { triggerConfettiCelebration } from '../common/ConfettiCelebration';
import { RichMathText } from '../common/LatexRenderer';
import { generateAiAdaptiveDrill } from '../../services/aiService';

interface DailyChallengeProps {
  userProfile: UserProfile;
  onQuestionSolved: (xpGained: number) => void;
  onOpenAiHint: (q: Question) => void;
  onOpenPyq?: () => void;
}

export const DailyChallenge: React.FC<DailyChallengeProps> = ({
  userProfile,
  onQuestionSolved,
  onOpenAiHint,
  onOpenPyq
}) => {
  const [dailyQuestions, setDailyQuestions] = useState<Question[]>(() =>
    getDailyArenaQuestions(userProfile.grade, userProfile)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [isGeneratingMore, setIsGeneratingMore] = useState(false);

  const currentQ = dailyQuestions[currentIndex] || QUESTION_BANK[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    playClickSound();
    setSelectedOption(idx);
    setIsAnswered(true);

    if (!userProfile.solvedQuestionIds.includes(currentQ.id)) {
      userProfile.solvedQuestionIds.push(currentQ.id);
    }

    if (idx === currentQ.correctOptionIndex) {
      playSuccessSound();
      setScore(prev => prev + 1);
      triggerConfettiCelebration();
      onQuestionSolved(20);
    } else {
      playErrorSound();
      onQuestionSolved(5);
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

  const handleGenerateMoreAiQuestions = async () => {
    playClickSound();
    setIsGeneratingMore(true);

    try {
      const more = await generateAiAdaptiveDrill(
        'IMO',
        userProfile.grade,
        ['Speed Math & Logic', 'Science Trivia', 'Cyber Problem Solving'],
        3
      );
      setDailyQuestions(more);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setScore(0);
      setCompleted(false);
      playSuccessSound();
      triggerConfettiCelebration();
    } catch (e) {
      console.error('Failed to generate more AI questions', e);
    } finally {
      setIsGeneratingMore(false);
    }
  };

  return (
    <div id="daily-spark" className="space-y-12 my-12">
      {/* 1. TODAY'S TINY WINS TASK CARDS */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[1.7px] text-[#536087]">
              Today’s Tiny Wins
            </span>
            <h2 className="text-3xl font-black tracking-tight text-ink mt-1">
              Pick a spark. Get started.
            </h2>
          </div>
          <p className="text-xs text-[#76809d] max-w-xs font-medium">
            No huge sessions. Just small moments that make your brain brighter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Math Sprint (Yellow) */}
          <div className="p-6 rounded-2xl bg-[#ffdd43] text-ink relative overflow-hidden flex flex-col justify-between min-h-[190px] border-2 border-ink/15 shadow-sm transition-all hover:-translate-y-1">
            <div className="absolute -right-8 -bottom-12 w-36 h-36 rounded-full border border-ink/10 pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-ink/20 shadow-[2px_3px_0_rgba(21,29,68,0.2)] flex items-center justify-center text-xl">
                ⚡
              </div>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full border border-ink/20 bg-white/40">
                8 min
              </span>
            </div>
            <h3 className="text-lg font-black text-ink tracking-tight mt-3">
              Number Ninja Sprint
            </h3>
            <div className="flex items-center justify-between text-xs font-black pt-3 border-t border-ink/10">
              <span className="text-[#966b03]">+15 sparks</span>
              <span className="flex items-center gap-1">Start <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 2: Logic Bender (Pink) */}
          <div className="p-6 rounded-2xl bg-[#ffb9d3] text-ink relative overflow-hidden flex flex-col justify-between min-h-[190px] border-2 border-ink/15 shadow-sm transition-all hover:-translate-y-1">
            <div className="absolute -right-8 -bottom-12 w-36 h-36 rounded-full border border-ink/10 pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-ink/20 shadow-[2px_3px_0_rgba(21,29,68,0.2)] flex items-center justify-center text-xl">
                ◈
              </div>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full border border-ink/20 bg-white/40">
                4 min
              </span>
            </div>
            <h3 className="text-lg font-black text-ink tracking-tight mt-3">
              Brain-bender of the day
            </h3>
            <div className="flex items-center justify-between text-xs font-black pt-3 border-t border-ink/10">
              <span className="text-[#9a2858]">+10 sparks</span>
              <span className="flex items-center gap-1">Start <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>

          {/* Card 3: Science & Cyber (Blue) */}
          <div className="p-6 rounded-2xl bg-[#c2d8ff] text-ink relative overflow-hidden flex flex-col justify-between min-h-[190px] border-2 border-ink/15 shadow-sm transition-all hover:-translate-y-1">
            <div className="absolute -right-8 -bottom-12 w-36 h-36 rounded-full border border-ink/10 pointer-events-none" />
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-white border border-ink/20 shadow-[2px_3px_0_rgba(21,29,68,0.2)] flex items-center justify-center text-xl">
                ▣
              </div>
              <span className="text-[10px] font-black px-2.5 py-1 rounded-full border border-ink/20 bg-white/40">
                6 min
              </span>
            </div>
            <h3 className="text-lg font-black text-ink tracking-tight mt-3">
              Read, Recall & Code
            </h3>
            <div className="flex items-center justify-between text-xs font-black pt-3 border-t border-ink/10">
              <span className="text-[#1a4da6]">+10 sparks</span>
              <span className="flex items-center gap-1">Start <ArrowRight className="w-3.5 h-3.5" /></span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DAILY SPARK TEST & PREVIOUS YEAR TEASER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Interactive Quiz Shell (8 cols) */}
        <div className="lg:col-span-8 rounded-3xl bg-[#f4f1ff] border-2 border-ink/10 p-6 sm:p-8 space-y-5">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[1.4px] text-[#7e75ae]">
                Daily Spark Test
              </span>
              <h3 className="text-2xl font-black text-ink tracking-tight mt-0.5">
                One good question<br />is all it takes.
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xl font-black text-ink font-mono block">04:00</span>
              <small className="text-[10px] font-bold text-[#8585a3]">time to think</small>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex items-center gap-1.5 py-1">
            {dailyQuestions.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentIndex
                    ? 'w-7 bg-[#7666b5]'
                    : idx < currentIndex
                    ? 'w-4 bg-[#a79bc8]'
                    : 'w-4 bg-[#d5d0ea]'
                }`}
              />
            ))}
          </div>

          {completed ? (
            /* Completed Screen */
            <div className="p-6 rounded-2xl bg-white border border-[#e2e1ea] text-center space-y-4">
              <div className="text-3xl">🎉</div>
              <h4 className="text-xl font-black text-ink">Daily Spark Complete!</h4>
              <p className="text-xs text-[#58638b]">
                You scored <strong className="text-ink font-black">{score} / {dailyQuestions.length}</strong>! +50 Daily Streak Sparks Earned.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleGenerateMoreAiQuestions}
                  disabled={isGeneratingMore}
                  className="btn-ink text-xs py-2 px-4"
                >
                  <Sparkles className="w-3.5 h-3.5 text-yellow" />
                  <span>{isGeneratingMore ? 'Generating...' : '✨ Generate 3 More AI Questions'}</span>
                </button>
                <button
                  onClick={handleRestart}
                  className="btn-white text-xs py-2 px-4"
                >
                  Replay Spark
                </button>
              </div>
            </div>
          ) : (
            /* Active Question Card */
            <div className="p-6 rounded-2xl bg-white border border-[#e2e1ea] space-y-4">
              <div className="flex items-center justify-between">
                <small className="text-[10px] font-black tracking-wider text-[#8390ae] uppercase">
                  Question {currentIndex + 1} of {dailyQuestions.length} · {currentQ.examId}
                </small>
                <button
                  onClick={() => onOpenAiHint(currentQ)}
                  className="text-[11px] font-bold text-[#eb775e] hover:underline inline-flex items-center gap-1"
                >
                  <HelpCircle className="w-3.5 h-3.5" /> Need hint?
                </button>
              </div>

              <div className="text-sm sm:text-base font-bold text-ink leading-relaxed">
                <RichMathText text={currentQ.questionText} />
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {currentQ.options.slice(0, 3).map((opt, optIdx) => {
                  const isSelected = selectedOption === optIdx;
                  const isCorrect = optIdx === currentQ.correctOptionIndex;

                  let optClass = 'bg-white border-[#e2e1ea] text-ink hover:border-[#6d5bb5] hover:bg-[#faf9ff]';
                  if (isAnswered) {
                    if (isCorrect) optClass = 'bg-[#ecfbf3] border-[#3fba84] text-[#18835a] font-bold';
                    else if (isSelected) optClass = 'bg-[#fff4f2] border-[#fa6b60] text-[#c93f34]';
                    else optClass = 'bg-white border-[#e2e1ea] opacity-50';
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`min-h-[50px] p-3 rounded-xl border text-left text-xs font-bold transition-all flex items-center gap-2.5 ${optClass}`}
                    >
                      <span className="w-5 h-5 rounded-full bg-[#f0eff6] text-[#6c6d84] text-[10px] font-black flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1"><RichMathText text={opt} /></span>
                      {isAnswered && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>

              {/* Answer Note / Next */}
              {isAnswered && (
                <div className={`p-3.5 rounded-xl border flex items-center gap-3 animate-fade-in ${
                  selectedOption === currentQ.correctOptionIndex
                    ? 'bg-[#eefaf3] border-[#a7ead1] text-[#167e5a]'
                    : 'bg-[#fff4f2] border-[#ffd2c9] text-[#c93f34]'
                }`}>
                  <span className="w-7 h-7 rounded-lg bg-white flex items-center justify-center font-black text-sm shrink-0 shadow-xs">
                    {selectedOption === currentQ.correctOptionIndex ? '✦' : '◌'}
                  </span>
                  <div className="flex-1 text-xs">
                    <strong className="block text-ink font-black">
                      {selectedOption === currentQ.correctOptionIndex
                        ? 'That’s it — you nailed the Olympiad concept!'
                        : 'Nearly! Check the step-by-step logic.'}
                    </strong>
                    <span className="text-[#59617b] line-clamp-1">{currentQ.explanation}</span>
                  </div>
                  <button
                    onClick={handleNext}
                    className="px-3 py-1.5 rounded-lg bg-ink text-white font-extrabold text-xs shrink-0 hover:scale-105 transition-transform"
                  >
                    Next →
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Papers Teaser (4 cols) */}
        <aside className="lg:col-span-4 rounded-3xl bg-[#fff0c9] border-2 border-ink/10 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[1.4px] text-[#72654c]">
              Go Deeper
            </span>
            <h3 className="text-2xl font-black text-ink tracking-tight mt-1 leading-tight">
              Previous year<br />papers, but kinder.
            </h3>
            <p className="text-xs text-[#72654c] mt-2 leading-relaxed max-w-[220px]">
              Build exam calm with 2020–2025 timed papers, friendly hints and full step-by-step solutions.
            </p>
          </div>

          {/* Paper Stack Graphic */}
          <div className="relative h-28 my-4">
            <div className="absolute right-4 top-0 w-24 h-28 rounded-md bg-[#fc8a76] border-2 border-ink rotate-6" />
            <div className="absolute right-8 top-3 w-24 h-28 rounded-md bg-white border-2 border-ink shadow-[4px_5px_0_rgba(21,29,68,0.13)] p-2.5">
              <b className="text-[9px] font-black text-ink">SOF</b>
              <span className="block text-sm font-black text-ink leading-tight mt-1">IMO<br />Grade {userProfile.grade}</span>
              <i className="absolute bottom-2 right-2 text-[8px] font-bold text-ink-muted not-italic">2025</i>
            </div>
          </div>

          <button
            onClick={() => { playClickSound(); if (onOpenPyq) onOpenPyq(); }}
            className="text-xs font-black text-ink border-b border-ink pb-0.5 inline-flex items-center gap-1.5 self-start"
          >
            <span>Browse 2020–2025 papers</span>
            <b className="text-[#f07762] text-sm">→</b>
          </button>
        </aside>
      </div>
    </div>
  );
};
