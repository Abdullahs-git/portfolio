"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Terminal, ExternalLink, Mail, Github, Linkedin } from "lucide-react";

export default function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // wait, we don't have open from here, we handle it in parent, so we just toggle if possible, but parent handles it.
        // Actually, better to just let parent handle global CMD+K, but if open, close on escape
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const commands = [
    { id: "projects", label: "View Featured Works", icon: <Terminal className="w-4 h-4" /> },
    { id: "contact", label: "Send an Email", icon: <Mail className="w-4 h-4" /> },
    { id: "github", label: "Open GitHub", icon: <Github className="w-4 h-4" /> },
    { id: "linkedin", label: "Open LinkedIn", icon: <Linkedin className="w-4 h-4" /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] p-4"
          >
            <div className="bg-[#111] border border-[#333] flex flex-col shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-4 border-b border-[#333]">
                <Search className="w-5 h-5 text-[#888] mr-3" />
                <input 
                  autoFocus
                  type="text"
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent border-none outline-none text-[#fafafa] font-manrope placeholder-[#555]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={onClose} className="text-[#888] hover:text-[#fafafa]">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-2 max-h-[60vh] overflow-y-auto">
                {commands.map((cmd) => (
                  <button 
                    key={cmd.id}
                    className="w-full flex items-center px-4 py-3 text-left font-manrope text-[#aaa] hover:bg-[#222] hover:text-[#fafafa] transition-colors"
                  >
                    <span className="mr-3">{cmd.icon}</span>
                    <span>{cmd.label}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </button>
                ))}
              </div>
              <div className="px-4 py-2 bg-[#0a0a0a] border-t border-[#333] flex items-center justify-between text-xs font-manrope text-[#555]">
                <span>Navigation Menu</span>
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 bg-[#222] rounded text-[#888]">esc</span> to close
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
