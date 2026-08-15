# PROJECT BACKLOG — Abdullah Butt Portfolio Website
### Format: Jira-style Epics → Stories → Tasks, with acceptance criteria, stack, and full CI/CD pipeline (zero → live)
### Companion doc: `PORTFOLIO_BUILD_PROMPT.md` (design/story spec — read that first for tone/content)

---

## HOW TO USE THIS DOC
Give both files to the coding agent. This doc is the **execution plan** — work top to bottom, epic by epic. Each task has a suggested branch name and a "Definition of Done." Agent should commit after each completed task, not one giant commit at the end.

---

## TECH STACK (final, locked)

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14+ (App Router, TypeScript) | SSR/SSG, image optimization, Vercel-native |
| Styling | Tailwind CSS + CSS variables for theme tokens | fast, consistent, themeable |
| Animation | Framer Motion (reveals/transitions) + GSAP + ScrollTrigger (pinned/sequenced scenes) | industry standard for this motion style |
| 3D | react-three-fiber + @react-three/drei | React-native 3D, good perf controls |
| Icons | lucide-react + custom SVG orbit icons | consistent line icons |
| Fonts | self-hosted variable fonts via `next/font` | perf, no FOUT |
| Forms | React Hook Form + Zod validation | contact form validation |
| Email (contact form) | Resend or Nodemailer via API route | simple transactional email |
| Linting/Formatting | ESLint + Prettier + Husky pre-commit | code quality gate |
| Testing | Vitest (unit) + Playwright (e2e/visual smoke) | catch regressions before deploy |
| Analytics | Vercel Analytics + Plausible/GA4 (optional) | traffic insight |
| Hosting | Vercel | zero-config Next.js hosting, preview URLs |
| Domain/DNS | Cloudflare (DNS + CDN/WAF in front of Vercel) or Vercel DNS direct | choose based on user's owned domain |
| CI/CD | GitHub Actions + Vercel Git integration | automated build/test/deploy |
| Monitoring | Vercel Speed Insights + Sentry (error tracking) | catch prod issues |
| Version control | GitHub (private repo) | source of truth |

---

## EPIC 0 — Project Setup & Foundations
**Goal:** Repo, tooling, and design tokens ready before any UI work starts.
**Branch prefix:** `chore/setup-*`

- [ ] **TASK-001**: Init Next.js 14 + TypeScript project (`npx create-next-app@latest --typescript --tailwind --app`)
  - DoD: app boots locally on `npm run dev`, no default template content left.
- [ ] **TASK-002**: Set up ESLint + Prettier + Husky pre-commit hook + lint-staged
  - DoD: commit blocked if lint fails.
- [ ] **TASK-003**: Create GitHub repo (private), push initial commit, set up branch protection on `main`
  - DoD: PRs required to merge to `main`, no direct pushes.
- [ ] **TASK-004**: Define design tokens in `tailwind.config.ts` + `globals.css` (colors, neon accents, font families, spacing scale, z-index scale) using the exact CSS variable block from the build-prompt's SECTION 1 SPEC (`--bg-base`, `--neon-primary`, `--neon-secondary`, `--text-primary`, `--text-muted`, `--font-display`, `--font-mono`, `--font-body`)
  - DoD: tokens match the **locked, non-purple** palette in build-prompt doc (near-black base + lime/cyan primary + orange/hot-pink secondary — **no purple/violet/indigo anywhere in the token file**); no hardcoded hex values allowed elsewhere in codebase; reviewer greps `tailwind.config.ts` and `globals.css` for `purple`, `violet`, `indigo` and confirms zero matches.
- [ ] **TASK-005**: Self-host chosen fonts via `next/font/local`, wire into Tailwind `fontFamily`
  - DoD: Lighthouse shows no external font-loading layout shift.
- [ ] **TASK-006**: Scaffold folder structure: `/app`, `/components/ui`, `/components/sections`, `/components/3d`, `/data`, `/lib`, `/public/assets`
  - DoD: structure committed, README explains it.
- [ ] **TASK-007**: Create `data/content.ts` — single typed source of truth for ALL copy (hero text, bio, experience array, projects array, skills array, certs array, contact links)
  - DoD: no section copy hardcoded inside component files — everything pulled from this file.
