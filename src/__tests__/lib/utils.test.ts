import { cn } from '@/lib/utils';

describe('cn() utility', () => {
  it('returns a single class unchanged', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('merges two class strings', () => {
    const result = cn('flex', 'items-center');
    expect(result).toContain('flex');
    expect(result).toContain('items-center');
  });

  it('deduplicates conflicting Tailwind classes (tailwind-merge)', () => {
    // tailwind-merge should keep only the last conflicting utility
    const result = cn('text-red-500', 'text-blue-500');
    expect(result).toContain('text-blue-500');
    expect(result).not.toContain('text-red-500');
  });

  it('ignores falsy values (undefined, null, false, empty string)', () => {
    const result = cn('flex', undefined, null, false, '', 'gap-4');
    expect(result).toContain('flex');
    expect(result).toContain('gap-4');
    // No dangling spaces from falsy values
    expect(result.trim()).toBe(result);
  });

  it('handles conditional class objects (clsx)', () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn({ 'bg-black': isActive, 'opacity-50': isDisabled });
    expect(result).toContain('bg-black');
    expect(result).not.toContain('opacity-50');
  });

  it('handles arrays of classes (clsx)', () => {
    const result = cn(['flex', 'flex-col'], 'gap-2');
    expect(result).toContain('flex');
    expect(result).toContain('flex-col');
    expect(result).toContain('gap-2');
  });

  it('returns an empty string when called with no arguments', () => {
    expect(cn()).toBe('');
  });
});
