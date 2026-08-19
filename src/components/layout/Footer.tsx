import React from 'react';
import { Heart, Sparkles, Trophy, BookOpen, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-10 mt-20 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        {/* Brand Col */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🚀</span>
            <span className="font-extrabold text-base text-white">OlympiadQuest</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            The ultimate interactive exam prep portal for young minds competing in SOF Olympiads worldwide.
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <span>Powered by OpenAI & Google Gemini</span>
          </div>
        </div>

        {/* Olympiads Col */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-400" /> SOF Olympiads
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li><span className="hover:text-white transition-colors">IMO - International Mathematics Olympiad</span></li>
            <li><span className="hover:text-white transition-colors">ISO/NSO - National Science Olympiad</span></li>
            <li><span className="hover:text-white transition-colors">ICSO/NCO - International Cyber Olympiad</span></li>
            <li><span className="hover:text-white transition-colors">IEO - International English Olympiad</span></li>
            <li><span className="hover:text-white transition-colors">IGKO - International General Knowledge</span></li>
            <li><span className="hover:text-white transition-colors">ISSO - International Social Studies</span></li>
          </ul>
        </div>

        {/* Features Col */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-indigo-400" /> Study Resources
          </h4>
          <ul className="space-y-1.5 text-xs">
            <li><span>Grade 1 to 10 Syllabus & Concept Notes</span></li>
            <li><span>Full 60-Minute Real Timed Mock Tests</span></li>
            <li><span>2020 - 2025 Previous Year Papers (PYQs)</span></li>
            <li><span>SOF 2nd Level Achiever HOTS Accelerator</span></li>
            <li><span>Printable Worksheets & Bubble OMR Sheets</span></li>
            <li><span>Interactive Scratchpad & Formula Cheat Sheets</span></li>
          </ul>
        </div>

        {/* Safety & Info */}
        <div>
          <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Safe for Kids
          </h4>
          <p className="text-slate-400 text-xs leading-relaxed mb-3">
            Designed specifically for elementary, middle, and high school students with zero distractions and kid-safe AI tutoring.
          </p>
          <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
            <span>Practice daily to boost logical reasoning & confidence!</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
        <p>© 2026 OlympiadQuest. Created with <Heart className="w-3.5 h-3.5 text-rose-500 inline fill-rose-500" /> for future Olympiad Gold Medalists.</p>
        <p>Aligned with standard Science Olympiad Foundation guidelines.</p>
      </div>
    </footer>
  );
};
