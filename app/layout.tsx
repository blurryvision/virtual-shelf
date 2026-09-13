import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Virtual Shelf — Miniature Bottle Collection',
  description:
    'A curated showcase of miniature alcohol bottles. Browse whisky, gin, rum, vodka, tequila, liqueurs, cognac, and more.',
  keywords: ['miniature bottles', 'alcohol collection', 'mini spirits', 'bottle shelf', 'whisky', 'gin'],
  openGraph: {
    title: 'The Virtual Shelf',
    description: 'A curated miniature alcohol bottle collection.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
