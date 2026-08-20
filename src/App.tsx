import React, { useState, useEffect } from 'react';
import { GradeLevel, OlympiadExamId, MockTest, Question, TestAttemptResult, UserProfile } from './types/olympiad';
import { loadUserProfile, saveUserProfile, addXpToUser, recordTestAttempt } from './services/storageService';
import { getNonRepeatingQuestions } from './services/questionRotationService';
import { OLYMPIAD_EXAMS } from './data/olympiadExams';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { MascotHero } from './components/dashboard/MascotHero';
import { SubjectCard } from './components/dashboard/SubjectCard';
import { DailyChallenge } from './components/dashboard/DailyChallenge';
import { MomentumSection } from './components/dashboard/MomentumSection';
import { CoachNovaSection } from './components/dashboard/CoachNovaSection';
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
import { playClickSound } from './services/audioService';

export const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>(loadUserProfile());
  const [currentTab, setCurrentTab] = useState<string>('dashboard');
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

  // Start 60-Minute Mock Test with Non-Repeating Question Rotation
  const handleStartMockForExam = (examId: string) => {
    playClickSound();
    const exam = OLYMPIAD_EXAMS[examId];
    
    // Fetch 20 non-repeating questions for this student
    const selectedQs = getNonRepeatingQuestions(
      examId as OlympiadExamId,
      userProfile.grade,
      20,
      userProfile
    );

    const totalMarks = selectedQs.reduce(
      (acc, q) => acc + (q.section === 'achievers' || q.isLevel2 ? (q.marks || 2) : (q.marks || 1)),
      0
    );

    const test: MockTest = {
      id: `mock-${examId.toLowerCase()}-g${userProfile.grade}-${Date.now()}`,
      title: `Official Simulated ${exam?.fullName || examId} Mock Test - Grade ${userProfile.grade}`,
      examId: examId as OlympiadExamId,
      grade: userProfile.grade,
      durationMinutes: 60,
      totalMarks: totalMarks || 40,
      isLevel2: false,
      description: `Comprehensive 60-minute simulated Olympiad examination with Logical Reasoning, Subject Core, Everyday Applications, and Achiever Section HOTS.`,
      questions: selectedQs
    };

    setActiveTest(test);
    setCurrentTab('testing');
  };

  // Start Chapter Practice Drill with Non-Repeating Question Rotation
  const handleStartChapterPractice = (examId: OlympiadExamId, chapterName: string) => {
    playClickSound();
    
    // Fetch 10 non-repeating questions for this student
    const chapterQs = getNonRepeatingQuestions(
      examId,
      userProfile.grade,
      10,
      userProfile,
      chapterName
    );

    const totalMarks = chapterQs.reduce((acc, q) => acc + (q.marks || 1), 0);

    const test: MockTest = {
      id: `drill-${examId.toLowerCase()}-${Date.now()}`,
      title: `${examId}: ${chapterName} Practice Drill`,
      examId,
      grade: userProfile.grade,
      durationMinutes: 25,
      totalMarks: totalMarks || 10,
      isLevel2: false,
      description: `Focused chapter drill on ${chapterName} for Class ${userProfile.grade}.`,
      questions: chapterQs
    };

    setActiveTest(test);
    setCurrentTab('testing');
  };

  // Launch AI Follow-Up Adaptive Drill generated on weak areas or mastery
  const handleStartAiFollowUpDrill = (aiQuestions: Question[], drillTitle: string) => {
    const examId = aiQuestions[0]?.examId || 'IMO';
    const totalMarks = aiQuestions.reduce((acc, q) => acc + (q.marks || 1), 0);

    const test: MockTest = {
      id: `ai-drill-${Date.now()}`,
      title: drillTitle,
      examId,
      grade: userProfile.grade,
      durationMinutes: 15,
      totalMarks: totalMarks || 5,
      isLevel2: false,
      description: `AI-synthesized custom adaptive follow-up questions targeting key concept mastery and weak areas.`,
      questions: aiQuestions
    };

    setActiveTest(test);
    setCurrentTab('testing');
  };

  const handleFinishTest = (result: TestAttemptResult) => {
    if (activeTest) {
      const newSolved = new Set(userProfile.solvedQuestionIds || []);
      activeTest.questions.forEach(q => newSolved.add(q.id));
      userProfile.solvedQuestionIds = Array.from(newSolved);
    }

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
    <div className="min-h-screen bg-[#fffdf8] text-ink flex flex-col font-sans selection:bg-coral selection:text-white">
      {/* Navigation Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={tab => {
          if (tab !== 'testing') setActiveTest(null);
          setCurrentTab(tab);
        }}
        userProfile={userProfile}
        onGradeChange={handleGradeChange}
      />

      {/* Main Content Container */}
      <main className="flex-1 max-w-[1240px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* TAB 1: Explore / Dashboard */}
        {currentTab === 'dashboard' && (
          <div className="space-y-12 animate-fade-in">
            {/* Hero Section with Retro-Space Art */}
            <MascotHero
              userProfile={userProfile}
              onGradeChange={handleGradeChange}
              onStartPractice={handleStartMockForExam}
              onOpenAiCoach={() => setCurrentTab('aiCoach')}
              onOpenMockTests={() => setCurrentTab('mockTests')}
              onOpenWorksheets={() => setCurrentTab('worksheets')}
            />

            {/* Grade Selector & Track Cards */}
            <section id="paths" className="space-y-6 pt-6">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[1.7px] text-[#536087]">
                    Start Here
                  </span>
                  <h2 className="text-3xl font-black tracking-tight text-ink mt-1">
                    What grade are you in?
                  </h2>
                </div>
                <p className="text-xs text-[#76809d] max-w-xs font-medium">
                  We’ll tune every challenge and question to the way you’re learning right now.
                </p>
              </div>

              {/* 10-Column Grade Tray */}
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2 p-3 bg-[#f0f0f7] rounded-2xl border border-[#e2e2ec]">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => {
                  const isSelected = userProfile.grade === g;
                  return (
                    <button
                      key={g}
                      onClick={() => { playClickSound(); handleGradeChange(g as GradeLevel); }}
                      className={`h-16 rounded-xl flex flex-col items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-white text-ink shadow-md font-black border border-ink/10 scale-105'
                          : 'bg-transparent text-[#697293] hover:bg-[#e5e5f0] font-bold'
                      }`}
                    >
                      <span className="text-xl font-black leading-none">{g}</span>
                      <small className="text-[9px] uppercase font-bold text-ink-muted mt-0.5">Grade</small>
                    </button>
                  );
                })}
              </div>

              {/* Path Topline Header */}
              <div className="flex items-center justify-between pt-4">
                <span className="text-[10px] font-black uppercase tracking-[1.4px] text-[#6c7594]">
                  Your Grade {userProfile.grade} Learning Tracks
                </span>
                <button
                  onClick={() => { playClickSound(); setCurrentTab('gradeHub'); }}
                  className="text-xs font-extrabold text-ink hover:text-coral transition-colors inline-flex items-center gap-1"
                >
                  <span>See full curriculum</span>
                  <b className="text-coral text-sm">→</b>
                </button>
              </div>

              {/* 6 Pastel Track Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            </section>

            {/* Momentum Galaxy Trail Section */}
            <MomentumSection userProfile={userProfile} />

            {/* Daily Tiny Wins & Daily Spark Test */}
            <DailyChallenge
              userProfile={userProfile}
              onQuestionSolved={handleXpGained}
              onOpenAiHint={handleAskAiDoubt}
              onOpenPyq={() => setCurrentTab('pyq')}
            />

            {/* Meet Coach Nova */}
            <CoachNovaSection
              currentGrade={userProfile.grade}
              onGradeChange={handleGradeChange}
              onOpenCoachChat={() => setCurrentTab('aiCoach')}
            />
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
            <div className="p-8 rounded-3xl bg-ink text-white shadow-xl space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#a7b9fa]">
                Exam Simulator
              </span>
              <h2 className="text-3xl font-black">Authentic 60-Minute Timed Mock Tests</h2>
              <p className="text-xs sm:text-sm text-[#adb5d3] max-w-2xl font-medium">
                Experience the exact SOF exam environment with non-repeating question rotation, live countdown, scratchpad calculations, section weightages, and Achiever Section HOTS questions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <h2 className="text-2xl font-black text-ink">Ask Olympiad Coach (Doubt Solver)</h2>
                <p className="text-xs text-ink-muted mt-1">Get 3-step Socratic hints, formulas, and kid-friendly analogies</p>
              </div>
              <button
                onClick={() => setCurrentTab('aiGenerator')}
                className="btn-ink text-xs py-2 px-4"
              >
                ✨ Dynamic Question Generator →
              </button>
            </div>
            <AiTutorChat
              initialQuestion={aiFocusQuestion}
            />
          </div>
        )}

        {/* TAB 9: AI Infinite Question Generator */}
        {currentTab === 'aiGenerator' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black text-ink">Infinite AI Question Generator</h2>
                <p className="text-xs text-ink-muted mt-1">Generate unlimited authentic multiple-choice Olympiad problems on any topic</p>
              </div>
              <button
                onClick={() => setCurrentTab('aiCoach')}
                className="btn-white text-xs py-2 px-4"
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
            onStartAiFollowUp={handleStartAiFollowUpDrill}
          />
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
