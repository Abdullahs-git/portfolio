"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 md:px-12 border-t border-[#222] bg-white text-black">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-center min-h-[50vh]">
        <h2 className="text-[10vw] leading-[0.8] font-syne font-extrabold uppercase tracking-tighter mb-12">
          Let's Build
        </h2>
        <a href="mailto:contact@example.com" className="font-manrope text-2xl md:text-4xl font-bold border-b-2 border-black pb-2 hover:text-[#555] hover:border-[#555] transition-colors">
          abdullah@example.com
        </a>
      </div>
    </section>
  );
}
