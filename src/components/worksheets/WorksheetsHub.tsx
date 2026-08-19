import React, { useState } from 'react';
import { Worksheet, GradeLevel, OlympiadExamId } from '../../types/olympiad';
import { WORKSHEETS_DATA } from '../../data/worksheetsData';
import { OLYMPIAD_EXAMS } from '../../data/olympiadExams';
import { Printer, Download, BookOpen, CheckCircle, FileText, Sparkles, X, ChevronRight } from 'lucide-react';
import { RichMathText } from '../common/LatexRenderer';
import { playClickSound } from '../../services/audioService';

interface WorksheetsHubProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
}

export const WorksheetsHub: React.FC<WorksheetsHubProps> = ({ currentGrade, onGradeChange }) => {
  const [selectedExam, setSelectedExam] = useState<OlympiadExamId>('IMO');
  const [activeWorksheet, setActiveWorksheet] = useState<Worksheet | null>(null);
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  const filteredWorksheets = WORKSHEETS_DATA.filter(
    ws => ws.grade === currentGrade && ws.examId === selectedExam
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner (Hidden in Print Mode) */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 border border-emerald-500/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 no-print">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-xs">
            <Printer className="w-3.5 h-3.5" />
            <span>Printable Classroom & Home Worksheets</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Olympiad Practice Worksheets & OMR Sheets
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Download and print authentic practice sheets with questions, bubble answer sheets (OMR format), and comprehensive step-by-step solutions for Grade {currentGrade}.
          </p>
        </div>

        {/* Grade Pills */}
        <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 shrink-0">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Grade:</div>
          <div className="grid grid-cols-5 gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
              <button
                key={g}
                onClick={() => { playClickSound(); onGradeChange(g as GradeLevel); }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                  currentGrade === g
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subject Filter (No-print) */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 no-print">
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
              <span>{exam.name}</span>
            </button>
          );
        })}
      </div>

      {/* Printable Preview Modal / View */}
      {activeWorksheet ? (
        <div className="p-6 sm:p-10 rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-300 space-y-8">
          {/* Printable Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-slate-900 pb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🚀</span>
              <div>
                <h1 className="text-2xl font-black text-slate-900 tracking-tight">{activeWorksheet.title}</h1>
                <p className="text-xs text-slate-600 font-bold uppercase tracking-wider">
                  Science Olympiad Foundation (SOF) Standard • Grade {activeWorksheet.grade}
                </p>
              </div>
            </div>

            {/* Print Controls (Hidden when printing) */}
            <div className="flex items-center gap-2 no-print">
              <button
                onClick={() => setShowAnswerKey(!showAnswerKey)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-colors ${
                  showAnswerKey ? 'bg-amber-100 text-amber-900 border-amber-300' : 'bg-slate-100 text-slate-700 border-slate-300'
                }`}
              >
                {showAnswerKey ? 'Hide Answer Key' : 'Show Answer Key'}
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all"
              >
                <Printer className="w-4 h-4" /> Print / Save as PDF
              </button>

              <button
                onClick={() => setActiveWorksheet(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Student Info Box (Printable) */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl border border-slate-400 bg-slate-50 text-xs">
            <div><strong>Student Name:</strong> ______________________</div>
            <div><strong>Roll No:</strong> ______________________</div>
            <div><strong>Date & Time:</strong> ______________________</div>
          </div>

          {/* Questions Section */}
          <div className="space-y-6">
            <h2 className="text-base font-black text-slate-900 uppercase border-b border-slate-300 pb-2">
              Practice Questions ({activeWorksheet.timeLimitMinutes} Minutes)
            </h2>

            {activeWorksheet.questions.map((q, idx) => (
              <div key={q.id || idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                <div className="flex items-start gap-2">
                  <span className="font-black text-slate-900 text-sm">Q{idx + 1}.</span>
                  <div className="font-semibold text-slate-900 text-sm leading-relaxed">
                    <RichMathText text={q.questionText} />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                  {q.options.map((opt, optIdx) => (
                    <div key={optIdx} className="p-2 rounded-lg border border-slate-300 text-xs font-medium bg-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center font-bold text-[10px]">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span><RichMathText text={opt} /></span>
                    </div>
                  ))}
                </div>

                {/* Show Answer Key if toggled or in print key section */}
                {showAnswerKey && (
                  <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-300 text-xs text-emerald-900 space-y-1">
                    <div className="font-bold">
                      Answer: Option {String.fromCharCode(65 + q.correctOptionIndex)} ({q.options[q.correctOptionIndex]})
                    </div>
                    <div className="text-slate-700">{q.explanation}</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Authentic OMR Bubble Sheet for kids to practice marking bubbles */}
          <div className="pt-6 border-t-2 border-slate-300 space-y-4">
            <h3 className="text-sm font-black text-slate-900 uppercase">OMR Bubble Answer Sheet (Practice Filling)</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-xl border border-slate-300 bg-slate-50">
              {activeWorksheet.questions.map((_, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-slate-700 w-6">Q{idx + 1}:</span>
                  <div className="flex items-center gap-1.5">
                    {['A', 'B', 'C', 'D'].map(letter => (
                      <span key={letter} className="w-5 h-5 rounded-full border-2 border-slate-500 flex items-center justify-center text-[10px] font-bold text-slate-600">
                        {letter}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Worksheets Grid */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredWorksheets.map(ws => (
            <div
              key={ws.id}
              className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-bold">
                    {ws.difficulty}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">{ws.timeLimitMinutes} Mins</span>
                </div>

                <h3 className="font-extrabold text-white text-base leading-snug">{ws.title}</h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{ws.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">{ws.questions.length} Questions</span>
                <button
                  onClick={() => { playClickSound(); setActiveWorksheet(ws); }}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
                >
                  <FileText className="w-3.5 h-3.5" /> View & Print
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
