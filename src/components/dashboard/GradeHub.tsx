import React, { useState } from 'react';
import { GradeLevel, OlympiadExamId } from '../../types/olympiad';
import { GRADE_CURRICULUMS, Chapter } from '../../data/gradeCurriculums';
import { OLYMPIAD_EXAMS } from '../../data/olympiadExams';
import { BookOpen, Sparkles, Lightbulb, Play, ChevronRight, CheckCircle2, Award, Zap } from 'lucide-react';
import { playClickSound } from '../../services/audioService';

interface GradeHubProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  onStartChapterPractice: (examId: OlympiadExamId, chapterName: string) => void;
}

export const GradeHub: React.FC<GradeHubProps> = ({
  currentGrade,
  onGradeChange,
  onStartChapterPractice
}) => {
  const [selectedExamId, setSelectedExamId] = useState<OlympiadExamId>('IMO');
  const curriculum = GRADE_CURRICULUMS[currentGrade] || GRADE_CURRICULUMS[4];
  const examInfo = OLYMPIAD_EXAMS[selectedExamId];

  const subjectData = curriculum.subjects.find(s => s.examId === selectedExamId);
  const chapters = subjectData ? subjectData.chapters : [];

  return (
    <div className="space-y-8">
      {/* Grade Selector Header Bar */}
      <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">{curriculum.characterAvatar}</span>
              <h2 className="text-2xl font-black text-white">{curriculum.title} Hub</h2>
            </div>
            <p className="text-xs text-slate-400 mt-1">{curriculum.subtitle} • {curriculum.ageGroup}</p>
          </div>

          {/* Grade Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
              <button
                key={g}
                onClick={() => { playClickSound(); onGradeChange(g as GradeLevel); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  currentGrade === g
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                Grade {g}
              </button>
            ))}
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 text-xs text-indigo-200 flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
          <span><strong>Olympiad Strategy for Grade {currentGrade}:</strong> {curriculum.difficultyNote}</span>
        </div>
      </div>

      {/* Subject Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {Object.values(OLYMPIAD_EXAMS).map(exam => {
          const isSelected = selectedExamId === exam.id;
          return (
            <button
              key={exam.id}
              onClick={() => { playClickSound(); setSelectedExamId(exam.id); }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                isSelected
                  ? 'bg-slate-800 text-white shadow-lg'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
              style={{
                borderColor: isSelected ? exam.color : undefined
              }}
            >
              <span className="text-base">{exam.icon}</span>
              <span>{exam.name} ({exam.shortName})</span>
            </button>
          );
        })}
      </div>

      {/* Chapters Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>{examInfo.icon}</span>
            <span>{examInfo.fullName} Syllabus & Chapter Drills</span>
          </h3>
          <span className="text-xs text-slate-400">{chapters.length} Key Chapters</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((ch: Chapter, idx: number) => (
            <div
              key={ch.id || idx}
              className="p-5 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex flex-col justify-between space-y-4 shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl">
                      {ch.icon || '📖'}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-white text-sm">{ch.name}</h4>
                      <span className="text-[11px] text-slate-400 font-medium">{ch.estimatedQuestionCount || 25} Practice Questions</span>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold">
                    Chapter {idx + 1}
                  </span>
                </div>

                {/* Key Concepts Tags */}
                <div className="mt-3 space-y-1.5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Key Olympiad Concepts:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {ch.keyConcepts.map((kc, kIdx) => (
                      <span
                        key={kIdx}
                        className="px-2 py-0.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-[11px] text-slate-300"
                      >
                        {kc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Olympiad Speed Tip Box */}
                {ch.olympiadTips && (
                  <div className="mt-3 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span><strong>Speed Tip:</strong> {ch.olympiadTips}</span>
                  </div>
                )}
              </div>

              {/* Start Practice Drill Button */}
              <button
                onClick={() => { playClickSound(); onStartChapterPractice(selectedExamId, ch.name); }}
                className="w-full py-2.5 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 text-white shadow-md transition-all hover:scale-[1.02]"
                style={{ backgroundColor: examInfo.color }}
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                Launch Chapter Drill
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
