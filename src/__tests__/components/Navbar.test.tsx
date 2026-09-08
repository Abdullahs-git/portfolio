import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '@/components/Navbar';

// Mock framer-motion to avoid animation issues in jsdom
jest.mock('framer-motion', () => ({
  motion: {
    header: ({ children, ...props }: React.HTMLAttributes<HTMLElement> & { initial?: unknown; animate?: unknown; transition?: unknown }) =>
      React.createElement('header', props, children),
    div: ({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & { initial?: unknown; animate?: unknown; exit?: unknown; transition?: unknown }) =>
      React.createElement('div', props, children),
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('Navbar', () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it('renders all 6 navigation items', () => {
    expect(screen.getByRole('link', { name: /research/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /stack/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /education/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument();
  });

  it('nav items have correct href anchors', () => {
    expect(screen.getByRole('link', { name: /research/i })).toHaveAttribute('href', '#research');
    expect(screen.getByRole('link', { name: /projects/i })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: /experience/i })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: /stack/i })).toHaveAttribute('href', '#stack');
    expect(screen.getByRole('link', { name: /education/i })).toHaveAttribute('href', '#education');
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute('href', '#contact');
  });

  it('renders the wordmark / brand link', () => {
    expect(screen.getByText(/MUHAMMAD ABDULLAH BUTT/i)).toBeInTheDocument();
  });

  it('shows STATUS: AVAILABLE text', () => {
    expect(screen.getByText(/AVAILABLE/i)).toBeInTheDocument();
  });

  it('renders the hamburger button (mobile toggle)', () => {
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i });
    expect(hamburger).toBeInTheDocument();
  });

  it('opens mobile menu when hamburger is clicked', async () => {
    const user = userEvent.setup();
    const hamburger = screen.getByRole('button', { name: /open navigation menu/i });

    await user.click(hamburger);

    // After opening, button label should change
    expect(screen.getByRole('button', { name: /close navigation menu/i })).toBeInTheDocument();
    // Mobile status should appear
    expect(screen.getByText('AVAILABLE / REMOTE')).toBeInTheDocument();
  });

  it('closes mobile menu when hamburger is clicked again', async () => {
    const user = userEvent.setup();

    // Open
    await user.click(screen.getByRole('button', { name: /open navigation menu/i }));
    // Close
    await user.click(screen.getByRole('button', { name: /close navigation menu/i }));

    expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
  });
});
