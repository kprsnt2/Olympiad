import React, { useState, useEffect } from 'react';
import { MockTest, Question, TestAttemptResult, SectionType } from '../../types/olympiad';
import { TestTimer } from './TestTimer';
import { QuestionPalette } from './QuestionPalette';
import { ScratchpadModal } from '../common/ScratchpadModal';
import { RichMathText } from '../common/LatexRenderer';
import { ChevronLeft, ChevronRight, Bookmark, PenTool, Volume2, AlertCircle, CheckCircle, Zap } from 'lucide-react';
import { playClickSound, playSuccessSound, speakQuestionText, stopSpeaking } from '../../services/audioService';

interface TestSimulatorProps {
  test: MockTest;
  onFinishTest: (result: TestAttemptResult) => void;
  onCancelTest: () => void;
}

export const TestSimulator: React.FC<TestSimulatorProps> = ({
  test,
  onFinishTest,
  onCancelTest
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [flaggedIndices, setFlaggedIndices] = useState<Set<number>>(new Set());
  const [secondsLeft, setSecondsLeft] = useState(test.durationMinutes * 60);
  const [isScratchpadOpen, setIsScratchpadOpen] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [activeSectionFilter, setActiveSectionFilter] = useState<SectionType | 'all'>('all');

  const questions = test.questions;
  const currentQ = questions[currentIndex] || questions[0];

  // Timer interval
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      stopSpeaking();
    };
  }, []);

  const handleSelectOption = (optionIndex: number) => {
    playClickSound();
    setUserAnswers(prev => ({
      ...prev,
      [currentIndex]: optionIndex
    }));
  };

  const handleClearAnswer = () => {
    playClickSound();
    setUserAnswers(prev => {
      const copy = { ...prev };
      delete copy[currentIndex];
      return copy;
    });
  };

  const handleToggleFlag = () => {
    playClickSound();
    setFlaggedIndices(prev => {
      const copy = new Set(prev);
      if (copy.has(currentIndex)) {
        copy.delete(currentIndex);
      } else {
        copy.add(currentIndex);
      }
      return copy;
    });
  };

  const handleSpeak = () => {
    playClickSound();
    speakQuestionText(currentQ.questionText);
  };

  const handlePrev = () => {
    playClickSound();
    stopSpeaking();
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    playClickSound();
    stopSpeaking();
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleSubmitTest = () => {
    stopSpeaking();
    const timeTaken = test.durationMinutes * 60 - secondsLeft;

    let totalScore = 0;
    let correctCount = 0;
    let incorrectCount = 0;

    const sectionBreakdown: Record<SectionType, { correct: number; total: number; marks: number }> = {
      logical: { correct: 0, total: 0, marks: 0 },
      subject: { correct: 0, total: 0, marks: 0 },
      everyday: { correct: 0, total: 0, marks: 0 },
      achievers: { correct: 0, total: 0, marks: 0 }
    };

    questions.forEach((q, idx) => {
      const sec = q.section || 'subject';
      const marksWeight = q.section === 'achievers' || q.isLevel2 ? (q.marks || 2) : (q.marks || 1);

      if (!sectionBreakdown[sec]) {
        sectionBreakdown[sec] = { correct: 0, total: 0, marks: 0 };
      }
      sectionBreakdown[sec].total += 1;

      const userChoice = userAnswers[idx];
      if (userChoice !== undefined) {
        if (userChoice === q.correctOptionIndex) {
          correctCount += 1;
          totalScore += marksWeight;
          sectionBreakdown[sec].correct += 1;
          sectionBreakdown[sec].marks += marksWeight;
        } else {
          incorrectCount += 1;
        }
      }
    });

    const unansweredCount = questions.length - (correctCount + incorrectCount);
    const percentage = Math.round((totalScore / test.totalMarks) * 100);

    const result: TestAttemptResult = {
      testId: test.id,
      testTitle: test.title,
      examId: test.examId,
      grade: test.grade,
      date: new Date().toISOString().split('T')[0],
      timeTakenSeconds: timeTaken,
      score: totalScore,
      totalMarks: test.totalMarks,
      percentage: Math.min(percentage, 100),
      totalQuestions: questions.length,
      correctCount,
      incorrectCount,
      unansweredCount,
      sectionBreakdown,
      userAnswers
    };

    onFinishTest(result);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isCurrentAchiever = currentQ.section === 'achievers' || currentQ.isLevel2;

  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in pb-16">
      {/* Top Test Navigation Bar */}
      <div className="p-4 sm:p-5 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl flex flex-wrap items-center justify-between gap-4 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base sm:text-lg font-black text-white">{test.title}</h2>
            <p className="text-xs text-slate-400">
              Grade {test.grade} • {test.totalMarks} Marks • {questions.length} Questions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Timer */}
          <TestTimer
            secondsLeft={secondsLeft}
            totalSeconds={test.durationMinutes * 60}
            onTimeExpired={handleSubmitTest}
          />

          {/* Scratchpad Trigger */}
          <button
            onClick={() => { playClickSound(); setIsScratchpadOpen(true); }}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition-colors"
            title="Open Scratchpad for Calculations"
          >
            <PenTool className="w-4 h-4 text-sky-400" />
            <span className="hidden sm:inline">Scratchpad</span>
          </button>

          {/* Submit Button */}
          <button
            onClick={() => { playClickSound(); setShowSubmitModal(true); }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
          >
            <CheckCircle className="w-4 h-4" />
            <span>Submit Test</span>
          </button>
        </div>
      </div>

      {/* Main Testing Area Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Question Box */}
        <div className="lg:col-span-2 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-6">
            {/* Question Header Status */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-xl bg-indigo-600 text-white font-black text-xs">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {currentQ.chapter}
                </span>
                {isCurrentAchiever && (
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-black text-[10px] uppercase border border-amber-500/30">
                    Achiever HOTS (2x Marks)
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleSpeak}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                  title="Read Question Aloud"
                >
                  <Volume2 className="w-4 h-4 text-indigo-400" />
                </button>
                <button
                  onClick={handleToggleFlag}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                    flaggedIndices.has(currentIndex)
                      ? 'bg-purple-600/20 text-purple-300 border-purple-500/50'
                      : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">
                    {flaggedIndices.has(currentIndex) ? 'Flagged' : 'Flag'}
                  </span>
                </button>
              </div>
            </div>

            {/* Question Text */}
            <div className="text-base sm:text-lg font-medium text-white leading-relaxed p-4 rounded-2xl bg-slate-800/40 border border-slate-800">
              <RichMathText text={currentQ.questionText} />
            </div>

            {/* Options List */}
            <div className="space-y-3">
              <span className="text-[11px] text-slate-400 uppercase font-bold tracking-wider">Select one option:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = userAnswers[currentIndex] === optIdx;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      className={`p-4 rounded-2xl border text-left text-sm font-medium transition-all flex items-center gap-3.5 ${
                        isSelected
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md ring-1 ring-indigo-400'
                          : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-750 hover:border-slate-600'
                      }`}
                    >
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-900 border border-slate-700 text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="flex-1 leading-snug">
                        <RichMathText text={option} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions for current question */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                onClick={handleClearAnswer}
                disabled={userAnswers[currentIndex] === undefined}
                className="text-xs font-semibold text-slate-500 hover:text-rose-400 disabled:opacity-40 transition-colors"
              >
                Clear Response
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 disabled:opacity-40 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === questions.length - 1}
                  className="flex items-center gap-1 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md disabled:opacity-40 transition-all hover:scale-105"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Question Navigator Palette */}
        <div className="space-y-6">
          <QuestionPalette
            questions={questions}
            currentIndex={currentIndex}
            userAnswers={userAnswers}
            flaggedIndices={flaggedIndices}
            onSelectQuestion={(idx) => setCurrentIndex(idx)}
            activeSectionFilter={activeSectionFilter}
            onSectionFilterChange={(sec) => setActiveSectionFilter(sec)}
          />

          <div className="p-4 rounded-3xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
            <div className="font-bold text-slate-300 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400" /> Exam Day Tip:
            </div>
            <p className="leading-relaxed">
              No negative marking! Attempt all questions. Save 15 minutes at the end specifically for Section 4 (Achiever Section HOTS).
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Scratchpad Modal */}
      <ScratchpadModal
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
      />

      {/* Submit Confirmation Dialog */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-md p-6 shadow-2xl space-y-5 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center text-2xl">
              📝
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">Submit Mock Test?</h3>
              <p className="text-xs text-slate-300 mt-1">
                You have answered <strong className="text-emerald-400">{answeredCount}</strong> out of <strong className="text-white">{questions.length}</strong> questions.
              </p>
              {questions.length - answeredCount > 0 && (
                <p className="text-xs text-amber-400 mt-1">
                  ⚠️ You still have {questions.length - answeredCount} unanswered questions!
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => setShowSubmitModal(false)}
                className="py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Continue Test
              </button>
              <button
                onClick={() => {
                  setShowSubmitModal(false);
                  handleSubmitTest();
                }}
                className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all hover:scale-105"
              >
                Yes, Submit Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
