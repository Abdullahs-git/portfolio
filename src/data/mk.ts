/**
 * Content for the landing page.
 *
 * The page tells a product story the way a keyboard product page does:
 * hero → construction → feature → lineage → voice → finish → final product.
 * Everything the page says lives here, so re-pointing it at a different
 * person is a one-file edit.
 */

export interface Stat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface Feature {
  /** which region of the board the crop panel frames */
  crop: 'row' | 'arrows' | 'macro';
  num: string;
  title: string;
  body: string;
}

export interface Project {
  title: string;
  category: string;
  tags: string[];
  url?: string;
  /** optional screenshot; the tile draws a schematic window without one */
  image?: string;
}

export interface LineageRow {
  year: string;
  title: string;
  detail: string;
}

export interface Step {
  /** the key on the board this step presses */
  key: string;
  num: string;
  title: string;
  text: string;
  time: string;
}

export interface FinishPanel {
  id: string;
  num: string;
  label: string;
  title: string;
  items: string[];
}

export const MK = {
  identity: {
    name: 'Muhammad Abdullah Butt',
    /** the product code, used like "MK·78" */
    code: 'MAB·26',
    role: 'Senior Web Designer & UI/UX Developer',
    email: 'abdullahbutt3579@gmail.com',
    linkedin: 'https://linkedin.com/in/muhammadabdullahbutt',
    github: 'https://github.com/Abdullahs-git',
    cv: '/Muhammad_Abdullah_Butt_CV.pdf',
    year: '2026',
  },

  nav: {
    brand: 'MAB·26',
    brandSuffix: 'Portfolio',
    sound: 'Sound',
    cta: { label: 'Start a project', href: 'mailto:abdullahbutt3579@gmail.com' },
  },

  preloader: {
    prompt: '$ mab26 --boot',
    lines: ['loading type', 'cutting 78 keys', 'printing legends', 'ready'],
  },

  hero: {
    term: '$ abdullah --ready · 78 keys ok',
    line1: 'every pixel.',
    line2: 'every decision.',
    sub: ['MAB·26 is a senior web designer and UI/UX developer, drawing products entirely in code.', 'Scroll to watch one come together — key by key.'],
    cue: 'Scroll',
    cornerLeft: 'Made in one file',
    cornerRight: 'Design · Build · Ship',
  },

  build: {
    eyebrow: '01 — Construction',
    /** typed above the board, one key press per letter, as the keys land */
    typed: 'abdullah',
    marquee: ['Made to be used', 'Designed by hand', 'Built in code', 'Shipped to production'],
    thesisEyebrow: '— The thesis',
    thesis:
      'A real product is a hundred small decisions. The curve of a corner. The weight of a shadow. The 6-pixel gap between two elements. This portfolio rebuilds every single one — in code, by hand.',
  },

  features: {
    eyebrow: '02 — Feature',
    rows: [
      {
        crop: 'row',
        num: '01',
        title: 'Systems you already know.',
        body: 'Tokens, components and patterns that behave the way people expect. The system is designed and then built by the same hands, so the parts fit the first time.',
      },
      {
        crop: 'arrows',
        num: '02',
        title: 'Motion with intent.',
        body: 'Every transition earns its place: state you can feel, feedback you can trust, nothing you have to wait for.',
      },
      {
        crop: 'macro',
        num: '03',
        title: 'Built to the pixel.',
        body: 'The Figma frame and the browser agree to the pixel. Semantic markup, real accessibility, fast on any device.',
      },
    ] as Feature[],
  },

  work: {
    eyebrow: '— The lineage',
    pill: '06 live',
    title: 'Where it shipped.',
    body: 'Recent products, each designed and then built by the same hands, from the first flow to the last commit.',
    projects: [
      {
        title: 'DeepShield',
        category: 'Detection platform',
        tags: ['Product design', 'Next.js', 'Front-end'],
        url: 'https://deepshield.video',
      },
      {
        title: 'ImageStudio',
        category: 'Privacy-first image toolkit',
        tags: ['UX', 'UI', 'Build'],
        url: 'https://imagestudio.app',
      },
      {
        title: 'Estabraq',
        category: 'Fashion storefront',
        tags: ['Brand', 'E-commerce', 'Sub-2s loads'],
        url: 'https://estabraq.pk',
      },
    ] as Project[],
    lineageLabel: 'Where it started',
    lineage: [
      { year: '2023', title: 'MAQ Enterprises', detail: 'Product work in Next.js and Node: 40% faster pages, CI/CD, mentoring' },
      { year: '2024', title: 'GIFT University', detail: 'Research on a lightweight multimodal architecture, published with Springer Nature' },
      { year: '2025', title: 'Estabraq', detail: 'Designed and built a live fashion storefront with sub-2-second loads' },
      { year: '2026', title: 'Huzzle', detail: 'Senior engineer on a high-traffic B2C platform, London (remote)' },
    ] as LineageRow[],
  },

  voice: {
    eyebrow: 'The statement',
    meta: '05 disciplines · 01 person',
    title: ['One voice.', 'Zero handoffs lost.'],
    body: 'The design and the build are the same decision made twice. When the same hands do both, nothing is lost between them, and the product ships the way it was drawn.',
    quote: 'The best interface is not the busiest one. It is the quietest one that reliably gets the person to the thing they came for.',
    author: 'Muhammad Abdullah Butt',
    authorRole: 'Senior web designer & UI/UX developer',
    tag: 'Designed & built',
  },

  process: {
    eyebrow: '03 — Process',
    title: 'Five keys. One product.',
    steps: [
      { key: 'F1', num: '01', title: 'Discovery & research', text: 'Interviews, audits and user research that turn an ask into a brief.', time: '1–2 wks' },
      { key: 'F2', num: '02', title: 'Information architecture', text: 'Flows, sitemaps and wireframes that settle the structure before a single pixel.', time: '1 wk' },
      { key: 'F3', num: '03', title: 'Interface design', text: 'High-fidelity UI in Figma: type, colour, spacing and motion, decided on purpose.', time: '2–3 wks' },
      { key: 'F4', num: '04', title: 'Design systems', text: 'Tokens, components and documentation so the product stays consistent as it grows.', time: '2 wks' },
      { key: 'F5', num: '05', title: 'Front-end build', text: 'Production React and Next.js, pixel-accurate to the design, tested and handed off.', time: '3–4 wks' },
    ] as Step[],
  },

  finish: {
    eyebrow: '04 — Finish',
    line1: 'Two finishes.',
    line2: 'One scroll apart.',
    panels: [
      {
        id: 'design',
        num: '01',
        label: 'Design',
        title: 'The design finish',
        items: ['Research & audits', 'Flows & architecture', 'High-fidelity UI in Figma', 'Design systems & tokens', 'Motion & prototypes'],
      },
      {
        id: 'build',
        num: '02',
        label: 'Build',
        title: 'The build finish',
        items: ['React & Next.js front-end', 'TypeScript & Tailwind', 'Three.js & motion', 'Performance & accessibility', 'Testing, CI & hand-off'],
      },
    ] as FinishPanel[],
  },

  final: {
    line1: 'See it for',
    line2: 'yourself.',
    stats: [
      { value: '78', label: 'Keys', accent: true },
      { value: '06', label: 'Live products' },
      { value: '03+', label: 'Years' },
      { value: '01', label: 'Person' },
    ] as Stat[],
    cta: 'Start a project',
    productMark: 'mab·26',
    productWord: 'portfolio',
    chips: [
      { label: 'Email', href: 'mailto:abdullahbutt3579@gmail.com' },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/muhammadabdullahbutt', external: true },
      { label: 'GitHub', href: 'https://github.com/Abdullahs-git', external: true },
      { label: 'CV', href: '/Muhammad_Abdullah_Butt_CV.pdf', external: true },
    ],
    specs: [
      { label: 'Location', value: 'Gujranwala, Pakistan' },
      { label: 'Timezone', value: 'GMT+5 · overlaps EU & US mornings' },
      { label: 'Availability', value: 'Remote · booking 2026' },
      { label: 'Response', value: 'Within 24 hours' },
    ],
    baseLeft: '© 2026 MAB·26 — Muhammad Abdullah Butt',
    baseRight: 'Made in one file · Next.js · Three.js',
  },
};

export type MkContent = typeof MK;
