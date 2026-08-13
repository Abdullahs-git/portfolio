"use client";

import { useEffect, useState, useRef } from "react";
import { Search, X, Terminal, ExternalLink, Mail, Github, Linkedin } from "lucide-react";
import gsap from "gsap";

export default function CommandPalette({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
    } else {
      if (containerRef.current && backdropRef.current) {
        gsap.to(containerRef.current, { y: 20, opacity: 0, scale: 0.95, duration: 0.2 });
        gsap.to(backdropRef.current, { 
          opacity: 0, 
          duration: 0.2, 
          onComplete: () => setMounted(false) 
        });
      } else {
        setMounted(false);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (mounted && containerRef.current && backdropRef.current) {
      gsap.fromTo(backdropRef.current, { opacity: 0 }, { opacity: 1, duration: 0.2 });
      gsap.fromTo(
        containerRef.current,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.2, ease: "power2.out" }
      );
    }
  }, [mounted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onClose(); 
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

  if (!mounted) return null;

  return (
    <>
      <div 
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
      />
      <div
        ref={containerRef}
        className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-lg z-[101] p-4 font-mono"
      >
        <div className="os-window flex flex-col shadow-2xl overflow-hidden">
          <div className="os-header flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <span>system_search.exe</span>
            </div>
            <button onClick={onClose} className="hover:text-os-bg hover:bg-os-primary px-1">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex items-center px-4 py-4 border-b border-os-border bg-os-panel">
            <span className="text-os-primary mr-3 font-bold">&gt;</span>
            <input 
              autoFocus
              type="text"
              placeholder="Enter command..."
              className="flex-1 bg-transparent border-none outline-none text-os-text placeholder-os-muted"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="p-2 max-h-[60vh] overflow-y-auto bg-os-panel">
            {commands.map((cmd) => (
              <button 
                key={cmd.id}
                className="w-full flex items-center px-4 py-3 text-left text-os-muted hover:bg-os-border hover:text-os-primary transition-colors group"
              >
                <span className="mr-3 group-hover:text-os-primary">{cmd.icon}</span>
                <span>{cmd.label}</span>
                <ExternalLink className="w-3 h-3 ml-auto opacity-50 group-hover:opacity-100" />
              </button>
            ))}
          </div>
          
          <div className="px-4 py-2 border-t border-os-border bg-os-bg flex items-center justify-between text-xs text-os-muted">
            <span>Navigation Menu</span>
            <div className="flex items-center gap-2">
              <span className="px-1.5 py-0.5 border border-os-border text-os-primary">ESC</span> to close
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
