import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroSection } from '@/components/sections/HeroSection';
import { CONTENT } from '@/data/content';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    constructor(public callback: IntersectionObserverCallback) {}
  } as unknown as typeof IntersectionObserver;
});

describe('HeroSection', () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it('renders hero line1 from CONTENT', () => {
    expect(screen.getByText(CONTENT.hero.line1)).toBeInTheDocument();
  });

  it('renders hero line2 from CONTENT', () => {
    expect(screen.getByText(CONTENT.hero.line2)).toBeInTheDocument();
  });

  it('renders the hero status', () => {
    expect(screen.getByText(CONTENT.hero.status)).toBeInTheDocument();
  });

  it('renders a scroll-to-research link pointing to #research', () => {
    // The aria-label in HeroSection is "Scroll down to research section"
    const link = screen.getByRole('link', { name: /scroll down to research section/i });
    expect(link).toHaveAttribute('href', '#research');
  });

  it('renders the quote text', () => {
    // Quote is rendered by HeroSection — match partial text using getAllByText
    // (the same quote text may appear in other parts of the page)
    const matches = screen.getAllByText((_c, el) =>
      el?.textContent?.includes(CONTENT.quote.text.slice(0, 20)) ?? false
    );
    expect(matches.length).toBeGreaterThan(0);
  });

  it('renders the hero summary paragraph', () => {
    expect(screen.getByText(CONTENT.hero.summary)).toBeInTheDocument();
  });
});
