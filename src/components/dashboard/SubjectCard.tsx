import React from 'react';
import { ExamInfo, GradeLevel } from '../../types/olympiad';
import { ChevronRight, Play, BookOpen, Clock, Award, Zap } from 'lucide-react';
import { playClickSound } from '../../services/audioService';

interface SubjectCardProps {
  exam: ExamInfo;
  grade: GradeLevel;
  onStartPractice: (examId: string) => void;
  onStartMock: (examId: string) => void;
  onViewSyllabus: (examId: string) => void;
}

export const SubjectCard: React.FC<SubjectCardProps> = ({
  exam,
  grade,
  onStartPractice,
  onStartMock,
  onViewSyllabus
}) => {
  return (
    <div className="group relative rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* Top Accent Line */}
      <div 
        className="absolute top-0 left-8 right-8 h-1 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
        style={{ backgroundColor: exam.color }}
      />

      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 pt-2">
          <div className="flex items-center gap-3">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-black/30 border border-white/10"
              style={{ backgroundColor: `${exam.color}20` }}
            >
              {exam.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-extrabold text-white tracking-tight">{exam.name}</h3>
                <span 
                  className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider"
                  style={{ backgroundColor: `${exam.color}25`, color: exam.color }}
                >
                  Grade {grade}
                </span>
              </div>
              <p className="text-xs text-slate-400 font-medium">{exam.fullName}</p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xs text-slate-300 leading-relaxed">
          {exam.tagline}
        </p>

        {/* Exam Pattern & Achiever Badge */}
        <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
          <div className="p-2.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex flex-col justify-center">
            <span className="text-[10px] text-slate-400 font-semibold uppercase">Exam Structure</span>
            <span className="font-bold text-slate-200 mt-0.5">
              {grade >= 5 ? '50 Qs • 60 Mins' : '35 Qs • 60 Mins'}
            </span>
          </div>

          <div className="p-2.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col justify-center">
            <span className="text-[10px] text-amber-400/90 font-semibold uppercase flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Achievers HOTS
            </span>
            <span className="font-bold text-amber-300 mt-0.5">2x / 3x Marks</span>
          </div>
        </div>

        {/* Key Section Chips */}
        <div className="space-y-1.5 pt-1">
          <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Exam Sections:</span>
          <div className="flex flex-wrap gap-1.5">
            {exam.sections.map((sec, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded-xl bg-slate-800 text-[11px] text-slate-300 border border-slate-700 font-medium"
              >
                {sec.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-6 mt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2">
        <button
          onClick={() => { playClickSound(); onStartPractice(exam.id); }}
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold border border-slate-700 transition-colors"
        >
          <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
          Practice Drills
        </button>

        <button
          onClick={() => { playClickSound(); onStartMock(exam.id); }}
          className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-white text-xs font-bold shadow-md transition-all hover:scale-105"
          style={{ backgroundColor: exam.color }}
        >
          <Play className="w-3.5 h-3.5 fill-white" />
          Mock Test
        </button>
      </div>
    </div>
  );
};
