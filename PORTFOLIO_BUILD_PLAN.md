# Portfolio Rebuild — Master Prompt & Phased Task Plan

**Goal:** Rebuild abdullahbutt.dev as a portfolio that impresses AI Engineer and Full-Stack Developer recruiters — Editorial Brutalism aesthetic, Next.js 15 / React 19 / TypeScript, data-driven content, zero fluff.

**How to use this doc:** Copy the **MASTER SYSTEM PROMPT** below into Claude Code (or your AI coding tool) once, at the start of the session. Then paste **one phase at a time** as your task prompt. Do not move to the next phase until the "Definition of Done" for the current one is met. This keeps context small, output high-quality, and gives you a working, deployable site at the end of every phase instead of a big-bang rewrite.

---

## MASTER SYSTEM PROMPT (paste once, at the start)

```
You are helping me rebuild my portfolio website. Treat this as production work for a
senior engineer's personal brand — recruiters and hiring managers at AI companies and
full-stack teams will judge my technical taste from this site, so precision matters.

MY IDENTITY:
Muhammad Abdullah Butt — Senior Full-Stack AI Engineer & Published AI Researcher.
Based in Gujranwala, Pakistan, open to global remote/relocation.
Flagship credibility signal: MAPF-Lite, a parameter-efficient multimodal deepfake
detection framework, published at FLINS-ISKE 2026 (Springer Nature), 99.34% accuracy,
99.6% parameter reduction vs SOTA. I also ship production full-stack systems
(Next.js/FastAPI/Postgres/Redis) and have live client platforms.

TECH STACK (non-negotiable):
- Next.js 15.1.0 (App Router, Server + Client Components)
- React 19 / React DOM 19
- TypeScript 5.7.2, strict mode
- Tailwind CSS 3.4.16 + PostCSS + Autoprefixer
- next/font/google: Inter (variable) + JetBrains Mono (variable)
- Framer Motion for scroll-triggered reveals (respect prefers-reduced-motion)
- Lenis for smooth inertia scrolling
- lucide-react + react-icons
- react-hook-form + zod for the contact form
- Native Next.js Metadata API + JSON-LD Person schema for SEO

FILE ARCHITECTURE (follow exactly — do not deviate without asking):
portfolio/
├── public/projects/                 # screenshots, og-image, favicon
├── src/
│   ├── app/
│   │   ├── globals.css              # design tokens, CSS vars, Lenis + typography rules
│   │   ├── layout.tsx               # fonts, Lenis provider, JSON-LD schema, metadata
│   │   └── page.tsx                 # orchestrates all sections
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SmoothScroll.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ResearchSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── StackSection.tsx
│   │   │   ├── EducationSection.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── FadeIn.tsx
│   │       └── SectionLabel.tsx
│   └── data/
│       └── content.ts               # SINGLE SOURCE OF TRUTH for all copy/data
├── tailwind.config.js
├── tsconfig.json                    # strict mode, @/* path alias
└── package.json

DESIGN SYSTEM — "Editorial Brutalism / Swiss International Style":
- Palette: pure white #FFFFFF, absolute black #000000, gray-50 (#FAFAFA) through
  gray-950 (#0A0A0A) only. NO saturated colors, ever — no blue/purple/green accents.
  Hierarchy comes from weight, scale, contrast, and negative space, not color.
- Display type: Inter, font-black, uppercase, tracking -0.06em ("tracking-tightest").
  text-display-xl = clamp(4rem, 12vw, 12rem), line-height 0.85.
  text-display-lg = clamp(3rem, 8vw, 8rem), line-height 0.9.
- Metadata type: JetBrains Mono, text-[10px] to text-xs, uppercase, tracking 0.15em —
  used for section numbers, dates, tags, status badges, metrics, URLs.
- Body type: Inter, font-light, text-sm/text-base, relaxed leading, text-gray-600 on
  white / text-gray-400 on black.
- Borders: strict 1px hairlines (border-gray-200 on white, border-gray-800 on black).
  rounded-none EVERYWHERE — buttons, cards, badges, modals. No exceptions.
- ResearchSection is inverted (black bg, white text) — it's the dramatic pause that
  anchors scientific credibility.
- Confidential projects (DeployGenius, LingumedAI) render behind a frosted
  backdrop-blur overlay with a monospace "CONFIDENTIAL / NDA" badge — no live
  screenshots or client names beyond what's in content.ts.
- Motion: fade + translateY(20px→0) on scroll into view, cubic-bezier(0.25,0,0.1,1),
  staggered by ~80-120ms per child. Hover states invert black<->white with no easing
  gimmicks. All motion respects prefers-reduced-motion: reduce.

HARD RULES:
1. All copy/data lives in src/data/content.ts — never hardcode strings in JSX.
2. Never introduce rounded-lg/rounded-full or arbitrary Tailwind colors
   (bg-blue-600 etc). Stick to the monochrome scale.
3. Every section must be keyboard-navigable and pass basic a11y (semantic landmarks,
   focus states, alt text, aria-labels on icon-only buttons).
4. Every claim (metrics, %, dates) must trace back to my source-of-truth context doc —
   never invent or round numbers.
5. Mobile-first. Test every phase at 375px, 768px, 1440px before calling it done.
6. Lighthouse targets: Performance ≥95, Accessibility ≥95, Best Practices ≥95, SEO 100.

Wait for me to paste each phase as a separate task. Confirm you understand this
brief, then wait for Phase 1.
```

