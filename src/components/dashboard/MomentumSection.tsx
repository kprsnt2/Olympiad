import React from 'react';
import { UserProfile } from '../../types/olympiad';
import { Sparkles, Flame, Trophy, Award } from 'lucide-react';

interface MomentumSectionProps {
  userProfile: UserProfile;
}

export const MomentumSection: React.FC<MomentumSectionProps> = ({ userProfile }) => {
  const xp = userProfile.xp || 60;
  const streak = userProfile.streakDays || 1;

  return (
    <section className="rounded-3xl bg-ink text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl my-10">
      {/* Background Watermark Orbit */}
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full border border-white/10 pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Copy */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-[10px] font-black uppercase tracking-[1.6px] text-[#9da9d0]">
            Your Momentum
          </div>

          <h2 className="text-3xl sm:text-4xl font-black leading-tight tracking-tight text-white">
            Every small step<br />
            makes a <em className="font-serif-accent text-[#ffbaab] not-italic font-normal">difference.</em>
          </h2>

          <p className="text-xs sm:text-sm text-[#adb5d3] leading-relaxed max-w-sm">
            Show up, wonder out loud, and watch your confidence grow with every Olympiad challenge solved.
          </p>

          {/* Stat Pills */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#576085] bg-ink-2/60">
              <span className="text-2xl font-black text-[#ffe064]">{streak}</span>
              <span className="text-[10px] text-[#bac2db] leading-tight font-bold">
                day streak<br />so far 🔥
              </span>
            </div>

            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#576085] bg-ink-2/60">
              <span className="text-2xl font-black text-[#ffe064]">{xp}</span>
              <span className="text-[10px] text-[#bac2db] leading-tight font-bold">
                sparks<br />collected ⭐
              </span>
            </div>
          </div>
        </div>

        {/* Right Trail Map */}
        <div className="lg:col-span-7 relative min-h-[160px] sm:min-h-[180px] flex items-center justify-between px-2 overflow-x-auto no-scrollbar">
          {/* Dashed Line */}
          <div className="absolute left-6 right-6 top-1/2 -translate-y-2 border-t-2 border-dashed border-[#6a7396] z-0 -rotate-2" />

          {/* Node 1: Start */}
          <div className="relative z-10 text-center space-y-1.5">
            <div className="w-12 h-12 rounded-full bg-[#7692ea] border-2 border-[#a7b9fa] text-ink font-black text-sm flex items-center justify-center mx-auto shadow-md">
              1
            </div>
            <span className="text-[10px] font-bold text-[#b7bfda] block">Cadet</span>
          </div>

          {/* Node 2: Explorer */}
          <div className="relative z-10 text-center space-y-1.5">
            <div className="w-12 h-12 rounded-full bg-[#7692ea] border-2 border-[#a7b9fa] text-ink font-black text-sm flex items-center justify-center mx-auto shadow-md">
              2
            </div>
            <span className="text-[10px] font-bold text-[#b7bfda] block">Explorer</span>
          </div>

          {/* Node 3: Thinker (Current Highlight) */}
          <div className="relative z-10 text-center space-y-1.5">
            {/* Tooltip */}
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-0.5 rounded-md bg-[#ffbaab] text-ink text-[9px] font-black uppercase tracking-wider shadow-sm">
              You Are Here
            </div>
            <div className="w-15 h-15 rounded-full bg-[#ffd840] border-4 border-white text-ink font-black text-lg flex items-center justify-center mx-auto shadow-[0_0_0_4px_#f57860]">
              3
            </div>
            <span className="text-[10px] font-black text-white block">Thinker</span>
          </div>

          {/* Node 4: Whiz */}
          <div className="relative z-10 text-center space-y-1.5 opacity-60">
            <div className="w-12 h-12 rounded-full bg-[#26305a] border-2 border-[#8e98bd] text-[#b7bfda] font-black text-sm flex items-center justify-center mx-auto">
              ★
            </div>
            <span className="text-[10px] font-bold text-[#b7bfda] block">Scholar</span>
          </div>

          {/* Node 5: Champion */}
          <div className="relative z-10 text-center space-y-1.5 opacity-60">
            <div className="w-12 h-12 rounded-full bg-[#26305a] border-2 border-[#8e98bd] text-[#b7bfda] font-black text-sm flex items-center justify-center mx-auto">
              ♛
            </div>
            <span className="text-[10px] font-bold text-[#b7bfda] block">Champion</span>
          </div>
        </div>
      </div>
    </section>
  );
};
