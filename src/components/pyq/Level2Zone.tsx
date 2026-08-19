import React, { useState } from 'react';
import { GradeLevel, OlympiadExamId, MockTest, Question } from '../../types/olympiad';
import { OLYMPIAD_EXAMS } from '../../data/olympiadExams';
import { QUESTION_BANK } from '../../data/questionBank';
import { Zap, Trophy, Play, CheckCircle2, ShieldAlert, Sparkles } from 'lucide-react';
import { playClickSound } from '../../services/audioService';

interface Level2ZoneProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  onStartLevel2Test: (test: MockTest) => void;
}

export const Level2Zone: React.FC<Level2ZoneProps> = ({
  currentGrade,
  onGradeChange,
  onStartLevel2Test
}) => {
  const [selectedExam, setSelectedExam] = useState<OlympiadExamId>('IMO');

  const examInfo = OLYMPIAD_EXAMS[selectedExam];

  // Filter Level 2 / Achiever HOTS questions
  const level2Questions = QUESTION_BANK.filter(q => q.grade === currentGrade && (q.isLevel2 || q.section === 'achievers'));

  const handleLaunchLevel2 = () => {
    playClickSound();
    const testQuestions: Question[] = level2Questions.length > 0
      ? level2Questions
      : QUESTION_BANK.filter(q => q.grade === currentGrade).slice(0, 10).map(q => ({
          ...q,
          isLevel2: true,
          section: 'achievers',
          marks: 2,
          difficulty: 'Achiever'
        }));

    const mockTest: MockTest = {
      id: `l2-${selectedExam.toLowerCase()}-g${currentGrade}`,
      title: `SOF 2nd Level (Round 2) Advanced Qualifier Test - ${selectedExam} Grade ${currentGrade}`,
      examId: selectedExam,
      grade: currentGrade,
      durationMinutes: 45,
      totalMarks: testQuestions.length * 2,
      isLevel2: true,
      description: 'Exclusive 2nd Level examination paper with High-Order Thinking Skills (HOTS) and multi-step reasoning problems.',
      questions: testQuestions
    };

    onStartLevel2Test(mockTest);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Level 2 Hero Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-950 via-slate-900 to-rose-950 border border-amber-500/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-xs border border-amber-500/40">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>SOF 2nd Level (Round 2) Qualifier Accelerator</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-black text-white">
            Level 2 Grandmaster Arena 👑
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Reserved for students qualifying in the top 5% of Level 1. Focus exclusively on Achiever Section HOTS, non-routine mathematical insights, and advanced logical deductions.
          </p>
        </div>

        {/* Qualifier Stats Card */}
        <div className="p-5 rounded-3xl bg-slate-900/90 border border-amber-500/20 text-center space-y-2 min-w-[220px]">
          <span className="text-3xl">🏅</span>
          <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Level 2 Format</div>
          <div className="text-sm font-extrabold text-amber-400">100% HOTS Questions</div>
          <div className="text-[11px] text-slate-500">2x Score Weightage</div>
        </div>
      </div>

      {/* Subject Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {Object.values(OLYMPIAD_EXAMS).map(exam => {
          const isSelected = selectedExam === exam.id;
          return (
            <button
              key={exam.id}
              onClick={() => { playClickSound(); setSelectedExam(exam.id); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
              style={{ borderColor: isSelected ? exam.color : undefined }}
            >
              <span>{exam.icon}</span>
              <span>{exam.name} Level 2</span>
            </button>
          );
        })}
      </div>

      {/* Active Level 2 Test Card */}
      <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <div 
              className="w-16 h-16 rounded-3xl flex items-center justify-center text-4xl shadow-inner border border-white/10"
              style={{ backgroundColor: `${examInfo.color}25` }}
            >
              {examInfo.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">{examInfo.name} 2nd Level Challenge Paper</h3>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs">
                  Grade {currentGrade}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{examInfo.fullName} • Advanced Tier</p>
            </div>
          </div>

          <button
            onClick={handleLaunchLevel2}
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/30 transition-all hover:scale-105"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            Launch Level 2 Test
          </button>
        </div>

        {/* Key Features of Level 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> Multi-Step Problem Solving
            </span>
            <p className="text-slate-400 leading-relaxed">
              Questions combine 2-3 concepts simultaneously to test deep analytical mastery.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-purple-400" /> International Merit Standard
            </span>
            <p className="text-slate-400 leading-relaxed">
              Benchmarks performance directly against top Olympiad medalists worldwide.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 space-y-1.5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Complete Video-Style Explanations
            </span>
            <p className="text-slate-400 leading-relaxed">
              Every question includes exhaustive step-by-step logic and formula proofs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