- [ ] **TASK-008**: Create `THEME.md` — running log of every exact value (spacing, timing, easing curves, breakpoint behavior) decided while building sections 2–8, per the build-prompt's SPEC PRECISION STANDARD, so values stay consistent instead of improvised per-component
  - DoD: file exists before Epic 3 starts; updated as each section in Epic 3 is built, not written retroactively.

---

## EPIC 1 — Core UI Primitives (reusable components)
**Goal:** Build once, reuse across every section — this is what keeps the build fast/cheap.
**Branch prefix:** `feat/primitives-*`

- [ ] **TASK-101**: `<Reveal>` component — scroll-triggered fade/slide-up wrapper (Framer Motion `whileInView`)
- [ ] **TASK-102**: `<KineticText>` — word/char-stagger text reveal component, reusable for all headings
- [ ] **TASK-103**: `<GlowCard>` — reusable card with neon border glow + hover lift, used for projects/certs
- [ ] **TASK-104**: `<MagneticButton>` — cursor-magnetic CTA button component
- [ ] **TASK-105**: `<CustomCursor>` — global custom cursor with magnetic states, disabled on touch devices
- [ ] **TASK-106**: `<SectionHeading>` — consistent oversized section title component with kinetic reveal built in
- [ ] **TASK-107**: `<StatCounter>` — animated number counter (for MAPF-Lite stats), triggers on scroll into view
  - DoD (all above): each component documented with props in a comment block; each has a reduced-motion fallback per `prefers-reduced-motion`.

---

## EPIC 2 — 3D & Motion Systems
**Goal:** The signature "wow" layer — kept performant.
**Branch prefix:** `feat/3d-*`

