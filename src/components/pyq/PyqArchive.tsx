import React, { useState } from 'react';
import { PYQPaper, OlympiadExamId, GradeLevel, MockTest } from '../../types/olympiad';
import { PYQ_PAPERS } from '../../data/pyqPapers';
import { OLYMPIAD_EXAMS } from '../../data/olympiadExams';
import { BookOpen, Play, Calendar, Award, CheckCircle2, ChevronRight } from 'lucide-react';
import { playClickSound } from '../../services/audioService';

interface PyqArchiveProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  onStartPaper: (test: MockTest) => void;
}

export const PyqArchive: React.FC<PyqArchiveProps> = ({
  currentGrade,
  onGradeChange,
  onStartPaper
}) => {
  const [selectedExam, setSelectedExam] = useState<OlympiadExamId>('IMO');
  const [selectedYear, setSelectedYear] = useState<number | 'all'>('all');

  const years = [2025, 2024, 2023, 2022, 2021, 2020];

  const filteredPapers = PYQ_PAPERS.filter(p => {
    const matchGrade = p.grade === currentGrade;
    const matchExam = p.examId === selectedExam;
    const matchYear = selectedYear === 'all' || p.year === selectedYear;
    return matchGrade && matchExam && matchYear;
  });

  const handleLaunchPaper = (paper: PYQPaper) => {
    playClickSound();
    const mockTest: MockTest = {
      id: paper.id,
      title: paper.title,
      examId: paper.examId,
      grade: paper.grade,
      durationMinutes: paper.durationMinutes,
      totalMarks: paper.totalMarks,
      isLevel2: false,
      year: paper.year,
      description: `Official SOF Simulated ${paper.year} Level 1 Paper with complete answer keys.`,
      questions: paper.questions
    };
    onStartPaper(mockTest);
  };

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 border border-blue-500/20 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 font-extrabold text-xs">
            <Calendar className="w-3.5 h-3.5" />
            <span>2020 – 2025 Comprehensive PYQ Archive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Previous Year Question Papers (PYQs)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
            Practice actual SOF exam question patterns from 2020 to 2025 with authentic section structures, timer controls, and detailed solution explanations.
          </p>
        </div>

        {/* Grade Selector Pills */}
        <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 shrink-0">
          <div className="text-[10px] text-slate-400 font-bold uppercase mb-2">Select Grade:</div>
          <div className="grid grid-cols-5 gap-1.5">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
              <button
                key={g}
                onClick={() => { playClickSound(); onGradeChange(g as GradeLevel); }}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                  currentGrade === g
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
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
              <span>{exam.name}</span>
            </button>
          );
        })}
      </div>

      {/* Year Filter Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        <span className="text-xs font-bold text-slate-400 mr-2">Year:</span>
        <button
          onClick={() => { playClickSound(); setSelectedYear('all'); }}
          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
            selectedYear === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-slate-800 text-slate-400 hover:text-white'
          }`}
        >
          All Years (2020-2025)
        </button>
        {years.map(y => (
          <button
            key={y}
            onClick={() => { playClickSound(); setSelectedYear(y); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedYear === y
                ? 'bg-indigo-600 text-white'
                : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {y} Paper
          </button>
        ))}
      </div>

      {/* Papers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPapers.map(paper => (
          <div
            key={paper.id}
            className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4 shadow-md"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-xl bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-black">
                  {paper.year} Edition
                </span>
                <span className="text-xs text-slate-400 font-semibold">{paper.setNumber}</span>
              </div>

              <h4 className="font-extrabold text-white text-sm leading-snug">{paper.title}</h4>
              <p className="text-xs text-slate-400 mt-2">
                Includes Section 1 (Logical Reasoning), Section 2 (Subject Core), Section 3 (Everyday Math/Science), and Section 4 (Achiever HOTS).
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">{paper.durationMinutes} Mins • {paper.totalMarks} Marks</span>
              <button
                onClick={() => handleLaunchPaper(paper)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                <Play className="w-3.5 h-3.5 fill-white" /> Take Paper
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
