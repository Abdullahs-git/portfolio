import { CONTENT } from '@/data/content';

describe('CONTENT data integrity', () => {
  // ── Hero ──────────────────────────────────────────────────────────────
  describe('hero', () => {
    it('has non-empty line1 and line2', () => {
      expect(CONTENT.hero.line1.trim().length).toBeGreaterThan(0);
      expect(CONTENT.hero.line2.trim().length).toBeGreaterThan(0);
    });

    it('has a non-empty summary', () => {
      expect(CONTENT.hero.summary.trim().length).toBeGreaterThan(0);
    });

    it('has a status string', () => {
      expect(typeof CONTENT.hero.status).toBe('string');
      expect(CONTENT.hero.status.trim().length).toBeGreaterThan(0);
    });
  });

  // ── Research ──────────────────────────────────────────────────────────
  describe('research.primary', () => {
    const r = CONTENT.research.primary;

    it('title is MAPF-Lite', () => {
      expect(r.title).toBe('MAPF-Lite');
    });

    it('has exactly 6 metrics', () => {
      expect(r.metrics).toHaveLength(6);
    });

    it('every metric has value, label, and sublabel', () => {
      r.metrics.forEach((m) => {
        expect(m.value.trim().length).toBeGreaterThan(0);
        expect(m.label.trim().length).toBeGreaterThan(0);
        expect(m.sublabel.trim().length).toBeGreaterThan(0);
      });
    });

    it('has at least one link with a url starting with https://', () => {
      expect(r.links.length).toBeGreaterThan(0);
      r.links.forEach((l) => {
        expect(l.url).toMatch(/^https:\/\//);
      });
    });

    it('publisher is Springer Nature', () => {
      expect(r.publisher).toBe('Springer Nature');
    });
  });

  describe('research.secondary', () => {
    const s = CONTENT.research.secondary;

    it('has a title and a status', () => {
      expect(s.title.trim().length).toBeGreaterThan(0);
      expect(s.status.trim().length).toBeGreaterThan(0);
    });
  });

  // ── Projects ──────────────────────────────────────────────────────────
  describe('projects', () => {
    it('has at least 3 live projects', () => {
      expect(CONTENT.projects.live.length).toBeGreaterThanOrEqual(3);
    });

    it('every live project has a title, category, stack, and description', () => {
      CONTENT.projects.live.forEach((p) => {
        expect(p.title.trim().length).toBeGreaterThan(0);
        expect(p.category.trim().length).toBeGreaterThan(0);
        expect(p.stack.length).toBeGreaterThan(0);
        expect(p.description.trim().length).toBeGreaterThan(0);
      });
    });

    it('confidential projects have confidential: true', () => {
      CONTENT.projects.confidential.forEach((p) => {
        expect(p.confidential).toBe(true);
      });
    });
  });

  // ── Experience ────────────────────────────────────────────────────────
  describe('experience', () => {
    it('has at least 4 experience entries', () => {
      expect(CONTENT.experience.length).toBeGreaterThanOrEqual(4);
    });

    it('each entry has role, company, duration, and description', () => {
      CONTENT.experience.forEach((e) => {
        expect(e.role.trim().length).toBeGreaterThan(0);
        expect(e.company.trim().length).toBeGreaterThan(0);
        expect(e.duration.trim().length).toBeGreaterThan(0);
        expect(e.description.trim().length).toBeGreaterThan(0);
      });
    });
  });

  // ── Stack ─────────────────────────────────────────────────────────────
  describe('stack', () => {
    it('has at least 5 categories', () => {
      expect(Object.keys(CONTENT.stack).length).toBeGreaterThanOrEqual(5);
    });

    it('each category has at least one skill', () => {
      Object.values(CONTENT.stack).forEach((skills) => {
        expect(skills.length).toBeGreaterThan(0);
      });
    });
  });

  // ── Education ─────────────────────────────────────────────────────────
  describe('education', () => {
    it('has degree, institution, dates, and thesis', () => {
      const edu = CONTENT.education;
      expect(edu.degree.trim().length).toBeGreaterThan(0);
      expect(edu.institution.trim().length).toBeGreaterThan(0);
      expect(edu.dates.trim().length).toBeGreaterThan(0);
      expect(edu.thesis.trim().length).toBeGreaterThan(0);
    });
  });

  // ── Certifications ────────────────────────────────────────────────────
  describe('certifications', () => {
    it('has at least 8 certifications', () => {
      expect(CONTENT.certifications.length).toBeGreaterThanOrEqual(8);
    });

    it('each cert has name, issuer, and year', () => {
      CONTENT.certifications.forEach((c) => {
        expect(c.name.trim().length).toBeGreaterThan(0);
        expect(c.issuer.trim().length).toBeGreaterThan(0);
        expect(c.year.trim().length).toBeGreaterThan(0);
      });
    });
  });

  // ── Contact ───────────────────────────────────────────────────────────
  describe('contact', () => {
    it('email is a valid email format', () => {
      expect(CONTENT.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    });

    it('linkedin starts with linkedin.com', () => {
      expect(CONTENT.contact.linkedin).toMatch(/^linkedin\.com\//);
    });

    it('github starts with github.com', () => {
      expect(CONTENT.contact.github).toMatch(/^github\.com\//);
    });

    it('location is non-empty', () => {
      expect(CONTENT.contact.location.trim().length).toBeGreaterThan(0);
    });
  });

  // ── Quote ─────────────────────────────────────────────────────────────
  describe('quote', () => {
    it('has text, author, and source', () => {
      expect(CONTENT.quote.text.trim().length).toBeGreaterThan(0);
      expect(CONTENT.quote.author.trim().length).toBeGreaterThan(0);
      expect(CONTENT.quote.source.trim().length).toBeGreaterThan(0);
    });
  });
});
