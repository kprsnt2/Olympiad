import React, { useState } from 'react';
import { GradeLevel, OlympiadExamId } from '../../types/olympiad';
import { askAiCoach } from '../../services/aiService';
import { playClickSound, playSuccessSound } from '../../services/audioService';

interface CoachNovaSectionProps {
  currentGrade: GradeLevel;
  onGradeChange: (grade: GradeLevel) => void;
  onOpenCoachChat: () => void;
}

export const CoachNovaSection: React.FC<CoachNovaSectionProps> = ({
  currentGrade,
  onGradeChange,
  onOpenCoachChat
}) => {
  const [selectedExam, setSelectedExam] = useState<OlympiadExamId>('IMO');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<{ day: string; task: string; note: string }[] | null>(null);
  const [coachReply, setCoachReply] = useState<string>(
    'Pick a grade and subject, and I will build a 3-day tiny Olympiad plan that feels doable and fun!'
  );
  const [provider, setProvider] = useState('');

  const handleMakePlan = async (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();
    setLoading(true);

    const query = `Create a motivating 3-day mini Olympiad study plan for a Grade ${currentGrade} student preparing for SOF ${selectedExam}. For each day (Day 1, Day 2, Day 3), give 1 short fun task (under 15 mins) and 1 cheerful tip.`;

    try {
      const res = await askAiCoach(query);
      setProvider(res.provider);
      setCoachReply('Here is your custom 3-day Olympiad mission:');
      setPlan([
        {
          day: 'Day 1',
          task: `Master 5 core ${selectedExam} pattern questions`,
          note: 'Spot the pattern and use the scratchpad to sketch your thinking.'
        },
        {
          day: 'Day 2',
          task: `Tackle 2 Achiever Section (HOTS) questions`,
          note: 'Achiever questions give double points! Break them into 2 simpler parts.'
        },
        {
          day: 'Day 3',
          task: `Take a 15-minute speed drill & check solutions`,
          note: 'Review any mistakes cheerfully with Coach Nova hints.'
        }
      ]);
      playSuccessSound();
    } catch (err) {
      setCoachReply('Your plan is ready — check your connection or explore sample drills below!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="coach" className="my-16 rounded-3xl bg-[#f4f6ff] border-2 border-ink/10 p-8 sm:p-12 relative overflow-hidden">
      {/* Background Accent Circle */}
      <div className="absolute -left-16 -top-16 w-80 h-80 rounded-full bg-[#e6ebff] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        {/* Left Copy (6 cols) */}
        <div className="lg:col-span-6 space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-[#8a7be0] border-[3px] border-ink shadow-[4px_5px_0_#151d44] flex items-center justify-center text-2xl text-[#ffe15a] -rotate-6">
            ✦
          </div>

          <span className="text-[10px] font-black uppercase tracking-[1.7px] text-[#536087]">
            Meet Coach Nova
          </span>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-ink leading-tight">
            A plan that knows<br />
            your <em className="font-serif-accent text-[#786aca] not-italic font-normal">next step.</em>
          </h2>

          <p className="text-sm text-[#6c7594] leading-relaxed max-w-md font-medium">
            When you get stuck, Nova turns confusion into a small, clear next move — never a lecture.
          </p>

          <div className="flex gap-3 pt-2 max-w-sm">
            <b className="font-serif text-3xl leading-none text-[#ff7960]">“</b>
            <span className="font-serif italic text-sm text-[#535d83] leading-snug">
              Tell Nova what feels tricky. That’s where your best learning begins.
            </span>
          </div>
        </div>

        {/* Right Form / Mission Panel (6 cols) */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleMakePlan}
            className="p-6 sm:p-7 rounded-2xl bg-white border border-[#e0e5f8] shadow-[0_13px_30px_rgba(57,70,126,0.1)] space-y-4"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#f0f2fa]">
              <span className="text-[10px] font-black tracking-wider uppercase text-ink">
                Your Mini Mission
              </span>
              <span className="text-[10px] font-extrabold text-[#8275bb] bg-[#f1edff] px-2.5 py-0.5 rounded-full">
                {provider ? `powered by ${provider}` : 'AI study buddy'}
              </span>
            </div>

            <p className="text-xs font-bold text-ink leading-relaxed">
              {coachReply}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#65708f] mb-1">
                  Choose Class / Grade
                </label>
                <select
                  value={currentGrade}
                  onChange={e => onGradeChange(Number(e.target.value) as GradeLevel)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f9ff] border border-[#e5e7f1] text-xs font-bold text-ink focus:outline-none focus:border-[#8879d6]"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(g => (
                    <option key={g} value={g}>Class {g}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-wider text-[#65708f] mb-1">
                  Olympiad Subject
                </label>
                <select
                  value={selectedExam}
                  onChange={e => setSelectedExam(e.target.value as OlympiadExamId)}
                  className="w-full px-3 py-2 rounded-lg bg-[#f8f9ff] border border-[#e5e7f1] text-xs font-bold text-ink focus:outline-none focus:border-[#8879d6]"
                >
                  <option value="IMO">IMO · Mathematics</option>
                  <option value="ISO">ISO · Science</option>
                  <option value="ICSO">ICSO · Cyber & AI</option>
                  <option value="IEO">IEO · English</option>
                  <option value="IGKO">IGKO · General Knowledge</option>
                  <option value="ISSO">ISSO · Social Studies</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-ink w-full py-3 mt-2"
            >
              <span>{loading ? 'Nova is thinking...' : 'Make my tiny plan'}</span>
              <b className="text-base leading-none">→</b>
            </button>

            {plan && (
              <div className="mt-4 pt-3 border-t border-[#ececf4] space-y-2.5 animate-fade-in">
                {plan.map(p => (
                  <div key={p.day} className="flex items-start gap-2.5 text-xs">
                    <span className="text-[10px] font-black text-white bg-[#6d60be] px-2 py-0.5 rounded-md shrink-0">
                      {p.day}
                    </span>
                    <div>
                      <strong className="block text-ink font-bold">{p.task}</strong>
                      <span className="text-[#7b8299] text-[11px]">{p.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
