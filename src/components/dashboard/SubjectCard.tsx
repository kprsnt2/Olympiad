import React from 'react';
import { ExamInfo, GradeLevel } from '../../types/olympiad';
import { playClickSound } from '../../services/audioService';

interface SubjectCardProps {
  exam: ExamInfo;
  grade: GradeLevel;
  onStartPractice: () => void;
  onStartMock: () => void;
  onViewSyllabus: () => void;
}

const colorMap: Record<string, { bg: string; iconBg: string }> = {
  IMO: { bg: 'bg-[#ffdb42]', iconBg: 'text-amber-900' },
  ISO: { bg: 'bg-[#a5e6d0]', iconBg: 'text-emerald-900' },
  ICSO: { bg: 'bg-[#c2d8ff]', iconBg: 'text-blue-900' },
  IEO: { bg: 'bg-[#d8c8ff]', iconBg: 'text-purple-900' },
  IGKO: { bg: 'bg-[#ffb2a2]', iconBg: 'text-rose-900' },
  ISSO: { bg: 'bg-[#ffe0a3]', iconBg: 'text-amber-950' }
};

export const SubjectCard: React.FC<SubjectCardProps> = ({
  exam,
  grade,
  onStartPractice,
  onStartMock,
}) => {
  const styling = colorMap[exam.id] || { bg: 'bg-[#ffdb42]', iconBg: 'text-amber-900' };

  return (
    <div
      className={`relative text-left p-6 sm:p-7 rounded-2xl ${styling.bg} text-ink overflow-hidden transition-all hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between min-h-[280px] border-2 border-ink/15 group select-none`}
    >
      {/* Background Watermark Circle */}
      <div className="absolute -right-12 -bottom-16 w-44 h-44 rounded-full border border-ink/10 pointer-events-none group-hover:scale-110 transition-transform" />

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-11 h-11 rounded-xl bg-white border border-ink/20 shadow-[2px_3px_0_rgba(21,29,68,0.2)] flex items-center justify-center text-2xl">
            {exam.icon}
          </div>
          <span className="text-[10px] font-black uppercase tracking-wider text-ink/70 bg-white/40 px-2.5 py-1 rounded-full border border-ink/10">
            SOF {exam.id}
          </span>
        </div>

        <h3 className="text-xl font-black tracking-tight text-ink">
          {exam.name}
        </h3>
        <p className="text-xs text-ink/80 mt-1 line-clamp-2 font-medium leading-relaxed">
          {exam.fullName} for Grade {grade}
        </p>

        {/* Progress Bar */}
        <div className="mt-5 space-y-1.5">
          <div className="w-full h-1.5 bg-ink/15 rounded-full overflow-hidden">
            <div className="h-full bg-ink rounded-full w-[65%]" />
          </div>
          <div className="flex items-center justify-between text-[10px] font-bold text-ink/70">
            <span>50 Questions Loaded</span>
            <span>65% Explored</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 border-t border-ink/10 flex items-center justify-between gap-2 mt-4">
        <button
          onClick={() => { playClickSound(); onStartPractice(); }}
          className="text-xs font-black text-ink hover:text-ink-2 transition-colors flex items-center gap-1"
        >
          <span>Chapter Drill</span>
          <b className="text-sm leading-none">→</b>
        </button>

        <button
          onClick={() => { playClickSound(); onStartMock(); }}
          className="px-3.5 py-1.5 rounded-lg bg-ink text-white font-extrabold text-xs shadow-[0_3px_0_#0a1031] hover:scale-105 transition-all"
        >
          Mock Test
        </button>
      </div>
    </div>
  );
};
