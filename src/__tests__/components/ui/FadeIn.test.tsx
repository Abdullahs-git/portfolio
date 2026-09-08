import React from 'react';
import { render, screen } from '@testing-library/react';
import { FadeIn } from '@/components/ui/FadeIn';

// Framer Motion's whileInView needs IntersectionObserver in jsdom
beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    constructor(public callback: IntersectionObserverCallback) {}
  } as unknown as typeof IntersectionObserver;
});

describe('FadeIn', () => {
  it('renders children', () => {
    render(<FadeIn><span>hello world</span></FadeIn>);
    expect(screen.getByText('hello world')).toBeInTheDocument();
  });

  it('applies custom className to the wrapper', () => {
    const { container } = render(
      <FadeIn className="custom-class"><p>content</p></FadeIn>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('renders with direction="none" without crashing', () => {
    render(<FadeIn direction="none"><span>no direction</span></FadeIn>);
    expect(screen.getByText('no direction')).toBeInTheDocument();
  });

  it('renders with delay prop without crashing', () => {
    render(<FadeIn delay={0.5}><span>delayed</span></FadeIn>);
    expect(screen.getByText('delayed')).toBeInTheDocument();
  });

  it('renders with once=false without crashing', () => {
    render(<FadeIn once={false}><span>repeat</span></FadeIn>);
    expect(screen.getByText('repeat')).toBeInTheDocument();
  });
});
