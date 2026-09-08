import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { CONTENT } from '@/data/content';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    constructor(public callback: IntersectionObserverCallback) {}
  } as unknown as typeof IntersectionObserver;
});

describe('ProjectsSection', () => {
  beforeEach(() => {
    render(<ProjectsSection />);
  });

  it('renders all live project titles', () => {
    CONTENT.projects.live.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders all live project categories', () => {
    CONTENT.projects.live.forEach((project) => {
      expect(screen.getByText(project.category)).toBeInTheDocument();
    });
  });

  it('renders external links with target="_blank" for live projects', () => {
    const visitLinks = screen.getAllByRole('link', { name: /visit/i });
    visitLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noreferrer');
    });
  });

  it('renders all other project titles', () => {
    CONTENT.projects.other.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });

  it('renders LIVE status indicators for live production projects', () => {
    const liveIndicators = screen.getAllByText('LIVE');
    expect(liveIndicators.length).toBe(CONTENT.projects.live.length);
  });

  it('renders section label for live projects', () => {
    expect(screen.getByText('[LIVE PRODUCTION ARCHITECTURE]')).toBeInTheDocument();
  });

  it('renders confidential section label', () => {
    expect(screen.getByText('[CONFIDENTIAL // PROPRIETARY ENTERPRISE AI]')).toBeInTheDocument();
  });

  it('renders NDA PROTECTED label', () => {
    expect(screen.getByText('NDA PROTECTED')).toBeInTheDocument();
  });

  it('renders CONFIDENTIAL / NDA RESTRICTED overlays', () => {
    const overlays = screen.getAllByText('CONFIDENTIAL / NDA RESTRICTED');
    expect(overlays.length).toBe(CONTENT.projects.confidential.length);
  });
});
