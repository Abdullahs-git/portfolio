"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowRight, Sun, Heart, Play, CloudSun } from "lucide-react";
import gsap from "gsap";

export default function EntranceBanner({ onEnter }: { onEnter: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [isReady, setIsReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const logSequence = [
      "🌸 AWAKENING ANIME WORLD ENGINE...",
      "✨ LOADING MAPF-LITE NEURAL WEIGHTS (99.34% ACCURACY)...",
      "🌤️ MOUNTING GHIBLI SKY PIPELINE & SUNBEAMS...",
      "📍 CONNECTING NODES: LONDON ↔ RAWALPINDI ↔ GUJRANWALA...",
      "🏗️ UNLOCKING RESEARCH MONUMENTS & ANIME DIORAMAS...",
      "💖 SYSTEM READY! WELCOME TO THE WORLD OF ABDULLAH!"
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
    }, 350);

    return () => clearInterval(interval);
  }, []);

  const handleEnterWorld = () => {
    if (curtainRef.current) {
      gsap.to(curtainRef.current, {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut",
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

  if (!mounted || dismissed) return null;

  return (
    <AnimatePresence>
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[9999] bg-gradient-to-b from-[#E0F2FE] via-[#FFF9F2] to-[#F4F7FE] text-slate-800 flex flex-col justify-between p-6 md:p-12 overflow-hidden border-b-4 border-sky-400"
      >
        {/* Background Anime Clouds & Rays */}
        <div className="absolute inset-0 anime-sky-grid opacity-30 pointer-events-none" />
        <div className="absolute top-10 right-20 w-96 h-96 bg-amber-200/50 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-200/50 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-400 via-sky-400 to-amber-400 p-0.5 shadow-lg shadow-sky-300/40">
              <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-display font-extrabold text-sky-500 text-lg">
                MAB
              </div>
            </div>
            <div>
              <h2 className="font-display font-extrabold text-sm tracking-wide text-slate-800 flex items-center gap-1.5">
                MUHAMMAD ABDULLAH BUTT 🌸
              </h2>
              <p className="text-[11px] font-mono font-semibold text-sky-600">
                SENIOR FULL-STACK AI ENGINEER & ARCHITECT
              </p>
            </div>
          </div>

          <button
            onClick={handleEnterWorld}
            className="text-xs font-mono font-bold text-slate-600 hover:text-sky-600 transition-colors flex items-center gap-2 px-4 py-2 rounded-full border-2 border-slate-800 bg-white shadow-[3px_3px_0px_#1E293B] hover:translate-y-[-2px]"
          >
            Skip Intro <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center Portal Content */}
        <div className="relative z-10 my-auto max-w-3xl mx-auto w-full text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-slate-800 bg-amber-100 text-slate-800 text-xs font-mono font-bold shadow-[3px_3px_0px_#1E293B]">
              <Sun className="w-4 h-4 text-amber-500 animate-spin" />
              ANIME WORLD EXPERIENCE • 2026 EDITION
            </div>

            <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-slate-900 leading-tight">
              EXPERIENCING THE WORLD OF <br />
              <span className="text-gradient-anime">ABDULLAH</span> 💖
            </h1>

            <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto font-sans leading-relaxed font-medium">
              Step into a sun-drenched Ghibli-style anime diorama journey through full-stack AI engineering,
              multimodal deepfake research, live job locations, and active publication buildings!
            </p>
          </motion.div>

          {/* Console Container */}
          <div className="anime-panel p-5 md:p-6 rounded-3xl max-w-xl mx-auto text-left font-mono text-xs text-slate-700 border-2 border-slate-800 shadow-[6px_6px_0px_#1E293B] relative overflow-hidden bg-white/90">
            <div className="flex items-center justify-between pb-3 mb-2 border-b-2 border-slate-200 text-slate-500 text-[11px] font-bold">
              <div className="flex items-center gap-2 text-sky-600">
                <CloudSun className="w-4 h-4" />
                <span>ANIME_WORLD_INITIALIZER.SH</span>
              </div>
              <span className="flex items-center gap-1 text-pink-500 font-bold">
                <Heart className="w-3.5 h-3.5 fill-pink-500" /> READY
              </span>
            </div>

            <div className="space-y-1.5 max-h-36 overflow-y-auto">
              {logs.map((log, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex items-start gap-2 font-semibold"
                >
                  <span className="text-sky-500">&gt;</span>
                  <span className={log?.includes("💖") ? "text-pink-600 font-bold" : log?.includes("✨") ? "text-sky-600" : "text-slate-700"}>
                    {log}
                  </span>
                </motion.div>
              ))}
              {!isReady && (
                <div className="flex items-center gap-2 text-sky-500 animate-pulse pt-1 font-bold">
                  <span>&gt;</span>
                  <span>GENERATING SUNNY ANIME CLOUDS...</span>
                </div>
              )}
            </div>
          </div>

          {/* Big Launch Button */}
          <div className="pt-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleEnterWorld}
              className="relative group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-400 text-white font-display font-black text-base shadow-xl shadow-pink-300/60 border-2 border-slate-900 cursor-pointer overflow-hidden"
            >
              <Play className="w-5 h-5 fill-white" />
              <span>ENTER THE ANIME WORLD OF ABDULLAH</span>
              <Sparkles className="w-5 h-5 text-amber-300 animate-bounce" />
            </motion.button>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between text-[11px] font-mono font-bold text-slate-500 gap-2">
          <div>LOCATIONS: LONDON (UK) | RAWALPINDI | GUJRANWALA</div>
          <div>SENIOR FULL-STACK AI ENGINEER & UI/UX ARCHITECT</div>
        </div>
      </div>
    </AnimatePresence>
  );
}
