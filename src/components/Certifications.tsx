"use client";

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 px-4 md:px-12 border-t border-[#222]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-syne font-bold uppercase tracking-tighter mb-16">
          Credentials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {["Oracle Certified AI Foundations", "IBM Cloud Architect", "DeepLearning.AI specialized", "Google Cloud Associate"].map(cert => (
            <div key={cert} className="border-b border-[#222] pb-6 flex justify-between items-center group">
              <span className="font-syne text-xl uppercase tracking-tight group-hover:text-[#888] transition-colors">{cert}</span>
              <span className="font-manrope text-sm text-[#555] uppercase">Verified</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
