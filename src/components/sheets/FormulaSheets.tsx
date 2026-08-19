import React, { useState } from 'react';
import { FormulaSheet, OlympiadExamId } from '../../types/olympiad';
import { FORMULA_SHEETS } from '../../data/formulaSheets';
import { OLYMPIAD_EXAMS } from '../../data/olympiadExams';
import { Sparkles, Lightbulb, BookOpen, Printer, Zap } from 'lucide-react';
import { RichMathText, LatexRenderer } from '../common/LatexRenderer';
import { playClickSound } from '../../services/audioService';

export const FormulaSheets: React.FC = () => {
  const [selectedSheetId, setSelectedSheetId] = useState<string>(FORMULA_SHEETS[0]?.id || '');

  const activeSheet = FORMULA_SHEETS.find(s => s.id === selectedSheetId) || FORMULA_SHEETS[0];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/20 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 no-print">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 font-extrabold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Last-Minute Revision & Speed Math Formulas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Olympiad Formula Sheets & Memory Hacks
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Essential shortcut formulas, diagnostic concept cards, and speed tricks used by top Olympiad rankers to solve questions in under 30 seconds.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 shrink-0 no-print"
        >
          <Printer className="w-4 h-4" /> Print Cheat Sheet
        </button>
      </div>

      {/* Sheet Selector Tabs (No-print) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 no-print">
        {FORMULA_SHEETS.map(sheet => {
          const isSelected = selectedSheetId === sheet.id;
          return (
            <button
              key={sheet.id}
              onClick={() => { playClickSound(); setSelectedSheetId(sheet.id); }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-md'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <span className="text-base">{sheet.icon}</span>
              <span>{sheet.title}</span>
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{activeSheet.icon}</span>
            <span>{activeSheet.title}</span>
          </h3>
          <span className="text-xs text-slate-400">{activeSheet.gradeRange}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeSheet.cards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all space-y-4 shadow-xl"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="font-extrabold text-white text-base">{card.topic}</h4>
                <span className="w-7 h-7 rounded-xl bg-indigo-500/20 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0">
                  #{idx + 1}
                </span>
              </div>

              {/* Math / Formula Highlighting Box */}
              <div className="p-4 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 text-center py-4">
                <div className="text-base sm:text-lg font-mono font-bold text-indigo-300">
                  <LatexRenderer content={card.formulaOrConcept} block={true} />
                </div>
              </div>

              {/* Explanation */}
              <p className="text-xs text-slate-300 leading-relaxed">
                {card.explanation}
              </p>

              {/* Olympiad Speed Trick Box */}
              <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-1">
                <div className="font-bold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400" /> Olympiad Shortcut Tip:
                </div>
                <p className="leading-relaxed text-amber-200/90">
                  {card.olympiadTrick}
                </p>
              </div>

              {/* Example if available */}
              {card.example && (
                <div className="text-xs text-slate-400 bg-slate-850 p-2.5 rounded-xl border border-slate-800">
                  <strong className="text-slate-300">Example:</strong> {card.example}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
