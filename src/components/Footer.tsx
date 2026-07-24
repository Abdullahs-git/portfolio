"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-4 md:px-12 border-t border-[#222] bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[#555] font-manrope text-sm uppercase tracking-widest">
        <span>&copy; 2026 Muhammad Abdullah Butt</span>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
