"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Sparkles, CheckCircle2, Play, Activity } from "lucide-react";

export default function IsometricHeroStage() {
  const [activeTab, setActiveTab] = useState<"mapf" | "deepfake" | "huzzle">("mapf");
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const snippets = {
    mapf: `// MAPF-Lite: FLINS-ISKE 2026 Paper
import { MAPFLiteEngine } from "@abdullah/ai-mapf";

const model = new MAPFLiteEngine({
  params: "0.566M", // 99.6% Reduction
  quantization: "INT8",
});

const result = await model.evaluateDataset();
console.log(result.accuracy); // 99.34% SOTA Accuracy`,

    deepfake: `// Audio-Visual Multimodal Deepfake Detector
import { DeepfakeDefense } from "@abdullah/multimodal-ai";

const detector = new DeepfakeDefense({
  modalities: ["audio", "video"],
  realTimeSync: true,
});

const report = await detector.analyzeStream(videoFeed);
console.log(report.fakeConfidence); // 0.001 (Authentic)`,

    huzzle: `// Huzzle London B2C Enterprise Architecture
import { HighTrafficDispatcher } from "@huzzle/uk-core";

const engine = new HighTrafficDispatcher({
  region: "eu-west-2", // London
  throughput: "100k_req_sec",
});

await engine.deployDistributedNode();`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeTab]);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto flex flex-col items-center justify-center">
      {/* Background Isometric Grid Glow */}
      <div className="absolute inset-0 bg-cyan-500/10 blur-[90px] rounded-full pointer-events-none" />

      {/* Main Isometric Stage Platform Box */}
      <div className="relative w-full glass-card rounded-3xl p-6 border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Animated Border Beam (Vengeance UI style) */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />

        {/* Stage Header Controls */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 font-mono text-xs font-semibold text-slate-400 flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              abdullah-ai-stage v2.6
            </span>
          </div>

          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setActiveTab("mapf")}
              className={`px-2.5 py-1 text-[10px] font-mono rounded-md transition-all ${
                activeTab === "mapf"
                  ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              MAPF-Lite
            </button>
            <button
              onClick={() => setActiveTab("deepfake")}
              className={`px-2.5 py-1 text-[10px] font-mono rounded-md transition-all ${
                activeTab === "deepfake"
                  ? "bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Deepfake
            </button>
            <button
              onClick={() => setActiveTab("huzzle")}
              className={`px-2.5 py-1 text-[10px] font-mono rounded-md transition-all ${
                activeTab === "huzzle"
                  ? "bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Huzzle UK
            </button>
          </div>
        </div>

        {/* Isometric Interactive 3D Hologram Cube Canvas Visual */}
        <div className="relative h-48 sm:h-56 w-full rounded-2xl bg-[#090d14] border border-slate-800/80 p-4 flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Grid SVG Background */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Floating Interactive Isometric Node */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-cyan-300 shadow-md">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
              <span>
                {activeTab === "mapf" && "FLINS-ISKE 2026: 99.34% Accuracy"}
                {activeTab === "deepfake" && "Multimodal AI Defense Active"}
                {activeTab === "huzzle" && "London B2C Pipeline Live"}
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 flex items-center gap-1 transition-colors border border-slate-700"
            >
              {copiedSnippet ? (
                <>
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <span>Copy Code</span>
              )}
            </button>
          </div>

          {/* Live Animated Code Block */}
          <pre className="relative z-10 font-mono text-[11px] leading-relaxed text-slate-300 overflow-x-auto p-2 bg-slate-950/60 rounded-xl border border-slate-800/60 select-all">
            <code>{snippets[activeTab]}</code>
          </pre>

          {/* Isometric Footer Badges */}
          <div className="relative z-10 flex items-center justify-between pt-2 border-t border-slate-800/60 text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1 text-emerald-400 font-bold">
              <Sparkles className="w-3 h-3" />
              SOTA Performance Verified
            </span>
            <span className="text-slate-500">Latency: &lt; 4ms</span>
          </div>
        </div>

        {/* Floating Isometric Interactive Stat Badges */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Param Reduction</div>
              <div className="text-base font-display font-extrabold text-cyan-300">99.6% (0.566M)</div>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <Play className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400">Live Deployments</div>
              <div className="text-base font-display font-extrabold text-amber-300">London &amp; PK</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
