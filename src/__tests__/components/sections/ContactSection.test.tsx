import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from '@/components/sections/ContactSection';

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver {
    observe = jest.fn();
    unobserve = jest.fn();
    disconnect = jest.fn();
    constructor(public callback: IntersectionObserverCallback) {}
  } as unknown as typeof IntersectionObserver;

  // Mock fetch globally
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.resetAllMocks();
});

describe('ContactSection — form rendering', () => {
  it('renders name, email, and message fields', () => {
    render(<ContactSection />);
    expect(screen.getByLabelText(/name \/ organization/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/project brief/i)).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<ContactSection />);
    expect(screen.getByRole('button', { name: /dispatch message/i })).toBeInTheDocument();
  });

  it('renders direct contact links', () => {
    render(<ContactSection />);
    expect(screen.getByText(/DIRECT EMAIL/i)).toBeInTheDocument();
    expect(screen.getByText(/LINKEDIN/i)).toBeInTheDocument();
    expect(screen.getByText(/GITHUB/i)).toBeInTheDocument();
  });
});

describe('ContactSection — validation', () => {
  it('shows validation errors when submitted with empty fields', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByText(/at least 2 characters/i)).toBeInTheDocument();
    });
  });

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Test User');
    await user.type(screen.getByLabelText(/email address/i), 'not-an-email');
    await user.type(screen.getByLabelText(/project brief/i), 'This is a long enough message to pass.');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    });
  });

  it('shows message length error for short messages', async () => {
    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Test User');
    await user.type(screen.getByLabelText(/email address/i), 'test@example.com');
    await user.type(screen.getByLabelText(/project brief/i), 'short');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByText(/at least 10 characters/i)).toBeInTheDocument();
    });
  });
});

describe('ContactSection — submission', () => {
  it('calls fetch /api/contact with correct payload on valid submit', async () => {
    const mockFetch = global.fetch as jest.Mock;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/project brief/i), 'I want to build something great.');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }));
    });

    const body = JSON.parse((mockFetch.mock.calls[0][1] as RequestInit).body as string);
    expect(body.name).toBe('Jane Doe');
    expect(body.email).toBe('jane@example.com');
    expect(body.message).toBe('I want to build something great.');
  });

  it('shows confirmation message on successful submit', async () => {
    const mockFetch = global.fetch as jest.Mock;
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/project brief/i), 'I want to build something great.');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByText(/transmission confirmed/i)).toBeInTheDocument();
    });
  });

  it('shows server error message when API returns non-ok response', async () => {
    const mockFetch = global.fetch as jest.Mock;
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: 'Something went wrong. Please try again or use direct email.' }),
    });

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/project brief/i), 'I want to build something great.');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/something went wrong/i);
    });
  });

  it('shows network error message when fetch throws', async () => {
    const mockFetch = global.fetch as jest.Mock;
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/project brief/i), 'I want to build something great.');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/network error/i);
    });
  });

  it('resets form after successful submission and can send another', async () => {
    const mockFetch = global.fetch as jest.Mock;
    mockFetch.mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    const user = userEvent.setup();
    render(<ContactSection />);

    await user.type(screen.getByLabelText(/name \/ organization/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email address/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/project brief/i), 'Test message here.');
    await user.click(screen.getByRole('button', { name: /dispatch message/i }));

    await waitFor(() => {
      expect(screen.getByText(/transmission confirmed/i)).toBeInTheDocument();
    });

    // Click "Send another"
    await user.click(screen.getByRole('button', { name: /send another/i }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /dispatch message/i })).toBeInTheDocument();
    });
  });
});
