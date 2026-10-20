/**
 * SpeechSynthesis API Controller for Gira Santa Mônica
 * Provides accessible text-to-speech narration in Portuguese (pt-BR)
 * with robust state tracking, pause/cancel, and auto-voice selection.
 */

type SpeechListener = (speaking: boolean, currentText: string | null) => void;

class SpeechController {
  private synth: SpeechSynthesis | null = null;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isAutoNarrationEnabled: boolean = false;
  private listeners: Set<SpeechListener> = new Set();
  private speaking: boolean = false;
  private activeText: string | null = null;

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
    }

    // Load user preference for auto-narration
    try {
      const stored = localStorage.getItem('gira_sm_autonarrate');
      if (stored !== null) {
        this.isAutoNarrationEnabled = stored === 'true';
      }
    } catch {
      this.isAutoNarrationEnabled = false;
    }
  }

  public isSupported(): boolean {
    return this.synth !== null;
  }

  public isAutoEnabled(): boolean {
    return this.isAutoNarrationEnabled;
  }

  public setAutoEnabled(enabled: boolean) {
    this.isAutoNarrationEnabled = enabled;
    try {
      localStorage.setItem('gira_sm_autonarrate', String(enabled));
    } catch {
      // ignore
    }
    if (!enabled && this.isSpeaking()) {
      this.stop();
    }
    this.notify();
  }

  public toggleAuto(): boolean {
    this.setAutoEnabled(!this.isAutoNarrationEnabled);
    return this.isAutoNarrationEnabled;
  }

  public isSpeaking(): boolean {
    return this.speaking;
  }

  public getActiveText(): string | null {
    return this.activeText;
  }

  public subscribe(listener: SpeechListener): () => void {
    this.listeners.add(listener);
    listener(this.speaking, this.activeText);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => listener(this.speaking, this.activeText));
  }

  private getPortugueseVoice(): SpeechSynthesisVoice | null {
    if (!this.synth) return null;
    const voices = this.synth.getVoices();
    // Prioritize Brazilian Portuguese (pt-BR)
    const ptBrVoice = voices.find((v) => v.lang.toLowerCase().includes('pt-br') || v.lang.toLowerCase().includes('pt_br'));
    if (ptBrVoice) return ptBrVoice;
    
    // Fallback to any Portuguese voice
    const anyPt = voices.find((v) => v.lang.toLowerCase().startsWith('pt'));
    if (anyPt) return anyPt;

    return null;
  }

  public speak(text: string, onEnd?: () => void) {
    if (!this.synth) return;

    // Stop current speech
    this.stop();

    if (!text || text.trim() === '') return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    utterance.pitch = 1.0;

    const ptVoice = this.getPortugueseVoice();
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onstart = () => {
      this.speaking = true;
      this.activeText = text;
      this.notify();
    };

    utterance.onend = () => {
      this.speaking = false;
      this.activeText = null;
      this.currentUtterance = null;
      this.notify();
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.speaking = false;
      this.activeText = null;
      this.currentUtterance = null;
      this.notify();
    };

    this.currentUtterance = utterance;
    this.synth.speak(utterance);
  }

  public stop() {
    if (!this.synth) return;
    this.synth.cancel();
    this.speaking = false;
    this.activeText = null;
    this.currentUtterance = null;
    this.notify();
  }
}

export const speech = new SpeechController();
