import { Question, OlympiadExamId, GradeLevel, UserProfile } from '../types/olympiad';
import { QUESTION_BANK } from '../data/questionBank';

// Fisher-Yates In-Place Shuffle
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getNonRepeatingQuestions(
  examId: OlympiadExamId,
  grade: GradeLevel,
  count: number,
  userProfile: UserProfile,
  chapterFilter?: string
): Question[] {
  // 1. Get all questions matching the EXACT subject and grade
  let candidatePool = QUESTION_BANK.filter(
    q => q.examId === examId && q.grade === grade
  );

  // Apply optional chapter filter if specified
  if (chapterFilter && chapterFilter.trim() !== '') {
    const chapterMatches = candidatePool.filter(q =>
      q.chapter.toLowerCase().includes(chapterFilter.toLowerCase())
    );
    if (chapterMatches.length >= 5) {
      candidatePool = chapterMatches;
    }
  }

  // If candidatePool is small (safety fallback), include same subject from adjacent grades
  if (candidatePool.length < count) {
    const sameExam = QUESTION_BANK.filter(q => q.examId === examId);
    candidatePool = [...candidatePool, ...sameExam.filter(q => !candidatePool.includes(q))];
  }

  const solvedSet = new Set(userProfile.solvedQuestionIds || []);

  // 2. Separate into Unseen (never solved by user) vs Seen
  const unseenPool = candidatePool.filter(q => !solvedSet.has(q.id));
  const seenPool = candidatePool.filter(q => solvedSet.has(q.id));

  const shuffledUnseen = shuffleArray(unseenPool);
  const shuffledSeen = shuffleArray(seenPool);

  // 3. Prioritize Unseen questions first
  if (shuffledUnseen.length >= count) {
    return shuffledUnseen.slice(0, count);
  }

  // 4. If user solved all/most questions, take all unseen + fill remaining from seen
  const combined = [...shuffledUnseen, ...shuffledSeen];
  return combined.slice(0, count);
}

export function getDailyArenaQuestions(
  grade: GradeLevel,
  userProfile: UserProfile
): Question[] {
  const mathQs = getNonRepeatingQuestions('IMO', grade, 1, userProfile);
  const scienceQs = getNonRepeatingQuestions('ISO', grade, 1, userProfile);
  const cyberOrEngQs = getNonRepeatingQuestions('ICSO', grade, 1, userProfile);

  const selected = [
    mathQs[0] || QUESTION_BANK.find(q => q.examId === 'IMO' && q.grade === grade),
    scienceQs[0] || QUESTION_BANK.find(q => q.examId === 'ISO' && q.grade === grade),
    cyberOrEngQs[0] || QUESTION_BANK.find(q => q.examId === 'ICSO' && q.grade === grade)
  ].filter((q): q is Question => Boolean(q));

  return selected;
}
