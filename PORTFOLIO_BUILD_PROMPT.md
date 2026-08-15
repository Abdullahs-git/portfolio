# AGENT PROMPT — Build "Abdullah Butt" Portfolio Website

## ROLE
Act as a senior full-stack team in one: 25+ year content writer/storyteller, system architect, UI/UX designer, and frontend engineer. Output production-grade code, not boilerplate. Be decisive — don't ask clarifying questions, make expert calls and note assumptions in comments.

## MISSION
Build a single-page, scroll-driven **storytelling portfolio** for Muhammad Abdullah Butt (Full Stack Engineer & AI Researcher). This is not a resume site — it's an experience. Visitor scrolls through his career like a story unfolding: chapters, reveals, motion, presence. Think big-brand product-launch energy (Apple keynote, IBM case-study microsites) fused with Gen-Z/Gen-Alpha internet culture (bold type, neon, glitch, playful chaos with precision underneath).

## VIBE / ART DIRECTION

### ⛔ HARD BAN LIST — do not do any of this, no exceptions
- **No purple gradients.** No purple→blue, purple→pink, violet→indigo, or any "AI SaaS default" gradient. This is the single most overused, laziest tell of an AI-generated site — treat it as forbidden, not "avoid where possible."
- No default Tailwind/shadcn look left untouched (unstyled `indigo-500` buttons, default card shadows, default rounded-xl-everything).
- No Inter font used as the *display* font (fine as a body fallback only if a variable display font isn't set up).
- No centered-hero + 3-icon-feature-grid + testimonial-carousel template structure.
- No stock "rocket ship / lightbulb / handshake" icon clichés.
- No generic AI-face or AI-generated "fake photo of the person" — never fabricate a headshot.

### Real-world reference points (study these, don't clone them)
Study current Awwwards-recognized portfolios for craft, not to copy: **Bruno Simon's portfolio** (turns the whole site into an interactive 3D driving/game world instead of a scroll page — proof that portfolios can be an *environment*, not a page), **Mat Voyce** (kinetic type that moves like the motion-design work itself), **Uncommon Studio** (confident grid rhythm + GSAP section transitions that feel like camera cuts, kept fast despite heavy art direction), **Minh Pham's** portfolio (award-winning developer-designer site, restrained but bold), and the **Iventions** site (Three.js used for atmosphere/lighting around each project like a spotlit installation, rather than spectacle for its own sake). The throughline across all of them: motion has a *reason* (it reveals structure or mimics the craft on display), performance is never sacrificed for effect, and the visual identity is specific to the person — not a swappable theme. Aim for that level of intentionality, translated into this project's own neon/futuristic identity — not a copy of any of theirs.

- **Aesthetic**: "Funky-fukra futuristic" — neon-on-dark, glassmorphism + grain texture, glitch/scanline accents, bold oversized type mixed with mono/code-style labels. Everything handcrafted and intentional, nothing templated.
- **Palette (locked, non-purple)**: near-black/graphite base (#0A0A0A – #0F1210), one primary neon accent — **acid green/lime (#C8FF00 or #A6FF00)** or **electric cyan (#00F0FF)**, pick one as dominant — plus one secondary hot accent — **hot orange/red (#FF3B30)** or **hot pink-red (#FF2D6B)**, NOT violet/purple — for contrast and CTAs. Neutral grays for body text. This should read as "hacker-lab / rave-tech / streetwear-drop," not "SaaS landing page."
- **Typography**: one bold/variable display font for hero + section headers (huge, kinetic, personality-forward — think grotesk/display faces used in fashion-drop or music sites, not a default geometric sans), one clean sans for body, one mono for code/labels/tags. Animate type on entrance (word-by-word reveal, mask-wipe, or char-stagger) — not just fade-in.
- **Motion language**: scroll-triggered reveals, parallax depth, magnetic cursor on interactive elements, smooth easing (no linear/robotic motion). Motion should feel alive and reveal structure — not decoration for its own sake.
- **3D**: rotating/orbiting icon rings (tech stack), a 3D hero centerpiece (abstract shape/particle field, not a literal AI-face render), project cards that tilt/lift in 3D on hover (`react-three-fiber` + `@react-three/drei`, or CSS 3D transforms where lighter-weight is smarter).
- **Imagery**: AI-generated visuals only for abstract/atmospheric backgrounds (particles, glitch textures, ambient glow) — never AI-generated "fake photos" of the person or fake product screenshots. Real project data must look real (use styled SVG mockups/browser-frame mockups for project previews, not stock photos).

## SPEC PRECISION STANDARD — write every section like this, not like a mood board
Vague direction produces generic output. Every section below must be specified down to: exact Tailwind classes / pixel values, exact font weight + size + letter-spacing, exact animation duration + easing curve + stagger delay, exact breakpoint behavior, and exact interaction logic (pseudocode, not adjectives). "Add a hover effect" is not a spec. "On hover: `scale(1.03)`, `transition: transform 0.25s cubic-bezier(0.25,0.1,0.25,1)`, border-color shifts from `--neon-primary/30` to `--neon-primary`" is a spec.

Section 1 (Hero) below is written to this standard as the reference template. **Every other section (2 through 8) must be fleshed out to this same level of granularity before/while coding** — exact spacing, exact type scale, exact motion timing, exact responsive behavior per breakpoint (mobile <640px / tablet 640–1024px / desktop ≥1024px). Where a value isn't specified elsewhere in this doc, the agent picks one consistent with the locked palette/type system and documents it in `data/content.ts` or a `THEME.md` so it stays consistent site-wide rather than improvised per-component.

Reusable interaction patterns worth adopting (in spirit, not verbatim — this is someone else's brand, not ours):
- **Custom cursor**: `fixed`, `pointer-events-none`, `z-index` above content, follows `mousemove` via direct `style.left/top` (not React state, to avoid re-render jank), `transform: translate(-50%,-50%)`, `mix-blend-mode: exclusion` or `difference` so it stays visible over both dark and neon-bright zones. Hidden on touch devices (`pointer: coarse` media query).
- **Staggered entrance choreography**: logo/wordmark at `delay: 0s`, nav at `delay: 0.15s`, hero subline at `delay: 0.3s`, CTA/stat block at `delay: 0.45s` — same `opacity 0→1, translateY 12px→0`, `duration: 0.6s`, `ease: [0.25, 0.1, 0.25, 1]` for every element in the sequence. Consistency across the stagger is what sells it.
- **RAF-driven scroll math, not scroll-event math**: for anything that recalculates on every pixel of scroll (card scale-in/out, panel offsets, progress-based transforms), drive it from `requestAnimationFrame` reading `window.scrollY`, not from a `scroll` event listener — smoother, no event-throttling jank.
- **Seek/scrub guards**: if any element scrubs a video or animation based on cursor/scroll position, always gate updates behind a "not currently mid-transition" check (e.g. `!video.seeking`) to prevent stutter from stacked updates.

---

## SECTION 1 SPEC — HERO ("The Opening Scene") — reference-precision template

#### Global setup this section depends on
- Fonts loaded via `next/font/local` (self-hosted, not Google Fonts CDN, for perf): a **display/kinetic** face for the name + big type, a **mono** face for eyebrow/labels/tags, a **clean sans** for body copy. Expose as CSS vars: `--font-display`, `--font-mono`, `--font-body`.
- CSS vars for the locked palette (define once in `globals.css`, reuse everywhere):
```css
:root {
  --bg-base: #0A0A0A;
  --bg-elevated: #121412;
  --neon-primary: #C8FF00;   /* acid lime — swap to #00F0FF cyan if that's chosen as dominant */
  --neon-secondary: #FF3B30; /* hot orange-red */
  --text-primary: #F5F5F0;
  --text-muted: #8C8C86;
  --font-display: 'DisplayFace', sans-serif;
  --font-mono: 'MonoFace', monospace;
  --font-body: 'BodyFace', sans-serif;
}
```

#### 1A. Custom Cursor (desktop only, `pointer: fine` media query)
- `fixed`, `pointer-events-none`, `z-index: 50`, 40×40px, `mix-blend-mode: difference`.
- Circle outline (SVG, `stroke: var(--neon-primary)`, `stroke-width: 2`) that scales to `1.6×` and fills solid when hovering any interactive element (add a `data-cursor="hover"` attribute pattern, watch for it via event delegation).
- Position via direct DOM write (`cursorEl.style.transform = translate3d(x,y,0) translate(-50%,-50%)`), not React state — avoids re-render on every mousemove.

#### 1B. Wordmark / Logo (top-left, fixed)
- Position: `top: 24px, left: 24px` (mobile), `top: 32px, left: 32px` (desktop).
- Text: "AB." or full name treatment, `font-family: var(--font-display)`, size `clamp(20px, 2vw, 28px)`, `letter-spacing: -0.03em`, color `var(--text-primary)`.
- Entrance: `opacity 0→1, translateY 12px→0`, `duration 0.6s`, `ease [0.25,0.1,0.25,1]`, `delay 0s`.

#### 1C. Nav (top-right, fixed)
- Position: `top: 24px, right: 24px` (mobile) / `top: 32px, right: 32px` (desktop). `z-index: 40`.
- Desktop: horizontal list — "Work", "Research", "Stack", "Contact" — `font-family: var(--font-mono)`, `font-size: 13px`, `text-transform: uppercase`, `letter-spacing: 0.05em`, `color: var(--text-muted)`, `hover: color var(--neon-primary), transition 0.2s ease`.
- Mobile: hamburger icon (two 24px horizontal lines, `stroke: var(--text-primary)`, `stroke-width: 2`) opens a fullscreen overlay menu (`background: var(--bg-base)`, links stagger in at `60ms` intervals, `opacity 0→1 / translateY 16px→0`).
- Entrance: same easing as logo, `delay: 0.15s`.

#### 1D. Eyebrow label (above name)
- `font-family: var(--font-mono)`, `font-size: 12px`, `letter-spacing: 0.08em`, `text-transform: uppercase`, `color: var(--neon-primary)`.
- Text: "FULL STACK ENGINEER · AI RESEARCHER" (pulled from `content.ts`, not hardcoded).
- Entrance: `delay: 0.2s`, same fade/slide pattern.

#### 1E. Name — kinetic type reveal (hero centerpiece)
- `font-family: var(--font-display)`, size `clamp(48px, 10vw, 140px)`, `line-height: 0.95`, `letter-spacing: -0.02em`, `color: var(--text-primary)`.
- Reveal: word-by-word or char-by-char mask-wipe (clip-path or `overflow:hidden` wrapper per word with `translateY(110%)→0`), `stagger: 40ms per word`, `duration: 0.7s`, `ease: [0.16,1,0.3,1]`, total sequence starts at `delay: 0.3s`.
- One word (e.g. surname or a key term) rendered in `var(--neon-primary)` as an accent — not the whole name in neon (reserve neon for accents, not full blocks of text, or it reads as gaudy rather than sharp).

#### 1F. One-line hook (subhead)
- Pulled from CV summary, condensed to one punchy sentence (e.g. "Published AI researcher. 5+ shipped products. Zero fluff.").
- `font-family: var(--font-body)`, `font-size: clamp(16px, 1.8vw, 20px)`, `color: var(--text-muted)`, `max-width: 560px`.
- Entrance: `delay: 0.5s`, fade/slide pattern.

#### 1G. 3D centerpiece (background/side element, react-three-fiber)
- Abstract particle field or low-poly geometric form, positioned behind or beside the name text (not competing with type legibility).
- Reacts subtly to cursor position: rotation offset `≤ 8deg` max based on normalized mouse X/Y, damped via `lerp` (not 1:1 tracking — should feel like weight, not snapping).
- Color: particles/wireframe in `var(--neon-primary)` at low opacity (`0.4–0.6`) against the dark base, so it reads as atmosphere, not a mascot.
- Mobile: swap for a static/lightweight version (fewer particles, no cursor-react, or a pre-rendered lightweight SVG/CSS version) — test on a real mid-tier Android before deciding fallback threshold.

#### 1H. Stat strip / proof line (small, below hook)
- Inline row of 3 quick-hit numbers pulled from CV: "3+ yrs", "5+ shipped products", "99.34% accuracy" (MAPF-Lite teaser, links down to Research section).
- `font-family: var(--font-mono)`, `font-size: 13px`, numbers in `var(--neon-primary)`, separated by a thin `1px` divider (`var(--text-muted)` at 20% opacity).
- Entrance: `delay: 0.6s`.

#### 1I. Scroll cue (bottom-center, fixed)
- Small vertical line + "SCROLL" label rotated 90deg, or an animated chevron, `color: var(--text-muted)`.
- Subtle looping animation: `translateY 0→6px→0`, `duration: 1.6s`, `ease-in-out`, `infinite`.
- Fades out (`opacity 1→0`) once scroll position exceeds ~10% of hero height — driven by RAF/scroll listener, not left visible the whole time.

#### 1J. Background treatment
- Base `var(--bg-base)`, subtle grain/noise texture overlay (`opacity ~0.03`, CSS `background-image` noise SVG or `mix-blend-mode: overlay`) — this is what keeps flat-dark from looking cheap/flat. No gradient mesh, no purple glow blobs.
- Optional: faint scanline effect (repeating linear-gradient, 1–2px lines, very low opacity) reinforcing the "hacker-lab/CRT" identity — subtle enough not to hurt readability or trigger visual fatigue.

---

## TECH STACK (recommended — adjust only if agent has a stronger native option)
- **Framework**: Next.js 14+ (App Router), TypeScript
- **Styling**: Tailwind CSS + custom CSS variables for theme tokens
- **Animation**: Framer Motion (scroll reveals, page transitions) + GSAP/ScrollTrigger (complex sequenced timelines, RAF-driven scroll math)
- **3D**: react-three-fiber + drei (keep scene complexity light — mobile perf matters)
- **Icons**: lucide-react for UI icons; custom SVG for tech-stack orbit icons
- **Fonts**: self-hosted variable fonts via `next/font/local`
- **Deployment target**: Vercel

## TOKEN / BUILD EFFICIENCY INSTRUCTIONS FOR THE AGENT
- Build component-first: create reusable primitives (`<Reveal>`, `<GlowCard>`, `<OrbitRing>`, `<SectionHeading>`) once, reuse across sections — don't hand-roll bespoke code per section.
- Use Tailwind utility classes over large custom CSS files.
- Keep 3D scenes minimal (low-poly / instanced meshes / particle counts capped) — visual impact over raw complexity.
- Generate content sections from a single typed data file (`data/content.ts`) rather than hardcoding text across components, so copy edits don't require re-touching layout code.
- Lazy-load heavy sections (3D canvas, project galleries) below the fold.

## SITE STRUCTURE (the "story")

### 1. Hero — "The Opening Scene"
Fully specified above under **SECTION 1 SPEC**. Use it as-is.

### 2. The Story So Far — About
*(Bring this to the same pixel/timing precision as Section 1 before coding: exact type scale for the narrative paragraphs, exact stagger timing per paragraph reveal, exact max-width/line-length for readability, exact spacing between this section and the hero.)*
Narrative-style bio (not bullet list) reframing the summary below into 2-3 short punchy paragraphs. Include: 3+ years production experience, 5+ live shipped products across healthcare/fintech/livestock/fashion/SaaS, published AI researcher, Oracle + IBM certified.

### 3. The Breakthrough — Research Spotlight (MAPF-Lite)
*(Same precision standard: exact stat-counter animation — count-up duration, easing, trigger threshold via IntersectionObserver/ScrollTrigger; exact card/panel treatment distinguishing this as a "hero-treatment feature" vs. a regular section.)*
Hero-treatment feature (not a regular card) for the published research:
- **MAPF-Lite**: Parameter-Efficient Multimodal Framework for High-Fidelity Deepfake Detection — FLINS-ISKE 2026, Springer Nature Proceedings, sole architect/lead researcher.
- Animated stat counters: 99.34% accuracy, 99.84% AUC (FakeAVCeleb), 99.40% zero-shot cross-dataset accuracy (DeepfakeTIMIT), 99.6% parameter reduction (0.566M params), 4.7× real-time inference @ 1.1GB peak memory.
- Mention XAI heatmaps + frame-level suspicion scores.
- Secondary mention: "Deepfake Detection in the Multimodal Era: A Systematic Review" (in preparation, lead author).

### 4. The Journey — Experience Timeline
*(Specify exact node reveal trigger point, exact connecting-line draw animation (SVG `stroke-dashoffset` or similar), exact spacing rhythm between nodes at each breakpoint.)*
Vertical scroll-triggered timeline, each node reveals on scroll:
- **Senior Full-Stack AI Engineer** — Huzzle.com (London, Remote) — Mar 2026–Present. AI-driven recruitment infrastructure, LLM pipelines on live B2C platform.
- **Full Stack Engineer** — MAQ Enterprises Ltd. (Rawalpindi) — Jan 2023–Feb 2026. Next.js/Node.js, 40% faster load via SSR/code-splitting, PostgreSQL/MongoDB (+35% retrieval speed), Jenkins+Docker CI/CD (-30% release time), Cypress/Jest (-25% bugs), Terraform IaC, mentored 3+ juniors.
- **AI Researcher** — GIFT University (Gujranwala) — 2024–2026. Designed MAPF-Lite (CLIP+Whisper+ViT), PEFT, -30% detection latency for edge.
- **Full-Stack Developer** — Estabraq (Fashion Brand) — 2025–May 2026. Next.js App Router + Prisma + Supabase, sub-2s loads, GraphQL/Redis/CDN (-30% latency), Docker CI/CD (-25% release cycles).

### 5. The Builds — Project Showcase (3D/interactive cards)
*(Specify exact tilt-on-hover math (max rotation degrees per axis, damping), exact card dimensions per breakpoint, exact grid/carousel layout, exact transition when a card is clicked/expanded.)*
Each project as an immersive card: tilt-on-hover 3D frame, styled browser/app mockup (SVG), tech-stack chips, live link.

1. **Pointr** — Livestock Management Platform (Web+Mobile) — livestock.pointrsolutions.co.za — Expo/React Native/Django/JWT/Android/iOS/EAS. Offline-first two-phase sync architecture, zero data loss, XR5000 weigh-scale integration via Wi-Fi (ADI XML parsing), UUID-keyed uploads, hardware-abstracted dev (~90% built without hardware), EAS OTA releases.
2. **Estabraq** — Fashion E-Commerce — estabraq.pk — Next.js/TS/Supabase/Prisma/GraphQL/Redis. Sub-2s loads, real-time inventory, -30% latency, mobile companion app in progress.
3. **MyPDFMate** — PDF SaaS — mypdfmate.com — Next.js/FastAPI/AI Processing. Live AI-powered document workflow SaaS.
4. **Khushi Motors** — Automotive Marketplace — khushimotors.com — Next.js full stack. Full catalogue, filtering, inquiry management.
5. **DeployGenius** — AI Chatbot SaaS — FastAPI/LangChain/GPT-4/Next.js 14/Redis/PostgreSQL/Stripe. Multi-tenant RAG chatbot platform, Stripe subscription lifecycle, -25% API costs.
6. **LingumedAI** — Clinical AI for Nurses — React/FastAPI/LangChain/RAG/pgvector/OpenAI. Domain RAG over medical literature, hallucination-resistant with uncertainty escalation, RBAC + audit logging.
7. **ForexAI** — Mobile Trading & Prediction App — React Native/XGBoost/Kronos AI/Python. Fine-tuned XGBoost+Kronos ensemble, in-app curriculum + live signals.
8. **Mork.pk** — *(⚠️ NOT in the source CV — user requested it be added but gave no details. Agent: insert as a placeholder card with a `TODO` comment/data field for tagline, tech stack, and description; do not invent fabricated metrics or claims for this one — leave it visibly editable in `data/content.ts`.)*

### 6. The Arsenal — Tech Stack (3D orbit ring)
*(Specify exact orbit radius/speed per breakpoint, exact icon size, exact pause-on-hover/click behavior, exact category-switch transition.)*
Rotating ring(s) of tech icons, grouped by category on hover/click:
AI & LLM: LangChain, LlamaIndex, OpenAI API, Anthropic Claude, RAG, Pinecone, pgvector, Agentic Workflows
ML/Fintech AI: XGBoost, Decision Trees, Kronos AI, Fine-Tuning, Ensemble Modeling, Time-Series
Computer Vision: PyTorch, ViT, CLIP, Whisper, PEFT, Quantization, Edge Deployment
Frontend: Next.js, React, React Native, Expo, TypeScript, Tailwind, GraphQL
Backend: FastAPI, Node.js, Django, Prisma, REST, Redis
Databases: PostgreSQL, MongoDB, Supabase
DevOps/Cloud: Docker, Jenkins, Terraform, CI/CD, EAS, Vercel, Railway, Oracle Cloud, AWS

### 7. Credentials — Education & Certifications
*(Specify exact badge card dimensions, exact grid columns per breakpoint, exact reveal stagger.)*
BSc Computer Science, GIFT University, Gujranwala (Sep 2022–Mar 2026) — Thesis: MAPF-Lite.
Certs (badge-style grid): OCI Certified Generative AI Professional (2025), OCI Certified AI Foundations Associate (2025), IBM Agentic AI Expert, IBM Build RAG Applications (2026), IBM NLP & CV Specialist, IBM Generative AI: Language Modeling with Transformers, Meta Advanced React, IBM Machine Learning Using Python.

### 8. Let's Build Something — Contact / Outro
*(Specify exact magnetic-link math (pull radius, max displacement, spring/damping values), exact closing-statement type scale, exact footer layout.)*
Bold closing statement, magnetic-hover contact links: email (abdullahbutt3579@gmail.com), LinkedIn (linkedin.com/in/muhammadabdullahbutt), GitHub (github.com/Abdullahs-git). Location: Gujranwala, Pakistan.

## INTERACTION DETAILS
- Custom cursor with magnetic pull toward interactive elements.
- Section transitions pinned/scrubbed via ScrollTrigger where it adds impact (hero → about, research stat reveal).
- Micro-interactions on every CTA/button (glow pulse, border trace-on-hover).
- Respect `prefers-reduced-motion` — provide a reduced-motion fallback (fades only, no parallax/3D auto-rotation).
- Fully responsive — mobile version simplifies 3D (static illustration or lightweight canvas) for performance.

## DELIVERABLE
A working Next.js project (or equivalent the agent has stronger native support for) implementing the above, deployable to Vercel, with `data/content.ts` as the single source of truth for all copy/data so future edits are cheap.