---

## PHASE-BY-PHASE TASK BREAKDOWN

Work through these **in order**. Each phase is copy-pasteable as its own message. Don't start a phase until the previous one's "Definition of Done" is checked off.

### Phase 0 — Project Scaffolding
**Prompt:**
```
Scaffold the Next.js 15 project exactly per the file architecture in the master
brief. Install and configure: Tailwind, TypeScript strict mode, next/font (Inter +
JetBrains Mono), Framer Motion, Lenis, lucide-react, react-icons, react-hook-form,
zod, clsx, tailwind-merge. Set up tailwind.config.js with the design tokens (colors,
text-display-xl/lg clamp sizes, tracking-tightest, font families). Create empty
placeholder files for every component in the tree so the structure is visible.
Do not write section content yet.
```
**Definition of Done:** `npm run dev` runs clean, no TS errors, Tailwind config has custom tokens, folder tree matches spec exactly.

### Phase 1 — content.ts (Data Layer)
**Prompt:**
```
Build src/data/content.ts as the single source of truth. Populate it with typed
objects for: identity/hero, research (MAPF-Lite full details + metrics + links),
experience (all 5 roles with dates/scope/impact), projects (all 8, split into
live/confidential/specialized categories), skills matrix (7 domains), education,
certifications, honors, and contact info. Use the exact data from my context doc —
do not paraphrase numbers or invent content. Export strongly-typed interfaces for
each shape (Project, Experience, ResearchPaper, etc).
```
**Definition of Done:** File compiles with no `any`, every number/date matches the source doc, every section component can theoretically import typed data from here.

### Phase 2 — Global Shell: layout.tsx, globals.css, SmoothScroll, Navbar
**Prompt:**
```
Build src/app/layout.tsx (fonts, metadata API with title/description/OG tags,
JSON-LD Person schema using content.ts data), globals.css (CSS variables for the
color scale + typography rules + Lenis scroll config), components/SmoothScroll.tsx
(client component wrapping children in Lenis), and components/Navbar.tsx (fixed,
minimal, hairline bottom border, section anchor links, mobile hamburger that matches
the brutalist aesthetic — no rounded corners, no color, just weight/spacing).
```
**Definition of Done:** Page loads with correct fonts, JSON-LD validates (test in Google Rich Results Test), nav is sticky and works on mobile, smooth scroll is active.

### Phase 3 — ui/ Primitives: FadeIn, SectionLabel
**Prompt:**
```
Build components/ui/FadeIn.tsx (IntersectionObserver + Framer Motion wrapper,
opacity 0->1 + translateY 20px->0, cubic-bezier(0.25,0,0.1,1), configurable delay/
stagger for children, respects prefers-reduced-motion) and components/ui/
SectionLabel.tsx (renders "01 / RESEARCH" style monospace index + title header,
reusable across all sections with a numeric prop).
```
**Definition of Done:** Both components are generic/reusable, no section-specific logic leaked in, motion disables cleanly under reduced-motion.

### Phase 4 — HeroSection + ContactSection
**Prompt:**
```
Build components/sections/HeroSection.tsx: giant text-display-xl typographic name/
title, monospace status badge ("AVAILABLE / REMOTE"), one-line philosophy quote,
quick summary line, scroll-cue. Build components/sections/ContactSection.tsx: direct
mailto link, social links (LinkedIn/GitHub), the philosophy quote as a callout, and
a react-hook-form + zod contact form (name/email/message) with brutalist input
styling (hairline borders, no radius, focus state = border goes black).
```
**Definition of Done:** Hero is the loudest thing on the page typographically, form validates client-side and shows accessible error states, both work at 375px.

