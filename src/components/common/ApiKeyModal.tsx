import React, { useState, useEffect } from 'react';
import { X, Key, Sparkles, CheckCircle2, ShieldAlert, Cpu, RefreshCw } from 'lucide-react';
import { AIConfig } from '../../types/olympiad';
import { getStoredAiConfig, saveAiConfig, askAiCoach } from '../../services/aiService';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfigSaved?: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onConfigSaved }) => {
  const [config, setConfig] = useState<AIConfig>(getStoredAiConfig());
  const [testStatus, setTestStatus] = useState<{ testing: boolean; message: string; success?: boolean } | null>(null);

  useEffect(() => {
    if (isOpen) {
      setConfig(getStoredAiConfig());
      setTestStatus(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    saveAiConfig(config);
    if (onConfigSaved) onConfigSaved();
    onClose();
  };

  const handleTestConnection = async () => {
    setTestStatus({ testing: true, message: 'Testing AI connection with failover router...' });
    saveAiConfig(config);

    try {
      const res = await askAiCoach('Hello! Can you give me one short 1-line inspiring tip for Math Olympiad?');
      setTestStatus({
        testing: false,
        success: true,
        message: `Success! Connected via ${res.provider.toUpperCase()} (${res.model})`
      });
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Unknown connection error';
      setTestStatus({
        testing: false,
        success: false,
        message: `Connection failed: ${msg}`
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                AI Engine Configuration
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Dual Failover
                </span>
              </h3>
              <p className="text-xs text-slate-400">OpenAI (Primary) + Google Gemini (Backup/Fallback)</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Info Banner */}
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex gap-3 text-xs text-blue-200">
            <Sparkles className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-blue-100 mb-1">Zero-Setup Instant Operation</p>
              <p className="leading-relaxed">
                All Mock Tests, 2020-2025 PYQs, and Curriculums work 100% offline out-of-the-box! Adding API keys enables live dynamic AI question generation and interactive doubt coaching.
              </p>
            </div>
          </div>

          {/* 1. OpenAI Configuration */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-base">🟢</span> OpenAI API (Primary)
              </span>
              <span className="text-[11px] text-slate-400">gpt-5.4-mini / gpt-5.4-nano</span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">OpenAI API Key</label>
              <input
                type="password"
                placeholder="sk-proj-..."
                value={config.openaiKey}
                onChange={e => setConfig({ ...config, openaiKey: e.target.value.trim() })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Model Name</label>
              <input
                type="text"
                placeholder="gpt-5.4-mini"
                value={config.openaiModel}
                onChange={e => setConfig({ ...config, openaiModel: e.target.value.trim() })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* 2. Google Gemini Configuration */}
          <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/70 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-white flex items-center gap-2">
                <span className="text-base">🔵</span> Google Gemini (Backup & Fallback)
              </span>
              <span className="text-[11px] text-slate-400">gemini-flash-latest / 2.5-flash-lite</span>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Gemini API Key</label>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={config.geminiKey}
                onChange={e => setConfig({ ...config, geminiKey: e.target.value.trim() })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">Model Name</label>
              <input
                type="text"
                placeholder="gemini-flash-latest"
                value={config.geminiModel}
                onChange={e => setConfig({ ...config, geminiModel: e.target.value.trim() })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          {/* 3. Provider Routing Preference */}
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Routing Strategy
            </label>
            <select
              value={config.preferredProvider}
              onChange={e => setConfig({ ...config, preferredProvider: e.target.value as 'openai' | 'gemini' | 'auto' })}
              className="w-full px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500"
            >
              <option value="auto">Auto (OpenAI Primary, Gemini Failover)</option>
              <option value="gemini">Gemini Primary (OpenAI Failover)</option>
              <option value="openai">OpenAI Only</option>
            </select>
          </div>

          {/* Test connection result banner */}
          {testStatus && (
            <div className={`p-3.5 rounded-xl text-xs flex items-center gap-2.5 ${
              testStatus.testing
                ? 'bg-slate-800 text-slate-300 border border-slate-700'
                : testStatus.success
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
            }`}>
              {testStatus.testing ? (
                <RefreshCw className="w-4 h-4 animate-spin text-indigo-400 shrink-0" />
              ) : testStatus.success ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
              )}
              <span>{testStatus.message}</span>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-900/90">
          <button
            type="button"
            onClick={handleTestConnection}
            disabled={testStatus?.testing}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${testStatus?.testing ? 'animate-spin' : ''}`} />
            Test Connection
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white text-xs font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
            >
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
