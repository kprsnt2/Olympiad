import { UserProfile, Badge, TestAttemptResult } from '../types/olympiad';
import { playLevelUpSound } from './audioService';

const USER_PROFILE_KEY = 'olympiad_user_profile_v1';

export const INITIAL_BADGES: Badge[] = [
  { id: 'b-first', name: 'First Discovery', title: 'First Question Solved', description: 'Solved your very first Olympiad practice question!', icon: '🎯', unlocked: false, category: 'explorer' },
  { id: 'b-streak-3', name: 'Ignition Streak', title: '3-Day Practice Streak', description: 'Practiced Olympiad questions for 3 days in a row!', icon: '🔥', unlocked: false, category: 'streak' },
  { id: 'b-streak-7', name: 'Orbit Master', title: '7-Day Practice Streak', description: 'A full week of non-stop daily Olympiad excellence!', icon: '⚡', unlocked: false, category: 'streak' },
  { id: 'b-math', name: 'Math Wizard', title: 'IMO Specialist', description: 'Solved 10+ Mathematics Olympiad problems correctly.', icon: '🧮', unlocked: false, category: 'mastery' },
  { id: 'b-science', name: 'Science Sleuth', title: 'ISO / NSO Investigator', description: 'Solved 10+ Science Olympiad problems correctly.', icon: '🔬', unlocked: false, category: 'mastery' },
  { id: 'b-cyber', name: 'Code Ninja', title: 'ICSO Cyber Champ', description: 'Solved 10+ Cyber & Computer questions correctly.', icon: '💻', unlocked: false, category: 'mastery' },
  { id: 'b-achiever', name: 'Achiever Conqueror', title: 'HOTS Section Pro', description: 'Solved 5 Achiever Section (HOTS) questions with 100% accuracy.', icon: '🏆', unlocked: false, category: 'accuracy' },
  { id: 'b-mock-cent', name: 'Century Club', title: 'Mock Test Distinction', description: 'Scored 90%+ in a full timed Olympiad Mock Test.', icon: '👑', unlocked: false, category: 'accuracy' }
];

export function getRankTier(xp: number): string {
  if (xp < 150) return 'Space Cadet 🚀';
  if (xp < 400) return 'Lunar Explorer 🌕';
  if (xp < 800) return 'Stellar Navigator ⭐';
  if (xp < 1500) return 'Galactic Scholar 🌌';
  return 'Olympiad Grandmaster 👑';
}

export function getInitialUserProfile(): UserProfile {
  return {
    name: 'Young Champion',
    grade: 4,
    avatar: '🚀',
    xp: 60,
    rankTier: 'Space Cadet 🚀',
    streakDays: 1,
    lastActiveDate: new Date().toISOString().split('T')[0],
    solvedQuestionIds: [],
    bookmarkedQuestionIds: [],
    testHistory: [],
    badges: INITIAL_BADGES
  };
}

export function loadUserProfile(): UserProfile {
  try {
    const saved = localStorage.getItem(USER_PROFILE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      const today = new Date().toISOString().split('T')[0];
      if (parsed.lastActiveDate !== today) {
        const lastDate = new Date(parsed.lastActiveDate);
        const currDate = new Date(today);
        const diffDays = Math.floor((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        if (diffDays === 1) {
          parsed.streakDays += 1;
        } else if (diffDays > 1) {
          parsed.streakDays = 1;
        }
        parsed.lastActiveDate = today;
      }
      parsed.rankTier = getRankTier(parsed.xp || 0);
      return parsed;
    }
  } catch (e) {
    console.warn('Failed to load user profile, initializing fresh', e);
  }
  return getInitialUserProfile();
}

export function saveUserProfile(profile: UserProfile): void {
  try {
    profile.rankTier = getRankTier(profile.xp);
    localStorage.setItem(USER_PROFILE_KEY, JSON.stringify(profile));
  } catch (e) {
    console.error('Failed to save user profile', e);
  }
}

export function addXpToUser(profile: UserProfile, xpGained: number): { profile: UserProfile; leveledUp: boolean } {
  const prevRank = profile.rankTier;
  profile.xp += xpGained;
  const newRank = getRankTier(profile.xp);
  let leveledUp = false;

  if (prevRank !== newRank) {
    leveledUp = true;
    playLevelUpSound();
  }

  profile.badges.forEach(b => {
    if (!b.unlocked) {
      if (b.id === 'b-first' && profile.solvedQuestionIds.length >= 1) {
        b.unlocked = true;
        b.unlockedDate = new Date().toLocaleDateString();
      }
      if (b.id === 'b-streak-3' && profile.streakDays >= 3) {
        b.unlocked = true;
        b.unlockedDate = new Date().toLocaleDateString();
      }
      if (b.id === 'b-streak-7' && profile.streakDays >= 7) {
        b.unlocked = true;
        b.unlockedDate = new Date().toLocaleDateString();
      }
    }
  });

  saveUserProfile(profile);
  return { profile, leveledUp };
}

export function recordTestAttempt(profile: UserProfile, attempt: TestAttemptResult): UserProfile {
  profile.testHistory.unshift(attempt);
  const earnedXp = attempt.correctCount * 10 + 50;
  profile.xp += earnedXp;

  if (attempt.percentage >= 90) {
    const b = profile.badges.find(badge => badge.id === 'b-mock-cent');
    if (b && !b.unlocked) {
      b.unlocked = true;
      b.unlockedDate = new Date().toLocaleDateString();
    }
  }

  saveUserProfile(profile);
  return profile;
}
