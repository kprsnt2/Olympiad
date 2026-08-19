import React from 'react';
import { GradeLevel, UserProfile } from '../../types/olympiad';
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
  onOpenAiCoach,
  onOpenMockTests,
}) => {
  return (
    <section className="relative max-w-[1232px] mx-auto py-8 sm:py-14 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      {/* Left Copy Column (7 cols) */}
      <div className="lg:col-span-7 space-y-6 z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 text-[10px] font-black tracking-[1.8px] text-[#536087] uppercase">
          <span className="w-2 h-2 rounded-full bg-[#fa6b60]" />
          <span>The bright way to prepare</span>
        </div>

        {/* Big Punchy Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-ink tracking-tight leading-[0.95]">
          Big thoughts.<br />
          <em className="font-serif-accent text-[#fb775d] font-normal not-italic tracking-normal">
            Tiny wins.
          </em>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#58638b] leading-relaxed max-w-md font-medium">
          Olympiad prep that feels less like homework and more like discovering what your brain can do.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-5 pt-2">
          <button
            onClick={() => {
              playClickSound();
              const el = document.getElementById('paths');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenMockTests();
            }}
            className="btn-ink"
          >
            <span>Find my path</span>
            <b className="text-lg leading-none">→</b>
          </button>

          <button
            onClick={() => {
              playClickSound();
              const el = document.getElementById('daily-spark');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else onOpenMockTests();
            }}
            className="text-xs font-black text-ink hover:text-coral transition-colors border-b-2 border-ink pb-0.5 inline-flex items-center gap-1.5"
          >
            <span>Take a 4-min spark test</span>
            <span className="text-[#ff795f] font-bold">↗</span>
          </button>
        </div>

        {/* Trust & Social Proof Row */}
        <div className="flex items-center gap-3 pt-6">
          <div className="flex -space-x-2">
            <span className="w-6 h-6 rounded-full bg-[#f49b78] border-2 border-cream flex items-center justify-center text-[9px] font-black text-white">R</span>
            <span className="w-6 h-6 rounded-full bg-[#a96fd4] border-2 border-cream flex items-center justify-center text-[9px] font-black text-white">D</span>
            <span className="w-6 h-6 rounded-full bg-[#5cb89e] border-2 border-cream flex items-center justify-center text-[9px] font-black text-white">S</span>
            <span className="w-6 h-6 rounded-full bg-[#e8be51] border-2 border-cream flex items-center justify-center text-[9px] font-black text-white">M</span>
          </div>
          <p className="text-[11px] text-[#7b83a0] leading-tight font-medium">
            <strong className="text-[#38446c] font-black">1,20,000+ curious minds</strong><br />
            are growing a little every day
          </p>
        </div>
      </div>

      {/* Right Space Art Illustration (5 cols) */}
      <div className="lg:col-span-5 relative min-h-[380px] sm:min-h-[420px] flex items-center justify-center select-none">
        {/* Orbital Dotted Rings */}
        <div className="absolute w-[360px] h-[240px] border border-dashed border-[#cdd2e9] rounded-full -rotate-12 pointer-events-none" />
        <div className="absolute w-[260px] h-[380px] border border-dashed border-[#d8dcf0] rounded-full rotate-45 pointer-events-none" />

        {/* Sparkle Stars */}
        <span className="absolute top-6 right-8 text-2xl text-[#fb785f] font-black animate-pulse">✦</span>
        <span className="absolute top-16 left-6 text-sm text-[#78cdb6] font-black">✦</span>
        <span className="absolute bottom-12 right-16 text-xl text-[#5c74d7] font-black">✧</span>

        {/* Big Yellow Planet with Coral Ring */}
        <div className="relative w-44 h-44 rounded-full bg-[#ffcf3e] shadow-[inset_-20px_-16px_0_#f8b52b,0_14px_28px_rgba(253,183,37,0.2)]">
          {/* Planet Orbit Ring */}
          <div className="absolute -left-7 top-14 w-58 h-12 border-[10px] border-[#fa8565] rounded-full -rotate-12 shadow-[0_3px_0_rgba(159,56,74,0.12)] pointer-events-none" />
          {/* Craters */}
          <i className="absolute top-8 right-9 w-4 h-4 rounded-full bg-[#f1aa2b] block" />
          <i className="absolute bottom-6 left-10 w-5 h-5 rounded-full bg-[#f1aa2b] block" />
          <i className="absolute top-10 left-7 w-2.5 h-2.5 rounded-full bg-[#f1aa2b] block" />
        </div>

        {/* Cartoon Retro Rocket */}
        <div className="absolute left-6 sm:left-10 top-20 w-20 h-32 rounded-t-[44px] rounded-b-[20px] bg-[#5d75d8] border-[4px] border-ink -rotate-30 shadow-[6px_7px_0_rgba(21,29,68,0.15)] z-20">
          <div className="absolute top-3 left-1.5 w-12 h-6 rounded-full bg-[#8297ec]" />
          {/* Porthole Window */}
          <div className="absolute top-7 left-4 w-7 h-7 rounded-full border-[3.5px] border-ink bg-[#ffe58a]" />
          {/* Rocket Wings */}
          <div className="absolute -left-6 bottom-1 w-8 h-8 bg-[#fa775f] border-[3.5px] border-ink rounded-l-2xl -rotate-12" />
          <div className="absolute -right-6 bottom-1 w-8 h-8 bg-[#fa775f] border-[3.5px] border-ink rounded-r-2xl rotate-12" />
          {/* Flame */}
          <div className="absolute -bottom-8 left-5 text-3xl text-[#ffdb3c] rotate-35 z-[-1]">✦</div>
        </div>

        {/* Floating Sticker 1: Math Card */}
        <div className="float-card left-0 bottom-12 p-3 w-36 -rotate-6">
          <span className="text-[10px] font-bold text-[#63719d] block">7 × 8 = ?</span>
          <b className="text-2xl font-black text-ink block leading-tight">56</b>
          <i className="text-[10px] font-bold not-italic text-[#eb795e]">nailed it! ✨</i>
        </div>

        {/* Floating Sticker 2: Star Unlock */}
        <div className="float-card right-0 top-36 px-3 py-2 flex items-center gap-2 rotate-6">
          <b className="text-[#ffc93a] text-lg leading-none">★</b>
          <span className="text-[10px] font-extrabold text-ink leading-tight">
            new spark<br /><strong className="text-[#eb775e]">unlocked</strong>
          </span>
        </div>

        {/* Floating Sticker 3: Streak Badge */}
        <div className="float-card right-12 bottom-2 w-20 h-18 p-2 text-center bg-[#a5e6d0] rotate-12">
          <b className="text-2xl font-black text-ink leading-none block">{userProfile.streakDays || 4}</b>
          <span className="text-[9px] font-black text-ink uppercase tracking-tight block mt-0.5">day streak</span>
        </div>

        {/* Handwritten Annotation */}
        <div className="absolute -bottom-4 left-32 font-serif text-base italic text-ink -rotate-6">
          explore <span className="text-[#f87a61]">your</span> orbit
        </div>
      </div>
    </section>
  );
};
