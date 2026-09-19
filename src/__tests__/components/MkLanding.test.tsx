import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MkLanding } from '@/components/mk/MkLanding';
import { MK } from '@/data/mk';

const destroy = jest.fn();
const bootMk = jest.fn((..._args: unknown[]) => destroy);

// the live scene needs WebGL; the component only has to hand it the mounted DOM
jest.mock('@/components/mk/mk-world', () => ({
  bootMk: (...args: unknown[]) => bootMk(...args),
}));

describe('MkLanding', () => {
  beforeEach(() => {
    bootMk.mockClear();
    destroy.mockClear();
  });

  it('renders the typing hero: terminal line, two headline lines and the standfirst', () => {
    render(<MkLanding />);
    expect(screen.getByText(MK.hero.term)).toBeInTheDocument();
    expect(screen.getByText(MK.hero.line1)).toBeInTheDocument();
    expect(screen.getByText(MK.hero.line2)).toBeInTheDocument();
    const sub = document.querySelector('.hero-sub');
    expect(sub).not.toBeNull();
    expect(sub).toHaveTextContent(MK.hero.sub[0]);
    expect(sub).toHaveTextContent(MK.hero.sub[1]);
  });

  it('keeps the top bar to brand, sound toggle and the call to action', () => {
    render(<MkLanding />);
    expect(screen.getByRole('button', { name: /sound off/i })).toHaveAttribute('aria-pressed', 'false');
    const cta = document.querySelector('.nav-cta');
    expect(cta).toHaveTextContent(MK.nav.cta.label);
    expect(cta).toHaveAttribute('href', MK.nav.cta.href);
  });

  it('draws the board into page windows: the build stage, three crops, five keys and the finish', () => {
    const { container } = render(<MkLanding />);
    const kinds = [...container.querySelectorAll('[data-window]')].map((el) => el.getAttribute('data-window'));
    expect(kinds).toEqual(['board', 'row', 'arrows', 'macro', 'key', 'key', 'key', 'key', 'key', 'finish']);
    MK.process.steps.forEach((s) => expect(container.querySelector(`.win--key[data-key="${s.key}"]`)).not.toBeNull());
  });

  it('lays out the construction chapter with the marquee and the thesis', () => {
    const { container } = render(<MkLanding />);
    expect(container.querySelector('#typed')).not.toBeNull();
    expect(screen.getByText(MK.build.thesis)).toBeInTheDocument();
    expect(container.querySelectorAll('.marquee span')).toHaveLength(MK.build.marquee.length * 3);
  });

  it('renders the feature rows, projects with links, and the lineage', () => {
    render(<MkLanding />);
    MK.features.rows.forEach((f) => expect(screen.getByText(f.title)).toBeInTheDocument());
    MK.work.projects.forEach((p) => {
      expect(screen.getAllByText(p.title).length).toBeGreaterThan(0);
      if (p.url) expect(screen.getByRole('link', { name: new RegExp(`^${p.title} —`) })).toHaveAttribute('href', p.url);
    });
    MK.work.lineage.forEach((row) => expect(screen.getAllByText(row.title).length).toBeGreaterThan(0));
  });

  it('wires every process step to a key on the board and shows the voice card', () => {
    const { container } = render(<MkLanding />);
    MK.process.steps.forEach((s) => {
      expect(screen.getByText(s.title)).toBeInTheDocument();
      expect(container.querySelector(`.step[data-key="${s.key}"]`)).not.toBeNull();
    });
    expect(screen.getByText(MK.voice.quote)).toBeInTheDocument();
  });

  it('offers both finishes as a radio pair, design first', () => {
    render(<MkLanding />);
    expect(screen.getByRole('radio', { name: /design finish/i })).toBeChecked();
    expect(screen.getByRole('radio', { name: /build finish/i })).not.toBeChecked();
    MK.finish.panels.forEach((p) => p.items.forEach((it) => expect(screen.getByText(it)).toBeInTheDocument()));
  });

  it('closes on the final product: stats, mailto call to action, chips and the spec sheet', () => {
    render(<MkLanding />);
    expect(screen.getByText(MK.final.line2)).toBeInTheDocument();
    const cta = document.querySelector('.final .cta');
    expect(cta).toHaveTextContent(MK.final.cta);
    expect(cta).toHaveAttribute('href', `mailto:${MK.identity.email}`);
    MK.final.chips.forEach((c) => expect(screen.getByRole('link', { name: c.label })).toHaveAttribute('href', c.href));
    MK.final.specs.forEach((s) => expect(screen.getByText(s.value)).toBeInTheDocument());
  });

  it('boots the scene with the typed word and preloader lines, and tears it down on unmount', async () => {
    const { unmount } = render(<MkLanding />);
    await waitFor(() => expect(bootMk).toHaveBeenCalledTimes(1));
    expect(bootMk).toHaveBeenCalledWith(expect.objectContaining({ typed: MK.build.typed, preloaderLines: MK.preloader.lines }));
    expect(document.documentElement.classList.contains('mk-page')).toBe(true);
    expect(document.documentElement.dataset.theme).toBe('light');

    unmount();
    expect(destroy).toHaveBeenCalledTimes(1);
    expect(document.documentElement.classList.contains('mk-page')).toBe(false);
    expect(document.documentElement.dataset.theme).toBeUndefined();
  });
});