### Phase 5 — ResearchSection
**Prompt:**
```
Build components/sections/ResearchSection.tsx: inverted black background. Lead with
the MAPF-Lite title, venue (FLINS-ISKE 2026, Springer Nature), and the philosophy
quote. Display the 6 key metrics (99.34% accuracy, 99.84% AUC-ROC, 0.566M params /
99.6% reduction, 4.7x speedup, 99.40% cross-dataset generalization, 1.1GB memory) as
a monospace stat grid. Summarize the 4-part technical architecture (frozen dual
backbones, PEFT, frequency-domain forensics, XAI/Grad-CAM) in short scannable blocks,
not paragraphs. Link out to the Springer chapter and book page. Include the
secondary "in preparation" paper as a smaller entry below the fold of this section.
```
**Definition of Done:** Metrics are the visual anchor of the section, links open in new tabs with rel="noopener", section reads in under 20 seconds of scanning.

### Phase 6 — ExperienceSection
**Prompt:**
```
Build components/sections/ExperienceSection.tsx: a clean vertical timeline of the
5 roles (Huzzle.com, Neural Stack, MAQ Enterprises, GIFT University research, and
Estabraq), reverse-chronological, each entry showing title/company/dates/location-
type and 2-4 bullet impact lines pulled straight from content.ts. Lead each MAQ/
Estabraq bullet with its metric (40% page load reduction, 30% API latency reduction,
etc) in monospace so the numbers pop against the prose.
```
**Definition of Done:** Timeline is scannable top-to-bottom in under 30s, every metric from the source doc appears somewhere, no company name or date is hardcoded outside content.ts.

### Phase 7 — ProjectsSection
**Prompt:**
```
Build components/sections/ProjectsSection.tsx with three visually distinct groups:
(1) Live production platforms — Estabraq, MyPDFMate, Khushi Motors — as cards with
live links, stack badges, and highlight bullets. (2) Confidential/enterprise —
DeployGenius, LingumedAI — same card shape but behind a frosted backdrop-blur
overlay with a monospace "CONFIDENTIAL" badge, stack still visible, no live link.
(3) Mobile/FinTech/specialized — Pointr, ForexAI, Image Converter. Cards are
rounded-none, hairline-bordered, hover state inverts colors. Grid should reflow
cleanly from 1 col (mobile) to 2-3 col (desktop).
```
**Definition of Done:** All 8 projects present with correct stack tags, confidential ones are clearly gated but still legible, live links are correct and open in new tabs.

### Phase 8 — StackSection + EducationSection
**Prompt:**
```
Build components/sections/StackSection.tsx: render the 7 skill-domain categories as
monospace badge groups (languages, generative AI/LLM, ML/vision, frontend, backend,
databases/caching, devops/cloud). Build components/sections/EducationSection.tsx:
BSCS at GIFT University with thesis title, plus a certifications list (Oracle x2,
IBM x5, Meta) and honors/hackathons (AMD Developer Hackathon, Harvard HSIL). Keep
both sections dense but scannable — this is proof-of-breadth, not the emotional core
of the page.
```
**Definition of Done:** All skills/certs/honors from the source doc are present and correctly grouped, no visual competition with the Research or Hero sections.

### Phase 9 — Assembly (page.tsx) + Cross-Section Polish
**Prompt:**
```
Assemble src/app/page.tsx: Navbar, then Hero, Research, Projects, Experience,
Stack, Education, Contact in that order, each wrapped in FadeIn. Wire up nav anchor
links to matching section ids. Do a full-page pass: consistent vertical rhythm/
spacing between sections, consistent SectionLabel numbering (01 through 07),
consistent hairline dividers, no orphaned Tailwind classes, no console warnings.
```
**Definition of Done:** Full scroll from top to bottom feels like one coherent document, nav links jump correctly, no layout shift, no hydration warnings in console.

### Phase 10 — SEO, Performance, A11y, Deploy
**Prompt:**
```
Final pass: verify Metadata API (title/description/OG/Twitter card) and JSON-LD
render correctly for abdullahbutt.dev. Add a favicon and OG image. Run a Lighthouse
audit at 375px and 1440px and fix anything below 95 on Performance/Accessibility/
Best Practices, and below 100 on SEO — likely culprits: unoptimized images (use
next/image), missing alt text, missing aria-labels on icon buttons, layout shift
from web fonts (use font-display swap via next/font, which is automatic). Confirm
the site builds cleanly with `next build` and is ready to deploy to Vercel.
```
**Definition of Done:** Lighthouse scores hit target on both viewport sizes, `next build` succeeds with zero errors/warnings, site is live on Vercel at abdullahbutt.dev.

---

## Notes for you (not for the AI tool)
- Phases 4–8 are independent of each other — if you want, you can reorder them or run them in parallel across different chat sessions, since they all only depend on Phases 0–3 being done.
- Keep the master system prompt pinned/reused every time you open a new session, since context resets. Re-paste it before jumping into a mid-sequence phase in a fresh chat.
- If your AI tool starts drifting from the brutalist rules (adding color, rounded corners, generic templates), just paste the "DESIGN SYSTEM" block from the master prompt again as a correction — that's usually enough to snap it back.
