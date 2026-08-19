import React from 'react';
import { GradeLevel, UserProfile } from '../../types/olympiad';
import { Sparkles, Trophy, Rocket, BookOpen, Brain, Zap, Target } from 'lucide-react';
import { GRADE_CURRICULUMS } from '../../data/gradeCurriculums';
import { playClickSound } from '../../services/audioService';

interface MascotHeroProps {
  userProfile: UserProfile;
  onGradeChange: (grade: GradeLevel) => void;
  onStartPractice: (examId: string) => void;
  onOpenAiCoach: () => void;
  onOpenMockTests: () => void;
  onOpenWorksheets: () => void;
}

export const MascotHero: React.FC<MascotHeroProps> = ({
  userProfile,
  onGradeChange,
  onStartPractice,
  onOpenAiCoach,
  onOpenMockTests,
  onOpenWorksheets
}) => {
  const currentCurriculum = GRADE_CURRICULUMS[userProfile.grade] || GRADE_CURRICULUMS[4];

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/20 p-6 sm:p-8 lg:p-10 shadow-2xl mb-8">
      {/* Background Decorative Orbs */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-10 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Column: Greeting & Info */}
        <div className="space-y-4 text-center lg:text-left max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-bold tracking-wide animate-pulse-slow">
            <Rocket className="w-3.5 h-3.5 text-indigo-400" />
            <span>SOF Olympiad Prep Portal • Grade {userProfile.grade} Expedition</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            Conquer Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
              Olympiad Goals
            </span>{' '}
            with Confidence! 🏆
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {currentCurriculum.subtitle}. Master <strong className="text-white">IMO</strong>, <strong className="text-white">ISO/NSO</strong>, <strong className="text-white">ICSO</strong>, <strong className="text-white">IEO</strong>, <strong className="text-white">IGKO</strong> & <strong className="text-white">ISSO</strong> with simulated mock tests, 2020-2025 papers & instant AI tutoring!
          </p>

          {/* Quick Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
            <button
              onClick={() => { playClickSound(); onOpenMockTests(); }}
              className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:scale-105 transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              Take 60-Min Mock Test
            </button>

            <button
              onClick={() => { playClickSound(); onOpenAiCoach(); }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all hover:scale-105"
            >
              <Brain className="w-4 h-4 text-pink-400" />
              Ask AI Coach
            </button>

            <button
              onClick={() => { playClickSound(); onOpenWorksheets(); }}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm transition-all hover:scale-105"
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Download Worksheets
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Grade Mascot Card */}
        <div className="w-full sm:w-80 p-5 rounded-3xl bg-slate-900/80 border border-slate-700/80 backdrop-blur-xl shadow-xl flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-indigo-500/30 flex items-center justify-center text-5xl shadow-inner animate-float">
              {currentCurriculum.characterAvatar}
            </div>
            <div className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 font-black text-[10px] uppercase shadow-md">
              Class {userProfile.grade}
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-white text-base">{currentCurriculum.title}</h3>
            <p className="text-xs text-slate-400 mt-1">{currentCurriculum.ageGroup} • {currentCurriculum.recommendedTimeDaily}</p>
          </div>

          <div className="w-full bg-slate-800/60 p-3 rounded-2xl border border-slate-700/50 text-left space-y-1.5">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Target SOF Season:</span>
              <span className="font-bold text-amber-400">2026 Editions</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Rank Progress:</span>
              <span className="font-bold text-indigo-300">{userProfile.rankTier}</span>
            </div>
          </div>

          {/* Grade Quick Switcher Mini Bar */}
          <div className="w-full pt-1">
            <div className="text-[10px] text-slate-400 font-semibold mb-2 uppercase tracking-wider">Switch Grade</div>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                <button
                  key={g}
                  onClick={() => { playClickSound(); onGradeChange(g as GradeLevel); }}
                  className={`py-1 rounded-xl text-xs font-bold transition-all ${
                    userProfile.grade === g
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                      : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
