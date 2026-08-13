"use client";

import { useEffect, useState, useRef } from "react";
import { Terminal, Power, Cpu, Database, Network } from "lucide-react";
import gsap from "gsap";

export default function EntranceBanner({ onEnter }: { onEnter: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const curtainRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);

    const logSequence = [
      "[OK] BOOTING ABDULLAH-OS KERNEL v2.0.26...",
      "[OK] LOADING MAPF-LITE NEURAL WEIGHTS (99.34% ACCURACY)...",
      "[OK] MOUNTING RAG PIPELINES & VECTOR DATABASES...",
      "[OK] CONNECTING NODES: LONDON (10.0.0.1) ↔ RAWALPINDI (10.0.0.2)...",
      "[OK] INITIALIZING REACT SERVER COMPONENTS...",
      "[SYSTEM] ALL SYSTEMS OPERATIONAL. AWAITING USER INPUT."
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < logSequence.length) {
        const nextLog = logSequence[current];
        if (nextLog) {
          setLogs((prev) => [...prev, nextLog]);
        }
        current++;
      } else {
        setIsReady(true);
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const handleEnterWorld = () => {
    if (curtainRef.current) {
      gsap.to(curtainRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
          setDismissed(true);
          onEnter();
        }
      });
    } else {
      setDismissed(true);
      onEnter();
    }
  };

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1.05, duration: 0.2, ease: "power2.out" });
    }
  };

  const handleMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, { scale: 1, duration: 0.2, ease: "power2.out" });
    }
  };

  if (!mounted || dismissed) return null;

  return (
    <div
      ref={curtainRef}
      className="fixed inset-0 z-[9999] bg-os-bg text-os-primary flex flex-col justify-center p-6 md:p-12 overflow-hidden font-mono"
    >
      <div className="absolute inset-0 scanline-overlay pointer-events-none" />

      {/* Terminal Window */}
      <div className="relative z-10 w-full max-w-3xl mx-auto os-window flex flex-col">
        <div className="os-header flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            <span>boot_sequence.sh</span>
          </div>
          <button onClick={handleEnterWorld} className="hover:text-os-bg hover:bg-os-primary px-2 uppercase text-xs">
            Skip
          </button>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex flex-col gap-2 border-b border-os-border pb-6">
            <h1 className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-os-text">
              ABDULLAH-OS <span className="text-os-secondary">v2.0</span>
            </h1>
            <p className="text-xs md:text-sm text-os-muted">
              SENIOR FULL-STACK AI ENGINEER & ARCHITECT
            </p>
            <div className="flex gap-4 mt-2 text-os-muted">
              <span className="flex items-center gap-1 text-xs"><Cpu className="w-3 h-3"/> x86_64 ARCH</span>
              <span className="flex items-center gap-1 text-xs"><Database className="w-3 h-3"/> 32GB RAM</span>
              <span className="flex items-center gap-1 text-xs"><Network className="w-3 h-3"/> ONLINE</span>
            </div>
          </div>

          <div className="space-y-2 min-h-[160px] text-xs md:text-sm">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-os-muted">[{new Date().toISOString().split('T')[1].slice(0,-1)}]</span>
                <span className={log.includes("[SYSTEM]") ? "text-os-secondary font-bold" : "text-os-primary"}>
                  {log}
                </span>
              </div>
            ))}
            {!isReady && (
              <div className="flex items-center gap-2 animate-pulse mt-2 text-os-primary">
                <span className="animate-blink">_</span>
              </div>
            )}
          </div>

          {isReady && (
            <div className="pt-4 border-t border-os-border flex justify-center">
              <button
                ref={buttonRef}
                onClick={handleEnterWorld}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="flex items-center gap-3 px-8 py-4 border-2 border-os-primary text-os-primary hover:bg-os-primary hover:text-os-bg font-bold uppercase transition-colors"
              >
                <Power className="w-5 h-5" />
                INITIALIZE SYSTEM
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
