import React from 'react';
import { Trophy, Award, Lock, CheckCircle2, Sparkles } from 'lucide-react';
import { UserProfile, Badge } from '../../types/olympiad';

interface BadgesShowcaseProps {
  userProfile: UserProfile;
}

export const BadgesShowcase: React.FC<BadgesShowcaseProps> = ({ userProfile }) => {
  const unlockedCount = userProfile.badges.filter(b => b.unlocked).length;

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 border border-purple-500/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-16 h-16 rounded-3xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-4xl shadow-inner">
            🏆
          </div>
          <div>
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <h2 className="text-2xl font-black text-white">Trophy & Badges Cabinet</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-bold text-xs">
                {unlockedCount} / {userProfile.badges.length} Unlocked
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Earn XP, maintain practice streaks, and master Achiever Sections to unlock celestial medals!
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center min-w-[160px]">
          <div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Current Status</div>
          <div className="text-base font-extrabold text-amber-400 mt-1">{userProfile.rankTier}</div>
          <div className="text-xs text-slate-400 mt-0.5">{userProfile.xp} Total XP</div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {userProfile.badges.map((badge: Badge) => (
          <div
            key={badge.id}
            className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
              badge.unlocked
                ? 'bg-slate-900/90 border-purple-500/30 shadow-lg shadow-purple-500/5 hover:-translate-y-1'
                : 'bg-slate-900/40 border-slate-800/80 opacity-60'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${
                  badge.unlocked ? 'bg-purple-500/20 border border-purple-500/40' : 'bg-slate-800 border border-slate-700'
                }`}>
                  {badge.icon}
                </div>
                {badge.unlocked ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" /> Unlocked
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 bg-slate-800 px-2 py-0.5 rounded-full">
                    <Lock className="w-3 h-3" /> Locked
                  </span>
                )}
              </div>

              <h4 className="font-extrabold text-white text-sm">{badge.title}</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">{badge.description}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-500">
              {badge.unlocked && badge.unlockedDate ? (
                <span>Unlocked on {badge.unlockedDate}</span>
              ) : (
                <span>Keep solving to unlock!</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
