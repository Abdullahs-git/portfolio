'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CONTENT } from '@/data/content';
import { FadeIn } from '@/components/ui/FadeIn';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulated async transmission
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log('Contact transmission received:', data);
    setSubmitted(true);
    reset();
  };

  return (
    <section id="contact" className="relative w-full bg-black text-white py-24 md:py-32 lg:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
        <SectionLabel number="06" title="Transmission & Contact" inverted />

        {/* Main Grid: Left CTA & Info / Right Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mt-12">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <FadeIn>
                <h2 className="text-display-lg md:text-display-xl font-black tracking-tightest text-white uppercase leading-[0.85]">
                  START A<br />CONVERSATION.
                </h2>
                <p className="font-sans text-sm md:text-base text-gray-400 font-light mt-6 max-w-lg leading-relaxed">
                  Available for senior engineering leadership, AI systems research, or technical advisory. Direct inquiries welcome.
                </p>
              </FadeIn>

              {/* Direct Links */}
              <FadeIn delay={0.2}>
                <div className="mt-12 flex flex-col divide-y divide-gray-800 border-y border-gray-800">
                  <a
                    href={`mailto:${CONTENT.contact.email}`}
                    className="group flex items-center justify-between py-4 font-mono text-[11px] tracking-wider uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    <span>DIRECT EMAIL: {CONTENT.contact.email}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={`https://${CONTENT.contact.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 font-mono text-[11px] tracking-wider uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    <span>LINKEDIN: {CONTENT.contact.linkedin}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={`https://${CONTENT.contact.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between py-4 font-mono text-[11px] tracking-wider uppercase text-gray-400 hover:text-white transition-colors"
                  >
                    <span>GITHUB: {CONTENT.contact.github}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Quote Callout */}
            <FadeIn delay={0.3}>
              <div className="mt-12 pt-8 border-t border-gray-800">
                <blockquote className="font-sans text-sm text-gray-400 font-light italic leading-relaxed">
                  &ldquo;{CONTENT.quote.text}&rdquo;
                </blockquote>
                <p className="font-mono text-[10px] tracking-wider uppercase text-gray-600 mt-3">
                  {CONTENT.quote.author} &mdash; {CONTENT.quote.source}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column (6 Cols) — Brutalist Contact Form */}
          <div className="lg:col-span-6">
            <FadeIn delay={0.2}>
              <div className="border border-gray-800 p-8 md:p-10 bg-gray-950/60">
                <span className="font-mono text-[10px] tracking-wider uppercase text-gray-400 block mb-6 pb-3 border-b border-gray-800">
                  [DISPATCH INQUIRY]
                </span>

                {submitted ? (
                  <div className="py-12 flex flex-col items-center text-center">
                    <CheckCircle2 className="w-8 h-8 text-white mb-4" />
                    <h3 className="font-mono text-sm uppercase tracking-wider text-white mb-2">
                      TRANSMISSION CONFIRMED
                    </h3>
                    <p className="font-sans text-sm text-gray-400 font-light max-w-sm mb-8">
                      Thank you for reaching out. Your transmission has been recorded. I will respond to your inquiry within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="font-mono text-[10px] tracking-wider uppercase text-black bg-white px-6 py-2.5 hover:bg-gray-200 transition-colors"
                    >
                      SEND ANOTHER TRANSMISSION
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                        NAME / ORGANIZATION *
                      </label>
                      <input
                        id="name"
                        type="text"
                        disabled={isSubmitting}
                        aria-invalid={errors.name ? 'true' : 'false'}
                        placeholder="Dr. Alex Rivera or Acme AI"
                        {...register('name')}
                        className={`w-full bg-black border px-4 py-3 font-sans text-sm text-white placeholder-gray-600 outline-none transition-colors rounded-none ${
                          errors.name
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-800 focus:border-white'
                        }`}
                      />
                      {errors.name && (
                        <span role="alert" className="font-mono text-[10px] text-red-400 tracking-wider">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="email"
                        type="email"
                        disabled={isSubmitting}
                        aria-invalid={errors.email ? 'true' : 'false'}
                        placeholder="alex@organization.com"
                        {...register('email')}
                        className={`w-full bg-black border px-4 py-3 font-sans text-sm text-white placeholder-gray-600 outline-none transition-colors rounded-none ${
                          errors.email
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-800 focus:border-white'
                        }`}
                      />
                      {errors.email && (
                        <span role="alert" className="font-mono text-[10px] text-red-400 tracking-wider">
                          {errors.email.message}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="font-mono text-[10px] tracking-wider uppercase text-gray-400">
                        PROJECT BRIEF / INQUIRY *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        disabled={isSubmitting}
                        aria-invalid={errors.message ? 'true' : 'false'}
                        placeholder="Details on engineering challenges, timeline, or consultation scope..."
                        {...register('message')}
                        className={`w-full bg-black border px-4 py-3 font-sans text-sm text-white placeholder-gray-600 outline-none transition-colors rounded-none resize-none ${
                          errors.message
                            ? 'border-red-500 focus:border-red-500'
                            : 'border-gray-800 focus:border-white'
                        }`}
                      />
                      {errors.message && (
                        <span role="alert" className="font-mono text-[10px] text-red-400 tracking-wider">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 flex items-center justify-center gap-2 w-full bg-white text-black py-3.5 font-mono text-xs uppercase tracking-wider font-semibold hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50 cursor-pointer rounded-none"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING...</span>
                      ) : (
                        <>
                          <span>DISPATCH MESSAGE</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Footer info line */}
        <FadeIn delay={0.4}>
          <div className="mt-24 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-600">
              © 2026 MUHAMMAD ABDULLAH BUTT &mdash; ALL RIGHTS RESERVED
            </span>
            <span className="font-mono text-[10px] tracking-wider uppercase text-gray-600">
              BASED IN {CONTENT.contact.location} &middot; AVAILABLE WORLDWIDE
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
