import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Filipe Lehmann — Software Engineer',
  description: "Filipe Lehmann's personal portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
