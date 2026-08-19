// Audio service utilizing Web Audio API for zero-latency synthesized sound effects & SpeechSynthesis for voice

const MUTE_KEY = 'olympiad_audio_muted_v1';

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export function isAudioMuted(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(MUTE_KEY) === 'true';
}

export function setAudioMuted(muted: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(MUTE_KEY, muted ? 'true' : 'false');
  if (muted && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}

export function toggleMute(): boolean {
  const current = isAudioMuted();
  const next = !current;
  setAudioMuted(next);
  return next;
}

// 1. Play pleasant ascending chime on correct answer
export function playSuccessSound(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(523.25, now); // C5
    osc1.frequency.exponentialRampToValueAtTime(659.25, now + 0.12); // E5
    osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.24); // G5
    osc1.frequency.exponentialRampToValueAtTime(1046.50, now + 0.36); // C6

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(261.63, now);
    osc2.frequency.exponentialRampToValueAtTime(523.25, now + 0.36);

    gainNode.gain.setValueAtTime(0.2, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.5);
    osc2.stop(now + 0.5);
  } catch (e) {
    console.warn('Web Audio error', e);
  }
}

// 2. Play gentle buzz on incorrect answer
export function playErrorSound(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.linearRampToValueAtTime(160, now + 0.25);

    gainNode.gain.setValueAtTime(0.15, now);
    gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.3);
  } catch (e) {
    console.warn('Web Audio error', e);
  }
}

// 3. Play victory fanfare on medal / level up
export function playLevelUpSound(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]; // C5, E5, G5, C6, E6
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + i * 0.1;
      const dur = 0.35;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + dur);
    });
  } catch (e) {
    console.warn('Web Audio error', e);
  }
}

// 4. Subtle UI button click sound
export function playClickSound(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.04);
  } catch (e) {
    // Ignore click audio glitch
  }
}

// 5. Timer alert tick sound
export function playTickSound(): void {
  if (isAudioMuted()) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1200, now);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.03);
  } catch (e) {
    // Ignore tick audio
  }
}

// 6. SpeechSynthesis kid-friendly voice reader
export function speakText(text: string): void {
  if (isAudioMuted() || typeof window === 'undefined' || !window.speechSynthesis) return;

  try {
    window.speechSynthesis.cancel();
    const cleanText = text
      .replace(/\$+/g, ' ')
      .replace(/\\times/g, ' multiplied by ')
      .replace(/\\div/g, ' divided by ')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 over $2')
      .replace(/\\sqrt\{([^}]+)\}/g, 'square root of $1')
      .replace(/[\\_{}^]/g, ' ');

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.lang = 'en-US';

    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('Speech synthesis not available', e);
  }
}

export function speakQuestionText(text: string): void {
  speakText(text);
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
