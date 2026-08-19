import React, { useState, useRef, useEffect } from 'react';
import { Send, Brain, Sparkles, User, RefreshCw, Volume2, HelpCircle, Key, Lightbulb } from 'lucide-react';
import { Question, AIChatMessage } from '../../types/olympiad';
import { askAiCoach } from '../../services/aiService';
import { speakQuestionText, playSuccessSound, playClickSound } from '../../services/audioService';
import { RichMathText } from '../common/LatexRenderer';

interface AiTutorChatProps {
  initialQuestion?: Question | null;
  onOpenSettings: () => void;
}

export const AiTutorChat: React.FC<AiTutorChatProps> = ({ initialQuestion, onOpenSettings }) => {
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
          text: `Oops! Couldn't reach the model: ${errMsg}. Using built-in offline explanation:\n\n${q.explanation}`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          providerUsed: 'offline',
          modelUsed: 'Offline Engine'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
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
                OpenAI + Gemini Failover
              </span>
            </div>
            <p className="text-xs text-slate-400">Step-by-step Socratic hints & concept explanations</p>
          </div>
        </div>

        <button
          onClick={() => { playClickSound(); onOpenSettings(); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold border border-slate-700 transition-colors"
        >
          <Key className="w-3.5 h-3.5 text-indigo-400" />
          <span>API Keys</span>
        </button>
      </div>

      {/* Active Question Pin Banner (if any) */}
      {activeQuestion && (
        <div className="px-6 py-2.5 bg-indigo-950/60 border-b border-indigo-500/20 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-indigo-200">
            <span className="font-bold text-indigo-400">{activeQuestion.examId} Q:</span>
            <span className="truncate max-w-md">{activeQuestion.questionText}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-slate-400">Hints:</span>
            <button
              onClick={() => requestHintLadder(1)}
              className="px-2 py-0.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 font-bold text-[11px] transition-colors"
            >
              Hint 1
            </button>
            <button
              onClick={() => requestHintLadder(2)}
              className="px-2 py-0.5 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 font-bold text-[11px] transition-colors"
            >
              Hint 2
            </button>
            <button
              onClick={() => requestHintLadder(3)}
              className="px-2 py-0.5 rounded-lg bg-pink-500/20 hover:bg-pink-500/30 text-pink-300 font-bold text-[11px] transition-colors"
            >
              Hint 3
            </button>
          </div>
        </div>
      )}

      {/* Chat Messages List */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map(msg => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.sender === 'ai' && (
              <div className="w-8 h-8 rounded-xl bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-sm shrink-0 mt-1">
                🤖
              </div>
            )}

            <div className={`max-w-[80%] rounded-3xl p-4 space-y-1.5 shadow-md ${
              msg.sender === 'user'
                ? 'bg-indigo-600 text-white rounded-br-none'
                : 'bg-slate-800/90 text-slate-100 border border-slate-700/80 rounded-bl-none'
            }`}>
              <div className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                <RichMathText text={msg.text} />
              </div>

              <div className="flex items-center justify-between gap-3 pt-1 text-[10px] text-slate-400">
                <span>{msg.timestamp}</span>
                {msg.sender === 'ai' && (
                  <div className="flex items-center gap-2">
                    {msg.providerUsed && (
                      <span className="font-mono text-[9px] px-1.5 py-0.5 rounded bg-slate-900 text-slate-400">
                        {msg.modelUsed || msg.providerUsed}
                      </span>
                    )}
                    <button
                      onClick={() => speakQuestionText(msg.text)}
                      className="hover:text-white transition-colors"
                      title="Read Aloud"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-indigo-300" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {msg.sender === 'user' && (
              <div className="w-8 h-8 rounded-xl bg-purple-600/30 border border-purple-500/40 flex items-center justify-center text-sm shrink-0 mt-1">
                <User className="w-4 h-4 text-purple-300" />
              </div>
            )}
          </div>
        ))}

        {loading && (
          <div className="flex gap-3 justify-start items-center text-xs text-slate-400 animate-pulse">
            <div className="w-8 h-8 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
              <RefreshCw className="w-4 h-4 text-indigo-400 animate-spin" />
            </div>
            <span>Olympiad Coach is thinking & checking with failover router...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800 bg-slate-900 flex gap-2">
        <input
          type="text"
          placeholder="Ask any Olympiad doubt, formula question, or logic pattern..."
          value={inputQuery}
          onChange={e => setInputQuery(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl bg-slate-800 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
        <button
          type="submit"
          disabled={!inputQuery.trim() || loading}
          className="px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105 disabled:opacity-50 flex items-center gap-1.5"
        >
          <Send className="w-4 h-4" />
          <span className="hidden sm:inline">Ask Coach</span>
        </button>
      </form>
    </div>
  );
};
