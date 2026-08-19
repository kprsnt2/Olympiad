import React, { useState, useEffect } from 'react';
import { GradeLevel, OlympiadExamId, MockTest, Question, TestAttemptResult, UserProfile } from './types/olympiad';
import { loadUserProfile, saveUserProfile, addXpToUser, recordTestAttempt } from './services/storageService';
import { OLYMPIAD_EXAMS } from './data/olympiadExams';
import { QUESTION_BANK } from './data/questionBank';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MascotHero } from './components/dashboard/MascotHero';
import { SubjectCard } from './components/dashboard/SubjectCard';
import { DailyChallenge } from './components/dashboard/DailyChallenge';
import { BadgesShowcase } from './components/dashboard/BadgesShowcase';
import { GradeHub } from './components/dashboard/GradeHub';
import { TestSimulator } from './components/test/TestSimulator';
import { ResultAnalytics } from './components/test/ResultAnalytics';
import { PyqArchive } from './components/pyq/PyqArchive';
import { Level2Zone } from './components/pyq/Level2Zone';
import { WorksheetsHub } from './components/worksheets/WorksheetsHub';
import { FormulaSheets } from './components/sheets/FormulaSheets';
import { AiTutorChat } from './components/ai/AiTutorChat';
import { AiQuestionGenerator } from './components/ai/AiQuestionGenerator';
import { ApiKeyModal } from './components/common/ApiKeyModal';
import { playClickSound } from './services/audioService';

