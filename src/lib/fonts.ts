import { Inter_Tight, JetBrains_Mono } from 'next/font/google';

/**
 * Two families carry the page, the way the MK·78 product page is set: a tight
 * grotesk for the oversized display type and the reading, and a mono for the
 * small letter-spaced labels. The display family is also what the Three.js
 * wordmark is drawn with, so it is loaded once here and shared.
 */
export const display = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'block',
});

export const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-mk',
  weight: ['400', '500'],
  display: 'swap',
});
