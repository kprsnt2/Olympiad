import React, { useEffect } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { playTickSound } from '../../services/audioService';

interface TestTimerProps {
  secondsLeft: number;
  totalSeconds: number;
  onTimeExpired: () => void;
}

export const TestTimer: React.FC<TestTimerProps> = ({
  secondsLeft,
  totalSeconds,
  onTimeExpired
}) => {
  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimeExpired();
    } else if (secondsLeft <= 60 && secondsLeft % 10 === 0) {
      playTickSound();
    }
  }, [secondsLeft, onTimeExpired]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const isUrgent = secondsLeft < 300; // less than 5 minutes

  const formatTime = (m: number, s: number) => {
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-2xl text-xs font-mono font-bold border transition-colors ${
      isUrgent
        ? 'bg-rose-500/10 border-rose-500/40 text-rose-400 animate-pulse'
        : 'bg-slate-800 border-slate-700 text-slate-200'
    }`}>
      {isUrgent ? <AlertTriangle className="w-4 h-4 text-rose-400" /> : <Clock className="w-4 h-4 text-indigo-400" />}
      <span>{formatTime(minutes, seconds)}</span>
    </div>
  );
};
