import React from 'react';
import { Question, SectionType } from '../../types/olympiad';
import { Bookmark, CheckCircle2, Zap } from 'lucide-react';
import { playClickSound } from '../../services/audioService';

interface QuestionPaletteProps {
  questions: Question[];
  currentIndex: number;
  userAnswers: Record<number, number>;
  flaggedIndices: Set<number>;
  onSelectQuestion: (index: number) => void;
  activeSectionFilter: SectionType | 'all';
  onSectionFilterChange: (section: SectionType | 'all') => void;
}

export const QuestionPalette: React.FC<QuestionPaletteProps> = ({
  questions,
  currentIndex,
  userAnswers,
  flaggedIndices,
  onSelectQuestion,
  activeSectionFilter,
  onSectionFilterChange
}) => {
  const sections: { id: SectionType | 'all'; label: string }[] = [
    { id: 'all', label: 'All Questions' },
    { id: 'logical', label: '1: Logical' },
    { id: 'subject', label: '2: Subject Core' },
    { id: 'everyday', label: '3: Everyday' },
    { id: 'achievers', label: '4: Achievers (HOTS)' }
  ];

  const filteredQuestions = questions.map((q, originalIdx) => ({ q, originalIdx }))
    .filter(({ q }) => activeSectionFilter === 'all' || q.section === activeSectionFilter);

  const answeredCount = Object.keys(userAnswers).length;
  const flaggedCount = flaggedIndices.size;
  const totalCount = questions.length;

  return (
    <div className="p-4 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
      {/* Palette Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">Question Navigator</h4>
        <span className="text-[11px] text-slate-400 font-medium">
          {answeredCount} / {totalCount} Answered
        </span>
      </div>

      {/* Section Filter Pills */}
      <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-1">
        {sections.map(sec => {
          const isSelected = activeSectionFilter === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => { playClickSound(); onSectionFilterChange(sec.id); }}
              className={`px-2.5 py-1 rounded-xl text-[10px] font-bold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white'
              }`}
            >
              {sec.label}
            </button>
          );
        })}
      </div>

      {/* Grid of question numbers */}
      <div className="grid grid-cols-5 gap-2 max-h-64 overflow-y-auto pr-1">
        {filteredQuestions.map(({ q, originalIdx }) => {
          const isCurrent = currentIndex === originalIdx;
          const isAnswered = userAnswers[originalIdx] !== undefined;
          const isFlagged = flaggedIndices.has(originalIdx);
          const isAchiever = q.section === 'achievers' || q.isLevel2;

          let btnClass = 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-750';
          if (isAnswered) {
            btnClass = 'bg-emerald-500 text-slate-950 font-black border-emerald-400 shadow-sm shadow-emerald-500/20';
          } else if (isFlagged) {
            btnClass = 'bg-purple-500 text-white font-bold border-purple-400 shadow-sm shadow-purple-500/20';
          }

          if (isCurrent) {
            btnClass += ' ring-2 ring-indigo-400 ring-offset-2 ring-offset-slate-900 scale-105';
          }

          return (
            <button
              key={originalIdx}
              onClick={() => { playClickSound(); onSelectQuestion(originalIdx); }}
              className={`relative h-9 rounded-xl border text-xs font-bold transition-all flex items-center justify-center ${btnClass}`}
              title={`Question ${originalIdx + 1} (${q.section})`}
            >
              <span>{originalIdx + 1}</span>
              {isAchiever && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 border border-slate-900" title="Achiever HOTS" />
              )}
            </button>
          );
        })}
      </div>

      {/* Palette Legend */}
      <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-800 text-[10px] text-slate-400">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-emerald-500" />
          <span>Answered</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-purple-500" />
          <span>Review</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-slate-800 border border-slate-700" />
          <span>Unvisited</span>
        </div>
      </div>
    </div>
  );
};
