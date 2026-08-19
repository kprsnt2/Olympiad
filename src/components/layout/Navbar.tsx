import React, { useState } from 'react';
import { Sparkles, Flame, Volume2, VolumeX, Settings, BookOpen, Clock, FileText, Brain, Award, Layers, Zap } from 'lucide-react';
import { GradeLevel, UserProfile } from '../../types/olympiad';
import { isAudioMuted, setAudioMuted, playClickSound } from '../../services/audioService';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  userProfile: UserProfile;
  onGradeChange: (grade: GradeLevel) => void;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  userProfile,
  onGradeChange,
  onOpenSettings
}) => {
  const [muted, setMutedState] = useState(isAudioMuted());

  const toggleMute = () => {
    const next = !muted;
    setMutedState(next);
    setAudioMuted(next);
  };

  const navItems = [
    { id: 'dashboard', label: 'Explore', icon: Sparkles },
    { id: 'gradeHub', label: 'Grade Hub', icon: Layers },
    { id: 'mockTests', label: 'Mock Tests', icon: Clock },
    { id: 'level2', label: 'Level 2 Zone', icon: Zap },
    { id: 'pyq', label: '2020-25 PYQs', icon: BookOpen },
    { id: 'worksheets', label: 'Worksheets', icon: FileText },
    { id: 'formulaSheets', label: 'Cheat Sheets', icon: BookOpen },
    { id: 'aiCoach', label: 'AI Coach', icon: Brain },
    { id: 'badges', label: 'Badges', icon: Award },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-xl border-b border-slate-800">
      {/* Top Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        {/* Brand */}
        <div 
          onClick={() => { playClickSound(); onSelectTab('dashboard'); }}
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-xl shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            🚀
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-300">
                Olympiad<span className="text-indigo-400">Quest</span>
              </span>
              <span className="text-[10px] uppercase font-black tracking-widest px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                SOF 2026
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium">IMO • ISO • ICSO • IEO • IGKO • ISSO</p>
          </div>
        </div>

        {/* Grade Selector & User Stats */}
        <div className="flex items-center gap-3">
          {/* Grade Selector Pill */}
          <div className="flex items-center gap-1.5 bg-slate-800/80 border border-slate-700/80 rounded-2xl px-3 py-1.5">
            <span className="text-xs text-slate-400 font-medium hidden sm:inline">Grade:</span>
            <select
              value={userProfile.grade}
              onChange={(e) => {
                playClickSound();
                onGradeChange(Number(e.target.value) as GradeLevel);
              }}
              className="bg-transparent text-xs font-bold text-indigo-300 focus:outline-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                <option key={g} value={g} className="bg-slate-900 text-white">
                  Class {g}
                </option>
              ))}
            </select>
          </div>

          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 rounded-2xl px-3 py-1.5 text-xs font-bold text-amber-400" title="Daily Practice Streak">
            <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>{userProfile.streakDays} Day{userProfile.streakDays > 1 ? 's' : ''}</span>
          </div>

          {/* XP & Rank */}
          <div 
            onClick={() => { playClickSound(); onSelectTab('badges'); }}
            className="hidden md:flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-2xl px-3 py-1.5 cursor-pointer hover:bg-purple-500/20 transition-colors"
          >
            <span className="text-xs">⭐</span>
            <div className="text-left">
              <div className="text-[11px] font-extrabold text-purple-300">{userProfile.xp} XP</div>
              <div className="text-[9px] text-purple-400/80">{userProfile.rankTier}</div>
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/80 transition-colors"
            title={muted ? 'Unmute Sound' : 'Mute Sound'}
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>

          {/* Settings / API Key */}
          <button
            onClick={() => { playClickSound(); onOpenSettings(); }}
            className="p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-indigo-300 border border-slate-700/80 hover:border-indigo-500/50 transition-colors"
            title="Configure AI Models & Keys"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation Tabs Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/60 flex items-center gap-1 overflow-x-auto no-scrollbar py-1">
        {navItems.map(item => {
          const Icon = item.icon;
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                playClickSound();
                onSelectTab(item.id);
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};
