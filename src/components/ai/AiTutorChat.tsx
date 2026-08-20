import React, { useState, useRef, useEffect } from 'react';
import { Send, Brain, Sparkles, User, RefreshCw, Volume2, HelpCircle, Lightbulb } from 'lucide-react';
import { Question, AIChatMessage } from '../../types/olympiad';
import { askAiCoach } from '../../services/aiService';
import { speakQuestionText, playSuccessSound, playClickSound } from '../../services/audioService';
import { RichMathText } from '../common/LatexRenderer';

interface AiTutorChatProps {
  initialQuestion?: Question | null;
}

export const AiTutorChat: React.FC<AiTutorChatProps> = ({ initialQuestion }) => {
  const [messages, setMessages] = useState<AIChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: `Hello Young Champion! 🚀 I am your **Olympiad AI Coach**.\n\nYou can ask me any math, science, cyber, English, GK, or logic doubt. Or ask for a 3-step hint on any tough question!\n\n*(OpenAI & Google Gemini dual-engine active)*`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      providerUsed: 'offline',
      modelUsed: 'Dual Engine Ready'
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<Question | null>(initialQuestion || null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialQuestion) {
      setActiveQuestion(initialQuestion);
      handleAskAboutQuestion(initialQuestion);
    }
  }, [initialQuestion]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleAskAboutQuestion = async (q: Question) => {
    const userMsg: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: `Can you guide me step-by-step through this question from ${q.examId} (${q.chapter})?\n"${q.questionText}"`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await askAiCoach('Please explain the key concept and show how to solve this step-by-step.', q);
      playSuccessSound();

      const aiMsg: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: res.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        providerUsed: res.provider,
        modelUsed: res.model
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : 'Unknown AI error';
      setMessages(prev => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: `Connection note: ${errMsg}. Let's break this down logically! Think about the core formulas and given values.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          providerUsed: 'offline',
          modelUsed: 'Offline Fallback'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || loading) return;

    playClickSound();
    const query = inputQuery.trim();
    setInputQuery('');

    const userMsg: AIChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await askAiCoach(query, activeQuestion || undefined);
      playSuccessSound();

      const aiMsg: AIChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: res.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        providerUsed: res.provider,
        modelUsed: res.model
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (e: unknown) {
      const errMsg = e instanceof Error ? e.message : 'Unknown AI error';
      setMessages(prev => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: `Connection note: ${errMsg}. Let's break this down logically! Think about the core formulas and given values.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          providerUsed: 'offline',
          modelUsed: 'Offline Fallback'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const requestHintLadder = (level: 1 | 2 | 3) => {
    if (!activeQuestion) return;
    const hintText = activeQuestion.hints[level - 1] || 'Focus on the given numbers.';
    const hintTitle = level === 1 ? 'Hint 1 (Clue)' : level === 2 ? 'Hint 2 (Guiding Step)' : 'Hint 3 (Near Solution)';

    setMessages(prev => [
      ...prev,
      {
        id: `hint-${Date.now()}`,
        sender: 'ai',
        text: `💡 **${hintTitle}**: ${hintText}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        providerUsed: 'offline',
        modelUsed: '3-Step Hint Ladder'
      }
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl overflow-hidden flex flex-col h-[75vh]">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-500 to-indigo-600 flex items-center justify-center text-xl shadow-lg shadow-pink-500/20">
            🤖
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-extrabold text-white text-base">Olympiad AI Coach</h3>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                OpenAI + Gemini Dual Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">Step-by-step Socratic hints & concept explanations</p>
          </div>
        </div>
      </div>

      {/* Active Question Pin Banner (if any) */}
      {activeQuestion && (
        <div className="px-6 py-2.5 bg-indigo-950/60 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-indigo-200">
            <span className="px-2 py-0.5 rounded-md bg-indigo-500/30 font-bold text-[10px] uppercase">
              {activeQuestion.examId} • Grade {activeQuestion.grade}
            </span>
            <span className="font-medium truncate max-w-md">
              Focus: {activeQuestion.chapter}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-400 font-semibold">3-Step Socratic Ladder:</span>
            <button
              onClick={() => requestHintLadder(1)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-300 text-[10px] font-bold border border-slate-700 transition-colors"
            >
              Clue 1
            </button>
            <button
              onClick={() => requestHintLadder(2)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-indigo-300 text-[10px] font-bold border border-slate-700 transition-colors"
            >
              Step 2
            </button>
            <button
              onClick={() => requestHintLadder(3)}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-pink-300 text-[10px] font-bold border border-slate-700 transition-colors"
            >
              Solve 3
            </button>
            <button
              onClick={() => setActiveQuestion(null)}
              className="text-[10px] text-slate-400 hover:text-white underline ml-1"
            >
              Clear
            </button>
          </div>
        </div>
      )}

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map(m => {
          const isAi = m.sender === 'ai';
          return (
            <div
              key={m.id}
              className={`flex items-start gap-3 ${isAi ? '' : 'flex-row-reverse'}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                  isAi
                    ? 'bg-gradient-to-tr from-indigo-600 to-pink-600 text-white shadow-md'
                    : 'bg-slate-700 text-white'
                }`}
              >
                {isAi ? '🤖' : '👤'}
              </div>

              <div
                className={`max-w-[80%] rounded-2xl p-4 space-y-1 text-xs sm:text-sm leading-relaxed ${
                  isAi
                    ? 'bg-slate-800/90 text-slate-100 border border-slate-700 shadow-md'
                    : 'bg-indigo-600 text-white ml-auto'
                }`}
              >
                <div className="prose prose-invert max-w-none text-xs sm:text-sm">
                  <RichMathText text={m.text} />
                </div>

                <div className="flex items-center justify-between pt-2 text-[10px] text-slate-400 border-t border-slate-700/50">
                  <span>{m.timestamp}</span>
                  {isAi && (
                    <div className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono text-[9px]">{m.modelUsed || 'AI Engine'}</span>
                      <button
                        onClick={() => speakQuestionText(m.text)}
                        className="hover:text-white transition-colors"
                        title="Read aloud"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-600 flex items-center justify-center text-xs">
              🤖
            </div>
            <div className="p-4 rounded-2xl bg-slate-800 text-xs text-slate-300 flex items-center gap-2 border border-slate-700 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-indigo-400" />
              <span>Coach is formulating step-by-step guidance...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center gap-2">
        <input
          type="text"
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
          placeholder="Ask any math trick, science concept, formula, or type a doubt..."
          className="flex-1 px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
        />
        <button
          type="submit"
          disabled={!inputQuery.trim() || loading}
          className="p-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors disabled:opacity-40"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
