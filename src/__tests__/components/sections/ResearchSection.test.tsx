import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { CONTENT } from '@/data/content';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    constructor(public callback: IntersectionObserverCallback) {}
  } as unknown as typeof IntersectionObserver;
});

describe('ResearchSection', () => {
  beforeEach(() => {
    render(<ResearchSection />);
  });

  it('renders the MAPF-Lite title', () => {
    expect(screen.getAllByText('MAPF-Lite').length).toBeGreaterThan(0);
  });

  it('renders the venue and publisher badges', () => {
    expect(screen.getByText(CONTENT.research.primary.venue)).toBeInTheDocument();
    expect(screen.getByText(CONTENT.research.primary.publisher)).toBeInTheDocument();
  });

  it('renders all 6 metric values', () => {
    const metrics = CONTENT.research.primary.metrics;
    metrics.forEach((m) => {
      expect(screen.getByText(m.value)).toBeInTheDocument();
    });
  });

  it('renders all metric labels', () => {
    const metrics = CONTENT.research.primary.metrics;
    metrics.forEach((m) => {
      expect(screen.getAllByText(m.label).length).toBeGreaterThan(0);
    });
  });

  it('renders the READ PAPER link with correct Springer href', () => {
    const link = screen.getByRole('link', { name: /read paper/i });
    expect(link).toHaveAttribute('href', CONTENT.research.primary.links[0].url);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
  });

  it('renders the VIEW BOOK link', () => {
    const link = screen.getByRole('link', { name: /view book/i });
    expect(link).toHaveAttribute('href', CONTENT.research.primary.links[1].url);
  });

  it('renders the secondary paper title', () => {
    expect(screen.getByText(CONTENT.research.secondary.title)).toBeInTheDocument();
  });

  it('renders secondary paper status "In Preparation"', () => {
    expect(screen.getByText('In Preparation')).toBeInTheDocument();
  });

  it('renders the architecture description', () => {
    // Match partial since the text is long
    const archText = CONTENT.research.primary.architecture.slice(0, 30);
    expect(screen.getByText((content) => content.includes(archText))).toBeInTheDocument();
  });
});
