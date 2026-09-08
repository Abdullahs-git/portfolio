import React from 'react';
import { render, screen } from '@testing-library/react';
import { SectionLabel } from '@/components/ui/SectionLabel';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    constructor(public callback: IntersectionObserverCallback) {}
  } as unknown as typeof IntersectionObserver;
});

describe('SectionLabel', () => {
  it('renders the number and title', () => {
    render(<SectionLabel number="01" title="Research" />);
    expect(screen.getByText('01')).toBeInTheDocument();
    expect(screen.getByText('Research')).toBeInTheDocument();
  });

  it('renders with inverted=false by default without crashing', () => {
    render(<SectionLabel number="02" title="Projects" />);
    // The number span should have text-gray-400 class (non-inverted)
    const numberEl = screen.getByText('02');
    expect(numberEl).toHaveClass('text-gray-400');
  });

  it('renders with inverted=true and applies gray-500 text class', () => {
    render(<SectionLabel number="06" title="Contact" inverted />);
    const numberEl = screen.getByText('06');
    expect(numberEl).toHaveClass('text-gray-500');
  });

  it('renders any number string', () => {
    render(<SectionLabel number="99" title="Footer" />);
    expect(screen.getByText('99')).toBeInTheDocument();
  });
});
