import React, { useState } from 'react';
import { GradeLevel, UserProfile } from '../../types/olympiad';
import { Sparkles, Flame, Volume2, VolumeX, Settings, Award } from 'lucide-react';
import { toggleMute, isAudioMuted, playClickSound } from '../../services/audioService';

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
  const [muted, setMuted] = useState(isAudioMuted());

  const handleAudioToggle = () => {
    const next = toggleMute();
    setMuted(next);
  };

  const navItems = [
    { id: 'dashboard', label: 'Explore' },
    { id: 'gradeHub', label: 'Learn' },
    { id: 'mockTests', label: 'Practice' },
    { id: 'level2', label: 'Level 2' },
    { id: 'pyq', label: 'Papers' },
    { id: 'worksheets', label: 'Worksheets' },
    { id: 'formulaSheets', label: 'Formulas' },
    { id: 'aiCoach', label: 'Coach' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#fffdf8]/90 backdrop-blur-md border-b border-[#e9e6df] shadow-xs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 h-[80px] flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => { playClickSound(); onSelectTab('dashboard'); }}
            className="brand hover:opacity-90 transition-opacity text-left"
          >
            <span className="brand-star">✦</span>
            <span>olympi</span>
            <span className="brand-dot">.</span>
          </button>

          {/* Grade Quick Switcher */}
          <div className="hidden sm:flex items-center bg-[#f0f0f7] p-1 rounded-xl border border-[#e2e2ec]">
            <span className="text-[10px] font-black uppercase text-ink-muted px-2">Grade:</span>
            <select
              value={userProfile.grade}
              onChange={e => {
                playClickSound();
                onGradeChange(Number(e.target.value) as GradeLevel);
              }}
              className="bg-white text-ink text-xs font-black px-2.5 py-1 rounded-lg border border-[#d5d5e5] shadow-xs focus:outline-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                <option key={g} value={g}>Class {g}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Center Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-extrabold text-[#536087]">
          {navItems.map(item => {
            const isActive = currentTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { playClickSound(); onSelectTab(item.id); }}
                className={`transition-colors py-1.5 border-b-2 font-black ${
                  isActive
                    ? 'text-ink border-coral'
                    : 'border-transparent hover:text-ink'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions & Gamification Status */}
        <div className="flex items-center gap-3">
          {/* Daily Streak */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#ffefe9] border border-[#ffd5c7] text-[#e05638] font-black text-xs">
            <Flame className="w-3.5 h-3.5 fill-[#ff795f] text-[#ff795f] animate-pulse" />
            <span>{userProfile.streakDays}d streak</span>
          </div>

          {/* Sparks XP */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fff8db] border border-[#fde89c] text-[#9b6f02] font-black text-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#e5a800]" />
            <span>{userProfile.xp} sparks</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            className="p-2 rounded-xl text-ink-muted hover:text-ink hover:bg-[#f0edf7] transition-colors"
            title={muted ? 'Unmute Audio' : 'Mute Audio'}
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-ink" />}
          </button>

          {/* Settings / API Key Dialog */}
          <button
            onClick={() => { playClickSound(); onOpenSettings(); }}
            className="p-2 rounded-xl text-ink-muted hover:text-ink hover:bg-[#f0edf7] transition-colors"
            title="Settings"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* User Avatar */}
          <button
            onClick={() => { playClickSound(); onSelectTab('badges'); }}
            className="w-9 h-9 rounded-full bg-[#ffcf9c] text-[#974b38] font-black text-xs flex items-center justify-center relative shadow-xs border-2 border-white"
          >
            <span>{userProfile.name ? userProfile.name.charAt(0).toUpperCase() : 'A'}</span>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#57c88d] border-2 border-[#fffdf8]" />
          </button>
        </div>
      </div>

      {/* Mobile Sub-Nav Row */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar px-4 py-2 border-t border-[#f0edf7] bg-[#fffcf5]">
        {navItems.map(item => {
          const isActive = currentTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => { playClickSound(); onSelectTab(item.id); }}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition-colors ${
                isActive ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