- [ ] **TASK-201**: `<HeroScene>` — abstract particle/geometry centerpiece (react-three-fiber), subtle cursor-reactive rotation, capped particle count for mobile perf
- [ ] **TASK-202**: `<OrbitRing>` — rotating ring of tech-stack icons (CSS 3D transform OR r3f, agent's call based on perf testing), click/hover pauses rotation and highlights category
- [ ] **TASK-203**: `<TiltCard>` — 3D tilt-on-hover wrapper for project cards (perspective transform, mouse-position driven)
- [ ] **TASK-204**: Mobile fallback system — detect low-power/mobile, swap heavy 3D canvases for static illustration or lightweight CSS-only version
- [ ] **TASK-205**: GSAP ScrollTrigger setup — pinned hero→about transition, MAPF-Lite stat-reveal sequence
  - DoD: Lighthouse Performance score ≥85 mobile, ≥95 desktop after this epic; no jank on scroll (test via Chrome DevTools FPS meter).

---

## EPIC 2.5 — Precision Spec Pass (sections 2–8)
**Goal:** Before writing component code, flesh out sections 2–8 to the exact same granularity as the Hero (SECTION 1 SPEC) in the build-prompt doc — exact spacing, type scale, motion timing/easing, and breakpoint behavior. Skipping this and jumping straight to code is what produces generic output.
**Branch prefix:** `docs/spec-*`

- [ ] **TASK-251**: Write full precision spec for About (Section 2) into `THEME.md`/inline doc — paragraph type scale, stagger timing, max-width/line-length, section-to-hero spacing
- [ ] **TASK-252**: Write full precision spec for Research Spotlight (Section 3) — stat-counter animation (count-up duration, easing, IntersectionObserver threshold), hero-treatment panel styling
- [ ] **TASK-253**: Write full precision spec for Experience Timeline (Section 4) — node reveal trigger point, connecting-line draw animation, node spacing per breakpoint
- [ ] **TASK-254**: Write full precision spec for Projects Showcase (Section 5) — tilt math (max rotation/axis, damping), card dimensions per breakpoint, grid/carousel layout, click/expand transition
- [ ] **TASK-255**: Write full precision spec for Tech Stack orbit (Section 6) — orbit radius/speed per breakpoint, icon size, pause-on-hover/click behavior, category-switch transition
- [ ] **TASK-256**: Write full precision spec for Credentials (Section 7) — badge card dimensions, grid columns per breakpoint, reveal stagger
- [ ] **TASK-257**: Write full precision spec for Contact/Outro (Section 8) — magnetic-link pull radius/max displacement/spring values, closing-statement type scale, footer layout
  - DoD (all above): each spec written as concretely as the Hero spec (exact px/ms/easing values, not adjectives) before the matching Epic 3 task begins; committed to `THEME.md` or section-level doc comments.

---

## EPIC 3 — Section Build-Out (the story, section by section)
**Goal:** Implement each section from the build-prompt doc using the primitives above, following the precision specs written in Epic 2.5.
**Branch prefix:** `feat/section-*`

- [ ] **TASK-301**: Hero section — kinetic name/role reveal + `<HeroScene>` + scroll cue, built exactly per SECTION 1 SPEC in the build-prompt doc (fonts, CSS vars, custom cursor, wordmark, nav, eyebrow, name reveal, hook, stat strip, scroll cue, background treatment)
- [ ] **TASK-302**: About/Story section — narrative bio copy, `<Reveal>` staggered paragraphs — *(depends on TASK-251)*
- [ ] **TASK-303**: Research Spotlight (MAPF-Lite) — hero-treatment feature block, `<StatCounter>` grid, secondary review-paper mention — *(depends on TASK-252)*
- [ ] **TASK-304**: Experience Timeline — vertical scroll-triggered timeline (Huzzle, MAQ, GIFT University, Estabraq), each node uses `<Reveal>` — *(depends on TASK-253)*
- [ ] **TASK-305**: Projects Showcase — grid/carousel of `<GlowCard>` + `<TiltCard>` for all 8 projects (incl. Mork.pk placeholder, clearly marked editable in `content.ts`) — *(depends on TASK-254)*
- [ ] **TASK-306**: Tech Stack orbit section — `<OrbitRing>` grouped by category (AI/LLM, ML, CV, Frontend, Backend, DB, DevOps) — *(depends on TASK-255)*
- [ ] **TASK-307**: Education & Certifications — badge grid, `<GlowCard>` per cert — *(depends on TASK-256)*
- [ ] **TASK-308**: Contact/Outro — bold closing statement, magnetic contact links, working contact form (React Hook Form + Zod + API route) — *(depends on TASK-257)*
  - DoD (each): matches copy/data exactly from `content.ts`; matches the exact values from its Epic 2.5 precision spec (not approximated); responsive at 375px/768px/1024px/1440px; passes `prefers-reduced-motion` fallback check.

---

## EPIC 4 — Performance, SEO & Accessibility
**Branch prefix:** `chore/quality-*`

- [ ] **TASK-401**: Image optimization pass — all images via `next/image`, AI-generated atmospheric assets compressed/served as WebP/AVIF
- [ ] **TASK-402**: SEO — metadata API (title/description/OG image/Twitter card) per page, `sitemap.xml`, `robots.txt`
- [ ] **TASK-403**: Accessibility pass — semantic HTML, alt text, focus states visible (don't remove outline without replacement), color contrast check on neon-on-dark palette, keyboard nav works without custom cursor
- [ ] **TASK-404**: Lighthouse audit — Performance/Accessibility/Best Practices/SEO all ≥90 (mobile), fix regressions
- [ ] **TASK-405**: Bundle analysis (`@next/bundle-analyzer`) — lazy-load 3D/canvas components below the fold, code-split heavy sections

---

## EPIC 5 — Testing
**Branch prefix:** `test/*`

- [ ] **TASK-501**: Unit tests (Vitest) for primitives — `<StatCounter>`, form validation logic
- [ ] **TASK-502**: E2E smoke test (Playwright) — page loads, all sections render, contact form submits, nav links scroll correctly
- [ ] **TASK-503**: Visual regression baseline (Playwright screenshots) for hero/projects/contact sections

---

## EPIC 6 — CI/CD Pipeline (Zero → Live)
**Goal:** Fully automated path from `git push` to live production URL, with preview deploys for every PR.
**Branch prefix:** `ci/*`

### Step-by-step pipeline

1. **TASK-601 — Repo & Vercel connection**
   - Push repo to GitHub (private).
   - Create Vercel account/project, import the GitHub repo via Vercel's Git integration.
   - DoD: pushing to any branch auto-creates a Vercel Preview Deployment URL.

2. **TASK-602 — Environment variables**
   - Set up `.env.local` for local dev (email API key, analytics ID, Sentry DSN).
   - Mirror the same variables in Vercel Project Settings → Environment Variables (separate values for Preview vs Production if needed).
   - DoD: no secrets committed to git (verify `.gitignore` includes `.env*`).

3. **TASK-603 — GitHub Actions workflow** (`.github/workflows/ci.yml`)
   - On every PR: install deps → lint → type-check (`tsc --noEmit`) → unit tests → Playwright e2e → build (`next build`) to catch build errors before merge.
   - DoD: PR shows green/red check; merge blocked if any step fails (branch protection rule requiring this check to pass).

4. **TASK-604 — Preview deployments**
   - Vercel auto-builds a Preview URL per PR (this happens automatically once TASK-601 is done — no extra config needed beyond confirming it's enabled).
   - DoD: every PR gets a commented Preview URL for visual review before merge.

5. **TASK-605 — Production deployment**
   - Merge to `main` → Vercel auto-deploys to Production.
   - DoD: production URL live and serving the latest `main` build automatically on merge.

6. **TASK-606 — Custom domain + DNS**
   - Add custom domain in Vercel Project Settings → Domains.
   - Point DNS (A/CNAME records at registrar, or via Cloudflare if using it as DNS/CDN layer) to Vercel per Vercel's provided records.
   - Enable automatic HTTPS (Vercel provisions SSL cert automatically via Let's Encrypt).
   - DoD: `https://<domain>` resolves to the live site with valid SSL, `www` redirects to apex (or vice versa, pick one canonical).

7. **TASK-607 — Post-deploy monitoring**
   - Enable Vercel Analytics + Speed Insights.
   - Add Sentry for error tracking (`@sentry/nextjs` init).
   - Set up an uptime check (e.g. free tier of UptimeRobot or Vercel's own monitoring) pinging the live domain.
   - DoD: dashboard shows real traffic/performance data; a deliberately-thrown test error appears in Sentry.

8. **TASK-608 — Rollback plan**
   - Document in `README.md`: how to roll back via Vercel's "Instant Rollback" to a previous deployment if production breaks.
   - DoD: README has a one-paragraph rollback runbook.

### Pipeline summary diagram (for README)
```
git push (feature branch)
   → GitHub Actions: lint + typecheck + tests + build   [gate]
   → Vercel: Preview Deployment (unique URL per PR)
   → PR review on Preview URL
   → Merge to main
   → GitHub Actions: same gate runs again
   → Vercel: Production Deployment (auto)
   → Custom domain (HTTPS via Vercel) serves live site
   → Monitoring: Analytics + Speed Insights + Sentry + Uptime check
```

---

## EPIC 7 — Launch Checklist
**Branch prefix:** `chore/launch-*`

- [ ] **TASK-701**: Cross-browser check — Chrome, Safari, Firefox, mobile Safari/Chrome
- [ ] **TASK-702**: Real device test — at least one low-end Android + one iPhone, confirm 3D fallback triggers correctly
- [ ] **TASK-703**: Favicon + OG image + manifest for "Add to Home Screen"
- [ ] **TASK-704**: Final content proofread against `content.ts` — confirm Mork.pk placeholder is either filled in or clearly marked as coming soon (not silently fabricated)
- [ ] **TASK-705**: Final Lighthouse + accessibility + broken-link sweep
- [ ] **TASK-706**: Go-live — merge to `main`, verify production URL + custom domain, announce

---

## SUGGESTED SPRINT GROUPING (if working in sprints, not all at once)
- **Sprint 1**: Epic 0 + Epic 1
- **Sprint 2**: Epic 2 + Epic 2.5 + Epic 3 (sections 301–304)
- **Sprint 3**: Epic 3 (sections 305–308) + Epic 4
- **Sprint 4**: Epic 5 + Epic 6
- **Sprint 5**: Epic 7 → Launch

---

## OPEN ITEM CARRIED FROM BUILD-PROMPT DOC
Mork.pk has no real content in the source CV. TASK-305 and TASK-704 both flag this — get real project details before final launch, or ship with an explicit "coming soon" treatment rather than invented specs.