export const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(loadUserProfile());
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeTest, setActiveTest] = useState<MockTest | null>(null);
  const [lastResult, setLastResult] = useState<TestAttemptResult | null>(null);
  const [aiFocusQuestion, setAiFocusQuestion] = useState<Question | null>(null);

  // Sync profile to localStorage on updates
  useEffect(() => {
    saveUserProfile(userProfile);
  }, [userProfile]);

  const handleGradeChange = (grade: GradeLevel) => {
    const updated = { ...userProfile, grade };
    setUserProfile(updated);
    saveUserProfile(updated);
  };

  const handleXpGained = (xp: number) => {
    const { profile } = addXpToUser(userProfile, xp);
    setUserProfile({ ...profile });
  };

  const handleStartMockForExam = (examId: string) => {
    playClickSound();
    const exam = OLYMPIAD_EXAMS[examId];
    // Filter questions matching grade and exam
    const qList = QUESTION_BANK.filter(q => q.grade === userProfile.grade && q.examId === examId);
    const selectedQs = qList.length >= 10 ? qList.slice(0, 20) : QUESTION_BANK.filter(q => q.grade === userProfile.grade).slice(0, 15);

    const test: MockTest = {
      id: `mock-${examId.toLowerCase()}-g${userProfile.grade}-${Date.now()}`,
      title: `Official Simulated ${exam?.fullName || examId} Mock Test - Grade ${userProfile.grade}`,
      examId: examId as OlympiadExamId,
      grade: userProfile.grade,
      durationMinutes: 60,
      totalMarks: userProfile.grade >= 5 ? 60 : 40,
      isLevel2: false,
      description: `Comprehensive 60-minute simulated Olympiad examination with Logical Reasoning, Subject Core, Everyday Applications, and Achiever Section HOTS.`,
      questions: selectedQs
    };

    setActiveTest(test);
    setCurrentTab('testing');
  };

  const handleStartChapterPractice = (examId: OlympiadExamId, chapterName: string) => {
    playClickSound();
    const qList = QUESTION_BANK.filter(
      q => q.grade === userProfile.grade && q.examId === examId
    );
    const chapterQs = qList.length > 0 ? qList : QUESTION_BANK.filter(q => q.grade === userProfile.grade).slice(0, 10);

    const test: MockTest = {
      id: `drill-${examId.toLowerCase()}-${Date.now()}`,
      title: `${examId}: ${chapterName} Practice Drill`,
      examId,
      grade: userProfile.grade,
      durationMinutes: 25,
      totalMarks: chapterQs.length,
      isLevel2: false,
      description: `Focused chapter drill on ${chapterName} for Class ${userProfile.grade}.`,
      questions: chapterQs
    };

    setActiveTest(test);
    setCurrentTab('testing');
  };

  const handleFinishTest = (result: TestAttemptResult) => {
    const updated = recordTestAttempt(userProfile, result);
    setUserProfile({ ...updated });
    setLastResult(result);
    setCurrentTab('results');
  };

  const handleAskAiDoubt = (q: Question) => {
    playClickSound();
    setAiFocusQuestion(q);
    setCurrentTab('aiCoach');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={tab => {
          if (tab !== 'testing') setActiveTest(null);
          setCurrentTab(tab);
        }}
        userProfile={userProfile}
        onGradeChange={handleGradeChange}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* TAB 1: Explore / Dashboard */}
        {currentTab === 'dashboard' && (
          <div className="space-y-10 animate-fade-in">
            {/* Mascot Banner */}
            <MascotHero
              userProfile={userProfile}
              onGradeChange={handleGradeChange}
              onStartPractice={handleStartMockForExam}
              onOpenAiCoach={() => setCurrentTab('aiCoach')}
              onOpenMockTests={() => setCurrentTab('mockTests')}
              onOpenWorksheets={() => setCurrentTab('worksheets')}
            />

            {/* Daily Speed Arena */}
            <DailyChallenge
              userProfile={userProfile}
              onQuestionSolved={handleXpGained}
              onOpenAiHint={handleAskAiDoubt}
            />

            {/* 6 Olympiad Subjects Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-black text-white">Choose Your Olympiad Exam</h2>
                  <p className="text-xs text-slate-400 mt-1">Full grade-tailored preparation aligned with official SOF syllabi</p>
                </div>
                <button
                  onClick={() => { playClickSound(); setCurrentTab('gradeHub'); }}
                  className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  View Full Syllabus →
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.values(OLYMPIAD_EXAMS).map(exam => (
                  <SubjectCard
                    key={exam.id}
                    exam={exam}
                    grade={userProfile.grade}
                    onStartPractice={() => handleStartChapterPractice(exam.id, 'Core Foundations')}
                    onStartMock={() => handleStartMockForExam(exam.id)}
                    onViewSyllabus={() => setCurrentTab('gradeHub')}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Grade Hub */}
        {currentTab === 'gradeHub' && (
          <GradeHub
            currentGrade={userProfile.grade}
            onGradeChange={handleGradeChange}
            onStartChapterPractice={handleStartChapterPractice}
          />
        )}

        {/* TAB 3: Mock Tests Grid */}
        {currentTab === 'mockTests' && (
          <div className="space-y-8 animate-fade-in">
            <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/20 shadow-xl">
              <h2 className="text-3xl font-black text-white">Authentic 60-Minute Timed Mock Tests</h2>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                Experience the exact SOF exam environment with live countdown, scratchpad calculations, section weightages, and Achiever Section HOTS questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.values(OLYMPIAD_EXAMS).map(exam => (
                <SubjectCard
                  key={exam.id}
                  exam={exam}
                  grade={userProfile.grade}
                  onStartPractice={() => handleStartChapterPractice(exam.id, 'Speed Drills')}
                  onStartMock={() => handleStartMockForExam(exam.id)}
                  onViewSyllabus={() => setCurrentTab('gradeHub')}
                />
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Level 2 Zone */}
        {currentTab === 'level2' && (
          <Level2Zone
            currentGrade={userProfile.grade}
            onGradeChange={handleGradeChange}
            onStartLevel2Test={test => {
              setActiveTest(test);
              setCurrentTab('testing');
            }}
          />
        )}

        {/* TAB 5: PYQ Archive */}
        {currentTab === 'pyq' && (
          <PyqArchive
            currentGrade={userProfile.grade}
            onGradeChange={handleGradeChange}
            onStartPaper={test => {
              setActiveTest(test);
              setCurrentTab('testing');
            }}
          />
        )}

        {/* TAB 6: Worksheets */}
        {currentTab === 'worksheets' && (
          <WorksheetsHub
            currentGrade={userProfile.grade}
            onGradeChange={handleGradeChange}
          />
        )}

        {/* TAB 7: Formula Cheat Sheets */}
        {currentTab === 'formulaSheets' && (
          <FormulaSheets />
        )}

        {/* TAB 8: AI Coach Chat & Doubt Solver */}
        {currentTab === 'aiCoach' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">Ask Olympiad Coach (Doubt Solver)</h2>
                <p className="text-xs text-slate-400 mt-1">Get 3-step Socratic hints, formulas, and kid-friendly analogies</p>
              </div>
              <button
                onClick={() => setCurrentTab('aiGenerator')}
                className="px-4 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 font-bold text-xs border border-purple-500/30 transition-colors"
              >
                ✨ Dynamic Question Generator →
              </button>
            </div>
            <AiTutorChat
              initialQuestion={aiFocusQuestion}
              onOpenSettings={() => setIsSettingsOpen(true)}
            />
          </div>
        )}

        {/* TAB 9: AI Infinite Question Generator */}
        {currentTab === 'aiGenerator' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-white">Infinite AI Question Generator</h2>
                <p className="text-xs text-slate-400 mt-1">Generate unlimited authentic multiple-choice Olympiad problems on any topic</p>
              </div>
              <button
                onClick={() => setCurrentTab('aiCoach')}
                className="px-4 py-2 rounded-xl bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 font-bold text-xs border border-indigo-500/30 transition-colors"
              >
                ← Back to AI Coach
              </button>
            </div>
            <AiQuestionGenerator
              currentGrade={userProfile.grade}
              onOpenAiHint={handleAskAiDoubt}
            />
          </div>
        )}

        {/* TAB 10: Badges & Trophies */}
        {currentTab === 'badges' && (
          <BadgesShowcase userProfile={userProfile} />
        )}

        {/* ACTIVE TEST SIMULATION MODE */}
        {currentTab === 'testing' && activeTest && (
          <TestSimulator
            test={activeTest}
            onFinishTest={handleFinishTest}
            onCancelTest={() => setCurrentTab('dashboard')}
          />
        )}

        {/* RESULTS ANALYTICS MODE */}
        {currentTab === 'results' && lastResult && activeTest && (
          <ResultAnalytics
            result={lastResult}
            questions={activeTest.questions}
            onRetakeTest={() => {
              setCurrentTab('testing');
            }}
            onBackToDashboard={() => {
              setActiveTest(null);
              setLastResult(null);
              setCurrentTab('dashboard');
            }}
            onAskAiDoubt={handleAskAiDoubt}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* API Key / Model Settings Modal */}
      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export default App;
