'use client';
import { CONTENT } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { KineticText } from '@/components/ui/KineticText';
import { MagneticButton } from '@/components/ui/MagneticButton';
import { BentoCard } from '@/components/ui/BentoCard';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useState } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const contactLinks = [
    {
      label: "Email",
      href: `mailto:${CONTENT.contact.email}`,
      value: CONTENT.contact.email,
      icon: <Mail className="w-5 h-5" />,
      color: "text-accent-primary bg-accent-primary/10",
    },
    {
      label: "LinkedIn",
      href: `https://${CONTENT.contact.linkedin}`,
      value: "Muhammad Abdullah Butt",
      icon: <Linkedin className="w-5 h-5" />,
      target: "_blank",
      color: "text-accent-secondary bg-accent-secondary/10",
    },
    {
      label: "GitHub",
      href: `https://${CONTENT.contact.github}`,
      value: "@Abdullahs-git",
      icon: <Github className="w-5 h-5" />,
      target: "_blank",
      color: "text-accent-quaternary bg-accent-quaternary/10",
    },
  ];

  return (
    <section id="contact" className="relative w-full pt-32 pb-12 md:pt-48 md:pb-24 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Exploring Section */}
        <div className="mb-32">
          <Reveal>
            <h3 className="font-display font-black text-2xl text-text-primary mb-10 text-center">
              Currently Exploring
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {CONTENT.exploring.map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <BentoCard className="h-full !p-8 md:!p-10 flex flex-col justify-between text-center items-center" accentColor="tertiary">
                  <div className="w-16 h-16 rounded-full bg-bg-base flex items-center justify-center mb-6">
                    <span className="text-3xl">💡</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-text-primary mb-4">{item.title}</h4>
                  <p className="font-body text-sm font-medium text-text-muted leading-relaxed">{item.desc}</p>
                </BentoCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Big Headline */}
        <Reveal>
          <KineticText
            text={CONTENT.contact.closingStatement}
            highlightWord="something"
            className="text-[clamp(48px,8vw,140px)] font-display font-black tracking-tighter text-text-primary leading-[0.9] mb-8"
          />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-body font-bold text-text-muted text-lg md:text-xl max-w-xl leading-relaxed mb-16">
            Open for new opportunities, collaborations, and building the future.
          </p>
        </Reveal>

        {/* Contact Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
          {/* Left: Contact Links */}
          <div className="flex-1">
            <div className="flex flex-col gap-6">
              {contactLinks.map((link, i) => (
                <Reveal key={link.label} delay={0.2 + i * 0.1}>
                  <a
                    href={link.href}
                    target={link.target}
                    rel={link.target === '_blank' ? 'noreferrer' : undefined}
                    className="group flex items-center gap-6 p-6 rounded-bento-sm bg-bg-base border border-glass-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                    data-cursor="hover"
                  >
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-transform group-hover:scale-110 ${link.color}`}>
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <span className="font-body font-bold text-[11px] text-text-muted uppercase tracking-widest block mb-1">
                        {link.label}
                      </span>
                      <span className="font-display font-bold text-lg text-text-primary group-hover:text-accent-primary transition-colors">
                        {link.value}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                      <ArrowRight className="w-5 h-5 text-text-primary group-hover:text-accent-primary group-hover:-rotate-45 transition-all" />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1 max-w-xl w-full">
            <Reveal delay={0.3}>
              <div className="bg-bg-base p-8 md:p-12 rounded-bento border border-glass-border">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div>
                    <label className="font-body font-bold text-xs text-text-muted uppercase tracking-widest block mb-2">Name</label>
                    <input
                      {...register('name')}
                      placeholder="Jane Doe"
                      className="w-full bg-white border-none rounded-xl px-6 py-4 font-body text-base font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary shadow-sm transition-all placeholder:text-text-dim"
                    />
                    {errors.name && <span className="text-accent-primary text-xs font-bold mt-2 block">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="font-body font-bold text-xs text-text-muted uppercase tracking-widest block mb-2">Email</label>
                    <input
                      {...register('email')}
                      placeholder="jane@example.com"
                      className="w-full bg-white border-none rounded-xl px-6 py-4 font-body text-base font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-secondary shadow-sm transition-all placeholder:text-text-dim"
                    />
                    {errors.email && <span className="text-accent-secondary text-xs font-bold mt-2 block">{errors.email.message}</span>}
                  </div>

                  <div>
                    <label className="font-body font-bold text-xs text-text-muted uppercase tracking-widest block mb-2">Message</label>
                    <textarea
                      {...register('message')}
                      placeholder="Let's build something great..."
                      rows={4}
                      className="w-full bg-white border-none rounded-xl px-6 py-4 font-body text-base font-medium text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-tertiary shadow-sm transition-all placeholder:text-text-dim resize-none"
                    />
                    {errors.message && <span className="text-accent-tertiary text-xs font-bold mt-2 block">{errors.message.message}</span>}
                  </div>

                  <div className="mt-4">
                    <MagneticButton
                      as="button"
                      onClick={() => {}}
                      variant={isSuccess ? 'secondary' : 'primary'}
                      size="lg"
                      className="w-full justify-center shadow-lg"
                      icon={<Send className="w-4 h-4" />}
                    >
                      {isSubmitting ? 'SENDING...' : isSuccess ? 'SENT!' : 'SEND MESSAGE'}
                    </MagneticButton>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Quote */}
        <Reveal>
          <div className="max-w-4xl mx-auto text-center py-16">
            <p className="font-display text-2xl md:text-4xl text-text-primary font-black leading-tight mb-6">
              "{CONTENT.quote.text}"
            </p>
            <p className="font-body font-bold text-sm text-text-muted uppercase tracking-widest">
              — {CONTENT.quote.author}
            </p>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 font-body font-bold text-xs text-text-muted tracking-wide">
          <span>© {new Date().getFullYear()} Muhammad Abdullah Butt</span>
          <span className="flex items-center gap-2">
            Based in {CONTENT.contact.location}
            <span className="w-2 h-2 rounded-full bg-accent-secondary animate-pulse-soft" />
          </span>
        </div>
      </div>
    </section>
  );
};
