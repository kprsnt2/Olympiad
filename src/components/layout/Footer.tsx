import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-ink text-white py-12 px-6 sm:px-12 border-t border-ink-2 no-print">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="brand text-white">
            <span className="brand-star">✦</span>
            <span>olympi</span>
            <span className="brand-dot">.</span>
          </div>
          <p className="text-xs text-[#b3bddb] font-medium">
            For young minds that were made to wonder. Aligned with Science Olympiad Foundation guidelines.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold text-[#bec7e2]">
          <a href="#paths" className="hover:text-white transition-colors">Learning Paths</a>
          <a href="#daily-spark" className="hover:text-white transition-colors">Daily Sparks</a>
          <a href="#coach" className="hover:text-white transition-colors">Ask Coach Nova</a>
        </div>
      </div>
    </footer>
  );
};
